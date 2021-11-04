import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myVideo from "./myVideo.mp4";
function App() {
  return (
    <>
      <div
        style={{
          border: "solid 1px black",
          maxWidth: "100vw",
        }}
      >
        <h1 className="title red">Your name here</h1> <br />
        <img src="./imageInSrc.jpg" alt="imageInSrc" />
        <br />
        <br />
        <img src="/imageInPublic.jpg" alt="imageInPublic" />
      </div>
      <br />
      <br />
      <video width="320" height="240" controls />
      <source src={myVideo.mp4} type="video/mp4" />
    </>
  );
}
export default App;
