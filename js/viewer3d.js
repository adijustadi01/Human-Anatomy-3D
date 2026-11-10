/* viewer3d.js — the 3D explorer (#/3d).
   Real anatomical meshes (BodyParts3D) that you can orbit, cut open and fly through.
   three.js and the model packs are loaded only when a 3D view is opened:
     js/vendor/three3d.min.js   three.js + mesh decoder (built by tools/build-3d)
     models/<pack>.js           one compressed pack of meshes per region
     models/index.js            what each pack holds + which meshes belong to which study card */
(function (AN) {
  var esc = AN.esc;
  var M = AN.M3D = { index: { packs: {}, refs: {} }, _raw: {}, _wait: {}, _parts: {}, _scripts: {} };
  M.pack = function (id, b64) { M._raw[id] = b64; };

  var REGION_PACKS = ['upper-limb', 'thorax', 'abdomen', 'pelvis-perineum', 'lower-limb', 'head-neck', 'neuroanatomy'];
  M.VIEWS = [
    { id: 'whole', name: 'Whole body', packs: REGION_PACKS, skin: 'ghost' },
    { id: 'upper-limb', name: 'Upper limb', packs: ['upper-limb'] },
    { id: 'thorax', name: 'Thorax', packs: ['thorax'] },
    { id: 'abdomen', name: 'Abdomen', packs: ['abdomen'] },
    { id: 'pelvis-perineum', name: 'Pelvis & perineum', packs: ['pelvis-perineum'] },
    { id: 'lower-limb', name: 'Lower limb', packs: ['lower-limb'] },
    { id: 'head-neck', name: 'Head & neck', packs: ['head-neck', 'neuroanatomy'], note: 'with the brain inside the skull' },
    { id: 'neuroanatomy', name: 'Brain', packs: ['neuroanatomy'] }
  ];
  var LAYERS = [
    { id: 'skin', name: 'Skin' }, { id: 'muscles', name: 'Muscles' }, { id: 'bones', name: 'Bones & cartilage' },
    { id: 'organs', name: 'Organs' }, { id: 'vessels', name: 'Heart & vessels' }, { id: 'nervous', name: 'Brain & nerves' }
  ];
  function viewOf(id) { return M.VIEWS.filter(function (v) { return v.id === id; })[0]; }

  /* Link from a study card to its meshes ('' when the dataset has no mesh for it). */
  M.cardLink = function (s) {
    var refs = M.index.refs[s.id];
    if (!refs) return '';
    var packs = refs.map(function (r) { return r.split('/')[0]; });
    var view = packs.indexOf(s.region) >= 0 ? s.region : packs[0];
    return '#/3d/' + view + '?card=' + s.id;
  };

  /* ---------- loading ---------- */
  function loadScript(src) {
    return M._scripts[src] || (M._scripts[src] = new Promise(function (ok, fail) {
      var el = document.createElement('script');
      el.src = src; el.onload = ok;
      el.onerror = function () { delete M._scripts[src]; fail(new Error('Could not load ' + src)); };
      document.head.appendChild(el);
    }));
  }
  function loadPack(id) { // -> promise of [{k, n, l, c, r, geo}]
    if (M._parts[id]) return Promise.resolve(M._parts[id]);
    return loadScript('models/' + id + '.js').then(function () { return MeshoptDecoder.ready; }).then(function () {
      var bin = atob(M._raw[id]), n = bin.length, u8 = new Uint8Array(n);
      for (var i = 0; i < n; i++) u8[i] = bin.charCodeAt(i);
      delete M._raw[id];
      var hl = new DataView(u8.buffer).getUint32(0, true);
      var head = JSON.parse(new TextDecoder().decode(u8.subarray(4, 4 + hl))), base = 4 + hl;
      return (M._parts[id] = head.map(function (h) {
        var q = new Uint16Array(h.nv * 4), ind = h.w === 4 ? new Uint32Array(h.ni) : new Uint16Array(h.ni);
        MeshoptDecoder.decodeVertexBuffer(new Uint8Array(q.buffer), h.nv, 8, u8.subarray(base + h.vo, base + h.vo + h.vl));
        MeshoptDecoder.decodeIndexBuffer(new Uint8Array(ind.buffer), h.ni, h.w, u8.subarray(base + h.io, base + h.io + h.il));
        var pos = new Float32Array(h.nv * 3);
        for (var v = 0; v < h.nv; v++) for (var a = 0; a < 3; a++) pos[v * 3 + a] = h.min[a] + q[v * 4 + a] / 65535 * h.ext[a];
        var geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setIndex(new THREE.BufferAttribute(ind, 1));
        geo.computeVertexNormals(); geo.computeBoundingBox(); geo.computeBoundingSphere();
        return { k: h.k, n: h.n, l: h.l, c: h.c, r: h.r || [], geo: geo };
      }));
    });
  }

  /* ---------- pages ---------- */
  function mb(packs) { return (packs.reduce(function (a, p) { return a + ((M.index.packs[p] || {}).kb || 0); }, 0) / 1024).toFixed(1); }
  function count(packs) { return packs.reduce(function (a, p) { return a + ((M.index.packs[p] || {}).n || 0); }, 0); }

  function landing(v) {
    v.innerHTML = '<h2>3D explorer</h2>' +
      '<p class="muted">Real anatomical surface models you can turn, cut open and fly through. Pick a region — ' +
      'each one downloads once and then works offline.</p><div class="tiles">' +
      M.VIEWS.map(function (w) {
        return '<a class="tile" href="#/3d/' + w.id + '"><span>' + w.name + '</span><small>' +
          (w.id === 'whole' ? M.index.unique : count(w.packs)) + ' structures · ' + mb(w.packs) + ' MB' +
          (w.note ? '<br>' + w.note : '') + '</small></a>';
      }).join('') + '</div>' +
      '<h3>What you can do</h3><ul class="v3d-howto">' +
      '<li><b>Go inside.</b> Scroll, pinch or hold <kbd>W</kbd> to fly forward — the camera passes through skin, muscle and bone, so you can look at organs from the inside of the body.</li>' +
      '<li><b>Peel layers.</b> Switch skin, muscles, bones, organs, vessels and brain between solid, see-through and hidden.</li>' +
      '<li><b>Cut it open.</b> Slide a cutting plane through the body from the front, the top or the side.</li>' +
      '<li><b>Name anything.</b> Tap a structure to see what it is, hide it, isolate it, or open its study card.</li></ul>' +
      '<p class="muted small">Not everything is modelled: the dataset is a male body with bones, muscles, organs, the heart, the great vessels and the brain. ' +
      'Peripheral nerves, limb vessels and lymphatics are mostly absent, so many cards have no 3D link.</p>' + credit();
  }
  function credit() {
    return '<p class="muted small v3d-credit">3D models: <a href="https://lifesciencedb.jp/bp3d/" target="_blank" rel="noopener">BodyParts3D</a>, ' +
      '© The Database Center for Life Science, licensed under ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en" target="_blank" rel="noopener">CC Attribution-Share Alike 2.1 Japan</a>. ' +
      'Simplified and recoloured for this app.</p>';
  }

  M.route = function (v, id, params) {
    if (!id) return landing(v);
    var view = viewOf(id);
    if (!view) { v.innerHTML = '<p>3D view “' + esc(id) + '” not found. <a href="#/3d">All 3D views</a></p>'; return; }
    open(v, view, params || {});
  };

  /* ---------- the viewer ---------- */
  function open(root, view, params) {
    document.body.classList.add('v3d-on');
    root.innerHTML =
      '<div class="v3d"><div class="v3d-stage"><canvas tabindex="0" aria-label="3D anatomy view"></canvas>' +
      '<div class="v3d-load"><div><b>Loading ' + esc(view.name) + '…</b><span></span></div></div>' +
      '<div class="v3d-tip"></div>' +
      '<div class="v3d-bar">' +
      '<button data-a="mode" title="Orbit turns the body around a point. Fly lets you look around from where the camera is.">Mode: orbit</button>' +
      '<button data-a="reset" title="Back to the starting view (R)">Reset view</button>' +
      '<button data-a="help" title="Controls">?</button></div>' +
      '<div class="v3d-move"><button data-hold="fwd" aria-label="Fly forward" title="Fly forward (W)">▲</button>' +
      '<button data-hold="back" aria-label="Fly backward" title="Fly backward (S)">▼</button></div>' +
      '<div class="v3d-help" hidden></div></div>' +
      '<aside class="v3d-panel">' +
      '<label class="v3d-row"><span class="v3d-h">View</span><select data-a="view">' + M.VIEWS.map(function (w) {
        return '<option value="' + w.id + '"' + (w.id === view.id ? ' selected' : '') + '>' + w.name + '</option>';
      }).join('') + '</select></label>' +
      '<section class="v3d-sel"></section>' +
      '<section><div class="v3d-h">Layers</div><div class="v3d-layers"></div></section>' +
      '<section><div class="v3d-h">Cut-away</div><div class="v3d-cut">' +
      '<select data-a="cutaxis"><option value="">Off</option><option value="z">From the front (coronal)</option>' +
      '<option value="y">From the top (transverse)</option><option value="x">From the side (sagittal)</option></select>' +
      '<input type="range" data-a="cutpos" min="0" max="1000" value="350" disabled aria-label="Cut position">' +
      '<button data-a="cutflip" disabled title="Show the other half">Flip</button></div></section>' +
      '<section><div class="v3d-h">Structures <small class="v3d-n"></small></div>' +
      '<input type="search" class="v3d-q" placeholder="Find a structure…" aria-label="Find a structure"><ul class="v3d-list"></ul></section>' +
      credit() + '</aside></div>';

    var $ = function (s) { return root.querySelector(s); };
    var stage = $('.v3d-stage'), canvas = $('canvas'), tip = $('.v3d-tip'), loadEl = $('.v3d-load');
    var dead = false, cleanup = [];
    function on(el, ev, fn, opt) { el.addEventListener(ev, fn, opt); cleanup.push(function () { el.removeEventListener(ev, fn, opt); }); }
    function topH() { document.documentElement.style.setProperty('--v3d-top', document.querySelector('.top').offsetHeight + 'px'); }
    topH(); on(window, 'resize', topH);
    AN.onLeave = function () { dead = true; document.body.classList.remove('v3d-on'); cleanup.forEach(function (f) { f(); }); };

    $('.v3d-help').innerHTML =
      '<b>Controls</b><table>' +
      '<tr><td>Turn</td><td>drag</td></tr>' +
      '<tr><td>Fly in / out</td><td>scroll · pinch · hold ▲▼ · <kbd>W</kbd> <kbd>S</kbd></td></tr>' +
      '<tr><td>Slide sideways / up / down</td><td>right-drag · two-finger drag · <kbd>A</kbd> <kbd>D</kbd> <kbd>Q</kbd> <kbd>E</kbd></td></tr>' +
      '<tr><td>Identify</td><td>tap or click a structure</td></tr>' +
      '<tr><td>Turn around a spot</td><td>double-tap / double-click it</td></tr>' +
      '<tr><td>Hide selected · show all</td><td><kbd>H</kbd> · <kbd>Esc</kbd></td></tr>' +
      '<tr><td>Faster</td><td>hold <kbd>Shift</kbd></td></tr></table>' +
      '<p>The camera goes straight through tissue. Once inside, switch to <b>Fly</b> mode to look around from where you are.</p>';

    var progress = loadEl.querySelector('span');
    var packs = view.packs.concat(['skin']), done = 0;
    progress.textContent = mb(packs) + ' MB · first time only';
    loadScript('js/vendor/three3d.min.js').then(function () {
      return Promise.all(packs.map(function (p) {
        return loadPack(p).then(function (parts) { progress.textContent = (++done) + ' / ' + packs.length + ' parts of the model ready'; return parts; });
      }));
    }).then(function (lists) {
      if (dead) return;
      var seen = {}, parts = [];
      lists.forEach(function (l) { l.forEach(function (p) { if (!seen[p.k]) { seen[p.k] = 1; parts.push(p); } }); });
      try { start(parts); } catch (e) { fail(e); }
    }).catch(fail);
    function fail(e) {
      if (dead) return;
      loadEl.innerHTML = '<div><b>The 3D view could not start.</b><span>' + esc(e && e.message || String(e)) +
        '</span><span>It needs WebGL and, the first time, a connection to download the models.</span></div>';
    }

    function start(parts) {
      var T = THREE, css = getComputedStyle(document.body);
      var renderer = new T.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(new T.Color((css.getPropertyValue('--v3d-bg') || '#14181d').trim()));
      var scene = new T.Scene(), cam = new T.PerspectiveCamera(42, 1, 0.002, 30);
      scene.add(new T.HemisphereLight(0xffffff, 0x6a6058, 1.5));
      var lamp = new T.DirectionalLight(0xffffff, 1.9); // headlamp: follows the camera so interiors are lit too
      lamp.position.set(0.25, 0.35, 1); cam.add(lamp); scene.add(cam);

      /* meshes */
      var meshes = parts.map(function (p) {
        var mat = new T.MeshPhongMaterial({ color: p.c, side: T.DoubleSide, shininess: 22, specular: 0x1c1c1c });
        var m = new T.Mesh(p.geo, mat);
        m.userData = p; scene.add(m);
        return m;
      });
      var byKey = {}; meshes.forEach(function (m) { byKey[m.userData.k] = m; });
      var layerState = {}, hidden = {}, selected = [], selLabel = '', hover = null;
      LAYERS.forEach(function (L) { layerState[L.id] = 'solid'; });
      layerState.skin = view.skin || 'off';
      var present = LAYERS.filter(function (L) { return meshes.some(function (m) { return m.userData.l === L.id; }); });

      var GHOST = { skin: 0.12, muscles: 0.07, bones: 0.16, organs: 0.16, vessels: 0.2, nervous: 0.14 }, HILITE = new T.Color(0xffd23f);
      function isSel(m) { return selected.indexOf(m) >= 0; }
      function apply() { // push layer / hidden / selection state into the materials
        meshes.forEach(function (m) {
          var st = layerState[m.userData.l], sel = isSel(m), mat = m.material;
          m.visible = sel || (st !== 'off' && !hidden[m.userData.k]);
          var ghost = st === 'ghost' && !sel;
          if (mat.transparent !== ghost) { // see-through: outer faces only, so stacked layers do not add up to a fog
            mat.transparent = ghost; mat.side = ghost ? T.FrontSide : T.DoubleSide; mat.needsUpdate = true;
          }
          mat.opacity = ghost ? GHOST[m.userData.l] : 1;
          mat.depthWrite = !ghost;
          m.renderOrder = ghost ? 2 : 0;
          mat.color.setHex(m.userData.c);
          if (sel) mat.color.lerp(HILITE, 0.55);
          mat.emissive.setHex(sel ? 0x3d2e00 : m === hover ? 0x2a2a2a : 0x000000);
          m.userData.pick = m.visible && !ghost; // see-through layers let clicks pass to what is behind them
        });
        invalidate();
      }

      /* camera: a pivot point the camera turns around, and that is pushed ahead when you fly through it */
      var pivot = new T.Vector3(), mode = 'orbit', MIN = 0.045, tween = null, home = null;
      var tmp = new T.Vector3(), tmp2 = new T.Vector3(), sph = new T.Spherical();
      function forward(out) { return out.copy(pivot).sub(cam.position).normalize(); }
      function turn(dx, dy) {
        var k = 0.0055;
        if (mode === 'orbit') {
          sph.setFromVector3(tmp.copy(cam.position).sub(pivot));
          sph.theta -= dx * k; sph.phi = Math.min(Math.PI - 0.02, Math.max(0.02, sph.phi - dy * k));
          cam.position.copy(pivot).add(tmp.setFromSpherical(sph));
        } else {
          sph.setFromVector3(tmp.copy(pivot).sub(cam.position));
          sph.theta += dx * k * 0.6; sph.phi = Math.min(Math.PI - 0.02, Math.max(0.02, sph.phi - dy * k * 0.6));
          pivot.copy(cam.position).add(tmp.setFromSpherical(sph));
        }
        cam.lookAt(pivot); invalidate();
      }
      function dolly(amount) { // amount: fraction of the distance to the pivot, >0 = forward
        var dist = cam.position.distanceTo(pivot), dir = forward(tmp), step = amount * Math.max(dist, 0.07);
        cam.position.addScaledVector(dir, step);
        if (mode === 'fly' || dist - step < MIN) pivot.copy(cam.position).addScaledVector(dir, mode === 'fly' ? dist : MIN);
        cam.lookAt(pivot); invalidate();
      }
      function slide(right, up, fwd) { // metres, in camera space
        var dir = forward(tmp).clone(), r = tmp2.crossVectors(dir, cam.up).normalize().clone();
        var move = dir.multiplyScalar(fwd).addScaledVector(r, right).addScaledVector(cam.up, up);
        cam.position.add(move); pivot.add(move); invalidate();
      }
      function panPx(dx, dy) {
        var dist = cam.position.distanceTo(pivot), s = 2 * dist * Math.tan(cam.fov * Math.PI / 360) / stage.clientHeight;
        var dir = forward(tmp).clone(), r = new T.Vector3().crossVectors(dir, cam.up).normalize(), u = new T.Vector3().crossVectors(r, dir);
        var move = r.multiplyScalar(-dx * s).addScaledVector(u, dy * s);
        cam.position.add(move); pivot.add(move); invalidate();
      }
      function flyTo(pos, piv, ms) {
        tween = { p0: cam.position.clone(), v0: pivot.clone(), p1: pos, v1: piv, t0: performance.now(), ms: ms || 550 };
        invalidate();
      }
      function boxOf(list) { var b = new T.Box3(); list.forEach(function (m) { b.union(m.geometry.boundingBox); }); return b; }
      function frame(list, animate, dirFrom) { // put the camera where `list` fills the view
        var b = boxOf(list), c = b.getCenter(new T.Vector3()), r = b.getSize(new T.Vector3()).length() / 2;
        var d = r / Math.sin(Math.min(cam.fov, cam.fov * cam.aspect) * Math.PI / 360) * 1.02;
        var dir = dirFrom || new T.Vector3(0.28, 0.12, 1).normalize();
        var pos = c.clone().addScaledVector(dir, Math.max(d, 0.08));
        if (animate) flyTo(pos, c); else { cam.position.copy(pos); pivot.copy(c); cam.lookAt(c); invalidate(); }
        return { pos: pos, pivot: c };
      }

      /* cut-away plane */
      var body = boxOf(meshes.filter(function (m) { return m.userData.l !== 'skin' || view.skin; }));
      var cut = { axis: '', pos: 0.35, flip: false, plane: new T.Plane() };
      function applyCut() {
        if (!cut.axis) { renderer.clippingPlanes = []; return invalidate(); }
        var a = cut.axis, lo = body.min[a], hi = body.max[a], t = hi - (hi - lo) * cut.pos, s = cut.flip ? 1 : -1;
        cut.plane.normal.set(a === 'x' ? s : 0, a === 'y' ? s : 0, a === 'z' ? s : 0); // keeps the side behind / below / right of the plane
        cut.plane.constant = -s * t;
        renderer.clippingPlanes = [cut.plane]; invalidate();
      }

      /* picking */
      var ray = new T.Raycaster(), ndc = new T.Vector2();
      function pick(x, y) {
        var r = canvas.getBoundingClientRect();
        ndc.set((x - r.left) / r.width * 2 - 1, -(y - r.top) / r.height * 2 + 1);
        ray.setFromCamera(ndc, cam);
        var hits = ray.intersectObjects(meshes.filter(function (m) { return m.userData.pick; }), false);
        for (var i = 0; i < hits.length; i++)
          if (!cut.axis || cut.plane.distanceToPoint(hits[i].point) >= 0) return hits[i];
        return null;
      }

      /* selection + panel */
      var selEl = $('.v3d-sel'), listEl = $('.v3d-list'), qEl = $('.v3d-q');
      function select(list, label, focus) {
        selected = list; selLabel = label || (list[0] ? list[0].userData.n : '');
        apply(); drawSel(); drawList();
        if (focus && list.length) frame(list, true, cam.position.clone().sub(pivot).normalize());
      }
      function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
      function drawSel() {
        if (!selected.length) { selEl.innerHTML = '<p class="muted small">Tap a structure to identify it. Double-tap to turn the view around that spot.</p>'; return; }
        var cards = [];
        selected.forEach(function (m) { m.userData.r.forEach(function (id) { if (cards.indexOf(id) < 0 && AN.byId[id]) cards.push(id); }); });
        var L = LAYERS.filter(function (x) { return x.id === selected[0].userData.l; })[0];
        selEl.innerHTML = '<div class="v3d-name">' + esc(cap(selLabel)) + '</div>' +
          '<div class="muted small">' + L.name + (selected.length > 1 ? ' · ' + selected.length + ' parts' : '') + '</div>' +
          '<div class="v3d-acts"><button data-a="focus">Zoom to</button><button data-a="hide">Hide</button>' +
          '<button data-a="isolate">Isolate</button><button data-a="clear">Deselect</button></div>' +
          cards.map(function (id) { return '<a class="v3d-card" href="#/s/' + id + '">📖 Study card: ' + esc(AN.byId[id].name) + '</a>'; }).join('');
      }
      function drawLayers() {
        $('.v3d-layers').innerHTML = present.map(function (L) {
          return '<div class="v3d-layer"><span>' + L.name + '</span><span class="seg">' +
            [['solid', 'Solid'], ['ghost', 'See-through'], ['off', 'Off']].map(function (o) {
              return '<button data-layer="' + L.id + '" data-st="' + o[0] + '"' + (layerState[L.id] === o[0] ? ' class="on"' : '') + '>' + o[1] + '</button>';
            }).join('') + '</span></div>';
        }).join('') + (Object.keys(hidden).length ? '<button data-a="showall" class="v3d-showall">Show ' + Object.keys(hidden).length + ' hidden</button>' : '');
      }
      var sorted = meshes.slice().sort(function (a, b) { return a.userData.n.localeCompare(b.userData.n); });
      function drawList() {
        var q = qEl.value.trim().toLowerCase(), all = sorted.filter(function (m) { return m.userData.l !== 'skin'; });
        var hit = q ? all.filter(function (m) { return m.userData.n.toLowerCase().indexOf(q) >= 0; }) : all;
        $('.v3d-n').textContent = q ? hit.length + ' of ' + all.length : all.length;
        listEl.innerHTML = hit.slice(0, 250).map(function (m) {
          var u = m.userData;
          return '<li><button data-k="' + u.k + '" class="' + (isSel(m) ? 'on' : '') + (hidden[u.k] ? ' hid' : '') + '">' +
            '<i style="background:#' + ('00000' + u.c.toString(16)).slice(-6) + '"></i>' + esc(cap(u.n)) + '</button></li>';
        }).join('') + (hit.length > 250 ? '<li class="muted small">…type to narrow down ' + (hit.length - 250) + ' more</li>' : '') +
          (hit.length ? '' : '<li class="muted small">Nothing by that name in this view.</li>');
      }
      function setMode(m) {
        mode = m; $('[data-a="mode"]').textContent = 'Mode: ' + m; $('[data-a="mode"]').classList.toggle('on', m === 'fly');
        if (m === 'fly') { var d = forward(tmp); pivot.copy(cam.position).addScaledVector(d, 0.3); }
        invalidate();
      }

      on(root, 'click', function (e) {
        var t = e.target.closest('button'); if (!t) return;
        if (t.dataset.layer) { layerState[t.dataset.layer] = t.dataset.st; drawLayers(); apply(); return; }
        if (t.dataset.k) { var m = byKey[t.dataset.k]; delete hidden[m.userData.k]; drawLayers(); select([m], '', true); return; }
        var a = t.dataset.a;
        if (a === 'focus') frame(selected, true, cam.position.clone().sub(pivot).normalize());
        else if (a === 'hide') hideSelected();
        else if (a === 'isolate') { hidden = {}; meshes.forEach(function (m) { if (!isSel(m) && m.userData.l !== 'skin') hidden[m.userData.k] = 1; }); drawLayers(); apply(); drawList(); }
        else if (a === 'clear') select([]);
        else if (a === 'showall') showAll();
        else if (a === 'mode') setMode(mode === 'orbit' ? 'fly' : 'orbit');
        else if (a === 'reset') { setMode('orbit'); flyTo(home.pos.clone(), home.pivot.clone()); }
        else if (a === 'help') { var h = $('.v3d-help'); h.hidden = !h.hidden; }
        else if (a === 'cutflip') { cut.flip = !cut.flip; applyCut(); }
      });
      function hideSelected() { selected.forEach(function (m) { hidden[m.userData.k] = 1; }); drawLayers(); select([]); }
      function showAll() { hidden = {}; drawLayers(); apply(); drawList(); }
      on(root, 'change', function (e) {
        var a = e.target.dataset.a;
        if (a === 'view') location.hash = '#/3d/' + e.target.value;
        else if (a === 'cutaxis') {
          cut.axis = e.target.value;
          $('[data-a="cutpos"]').disabled = $('[data-a="cutflip"]').disabled = !cut.axis; applyCut();
        }
      });
      on(root, 'input', function (e) {
        if (e.target.dataset.a === 'cutpos') { cut.pos = e.target.value / 1000; applyCut(); }
        else if (e.target === qEl) drawList();
      });

      /* pointer input */
      var ptrs = {}, nptr = 0, down = null, lastTap = 0, lastTapXY = [0, 0], pinch = 0, mid = null, hoverXY = null;
      on(canvas, 'pointerdown', function (e) {
        canvas.setPointerCapture(e.pointerId); canvas.focus({ preventScroll: true });
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY }; nptr = Object.keys(ptrs).length;
        tween = null; setHover(null);
        if (nptr === 1) down = { x: e.clientX, y: e.clientY, t: performance.now(), moved: false, pan: e.button !== 0 || e.shiftKey };
        else { down = null; var p = Object.keys(ptrs).map(function (k) { return ptrs[k]; });
          pinch = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y); mid = { x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 }; }
      });
      on(canvas, 'pointermove', function (e) {
        var p = ptrs[e.pointerId];
        if (!p) { if (e.pointerType === 'mouse') { hoverXY = [e.clientX, e.clientY]; invalidate(); } return; }
        var dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
        if (nptr === 1 && down) {
          if (Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) down.moved = true;
          if (down.moved) { if (down.pan) panPx(dx, dy); else turn(dx, dy); }
        } else if (nptr === 2) {
          var q = Object.keys(ptrs).map(function (k) { return ptrs[k]; });
          var d = Math.hypot(q[0].x - q[1].x, q[0].y - q[1].y), c = { x: (q[0].x + q[1].x) / 2, y: (q[0].y + q[1].y) / 2 };
          if (pinch > 0 && d > 0) dolly(Math.log(d / pinch) * 0.9);
          panPx(c.x - mid.x, c.y - mid.y); pinch = d; mid = c;
        }
      });
      function up(e) {
        if (!ptrs[e.pointerId]) return;
        delete ptrs[e.pointerId]; nptr = Object.keys(ptrs).length;
        if (down && !down.moved && performance.now() - down.t < 500 && e.type === 'pointerup') tap(e.clientX, e.clientY);
        down = null;
      }
      on(canvas, 'pointerup', up); on(canvas, 'pointercancel', up);
      on(canvas, 'pointerleave', function () { hoverXY = null; setHover(null); });
      on(canvas, 'contextmenu', function (e) { e.preventDefault(); });
      on(canvas, 'wheel', function (e) {
        e.preventDefault(); tween = null;
        var dy = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
        dolly(Math.max(-0.5, Math.min(0.5, -dy * 0.0013)) * (e.shiftKey ? 3 : 1));
      }, { passive: false });
      function tap(x, y) {
        var now = performance.now(), h = pick(x, y);
        var dbl = now - lastTap < 380 && Math.hypot(x - lastTapXY[0], y - lastTapXY[1]) < 30;
        lastTap = dbl ? 0 : now; lastTapXY = [x, y];
        if (dbl) { // turn around the spot that was hit, and come a little closer
          if (!h) return;
          var off = cam.position.clone().sub(pivot), d = Math.max(off.length() * 0.6, 0.1);
          setMode('orbit'); flyTo(h.point.clone().addScaledVector(off.normalize(), d), h.point.clone(), 420);
          return;
        }
        if (h) select(isSel(h.object) && selected.length === 1 ? [] : [h.object]); else if (selected.length) select([]);
      }
      function setHover(m, x, y) {
        if (m !== hover) { hover = m; apply(); }
        if (m) { tip.textContent = cap(m.userData.n); tip.style.display = 'block'; var r = stage.getBoundingClientRect();
          tip.style.left = Math.min(x - r.left + 14, r.width - tip.offsetWidth - 6) + 'px'; tip.style.top = (y - r.top + 16) + 'px'; }
        else tip.style.display = 'none';
      }

      /* keys + hold buttons */
      var keys = {};
      var KEYMAP = { w: 'fwd', arrowup: 'fwd', s: 'back', arrowdown: 'back', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right', q: 'down', e: 'up' };
      on(window, 'keydown', function (e) {
        if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName) || e.ctrlKey || e.metaKey || e.altKey) return;
        var k = e.key.toLowerCase();
        if (KEYMAP[k]) { keys[KEYMAP[k]] = true; keys.fast = e.shiftKey; tween = null; e.preventDefault(); invalidate(); }
        else if (k === 'shift') keys.fast = true;
        else if (k === 'h' && selected.length) hideSelected();
        else if (k === 'escape') { if (selected.length) select([]); else showAll(); }
        else if (k === 'r') { setMode('orbit'); flyTo(home.pos.clone(), home.pivot.clone()); }
        else if (k === 'f') setMode(mode === 'orbit' ? 'fly' : 'orbit');
      });
      on(window, 'keyup', function (e) { var k = e.key.toLowerCase(); if (KEYMAP[k]) keys[KEYMAP[k]] = false; if (k === 'shift') keys.fast = false; });
      on(window, 'blur', function () { keys = {}; });
      root.querySelectorAll('[data-hold]').forEach(function (b) {
        var set = function (v) { return function (e) { e.preventDefault(); keys[b.dataset.hold] = v; tween = null; invalidate(); }; };
        on(b, 'pointerdown', set(true)); on(b, 'pointerup', set(false)); on(b, 'pointerleave', set(false)); on(b, 'pointercancel', set(false));
      });

      /* render loop: draws only when something changed */
      var dirty = true, raf = 0, last = 0;
      function invalidate() { dirty = true; if (!raf && !dead) raf = requestAnimationFrame(tick); }
      function tick(now) {
        raf = 0; if (dead) return;
        var dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
        var moving = keys.fwd || keys.back || keys.left || keys.right || keys.up || keys.down;
        if (moving) {
          var dist = cam.position.distanceTo(pivot), sp = Math.min(0.7, Math.max(0.1, dist * 0.7)) * (keys.fast ? 3 : 1) * dt;
          var f = (keys.fwd ? 1 : 0) - (keys.back ? 1 : 0);
          if (f) dolly(f * sp / Math.max(dist, 0.07));
          slide(((keys.right ? 1 : 0) - (keys.left ? 1 : 0)) * sp, ((keys.up ? 1 : 0) - (keys.down ? 1 : 0)) * sp, 0);
        }
        if (tween) {
          var k = Math.min(1, (now - tween.t0) / tween.ms), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
          cam.position.lerpVectors(tween.p0, tween.p1, e); pivot.lerpVectors(tween.v0, tween.v1, e); cam.lookAt(pivot);
          if (k >= 1) tween = null;
        }
        if (hoverXY && !nptr && !moving && !tween) { var h = pick(hoverXY[0], hoverXY[1]); setHover(h ? h.object : null, hoverXY[0], hoverXY[1]); hoverXY = null; }
        if (dirty) { dirty = false; renderer.render(scene, cam); }
        if (moving || tween) invalidate(); // one frame request at a time: invalidate() is a no-op while one is pending
      }
      function resize() {
        var w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
        renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); invalidate();
      }
      var ro = new ResizeObserver(resize); ro.observe(stage);
      cleanup.push(function () {
        ro.disconnect(); cancelAnimationFrame(raf);
        meshes.forEach(function (m) { m.material.dispose(); m.geometry.dispose(); }); // geometry data stays cached; only GPU copies go
        renderer.dispose(); renderer.forceContextLoss();
      });

      /* go */
      resize();
      home = frame(meshes.filter(function (m) { return m.userData.l !== 'skin' || view.skin; }), false);
      drawLayers(); drawSel(); drawList(); apply();
      loadEl.remove();
      M._debug = { // handle for the browser console and tests
        cam: cam, pivot: pivot, meshes: meshes, select: select, dolly: dolly, turn: turn, setMode: setMode, invalidate: invalidate, renderer: renderer };

      if (params.card && AN.byId[params.card]) {
        var list = meshes.filter(function (m) { return m.userData.r.indexOf(params.card) >= 0; });
        if (list.length) { // make sure the card's structure is not buried: ghost the layers in front of it
          var own = list[0].userData.l;
          if (own !== 'muscles' && own !== 'skin') layerState.muscles = 'ghost';
          if (own === 'organs' || own === 'vessels' || own === 'nervous') layerState.bones = 'ghost';
          drawLayers(); select(list, AN.byId[params.card].name, true);
        }
      } else if (params.part && byKey[params.part]) select([byKey[params.part]], '', true);
    }
  }
})(window.AN);
