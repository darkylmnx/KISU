// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({20:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],16:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":20}],10:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":16}],11:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../assets/fonts/Lato-Regular.ttf":[["7ad393b83d7ff2e0ada77c291832b226.ttf",17],17],"./../assets/fonts/Farsan-Regular.ttf":[["f32975e31bc36044c9831acb66c9c5a1.ttf",18],18],"./../assets/imgs/bg.jpg":[["83239aae8d1630e5bb71a4298c0dcb30.jpg",19],19],"./../assets/imgs/icons/mute.svg":[["5a248f73ce42b6796ba171b4099511f5.svg",6],6],"./../assets/imgs/icons/mute-anim.svg":[["a6f6a587829d1e9b2300c41d162ef952.svg",27],27],"./../assets/imgs/icons/play.svg":[["8913082a2ee02c273702bd3bf69c3d99.svg",5],5],"./../assets/imgs/icons/play-anim.svg":[["af9dd4a928e8c2f6efeb687759af4d46.svg",30],30],"./../assets/imgs/icons/pause.svg":[["2793cdce3945b5728e02350737621daf.svg",7],7],"./../assets/imgs/icons/pause-anim.svg":[["57f6c3df14d42a363ae0bb93d4adbf30.svg",31],31],"./../assets/imgs/icons/previous.svg":[["960857f29fe085bfce3dff4f769cbb20.svg",29],29],"./../assets/imgs/icons/previous-anim.svg":[["f70fac7c4bc8398d08f2301bf849749e.svg",32],32],"./../assets/imgs/icons/next.svg":[["7a41941fab1081d40e9476a24c4ad120.svg",8],8],"./../assets/imgs/icons/next-anim.svg":[["d8ed1cc540b765160bb6c735c1d6fc34.svg",33],33],"./../assets/imgs/icons/plus.svg":[["4057d24e22e62fe683448fcd7c687a2c.svg",9],9],"./../assets/imgs/icons/plus-anim.svg":[["c0131a93c56f6c9d47b0f8ecd3300c4b.svg",34],34],"_css_loader":16}],12:[function(require,module,exports) {
window.playlist = [{
  "id": "CYPDjli1iRw",
  "anime": "One Punch Man",
  "title": "THE HERO !!",
  "author": "J​AM Project",
  "type": "o",
  "nb": "1",
  "category": "sn"
}, {
  "id": "9WB938n2Rmk",
  "anime": "Gambling School",
  "title": "Deal with the Devil",
  "author": "Tia",
  "type": "o",
  "nb": "1",
  "category": "sn"
}, {
  "id": "h0qQuMMKGyQ",
  "anime": "Golden Time",
  "title": "Golden Time",
  "author": "Yui Horie",
  "type": "o",
  "nb": "1",
  "category": "sj"
}, {
  "id": "YTMrvnyhMac",
  "anime": "Bleach",
  "title": "Rolling Star",
  "author": "Yui",
  "type": "o",
  "nb": "5",
  "category": "sn"
}, {
  "id": "UbJeAf7stfQ",
  "anime": "One Outs",
  "title": "Bury",
  "author": "Pay money To my Pain",
  "type": "o",
  "nb": "1",
  "category": "se"
}];
},{}],14:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNextVideo = getNextVideo;
var playlist2 = playlist.slice();
var current_video;

function getNextVideo() {
    current_video = playlist2[getRandom(playlist2)];
    playlist2 = playlist2.filter(function (data) {
        return data.id != current_video.id;
    });

    if (playlist2.length === 0) {
        playlist2 = playlist.slice();
    }

    return current_video;
}

function getRandom(list) {
    return Math.floor(Math.random() * list.length);
}
},{}],13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.player = undefined;
exports.default = onYouTubeIframeAPIReady;
exports.playVideo = playVideo;
exports.pauseVideo = pauseVideo;
exports.loadNextVideo = loadNextVideo;

var _dataHandler = require('./data-handler');

var player = exports.player = undefined;
function onYouTubeIframeAPIReady() {
  exports.player = player = new YT.Player('aoe-player', {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      hl: 'en',
      cc_load_policy: 0,
      fs: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3
    },
    height: '100%',
    width: '100%',
    events: {
      onReady: function onReady() {
        loadNextVideo();
      }
      // 'onStateChange': onPlayerStateChange
    }
  });
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function loadNextVideo() {
  var video = (0, _dataHandler.getNextVideo)();
  player.loadVideoById(video.id);
  return video;
}
},{"./data-handler":14}],15:[function(require,module,exports) {
'use strict';

var _ytLoader = require('./yt-loader');

var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var plusBtn = document.querySelector('#plus');

playBtn.addEventListener('click', function () {
  (0, _ytLoader.playVideo)();
});

pauseBtn.addEventListener('click', function () {
  (0, _ytLoader.pauseVideo)();
});

nextBtn.addEventListener('click', function () {
  var video = (0, _ytLoader.loadNextVideo)();
  renderUI(video);
});

plusBtn.addEventListener('click', function () {});

function renderUI(video) {
  // update the ui
}
},{"./yt-loader":13}],2:[function(require,module,exports) {
'use strict';

require('../scss/reset.scss');

require('../scss/style.scss');

require('./video-data');

var _ytLoader = require('./yt-loader');

var _ytLoader2 = _interopRequireDefault(_ytLoader);

require('./data-handler');

require('./ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onYouTubeIframeAPIReady = _ytLoader2.default;
},{"../scss/reset.scss":10,"../scss/style.scss":11,"./video-data":12,"./yt-loader":13,"./data-handler":14,"./ui":15}],28:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51327' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[28,2])
//# sourceMappingURL=/dist/2609fea55a3e91c45b021e661febb047.map