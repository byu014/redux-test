//action creator
const selectSong = (song) => {
  //rturn an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }

}

export default selectSong
