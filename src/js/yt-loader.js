var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('aoe-player', {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      hl: 'en',
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    },
    height: '100%',
    width: '100%',
    videoId: 'M7lc1UVf-VE'
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });

  console.log(player)
}