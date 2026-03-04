/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    isGameOver: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return [...emojisList].sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {clickedEmojis, score, topScore} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      this.setState({
        isGameOver: true,
        topScore: Math.max(score, topScore),
      })
    } else {
      const newScore = score + 1

      if (newScore === emojisList.length) {
        this.setState({
          score: newScore,
          topScore: Math.max(newScore, topScore),
          isGameOver: true,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          clickedEmojis: [...prevState.clickedEmojis, id],
        }))
      }
    }
  }

  playAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      isGameOver: false,
    })
  }

  renderGameView = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="emoji-container">
        {shuffledList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    const {emojisList} = this.props

    return (
      <div className="emoji-game-container">
        <NavBar score={score} topScore={topScore} />
        {isGameOver ? (
          <WinOrLoseCard
            score={score}
            totalEmojis={emojisList.length}
            playAgain={this.playAgain}
          />
        ) : (
          this.renderGameView()
        )}
      </div>
    )
  }
}

export default EmojiGame
