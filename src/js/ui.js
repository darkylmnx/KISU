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
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
  unmuteVideo();
});
unmuteBtn.addEventListener('click', function() {
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
  muteVideo();
});
playBtn.addEventListener('click', function() {
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
  playVideo();
});
pauseBtn.addEventListener('click', function() {
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
  pauseVideo();
});
prevBtn.addEventListener('click', function() {
  var video = loadPrevVideo();
  renderUI(video);
  playBtn.classList.remove('is-active');
  pauseBtn.classList.add('is-active');
});
nextBtn.addEventListener('click', function() {
  var video = loadNextVideo();
  renderUI(video);
  playBtn.classList.remove('is-active');
  pauseBtn.classList.add('is-active');
});

document.addEventListener('keydown', function() {
  if (event.which === 32) {
    if (player.getPlayerState() === 2) {
      playBtn.classList.toggle('is-active');
      pauseBtn.classList.toggle('is-active');
      playVideo();
    } else {
      playBtn.classList.toggle('is-active');
      pauseBtn.classList.toggle('is-active');
      pauseVideo();
    }
  }
  else if (event.which === 39) {
    loadNextVideo();
  }
  else if (event.which === 37) {
    loadPrevVideo();
  }
  else if (event.which === 27) {
    about.classList.remove('toLeft');
    search.classList.remove('toRight');
  }
})

// FILTERS BUTTONS --------------------
var opBtn = document.querySelector('#op');
var enBtn = document.querySelector('#en');
var seinenBtn = document.querySelector('#seinen');
var shonenBtn = document.querySelector('#shonen');
var shojoBtn = document.querySelector('#shojo');

opBtn.addEventListener('click', function() {
  opBtn.classList.toggle('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.remove('bordered');
  opFilter();
});
enBtn.addEventListener('click', function() {
  opBtn.classList.remove('bordered');
  enBtn.classList.toggle('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.remove('bordered');
  enFilter();
});
seinenBtn.addEventListener('click', function() {
  opBtn.classList.remove('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.toggle('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.remove('bordered');
  seinenFilter();
});
shonenBtn.addEventListener('click', function() {
  opBtn.classList.remove('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.toggle('bordered');
  shojoBtn.classList.remove('bordered');
  shonenFilter();
});
shojoBtn.addEventListener('click', function() {
  opBtn.classList.remove('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.toggle('bordered');
  shojoFilter();
});

// MORE -------------------------------
var plusBtn = document.querySelector('#plus');
var moreInfos = document.querySelector('.moreInfos');
var team = document.querySelector('#team');
var about = document.querySelector('.about');

plusBtn.addEventListener('click', function() {
  moreInfos.classList.toggle('is-visible');

});
team.addEventListener('click', function() {
  about.classList.toggle('toLeft');
});

// SEARCH -----------------------------
var burger = document.querySelector('.header_menu');
var search = document.querySelector('.search');
burger.addEventListener('click', function() {
  search.classList.toggle('toRight');

});

var infos = document.querySelector('.infos');
var overlay = document.querySelector('.aoe-player_overlay');
overlay.addEventListener('click', function() {
  about.classList.remove('toLeft');
  search.classList.remove('toRight');
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
    thread = setTimeout(onmousestop, 3000);
  };
})();

function renderUI(video) {
    // update the ui
}
