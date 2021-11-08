import logo from "./logo.svg";
import "./App.css";
import { FullName } from "./Component/Profile/FullName";
import { ProfilePhoto } from "./Component/Profile/ProfilePhoto";
import { Adress } from "./Component/Profile/Adress";

function App() {
  return (
    <div className="App">
      <FullName></FullName>
      <ProfilePhoto></ProfilePhoto>
      <Adress></Adress>
    </div>
  );
}

export default App;
