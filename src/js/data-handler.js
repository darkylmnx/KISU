var playlist2 = playlist.slice();
var current_video;


export function getNextVideo() {
    current_video = playlist2[ getRandom(playlist2) ];
    playlist2 = playlist2.filter(function (data) {
        return data.id != current_video.id;
    });

    if (playlist2.length === 0) {
        playlist2 = playlist.slice();
    }

    return current_video;
}


function getRandom(list) {
    return Math.floor( Math.random() * list.length );
}


