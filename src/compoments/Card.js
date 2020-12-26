import React from 'react';

class Card extends React.Component {
  render () {
    const { name, number, isHuman, tags} = this.props
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>电话：{number}</li>
          <li>{ isHuman ? '人类' : '外星人'}</li>
        </ul>
        <p>
         { tags.map((tag, index) => (
           <span style={{marginRight: '10px'}} key={index}>{tag}</span> 
         ))}
        </p>
      </div>
    )
  }
}

export default Card;