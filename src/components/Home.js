import self from '../images/me.jpeg';
import '../Styles/home.scss'

function Home() {
  return (
    <section className="home_container">
      <div className="home_img">
        <img src={self} alt="portrait" />
      </div>
      <div className='home_description'>
        <h1>Hello I'm Brendan Woo</h1>
        <h5>I am a Full Stack Developer based in Canada</h5>
      </div>
    </section>
  )
}

export default Home