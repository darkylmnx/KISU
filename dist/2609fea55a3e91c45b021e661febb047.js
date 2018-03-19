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
},{}],14:[function(require,module,exports) {
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
},{"./bundle-url":20}],5:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":14}],4:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../assets/fonts/Lato-Regular.ttf":[["7ad393b83d7ff2e0ada77c291832b226.ttf",16],16],"./../assets/fonts/Farsan-Regular.ttf":[["f32975e31bc36044c9831acb66c9c5a1.ttf",17],17],"./../assets/imgs/bg.jpg":[["83239aae8d1630e5bb71a4298c0dcb30.jpg",24],24],"_css_loader":14}],8:[function(require,module,exports) {
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
},{}],10:[function(require,module,exports) {
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('aoe-player', {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      hl: 'en',
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    },
    height: '100%',
    width: '100%',
    videoId: 'M7lc1UVf-VE'
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });

  console.log(player);
}
},{}],9:[function(require,module,exports) {
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
},{}],11:[function(require,module,exports) {
console.log('coucouuuu');

var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var plusBtn = document.querySelector('#plus');

playBtn.addEventListener('click', function () {
  window.alert('the video is playing');
});
pauseBtn.addEventListener('click', function () {
  window.alert('the video is paused');
});
nextBtn.addEventListener('click', function () {
  window.alert('go to the next video');
});
plusBtn.addEventListener('click', function () {
  window.alert('show the infos');
});
},{}],2:[function(require,module,exports) {
'use strict';

require('../scss/reset.scss');

require('../scss/style.scss');

require('./video-data');

require('./yt-loader');

require('./data-handler');

require('./ui');
},{"../scss/reset.scss":5,"../scss/style.scss":4,"./video-data":8,"./yt-loader":10,"./data-handler":9,"./ui":11}],37:[function(require,module,exports) {

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '65438' + '/');
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
},{}]},{},[37,2])
//# sourceMappingURL=/dist/2609fea55a3e91c45b021e661febb047.map