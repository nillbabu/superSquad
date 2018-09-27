import React, { Component } from 'react'
import CharacterList from './charecterList'
import HeroList from './HeroList'
import '../css/style.css'
import SquadStats from '../components/SquadStats'

class App extends Component {
  render() {
    return (
      <div className='App'>
          <h2 className='display-3'>SuperSquad</h2>
          <div className='fdesign'>
            <div className='row'>
              <div className='col-md-4'>
                <CharacterList />
              </div>
              <div className='col-md-4'>
                <SquadStats />
              </div>
              <div className='col-md-4'>
                <HeroList />
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default App