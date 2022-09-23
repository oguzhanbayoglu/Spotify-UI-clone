import React from "react";
import { Range, getTrackBackground } from "react-range";

function CustomRange({ value, step, min, max, onChange }) {
  return (
    <div className="player-range">
      <Range
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={(values) => onChange(values[0])}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "28px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "4px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: [value],
                  colors: ["#1db954", "#535353"],
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "100px",
              backgroundColor: "#FFF",
              boxShadow: "0px 2px 6px #AAA",
              display: `${isDragged ? "block" : "none"}`,
            }}
          />
        )}
      />
    </div>
  );
}

export default CustomRange;
