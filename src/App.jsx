import DisplaySection from "./components/DisplaySection";
import Jumbotoron from "./components/Jumbotoron";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/loader";
import Nav from "./components/nav";
import { useRef } from "react";


function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlerPreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Loader/>
      <div ref={contentRef} id="content">
      <Nav/>
      <Jumbotoron/>
      <SoundSection/>
      <DisplaySection triggerPreview={handlerPreview}/>
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef}/>
    </div>
  );
}

export default App;
