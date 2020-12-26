import React from  'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: new Date()
    }
  }
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        data: new Date()
      })
    }, 1000)
  }
  componentDidUpdate (currentProps, state) {
    // console.log(state)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render () {
    return (
      <div>
        <h1>{this.state.data.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock