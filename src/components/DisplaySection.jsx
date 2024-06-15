import React from "react";

const DisplaySection = ({triggerPreview}) => {

  const handleLearnMore = () => {
    const element = document.querySelector(".jumbotron-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior : "smooth",
    })
  }

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <p className="description">
        A display that's up to 2x brighter in the sun
      </p>
          <button className="button" onClick={triggerPreview}>Try Me</button>
          <a className="back-button" onClick={handleLearnMore}>Top</a>
    </div>
  );
};

export default DisplaySection;
