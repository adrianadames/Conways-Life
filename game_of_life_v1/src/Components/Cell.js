import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            life_status: 0,
            neighbor_count:0,
        }
    }

    // toggle_state()

  render() {
    return (
      <div>
        CELL
      </div>
    );
  }
}

const Cell = props => {
    return (
        <div>
            {this.state.life_status}
        </div>
    )
}

export default Cell;