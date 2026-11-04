/* navigator.js — home, region, system and search pages; structure lists. */
(function (AN) {
  var esc = AN.esc;

  function item(s) {
    return '<li><a href="#/s/' + s.id + '">' + esc(s.name) + '</a>' +
      (s.verified ? '' : ' <span class="uv" title="Not yet verified">⚠</span>') +
      (AN.store.isBookmarked(s.id) ? ' <span class="star">★</span>' : '') + '</li>';
  }
  /* structures grouped by type, in schema order */
  AN.listByType = function (list) {
    if (!list.length) return '<p class="empty">No structures here yet.</p>';
    return AN.TYPE_ORDER.map(function (t) {
      var g = list.filter(function (s) { return s.type === t; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
      return g.length ? '<div class="group"><h4>' + AN.SCHEMA.types[t].plural + ' <small>' + g.length + '</small></h4><ul class="slist">' + g.map(item).join('') + '</ul></div>' : '';
    }).join('');
  };

  function tile(href, name, n) {
    return '<a class="tile' + (n ? '' : ' dim') + '" href="' + href + '"><span>' + name + '</span><small>' + (n ? n + ' structures' : 'no content yet') + '</small></a>';
  }

  AN.nav = {
    home: function (v) {
      var all = AN.structures, unv = all.filter(function (s) { return !s.verified; }).length;
      v.innerHTML = '<h2>Study by region</h2><div class="tiles">' +
        AN.REGIONS.map(function (r) { return tile('#/region/' + r.id, r.name, all.filter(function (s) { return s.region === r.id; }).length); }).join('') +
        '</div><h2>Study by system</h2><div class="tiles">' +
        AN.SYSTEMS.map(function (y) { return tile('#/system/' + y.id, y.name, all.filter(function (s) { return (s.system || []).indexOf(y.id) >= 0; }).length); }).join('') +
        '</div><p class="muted">' + all.length + ' structures loaded · ' +
        (unv ? '<a href="#/review">⚠ ' + unv + ' not yet verified</a>' : 'all verified') + '</p>';
    },

    region: function (v, id, params) {
      var d = AN.DIAGRAMS[id], zone = params.zone;
      var list = AN.structures.filter(function (s) { return s.region === id && (!zone || (s.zones || []).indexOf(zone) >= 0); });
      var zname = zone && d ? (d.zones.find(function (z) { return z.id === zone; }) || {}).label : '';
      v.innerHTML = '<h2>' + AN.nameOf(AN.REGIONS, id) + (zname ? ' › ' + esc(zname) : '') + '</h2>' +
        '<div class="regionwrap">' +
        (d ? '<div class="diagram">' + d.svg.replace(/__REGION__/g, id) +
          '<p class="muted small">Click a zone to filter.' + (zone ? ' <a href="#/region/' + id + '">Show all</a>' : '') + '</p></div>' : '') +
        '<div class="rlist">' + AN.listByType(list) + '</div></div>';
      if (d && zone) { var el = v.querySelector('[data-zone="' + zone + '"]'); if (el) el.classList.add('active'); }
    },

    system: function (v, id) {
      var list = AN.structures.filter(function (s) { return (s.system || []).indexOf(id) >= 0; });
      var h = '<h2>' + AN.nameOf(AN.SYSTEMS, id) + ' system</h2>';
      if (!list.length) h += '<p class="empty">No structures in this system yet.</p>';
      AN.REGIONS.forEach(function (r) {
        var g = list.filter(function (s) { return s.region === r.id; });
        if (g.length) h += '<h3 class="rhead"><a href="#/region/' + r.id + '">' + r.name + '</a></h3>' + AN.listByType(g);
      });
      v.innerHTML = h;
    },

    search: function (v, q) {
      var t = q.trim().toLowerCase();
      var list = !t ? [] : AN.structures.filter(function (s) {
        return (s.name + ' ' + (s.aka || []).join(' ') + ' ' + s.id).toLowerCase().indexOf(t) >= 0;
      });
      v.innerHTML = '<h2>Search: “' + esc(q) + '”</h2>' + AN.listByType(list);
    }
  };
})(window.AN);
