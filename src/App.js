import { Routes, Route, Link, NavLink } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import BottomBar from "components/BottomBar";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
