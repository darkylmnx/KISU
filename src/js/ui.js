import { loadNextVideo, playVideo, pauseVideo } from './yt-loader';

var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var plusBtn = document.querySelector('#plus');

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

function renderUI(video) {
    // update the ui
}
