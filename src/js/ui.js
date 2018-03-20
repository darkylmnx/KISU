import { loadNextVideo, playVideo, pauseVideo } from './yt-loader';

// PLAYER BUTTONS ---------------------
var muteBtn = document.querySelector('#mute');
var unmuteBtn = document.querySelector('#unmute');
var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#previous');
var plusBtn = document.querySelector('#plus');
var moreInfos = document.querySelector('.moreInfos');

muteBtn.addEventListener('click', function() {
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
});
unmuteBtn.addEventListener('click', function() {
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
});
playBtn.addEventListener('click', function() {
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
});
pauseBtn.addEventListener('click', function() {
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
});
playBtn.addEventListener('click', function() {
  playVideo();
});
pauseBtn.addEventListener('click', function() {
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
plusBtn.addEventListener('click', function() {
  moreInfos.classList.toggle('is-visible');

});


// SEARCH -----------------------------
function changeBurger() {
  var lines = document.querySelectorAll('.header_menu_line');
  lines[0].classList.toggle('rotate');
  lines[1].classList.toggle('disappear');
  lines[2].classList.toggle('invRotate');
}
var burger = document.querySelector('.header_menu');
var search = document.querySelector('.search');
burger.addEventListener('click', function() {
  search.classList.toggle('not-hidden');
  changeBurger()
});

function renderUI(video) {
    // update the ui
}
