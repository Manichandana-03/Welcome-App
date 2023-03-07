// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thankyou! Happy Learning</p>
          <button
            className="subscribe-button"
            type="button"
            onClick={this.onSubscribe}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
