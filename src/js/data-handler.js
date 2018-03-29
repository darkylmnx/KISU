import {player} from "./yt-loader";

var playlist2 = playlist.slice();
var current_video;
var memo_video = [];

// TAKE A RANDOM VIDEO ----------------
export function getNextVideo() {
    if (current_video !== undefined){
        memo_video.push(current_video);
    }
    current_video = playlist2[ getRandom(playlist2) ];
    playlist2 = playlist2.filter(function (data) {
        return data.id !== current_video.id;
    });
    if (playlist2.length === 0) {
        playlist2 = playlist.slice();
    }
    return current_video;
}
<<<<<<< HEAD
export function edfilter() {
    if(current_video !== undefined){
        memo_video.push(current_video);
    }
    current_video = playlist2[ getRandom(playlist2) ];
    playlist2 = playlist2.filter(function (data) {
        return data.id !== current_video.id && data.type === 'ed';
    });

    if (playlist2.length === 0) {
        playlist2 = playlist.slice();
    }

    return current_video;
}


=======
>>>>>>> 2384b510a5895e87166597eca322ebcd9a27f98a
function getRandom(list) {
    return Math.floor( Math.random() * list.length );
}
// RECOVER THE LAST VIDEO -------------
export function getPrevVideo() {
    if (memo_video.length > 0 ){
        current_video = memo_video[memo_video.length-1];
        memo_video.splice(memo_video.length-1,1);
        return current_video;
    } else {
        memo_video.splice();
        current_video = playlist2[ getRandom(playlist2) ];
        playlist2 = playlist2.filter(function (data) {
            return data.id !== current_video.id;
        });
        if (playlist2.length === 0) {
            playlist2 = playlist.slice();
        }
        return current_video;
    }
}
