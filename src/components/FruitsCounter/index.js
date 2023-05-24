// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1} = this.state
    const {key2} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1>
            Bob ate <span className="count">{key1}</span> mangoes{' '}
            <span className="count">{key2} </span>bananas
          </h1>
          <div className="btn-container">
            <div>
              <img
                className="mimg"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="Mango"
              />
              <div>
                <button className="btn" onClick={this.onMangoIncrement}>
                  Eat Mango
                </button>
              </div>
            </div>

            <div>
              <img
                className="mimg"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png  "
                alt="Banana"
              />
              <div>
                <button className="btn" onClick={this.onBananaIncrement}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
