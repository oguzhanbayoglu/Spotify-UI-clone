import React, { useEffect, useRef } from "react";
import likedS from "img/liked-stroke.svg";
import minimize from "img/minimize.svg";
import mic from "img/mic.svg";
import expand from "img/expand.svg";
import que from "img/que.svg";
import device from "img/device.svg";
import volume from "img/volume.svg";
import mute from "img/mute.svg";
import shuffle from "img/shuffle.svg";
import skipPrev from "img/skipPrev.svg";
import skipNext from "img/skipNext.svg";
import repeat from "img/repeat.svg";
import play2 from "img/play2.svg";
import pauseSvg from "img/pause.svg";
import fullscreen from "img/fullscreen.svg";
import CustomRange from "components/CustomRange";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { secondsToTime } from "utils";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setSidebar } from "stores/player";
import { setPlaying } from "../stores/player";
import FSPlayer from "./FSPlayer";

function BottomBar() {
  const dispatch = useDispatch();

  const { current, sidebar } = useSelector((state) => state.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
    autoPlay: false,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  const fsRef = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });

  return (
    <>
      <footer className="bottombar">
        <div className="now">
          {current && !sidebar && (
            <div className="now-cover">
              <img
                className="now-cover"
                src={current?.img}
                alt="playing-cover"
              />
              <button
                className="expand"
                onClick={() => dispatch(setSidebar(true))}
              >
                <img className="expand-img" src={expand} alt="expand" />
              </button>
            </div>
          )}
          <div className="now-details">
            <h4 className="now-title">{current.title}</h4>
            <p className="now-artist">{current.artist}</p>
          </div>
          {current && (
            <>
              <button className="now-btn ">
                <img className="fav" src={likedS} alt="" />
              </button>
              <button className="now-btn ">
                <img className="minimize" src={minimize} alt="" />
              </button>
            </>
          )}
        </div>
        <div className="player">
          <div className="player-control">
            <button className="control-btn">
              <img className="control-btn-img1" src={shuffle} alt="" />
            </button>
            <button className="control-btn">
              <img className="control-btn-img" src={skipPrev} alt="" />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="play-btn"
            >
              <img
                className="control-btn-img"
                src={state?.playing ? pauseSvg : play2}
                alt=""
              />
            </button>
            <button className="control-btn">
              <img className="control-btn-img" src={skipNext} alt="" />
            </button>
            <button className="control-btn">
              <img className="control-btn-img1" src={repeat} alt="" />
            </button>
          </div>
          <div className="player-range">
            {audio}
            <div>{secondsToTime(state?.time)}</div>
            <CustomRange
              value={state?.time}
              step={0.1}
              min={0}
              max={state?.duration || 1}
              onChange={(value) => controls.seek(value)}
            />
            <div>{secondsToTime(state?.duration)}</div>
          </div>
        </div>
        <div className="right">
          <div className="button-container">
            <button className="right-btn">
              <img src={mic} alt="right image" />
            </button>
            <button className="right-btn">
              <img src={que} alt="right image" />
            </button>
            <button className="right-btn">
              <img src={device} alt="right image" />
            </button>
            <button
              onClick={controls[state.muted ? "unmute" : "mute"]}
              className="right-btn"
            >
              <img
                src={state.volume === 0 || state.muted ? mute : volume}
                alt="right image"
              />
            </button>
          </div>
          <div className="rigth-range">
            <CustomRange
              value={state.muted ? 0 : state?.volume}
              step={0.01}
              min={0}
              max={1}
              onChange={(value) => {
                controls.unmute();
                controls.volume(value);
              }}
            />
          </div>
          {current && (
            <button onClick={toggle} className="right-btn">
              <img src={fullscreen} alt="right image" />
            </button>
          )}
        </div>
      </footer>
      <div ref={fsRef}>
        {isFullscreen && (
          <FSPlayer toggle={toggle} state={state} controls={controls} />
        )}
      </div>
    </>
  );
}

export default BottomBar;
