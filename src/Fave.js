import React, { Component } from 'react';

class Fave extends Component {

constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
}

handleClick(e) {
    e.stopPropagation()
    console.log("Handling Fave click!")
    this.props.onFaveToggle()
}

render() {

    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
        <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
            <p className="material-icons">{isFave}</p>
        </div>
      )
  }
}

export default Fave
