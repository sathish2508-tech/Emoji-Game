// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, totalEmojis, playAgain} = props
  const isWon = score === totalEmojis

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = isWon ? 'You Won' : 'You Lose'

  return (
    <div className="win-lose-card">
      <div className="text-container">
        <h1 className="result">{resultText}</h1>
        <p className="label">Score</p>
        <p className="final-score">
          {score}/{totalEmojis}
        </p>
        <button type="button" className="play-button" onClick={playAgain}>
          Play Again
        </button>
      </div>

      <img src={imageUrl} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
