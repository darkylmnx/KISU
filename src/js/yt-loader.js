import { getNextVideo,getPrevVideo } from './data-handler';

export var player;
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
      },
      // 'onStateChange': onPlayerStateChange
    }
  });
}

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
  return video;
}
export function loadPrevVideo(){
  var video = getPrevVideo();
    player.loadVideoById(video.id);
    return video;
}
