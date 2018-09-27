import React, { Component } from 'react'
import { connect } from 'react-redux'

class SquadStats extends Component {
    strength(){
        let strength = 0
        this.props.heroes.forEach(hero => strength += hero.strength );
        return strength
    }
    intelligence(){
        let intelligence = 0
        this.props.heroes.forEach(hero => intelligence += hero.intelligence)
        return intelligence
    }
    speed(){
        let speed = 0
        this.props.heroes.forEach(hero => speed += hero.speed)
        return speed
    }

  render() {
    return (
      <div>
        <h2>Squad States</h2>
        <ul className="list-group mb-5">
            <li className="list-group-item  list-group-item-success"><b>Overall Strength: </b>{this.strength()}</li>
            <li className="list-group-item  list-group-item-info"><b>Overall Intelligence: </b>{this.intelligence()}</li>
            <li className="list-group-item  list-group-item-warning"><b>Overall Speed: </b>{this.speed()}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, null)(SquadStats)