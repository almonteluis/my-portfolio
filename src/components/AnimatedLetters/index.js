import './index.scss'

const AnimatedLetters = ({ letterClass, steArray, idx }) => {
  return (
    <span>
      {steArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
