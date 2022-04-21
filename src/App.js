import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import Error from "./components/Error";
function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/tutorial" element={<Tutorials />} />
        <Route path="/community/" element={<Community />} />
        <Route path="/users/:profileId" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
