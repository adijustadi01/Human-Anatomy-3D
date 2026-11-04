/* store.js — progress saved in localStorage: spaced repetition, bookmarks, MCQ stats.
   Interval scheme (per quiz item):
     hard   -> due tomorrow (and repeated once more in the same session)
     medium -> interval x1.5 (first time: 2 days)
     easy   -> interval x2.5 (first time: 4 days)                         */
(function (AN) {
  var KEY = 'anatomy-progress-v1';
  function blank() {
    return { srs: {}, bookmarks: {}, mcq: { total: 0, correct: 0, byType: {} }, days: {}, settings: { newPerDay: 20, unverified: false } };
  }
  var st;
  try { st = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { st = blank(); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* storage blocked */ } }

  function pad(n) { return String(n).padStart(2, '0'); }
  function fmt(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return fmt(new Date()); }
  function addDays(n) { var d = new Date(); d.setDate(d.getDate() + n); return fmt(d); }
  function day() { var t = today(); return st.days[t] || (st.days[t] = { reviews: 0 }); }

  AN.store = {
    state: function () { return st; },
    today: today,
    settings: function () { return st.settings; },
    setSetting: function (k, v) { st.settings[k] = v; save(); },

    isBookmarked: function (id) { return !!st.bookmarks[id]; },
    toggleBookmark: function (id) {
      if (st.bookmarks[id]) delete st.bookmarks[id]; else st.bookmarks[id] = today();
      save(); return !!st.bookmarks[id];
    },

    card: function (itemId) { return st.srs[itemId]; },
    rate: function (itemId, grade) {
      var c = st.srs[itemId] || { interval: 0, reps: 0, lapses: 0, first: today() };
      if (grade === 'hard') { c.interval = 1; c.lapses++; }
      else if (grade === 'medium') c.interval = c.reps ? Math.max(2, Math.round(c.interval * 1.5)) : 2;
      else c.interval = c.reps ? Math.max(4, Math.round(c.interval * 2.5)) : 4;
      c.reps++; c.grade = grade; c.last = today(); c.due = addDays(c.interval);
      st.srs[itemId] = c; day().reviews++; save();
    },
    /* due (seen) items first, oldest-due first; then new items up to the daily limit */
    dueItems: function (items) {
      var t = today();
      var due = items.filter(function (it) { var c = st.srs[it.id]; return c && c.due <= t; })
        .sort(function (a, b) { return st.srs[a.id].due.localeCompare(st.srs[b.id].due); });
      var newToday = Object.keys(st.srs).filter(function (k) { return st.srs[k].first === t; }).length;
      var room = Math.max(0, (st.settings.newPerDay || 20) - newToday);
      var fresh = items.filter(function (it) { return !st.srs[it.id]; }).slice(0, room);
      return due.concat(fresh);
    },

    recordMcq: function (type, ok) {
      var m = st.mcq; m.total++; if (ok) m.correct++;
      var b = m.byType[type] || (m.byType[type] = { total: 0, correct: 0 });
      b.total++; if (ok) b.correct++; save();
    },

    exportJson: function () {
      var blob = new Blob([JSON.stringify(st, null, 1)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'anatomy-progress-' + today() + '.json';
      document.body.appendChild(a); a.click(); a.remove();
    },
    importJson: function (file, done) {
      var r = new FileReader();
      r.onload = function () {
        try { st = Object.assign(blank(), JSON.parse(r.result)); save(); done(null); } catch (e) { done(e); }
      };
      r.readAsText(file);
    },
    reset: function () { st = blank(); save(); }
  };
})(window.AN);
