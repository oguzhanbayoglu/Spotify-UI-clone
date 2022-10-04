import React from "react";

function Playlists() {
  const playlists = new Array(43).fill(<p>Playlist</p>);
  return <div className="playlist">{playlists}</div>;
}

export default Playlists;
