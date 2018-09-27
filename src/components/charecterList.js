import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions/index'

class CharecterList extends Component {
  render() {
    return (
      <div>
        <h2>Characters</h2>
        <ul className='list-group'>
            {
                this.props.characters.map(character => {
                    return (
                        <li key={character.id} className='list-group-item'>
                            <div className='list-item'>{character.name}</div>
                            <div className='list-item right-btn' onClick={() => this.props.addCharacterById(character.id)}>+</div>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
    // console.log(state)
    return {
        characters: state.characters
    }
}

// function mapDispathchToProps(dispatch){
//     return bindActionCreators({ addCharacterById }, dispatch)
// }

export default connect(mapStateToProps, { addCharacterById })(CharecterList)