## TYPES
- AAV : As a visitor
- AAF : As a front-end

## ACTIONS

### dev
- [x] AAF i load **data** from the server (JSON videos)
- [x] AAF i load youtube player
- [x] AAF i chose an random video from the data
- [x] AAF i play the video chosen in the player
- [x] AFF i show the basic informations in the DOM
- [x] AFF i add events to control the player

### client
- [x] AAV i can see a player when i arrive on the website
- [x] AAV i see in the player a random video
- [ ] AAV i can control the player :
    - [x] next / previous
    - [x] play / pause
    - [x] mute / unmute
    - [x] volume
- [x] AAV i can see the basic informations of the video (TO SEE)


## PAYLOADS

### Data
```
[
    {
        "id": "id of youtube",
        "title": "name of opening",
        "author": "name of the song author",
        "anime": "anime's name",
        "type": "opening || ending",
        "category": "seinen || shonen || shojo"
    }
]
```

Later, we could add to the data the starting point :
https://developers.google.com/youtube/iframe_api_reference#Example_Video_Player_Constructors
```
loadVideoById({'videoId': 'bHQqvYy5KYo',
               'startSeconds': 5,
               'endSeconds': 60,
               'suggestedQuality': 'large'});
```
