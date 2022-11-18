import { useState, useEffect } from 'react';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import { IconButton } from '@mui/material'

function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false)
    })
  })

  const scrollUp = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth"
    })
  }
  return (
    <div className="to_top">
      {isVisible && 
        <IconButton onClick={scrollUp} id="To-Top-Button">
          <ArrowCircleUpTwoToneIcon  />
        </IconButton>
      }
    </div>
  )
}

export default ToTop