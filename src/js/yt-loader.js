import { getNextVideo,getPrevVideo } from './data-handler';

export var player;
export var videotime = 0;
export default function onYouTubeIframeAPIReady() {
  player = new YT.Player('aoe-player', {
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
      onReady: function() {
        loadNextVideo();
        currentTime();
        duration();
      },
      onStateChange :function () {
        onPlayerStateChange();
      }
    }
  });
}
export function currentTime() {
    function updateTime() {
        if(player && player.getCurrentTime) {
            videotime = player.getCurrentTime();
            console.log(videotime);
        }
    }
    timeupdater = setInterval(updateTime, 1000);
}

export function onPlayerStateChange() {
        console.log('j')
}

/*export function duration() {
    function updateTime() {
        var oldTime = videotime;
        if(player && player.getDuration()) {
            videotime = player.getDuration();
            console.log(videotime);
        }
        if(videotime !== oldTime) {
            onProgress(videotime);
        }
    }
    timeupdaters = setInterval(updateTime, 1000);
}*/

var title = document.querySelector('#title');
var anime = document.querySelector('#anime');
var author = document.querySelector('#author');
var type = document.querySelector('#type');
var category = document.querySelector('#category');
var infosType = document.querySelector('.infos_tags_type');
var infosCategory = document.querySelector('.infos_tags_tag');

export function muteVideo(){
  player.unMute();
}

export function unmuteVideo(){
  player.mute();
}

export function playVideo(){
  player.playVideo();
}

export function pauseVideo(){
  player.pauseVideo();
}

export function loadNextVideo() {
  var video = getNextVideo();
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
export function loadPrevVideo(){
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
