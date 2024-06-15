import React, { useEffect, useState } from "react";
import heroVideo from '../assets/images/hero.mp4';
import smallHeroVideo from '../assets/images/smallHero.mp4';
function Loader() {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
          setVideoSrc(smallHeroVideo)
        } else {
          setVideoSrc(heroVideo)
        }
      }

      useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
    
        return () => {
          window.removeEventListener('resize', handleVideoSrcSet)
        }
      }, [])

    return (
       <div className="loader">
         <video className="logo" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
       </div>
    );
}
export default Loader;