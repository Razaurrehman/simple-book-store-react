import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { couters, onDelete, onIncreament } = this.props;
    return (
      <React.Fragment>
        {couters.map(x => (
          <Counter
            key={x.id}
            onDelete={onDelete}
            onIncreament={onIncreament}
            counter={x}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
