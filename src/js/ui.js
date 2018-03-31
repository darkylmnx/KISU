// IMPORT -----------------------------
import {
    muteVideo,
    unmuteVideo,
    loadNextVideo,
    loadPrevVideo,
    playVideo,
    pauseVideo,
    autorunVideo,
    player,
    opFilter,
    enFilter,
    seinenFilter,
    shonenFilter,
    shojoFilter
} from './yt-loader';

// PLAYER BUTTONS ---------------------
var muteBtn = document.querySelector('#mute');
var unmuteBtn = document.querySelector('#unmute');
var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#previous');

muteBtn.addEventListener('click', function() {
  unmuteVideo();
});
unmuteBtn.addEventListener('click', function() {
  muteVideo();
});
playBtn.addEventListener('click', function() {
  playVideo();
});
pauseBtn.addEventListener('click', function() {
  pauseVideo();
});
prevBtn.addEventListener('click', function() {
  var video = loadPrevVideo();
  renderUI(video);
});
nextBtn.addEventListener('click', function() {
  var video = loadNextVideo();
  renderUI(video);
});

document.addEventListener('keydown', function(event) {
  if (event.which === 39) {
    event.preventDefault();
    loadNextVideo();
  }
});
document.addEventListener('keydown', function(event) {
  if (event.which === 37) {
    event.preventDefault();
    loadPrevVideo();
  }
});
document.addEventListener('keydown', function(event) {
  if (event.which === 32) {
    event.preventDefault();
    if (player.getPlayerState() === 2) {
      playVideo();
    } else {
      pauseVideo();
    }
  }
});
// FILTERS BUTTONS --------------------
var opBtn = document.querySelector('#op');
var enBtn = document.querySelector('#en');
var seinenBtn = document.querySelector('#seinen');
var shonenBtn = document.querySelector('#shonen');
var shojoBtn = document.querySelector('#shojo');

opBtn.addEventListener('click', function() {
  opFilter();
});
enBtn.addEventListener('click', function() {
  enFilter();
});
seinenBtn.addEventListener('click', function() {
  seinenFilter();
});
shonenBtn.addEventListener('click', function() {
  shonenFilter();
});
shojoBtn.addEventListener('click', function() {
  shojoFilter();
});

// ABOUT / SEARCH -----------------------------
var aboutBtn = document.querySelector('#about');
var about = document.querySelector('.about');
var searchBtn = document.querySelector('#search');
var search = document.querySelector('.search');
var infos = document.querySelector('.infos');
var overlay = document.querySelector('.aoe-player_overlay');

aboutBtn.addEventListener('click', function() {
  about.classList.toggle('toLeft');
});
searchBtn.addEventListener('click', function() {
  search.classList.toggle('toRight');
});

overlay.addEventListener('click', function() {
  about.classList.remove('toLeft');
  search.classList.remove('toRight');
});
document.addEventListener('keydown', function() {
  if (event.which === 27) {
    about.classList.remove('toLeft');
    search.classList.remove('toRight');
  }
});

overlay.addEventListener('mousemove', function() {
  overlay.style.background = "rgba(0,0,0,0.75)";
  infos.classList.remove('disappear');
});
document.onmousemove = (function() {
  var onmousestop = function() {
    overlay.style.background = "";
    infos.classList.add('disappear');
  }, thread;
  return function() {
    clearTimeout(thread);
    thread = setTimeout(onmousestop, 2000);
  };
})();

function renderUI(video) {
    // update the ui
}
