import React from 'react'
import {ImPause2, ImPlay3} from 'react-icons/im';
import {BsSkipBackwardFill, BsFillSkipForwardFill, BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'
import './Musicplayer.scss'


const Player = () => {
  const tracks = [
    {
      name: "Helena",
      artist: "my chemical romance",
      cover: "https://res.cloudinary.com/dr24t0rw2/image/upload/v1657099275/History%20of%20webdesign/download_vtrpia.jpg",
      source: "https://res.cloudinary.com/dr24t0rw2/video/upload/v1657185339/History%20of%20webdesign/MCR-Helena-short_fjp6pt.mp3",
      favorited: false
    },
    {
      name: "Right here in my arms",
      artist: "HIM",
      cover: "https://res.cloudinary.com/dr24t0rw2/image/upload/v1657183515/History%20of%20webdesign/61B_L1FItOL_hjq5m0.jpg",
      source: "https://res.cloudinary.com/dr24t0rw2/video/upload/v1657185340/History%20of%20webdesign/HIM_-_short_llreyv.mp3",
      favorited: true
    },
    {
      name: "I write sins not tragedies.",
      artist: "PANIC! AT THE DISCO",
      cover: "https://res.cloudinary.com/dr24t0rw2/image/upload/v1657099275/History%20of%20webdesign/ab67616d0000b2730a8881b0d247346c3c447bf3_kctem9.jpg",
      source: "https://res.cloudinary.com/dr24t0rw2/video/upload/v1657185340/History%20of%20webdesign/Panic_short_ty5mpp.mp3",
      favorited: false
    },
    {
      name: "Beating heart baby",
      artist: "Head automatica",
      cover: "https://res.cloudinary.com/dr24t0rw2/image/upload/v1657102290/History%20of%20webdesign/500x500_rtt76w.jpg",
      source: "https://res.cloudinary.com/dr24t0rw2/video/upload/v1657185339/History%20of%20webdesign/Beating_heart_short_aorp9e.mp3",
      favorited: false
    }]

    const player = new Audio(tracks[0].source)
    player.setAttribute('preload', 'metadata')
    const userOptions = React.createContext({
      shuffle: false,
      repeat: false,
    })

    function Options(props){
      let [fav, setFav] = React.useState(tracks[props.idx].favorited)

      React.useEffect(() => setFav(tracks[props.idx].favorited))

    function favorite(){
      tracks[props.idx].favorited = !tracks[props.idx].favorited
      setFav(tracks[props.idx].favorited)
    }

    return(
      <div className="options">
        {
          fav &&
        <button onClick={favorite}  className="opt" style={{color: '#b70478'}}>
          <BsSuitHeartFill/>
        </button>
            ||
          <button onClick={favorite}  className="opt" >
          <BsSuitHeart/>
        </button>
          }
      </div>
    );
  }

function Control(props){
  return(
    <div className="controls">
      <button className="controlButton"
        onClick={
          x => props.setIdx(props.idx-1 < 0 ? 3 : props.idx-1)
        }>
        <BsSkipBackwardFill />
      </button>
      {
        props.playState === true ?
          <button
            className="centerButton"
            onClick={x => props.setPlayState(false)}>
            <ImPause2 />
          </button> :
          <button
            className="centerButton"
            onClick={x => props.setPlayState(true)}>
            <ImPlay3 />
          </button>
      }
      <button
        className="controlButton"
        onClick={x => props.setIdx((props.idx+1)%4)}>
        <BsFillSkipForwardFill />
      </button>
    </div>
  );
}

    function Avatar(props){
      return(
        <div className="songInfo">
          <img src={tracks[props.idx].cover} className="avatar"/>
          <div className="songTexts">
          <h4 className="name">{tracks[props.idx].artist}</h4>
          <h3 className="title">{tracks[props.idx].name}</h3>
          </div>
        </div>
      );
    }

    function MusicContainer(){
      let [idx, setIdx] = React.useState(0);
      let [playState, setPlayState] = React.useState(false);
      let oldIdx = React.useRef(idx)
      React.useEffect(() => {

        if(playState === true)
          player.play()
        else
          player.pause()
        if(idx !== oldIdx.current){
          player.pause()
          player.src = tracks[idx].source
          player.load()
          player.play()
          setPlayState(true)
          oldIdx.current = idx
        }

      })

      return(
        <div className="playerContainer">
          <Avatar idx={idx}/>
          <Control
            setIdx={setIdx}
            idx={idx}
            playState={playState}
            setPlayState={setPlayState}/>
          {/* <Options
            setIdx={setIdx}
            idx={idx}
          /> */}
        </div>
      );
    }

  return (
    <div className="container"><MusicContainer/></div>
  )
}

export default Player
