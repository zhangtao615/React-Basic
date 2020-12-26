import React from 'react';

class Form extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault();
    console.log(this.inputText.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>内容</label>
          <input
            type="text" 
            placeholder="请输入内容"
            ref={(inputText) => {this.inputText = inputText}}/>
        </div>
        <button>提交</button>
      </form>
    )
  }
}
export default Form