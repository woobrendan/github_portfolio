import { useState, useEffect } from 'react';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import { IconButton } from '@mui/material'
import '../Styles/toTop.scss'

function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 800 ? setIsVisible(true) : setIsVisible(false)
    })
  })

  const scrollUp = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth"
    })
  }
  return (
    <>
      {isVisible && 
        <IconButton onClick={scrollUp} id="to_top">
          <ArrowCircleUpTwoToneIcon  />
        </IconButton>
      }
    </>
  )
}

export default ToTop