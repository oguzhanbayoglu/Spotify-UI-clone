import { useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import shuffle from "img/shuffle.svg";
import skipPrev from "img/skipPrev.svg";
import skipNext from "img/skipNext.svg";
import repeat from "img/repeat.svg";
import play2 from "img/play2.svg";
import pauseSvg from "img/pause.svg";
import volume from "img/volume.svg";
import mute from "img/mute.svg";
import fullscreenClose from "img/fullscreenClose.svg";
import logologo from "img/logologo.svg";
import CustomRange from "components/CustomRange";
import { secondsToTime } from "utils";

function FSPlayer({ toggle, state, controls }) {
  const { current } = useSelector((state) => state.player);

  return (
    <div className="fullscreen">
      <img
        onClick={controls[state?.playing ? "pause" : "play"]}
        className="bgimg"
        src={current.img}
        alt="c"
      />
      <div className="fslogo">
        <img src={logologo} alt="loglogl" />
        <div className="fslogo-detail">
          <h3>PLAYING FROM PLAYLIST</h3>
          <p>Recently played</p>
        </div>
      </div>
      <div className="now fs">
        {current && (
          <div className="now-cover fs ">
            <img
              className="now-cover fs"
              src={current?.img}
              alt="playing-cover"
            />
          </div>
        )}
        <div className="now-details fs">
          <h4 className="now-title fs">{current.title}</h4>
          <p className="now-artist fs">{current.artist}</p>
        </div>
      </div>
      <div className="player fs">
        <div className="player-range fs">
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
        <div className="fs-bottom">
          <div className="player-control fs">
            <button className="control-btn fs">
              <img className="control-btn-img1 fs" src={shuffle} alt="" />
            </button>
            <button className="control-btn fs">
              <img className="control-btn-img fs" src={skipPrev} alt="" />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="play-btn fs"
            >
              <img
                className="control-btn-img fs play"
                src={state?.playing ? pauseSvg : play2}
                alt=""
              />
            </button>
            <button className="control-btn fs">
              <img className="control-btn-img fs" src={skipNext} alt="" />
            </button>
            <button className="control-btn fs">
              <img className="control-btn-img1 fs" src={repeat} alt="" />
            </button>
          </div>
          <div className="right fs">
            <div className="button-container">
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
            <div className="rigth-range fs">
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
            <button onClick={toggle} className="right-btn">
              <img src={fullscreenClose} alt="right image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FSPlayer;
