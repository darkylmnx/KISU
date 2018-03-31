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

export function edfilter() {
  playlist2 = playlist.slice();

    playlist2 = playlist2.filter(function (data) {
        return data.id !== current_video.id && data.type === 'ed';
    });
    current_video = playlist2[ getRandom(playlist2) ];
    return current_video;
}


export function opfilter() {
    playlist2 = playlist.slice();

    playlist2 = playlist2.filter(function (data) {
        return data.id !== current_video.id && data.type === 'op';
    });
    current_video = playlist2[ getRandom(playlist2) ];
    return current_video;
}

export function seinenfilter() {
    playlist2 = playlist.slice();

    playlist2 = playlist2.filter(function (data) {
        return data.id !== current_video.id && data.category === 'seinen';
    });
    current_video = playlist2[ getRandom(playlist2) ];
    return current_video;
}

export function shonenfilter() {
    playlist2 = playlist.slice();

    playlist2 = playlist2.filter(function (data) {
        return data.id !== current_video.id && data.category === 'shonen';
    });
    current_video = playlist2[ getRandom(playlist2) ];
    return current_video;
}

export function shojofilter() {
    playlist2 = playlist.slice();

    playlist2 = playlist2.filter(function (data) {
        return data.id !== current_video.id && data.category === 'shojo';
    });
    current_video = playlist2[ getRandom(playlist2) ];
    return current_video;
}

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
