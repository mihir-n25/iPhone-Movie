import React from 'react'

const SoundSection = () => {

  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior : "smooth",
    })
  }

  return (
    <div className='sound-section wrapper'>
        <div className='body'>
        <div className='content'>
        <h2 className='title'>New Sound System</h2>
        <p className='text'>Feel the Bass</p>
        <p className='description'>From $41.62 for 24mo. or $999 before trade-in</p>
        <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>Learn More</a>
        </li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default SoundSection