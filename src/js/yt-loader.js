import { getNextVideo,getPrevVideo, edfilter, opfilter, seinenfilter, shojofilter, shonenfilter } from './data-handler';

export var player;
export var videotime = 0;
export default function onYouTubeIframeAPIReady() {
  window.p = player = new YT.Player('aoe-player', {
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
      onReady() {
        loadNextVideo();
        //currentTime();
      },
      onStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
          loadNextVideo();
        }
      }
    }
  });
}
/*export function currentTime() {
    function updateTime() {
        if(player && player.getCurrentTime) {
            videotime = player.getCurrentTime();
        }
    }
    timeupdater = setInterval(updateTime, 1000);
}*/

var title = document.querySelector('#title');
var anime = document.querySelector('#anime');
var author = document.querySelector('#author');
var type = document.querySelector('#type');
var category = document.querySelector('#category');
var infosType = document.querySelector('.infos_tags_type');
var infosCategory = document.querySelector('.infos_tags_tag');

// BUTTONS FUNCTIONS ------------------

var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var muteBtn = document.querySelector('#mute');
var unmuteBtn = document.querySelector('#unmute');

export function muteVideo(){
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
  player.unMute();
};
export function unmuteVideo(){
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
  player.mute();
};
export function playVideo(){
  playBtn.classList.remove('is-active');
  pauseBtn.classList.add('is-active');
  player.playVideo();
};
export function pauseVideo(){
  playBtn.classList.add('is-active');
  pauseBtn.classList.remove('is-active');
  player.pauseVideo();
};
function displayInfo(){
    player.loadVideoById(video.id);
    title.innerHTML = video.title;
    anime.innerHTML = video.anime;
    author.innerHTML = video.author;
    type.innerHTML = video.type;
    var videoType = video.type;
    if (videoType === 'op') {
        infosType.classList.add('op');
        infosType.classList.remove('en');
    }
    else {
        infosType.classList.add('en');
        infosType.classList.remove('op');
    }
    category.innerHTML = video.category;
    var videoCategory = video.category;
    if (videoCategory === 'seinen') {
        infosCategory.classList.add('seinen');
        infosCategory.classList.remove('shonen');
        infosCategory.classList.remove('shojo');
    }
    else if (videoCategory === 'shonen') {
        infosCategory.classList.remove('seinen');
        infosCategory.classList.add('shonen');
        infosCategory.classList.remove('shojo');
    }
    else {
        infosCategory.classList.remove('seinen');
        infosCategory.classList.remove('shonen');
        infosCategory.classList.add('shojo');
    }
}

// LOAD PREV/NEXT INFOS VIDEO FUNCTIONS
var infos = document.querySelector('.infos');
var overlay = document.querySelector('.aoe-player_overlay');

export function loadNextVideo() {
  var video = getNextVideo();
  player.loadVideoById(video.id);
  overlay.style.background = "rgba(0,0,0,0.75)";
  infos.classList.remove('disappear');
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
  title.innerHTML = video.title;
  anime.innerHTML = video.anime;
  author.innerHTML = video.author;
  type.innerHTML = video.type;
  var videoType = video.type;
  if (videoType === 'op') {
    infosType.classList.add('op');
    infosType.classList.remove('en');
  }
  else {
    infosType.classList.add('en');
    infosType.classList.remove('op');
  }
  category.innerHTML = video.category;
  var videoCategory = video.category;
  if (videoCategory === 'seinen') {
    infosCategory.classList.add('seinen');
    infosCategory.classList.remove('shonen');
    infosCategory.classList.remove('shojo');
  }
  else if (videoCategory === 'shonen') {
    infosCategory.classList.remove('seinen');
    infosCategory.classList.add('shonen');
    infosCategory.classList.remove('shojo');
  }
  else {
    infosCategory.classList.remove('seinen');
    infosCategory.classList.remove('shonen');
    infosCategory.classList.add('shojo');
  }
  return video;
}
export function loadPrevVideo(){
  overlay.style.background = "rgba(0,0,0,0.75)";
  infos.classList.remove('disappear');
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
  var video = getPrevVideo();
  player.loadVideoById(video.id);
  title.innerHTML = video.title;
  anime.innerHTML = video.anime;
  author.innerHTML = video.author;
  type.innerHTML = video.type;
  var videoType = video.type;
  if (videoType === 'op') {
    infosType.classList.add('op');
    infosType.classList.remove('en');
  }
  else {
    infosType.classList.add('en');
    infosType.classList.remove('op');
  }
  category.innerHTML = video.category;
  var videoCategory = video.category;
  if (videoCategory === 'seinen') {
    infosCategory.classList.add('seinen');
    infosCategory.classList.remove('shonen');
    infosCategory.classList.remove('shojo');
  }
  else if (videoCategory === 'shonen') {
    infosCategory.classList.remove('seinen');
    infosCategory.classList.add('shonen');
    infosCategory.classList.remove('shojo');
  }
  else {
    infosCategory.classList.remove('seinen');
    infosCategory.classList.remove('shonen');
    infosCategory.classList.add('shojo');
  }
  return video;
}

// FILTER FUNCTIONS -------------------

var opBtn = document.querySelector('#op');
var enBtn = document.querySelector('#en');
var seinenBtn = document.querySelector('#seinen');
var shonenBtn = document.querySelector('#shonen');
var shojoBtn = document.querySelector('#shojo');

export function opFilter(){
  var video = opfilter();
  opBtn.classList.toggle('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.remove('bordered');
  return video;
};
export function enFilter(){
  var video = edfilter();
  opBtn.classList.remove('bordered');
  enBtn.classList.toggle('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.remove('bordered');
  return video;
};
export function seinenFilter(){
  var video = seinenfilter();
  opBtn.classList.remove('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.toggle('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.remove('bordered');
  return video;
};
export function shonenFilter(){
  var video = shonenfilter();
  opBtn.classList.remove('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.toggle('bordered');
  shojoBtn.classList.remove('bordered');
  return video;
};
export function shojoFilter(){
  var video = shojofilter();
  opBtn.classList.remove('bordered');
  enBtn.classList.remove('bordered');
  seinenBtn.classList.remove('bordered');
  shonenBtn.classList.remove('bordered');
  shojoBtn.classList.toggle('bordered');
  return video;
};
