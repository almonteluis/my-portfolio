import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import logoTitle from '../../assets/images/logo-s.png'
import AnimatedLetter from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['L', 'u', 'i', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className="{letterClass}">H</span>
          <span className="{`${letterClass} _12`}">i,</span>
          <br />
          <span className="{`${letterClass} _13`}">I</span>
          <span className="{`${letterClass} _14`}">m</span>
          <AnimatedLetter
            letterClass={letterClass}
            steArray={nameArray}
            idx={15}
          />
          <br />
        </h1>
        <h2>Frontend Devloper / Javascript Expert / Youtube</h2>
        <h2>
          <AnimatedLetter
            letterClass={letterClass}
            steArray={jobArray}
            idx={15}
          />
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
