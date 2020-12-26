import React from 'react';

class LikeButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: 0
    }
  }
  increaseLikes() {
    this.setState({
      likes: this.state.likes++
    })
  }
  render () {
    return (
      <div>
          <button onClick={() => {this.increaseLikes()}}>👍{this.state.likes}</button>
      </div>
    )
  }
}

export default LikeButton