import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
