import { sliderData } from "../seeds/images"

const ImageSlider = () => {
  const mappedImages = sliderData.map(company => (
    <img src={company.image} alt={company.name} />
  ))

  return (
    <div>
      {mappedImages}
    </div>  
  )
}

export default ImageSlider