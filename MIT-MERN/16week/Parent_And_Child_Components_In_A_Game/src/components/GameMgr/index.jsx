//https://www.pluralsight.com/guides/how-to-handle-communication-between-parent-and-child-components-in-reactjs

import React, {Component} from 'react';

import Zombie from '../Zombie';

class GameMgr extends Component {

  zombies = [
    {
      name: 'Humbug',
      level: 5,
      maxHP: 20,
      hp: 20,
      moves: {
        move_1: {
          name: 'Kick',
          power: 4
        },
        move_2: {
          name: 'Bite',
          power: 3
        }
      }
    },
    {
      name: 'Geek',
      level: 6,
      maxHP: 22,
      hp: 22,
      moves: {
        move_1: {
          name: 'Tackle',
          power: 5
        },
        move_2: {
          name: 'Scratch',
          power: 2
        }
      }
    },
    {
      name: 'Fiddledeesplat',
      level: 7,
      maxHP: 5,
      hp: 5,
      moves: {
        move_1: {
          name: 'Disembowel',
          power: 18
        },
        move_2: {
          name: 'Spit',
          power: 1
        }
      }
    }
  ];

  turn = 0;
  attack = {}
  gameEnd = {
    winner: null,
    status: false
  };
  players = [0,1];

  getAttack = (id, zombie, move) => {
    const opponent = this.players[(id + 1) % 2];

    this.attack = {
      zombie: zombie,
      move: move.name,
      hp: move.power,
      opponent: opponent
    }

    this.zombies[opponent].hp >= move.power && this.zombies[id].hp > 0 ? this.zombies[opponent].hp -= move.power : this.zombies[opponent].hp = 0;
    if (this.zombies[opponent].hp === 0) {
      this.gameEnd = {
        winner: zombie,
        status: true
      }
    }

    this.turn = (this.turn + 1) % 2;
    this.setState(this.zombies);
  }

  attackMessage = () => {
    if (this.attack.move) {
      return (
        <div>
          <p>{`${this.attack.zombie} used ${this.attack.move} on ${this.zombies[this.attack.opponent].name}!`}</p>
        </div>
      );
    } else {
      return false;
    }
  }

  playerMessage = () => {
    if (this.gameEnd.status) {
      return (
        <h2 style={{color: "red"}}>{`${this.gameEnd.winner} is the winner!`}</h2>
      );
    } else {
      return (
        <h2>{this.zombies[this.players[this.turn]].name}'s turn</h2>
      );
    }
  }

  render() {
    return(
        <div>
          <h1>Zombie Battle!</h1>
          {this.playerMessage()}
          <Zombie id={0} turn={this.turn} {...this.zombies[this.players[0]]} sendAttack={this.getAttack.bind(this)} gameEnd={this.gameEnd}></Zombie>
          <Zombie id={1} turn={this.turn} {...this.zombies[this.players[1]]} sendAttack={this.getAttack.bind(this)} gameEnd={this.gameEnd}></Zombie>
          {this.attackMessage()}
        </div>
    )
  }
}

export default GameMgr;
