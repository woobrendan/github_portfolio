import { useState } from 'react';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import { IconButton } from '@mui/material'

function ToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollUp = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth"
    })
  }
  return (
    <div className="to_top">
      <IconButton onClick={scrollUp} id="To-Top-Button">
        <ArrowCircleUpTwoToneIcon  />
      </IconButton>
    </div>
  )
}

export default ToTop