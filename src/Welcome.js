import React from 'react';

class Welcome extends React.Component {
  render () {
    const todoList = ['Learn Reatc', 'Learn Redux']
    const isLogin = false
    return (
      <div>
        <h1>Hello World!</h1>
       <ul>
         {
           todoList.map(item => 
            <li>{ item }</li>  
          )
         }
       </ul>
       { isLogin ? <p>已经登录</p> : <p>未登录</p> }
      </div>
    )
  }
}

export default  Welcome;