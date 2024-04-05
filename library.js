const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: {
    p01: { id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(library) {
  for (let playlistId in library.playlists) {
    let playlist = library.playlists[playlistId];
    console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};
//printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(library) {
  for (let trackId in library.tracks) {
    let tracks = library.tracks[trackId];
    console.log(`${trackId}: ${tracks.name} by ${tracks. artist} (${tracks.album})`);
  }
};
//printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlist = library.playlists[playlistId];
  console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       
  for (let trackId of playlist.tracks) {
    let track = library.tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
//printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  let track = library.tracks[trackId];
  let playlist = library.playlists[playlistId];
  console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album}) added in ${playlistId}: ${playlist.name}`);
};
//addTrackToPlaylist("t02", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
            

// adds a track to the library
const addTrack = function(name, artist, album) {
  const trackId = generateUid(); // Generate a unique trackId
  library.tracks[trackId] = { id: trackId, name, artist, album }; // Assign the track object to the library.tracks property
  return library;
};

console.log(addTrack("Thriller", "Michael Jackson", "Thriller"));
// adds a playlist to the library
const addPlaylist = function(name) {
  const playlistId = generateUid();
  library.playlists[playlistId] = { id: playlistId, name, tracks: [] };
  return library;
};
console.log(addPlaylist("Sweet Summer Breeze"));

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};