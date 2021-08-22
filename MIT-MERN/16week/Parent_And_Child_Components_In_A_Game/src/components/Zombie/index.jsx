//https://www.pluralsight.com/guides/how-to-handle-communication-between-parent-and-child-components-in-reactjs

import React, {Component} from 'react';

class Zombie extends Component {

  render () {
    return (
      <div>
        <h3>Zombie: {this.props.name}</h3>    
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          <li><span>Level: {this.props.level}</span></li>
          <li><span>HP: {this.props.maxHP}/{this.props.hp}</span></li>
        </ul>

        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          <li>
            <button onClick={!this.props.gameEnd.status && this.props.turn === this.props.id ? () => this.props.sendAttack(this.props.id, this.props.name, this.props.moves.move_1) : null}>
              {this.props.moves.move_1.name}
            </button>
          </li>

          <li>
            <button onClick={!this.props.gameEnd.status && this.props.turn === this.props.id ? () => this.props.sendAttack(this.props.id, this.props.name, this.props.moves.move_2) : null}>
              {this.props.moves.move_2.name}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Zombie;