// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHidden: false, isLastNameHidden: false}

  onClickFirstNameButton = () => {
    this.setState(prevState => ({
      isFirstNameHidden: !prevState.isFirstNameHidden,
    }))
  }

  onClickLastNameButton = () => {
    this.setState(prevState => ({
      isLastNameHidden: !prevState.isLastNameHidden,
    }))
  }

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state

    return (
      <div className="show-hide-app-bg">
        <div className="show-hide-app-card">
          <h1 className="heading">Show/Hide</h1>
          <div className="show-hide-app-items-con">
            <div className="show-hide-app-item-con">
              <button
                type="button"
                className="button"
                onClick={this.onClickFirstNameButton}
              >
                Show/Hide Firstname
              </button>
              {isFirstNameHidden && (
                <div className="show-hide-app-output-con">
                  <p className="name">Joe</p>
                </div>
              )}
            </div>
            <div className="show-hide-app-item-con">
              <button
                type="button"
                className="button"
                onClick={this.onClickLastNameButton}
              >
                Show/Hide Lastname
              </button>
              {isLastNameHidden && (
                <div className="show-hide-app-output-con">
                  <p className="name">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
