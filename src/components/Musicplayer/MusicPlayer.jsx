import React from 'react'
import {ImPause2, ImShuffle} from 'react-icons/im';
import {GrPlayFill} from 'react-icons/gr';
import {BsSkipBackwardFill, BsFillSkipForwardFill, BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'
import {BiRepeat} from 'react-icons/bi';
import './Musicplayer.scss'


const Player = () => {
  const tracks = [
    {
      name: "Mekan Sahibi",
      artist: "Norm Ender",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
      url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
      favorited: false
    },
    {
      name: "Butterflies",
      artist: "Sia",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
      url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
      favorited: true
    }]

    const player = new Audio(tracks[0].source)
    player.setAttribute('preload', 'metadata')

    const userOptions = React.createContext({
    shuffle: false,
    repeat: false,
    })

    function Options(props){
      let options = React.useContext(userOptions)
      let [shuffl, setShuffle] = React.useState(options.shuffle)
      let [repet, setRepeat] = React.useState(options.repeat)
      let [fav, setFav] = React.useState(tracks[props.idx].favorited)

      React.useEffect(() => setFav(tracks[props.idx].favorited))

      function shuffle(){
        options.shuffle = !options.shuffle
        options.repeat = false
        setShuffle(!shuffl)
        setRepeat(false)
      }

      function repeat(){
        options.repeat = !options.repeat
        options.shuffle = false
        setShuffle(false)
        setRepeat(!repet)
      }

      function favorite(){
        tracks[props.idx].favorited = !tracks[props.idx].favorited
        setFav(tracks[props.idx].favorited)
      }

      return(
        <div className="options">
          {
            shuffl &&
            <button onClick={shuffle} className="opt" style={{color: '#b70478'}}>
              <ImShuffle/>
            </button>
            ||
            <button onClick={shuffle} className="opt" >
              <ImShuffle/>
            </button>
          }

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
          {
            repet &&
          <button onClick={repeat} className="opt" style={{color: '#b70478'}}>
            <BiRepeat/>
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
              x => props.setIdx(props.idx-1 < 0 ? 8 : props.idx-1)
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
                <GrPlayFill />
              </button>
          }
          <button
            className="controlButton"
            onClick={x => props.setIdx((props.idx+1)%9)}>
            <BsFillSkipForwardFill />
          </button>
        </div>
      );
    }

    function Progress(props){
      let [currLength, setCurrLength] = React.useState(0)
      let [length, setLength] = React.useState(0)
      let options = React.useContext(userOptions)
      const progressBar = document.querySelector('.progressBar')

      function updateProgress(e){
        let offset = e.target.getBoundingClientRect().left
        let newOffSet = e.clientX
        let newWidth = newOffSet - offset
        progressBar.style.width = newWidth+"px"
        let secPerPx = length / 280
        player.currentTime = secPerPx * newWidth
      }

      setInterval(() => {
        setLength(Math.ceil(player.duration))
        setCurrLength(Math.ceil(player.currentTime))
        let secPerPx = Math.ceil(player.duration) / 280
        let newWidth = player.currentTime / secPerPx
        document.querySelector('.progressBar').style.width = newWidth+"px"
        if(player.currentTime === player.duration){
          if(options.shuffle === true){
            props.setIdx((parseInt(Math.random()*1000))%9)
          }
          else if(options.repeat === true){
            player.play()
          }
          else{
            props.setIdx((props.idx+1)%9)
          }
        }
      }, 1000);

      function formatTime(s){
        return Number.isNaN(s) ? '0:00' : (s-(s%=60))/60+(9<s?':':':0')+s
      }

      return(
        <div className="progress">
          <div className="currentTime">
            <p>{formatTime(currLength)}</p>
          </div>
          <div
          className="progressCenter"
          onClick={(e) => updateProgress(e)}>
            <div className="progressBar">
            </div>
          </div>
          <div className="songLength">
            <p>{formatTime(length)}</p>
          </div>
        </div>
      );
    }

    function Avatar(props){
      return(
        <>
          <img src={tracks[props.idx].cover} className="avatar"/>
          <h4 className="name">{tracks[props.idx].artist}</h4>
          <h1 className="title">{tracks[props.idx].name}</h1>
        </>
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
          <Progress
            setIdx={setIdx}
            idx={idx}
          />
          <Control
            setIdx={setIdx}
            idx={idx}
            playState={playState}
            setPlayState={setPlayState}/>
          <Options
            setIdx={setIdx}
            idx={idx}
          />
        </div>
      );
    }

  return (
    <div className="container"><MusicContainer/></div>
  )
}

export default Player
