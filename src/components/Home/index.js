import { Link } from 'react-router-dom'
import logoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={logoTitle} alt="devloper" />
          lobo💃 <br />
        </h1>
        <h2>Frontend Devloper / Javascript Expert / Youtube</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
