import { loadNextVideo, playVideo, pauseVideo } from './yt-loader';

// PLAYER BUTTONS ---------------------
var muteBtn = document.querySelector('#mute')
var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var plusBtn = document.querySelector('#plus');

muteBtn.addEventListener('click', function() {
  muteVideo();
});
playBtn.addEventListener('click', function() {
  playVideo();
});
pauseBtn.addEventListener('click', function() {
  pauseVideo();
});
nextBtn.addEventListener('click', function() {
  var video = loadNextVideo();
  renderUI(video);
});
plusBtn.addEventListener('click', function() {

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
  search.classList.toggle('is-active');
  changeBurger()
});

function renderUI(video) {
    // update the ui
}
