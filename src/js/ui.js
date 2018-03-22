// IMPORT -----------------------------
import {
  muteVideo,
  unmuteVideo,
  loadNextVideo,
  loadPrevVideo,
  playVideo,
  pauseVideo
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
  muteVideo();
});
unmuteBtn.addEventListener('click', function() {
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
  unmuteVideo();
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

// MORE -------------------------------
var plusBtn = document.querySelector('#plus');
var moreInfos = document.querySelector('.moreInfos');
var team = document.querySelector('#team');
var about = document.querySelector('.about');

plusBtn.addEventListener('click', function() {
  moreInfos.classList.toggle('is-visible');

});
team.addEventListener('click', function() {
  about.classList.toggle('is-scaled');
});

// SEARCH -----------------------------
var burger = document.querySelector('.header_menu');
var search = document.querySelector('.search');
burger.addEventListener('click', function() {
  search.classList.toggle('not-hidden');

});

var overlay = document.querySelector('.aoe-player_overlay');
var infos = document.querySelector('.infos');
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
