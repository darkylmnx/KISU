// IMPORT -----------------------------
import {
  muteVideo,
  unmuteVideo,
  loadNextVideo,
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
  var video = loadNextVideo();
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

function renderUI(video) {
    // update the ui
}
