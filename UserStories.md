## TYPES
- AAV : As a visitor
- AAF : As a front-end

## ACTIONS

### dev
- [ ] AAF i load **data** from the server (JSON videos)
- [ ] AAF i load youtube player
- [ ] AAF i chose an random video from the data
- [ ] AAF i play the video chosen in the player
- [ ] AFF i show the basic informations in the DOM
- [ ] AFF i add events to control the player

### client
- [ ] AAV i can see a player when i arrive on the website
- [ ] AAV i see in the player a random video
- [ ] AAV i can control the player :
    - [ ] next / previous
    - [ ] play / pause
    - [ ] mute / unmute
    - [ ] volume
- AAV i can see the basic informations of the video (TO SEE)


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