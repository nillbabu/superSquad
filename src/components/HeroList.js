import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCharacterById } from '../actions/index'

class HeroList extends Component {
  render() {
    return (
      <div>
        <h2>Your Hero Squad</h2>
        <ul className='list-group'>
            {this.props.heroes.map(hero => {
                return (
                    <li key={hero.id} className='list-group-item'>
                        <div className='list-item'>{hero.name}</div>
                        <div className='list-item right-btn' onClick={() => this.props.removeCharacterById(hero.id)}>-</div>
                    </li>
                )
            })}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
    return{
        heroes: state.heroes,
        characters: state.characters
    }
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList)