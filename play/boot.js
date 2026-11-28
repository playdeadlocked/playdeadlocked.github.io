// boot.js - the play page's loading screen. A plain script (not bundled, not a module) so
// it runs before the game's 850 KB module has arrived, and on its own if that module never
// does. Without it a slow download showed only the static page: a dark screen with a
// crosshair, which reads as broken. It counts the seconds, says what is happening when it
// is slow, and turns into a clear message with Reload if the game's files fail to download
// or its first run throws. main.js removes #boot-loader once the title screen is up, which
// ends everything here. An external file because the launcher's CSP blocks inline scripts.
(function () {
  'use strict';
  var box = document.getElementById('boot-loader');
  if (!box) return;
  var status = document.getElementById('boot-status');
  var note = document.getElementById('boot-note');
  var done = false;
  var live = function () { return !done && box.isConnected; };
  var tick = setInterval(function () {
    if (!live()) { clearInterval(tick); return; }
    var s = Math.round(performance.now() / 1000);   // since the page was opened (the click on Play)
    if (s >= 3) status.textContent = 'Loading the game... ' + s + 's';
    if (s >= 10 && !note.textContent) note.textContent = 'The game is about 1 MB to download. On a slow connection this can take a minute.';
  }, 1000);
  var fail = function (msg) {
    if (!live()) return;
    done = true;
    clearInterval(tick);
    box.classList.add('failed');
    status.textContent = msg;
    note.textContent = '';
  };
  document.getElementById('boot-reload').onclick = function () { location.reload(); };
  // capture phase: a failed <script>/<link> fires a non-bubbling error on the element itself
  window.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t !== window && t.nodeType === 1) {
      if (t.tagName === 'SCRIPT' || (t.tagName === 'LINK' && /stylesheet|modulepreload/.test(t.rel))) fail('The game files could not be downloaded. Check your connection, then reload.');
      return;   // an image or sound failing is not a failed start
    }
    fail('The game hit an error while starting: ' + (e.message || 'unknown error'));
  }, true);
})();
