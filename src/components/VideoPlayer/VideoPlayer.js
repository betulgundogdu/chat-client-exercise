import React, { useState, forwardRef } from 'react';
import ReactPlayer from 'react-player';
import {
  BiFullscreen, BiPlayCircle, BiPauseCircle, BiVolumeMute, BiVolumeFull,
} from 'react-icons/bi';
import Duration from './Duration';

import './VideoPlayer.css';

const VideoPlayer = ({
  url, onUrl, changeUrl,
  muted, setMuted, volume, setVolume,
  seeking, setSeeking,
  setPlayed, played,
  playing, handlePlayPause,
  seekToVideo,
}, ref) => {
  const [duration, setDuration] = useState(0);
  const makeScreenfull = () => {
    const elem = document.getElementById('player');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  const handleProgress = (state) => {
    if (!seeking) {
      const range = document.getElementById('range');
      setDuration(ref.current.getDuration());
      if (state.playedSeconds === 0) {
        ref.current.seekTo(parseFloat(played));
        setPlayed(parseFloat(played));
      } else {
        setPlayed(state.playedSeconds);
      }
      const playedGradient = (state.playedSeconds / duration) * 100;
      const loadedGradient = (state.loadedSeconds / duration) * 100;
      range.style.background = `linear-gradient(to right,
        #709fb0 0%, #709fb0 ${playedGradient}%,
        #4a4d4a ${playedGradient}%, #4a4d4a ${loadedGradient}%,
        #1b1b1b ${loadedGradient}%, #1b1b1b 100%)`;
    }
  };

  // const setIsShown = (display) => {
  //   const toolbar = document.getElementById('videoToolbar');
  //   if (display) {
  //     toolbar.style.display = 'flex';
  //   } else {
  //     toolbar.style.display = 'none';
  //   }
  // };

  const play = () => {
    handlePlayPause(true);
  };

  const pause = () => {
    handlePlayPause(false);
  };

  return (
    <div
      className="playerContainer"
      // onMouseEnter={() => setIsShown(true)}
      // onMouseLeave={() => setIsShown(false)}
    >
      <div className="playerSection">
        <ReactPlayer
          ref={ref}
          id="player"
          className="player"
          url={url}
          onProgress={handleProgress}
          playing={playing}
          onPlay={play}
          onPause={pause}
          muted={muted}
          volume={volume}
          width="100%"
          height="100%"
        />
      </div>

      <div
        className="toolbar"
        id="videoToolbar"
      >
        <div className="wrap">
          <input
            id="range"
            className="range"
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={() => { setSeeking(true); }}
            onChange={(e) => seekToVideo(e)}
            onMouseUp={() => { setSeeking(false); }}
          />
        </div>
        <div className="controls">
          <div className="left control">
            <button className="play control button" type="button" onClick={() => handlePlayPause(!playing)}>
              {
              playing === true
                ? <BiPauseCircle className="control icon" />
                : <BiPlayCircle className="control icon" />
              }
            </button>
            <Duration seconds={Math.floor(parseFloat(played))} className="duration" />
            <span> / </span>
            <Duration seconds={duration} className="duration" />
            <button className="volume control button" type="button" onClick={() => setMuted(!muted)}>
              {
              (muted === true || volume === 0)
                ? <BiVolumeMute className="control icon" />
                : (
                  <BiVolumeFull
                    className="control icon"
                  />
                )
                }
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              id="volumeRange"
              className="volumeRange"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </div>
          <div className="center control">
            <input
              className="input videoLink"
              type="input"
              placeholder="Enter an URL of YouTube, Twitch, DailyMotion, Vimeo, SoundCloud"
              onChange={onUrl}
              onKeyPress={(e) => (e.key === 'Enter' ? changeUrl(e) : '')}
            />
          </div>
          <div className="right control">
            <button type="button" className="fullscreen control button" onClick={makeScreenfull}><BiFullscreen className="control icon" /></button>
          </div>
        </div>
        {/* <div className="layer" /> */}
      </div>
      {/* <div className="playerSetting">
        <p>Paste your link</p>
        <input type
        ="text" onChange={setUrl} />
      </div> */}
    </div>
  );
};

export default forwardRef(VideoPlayer);
