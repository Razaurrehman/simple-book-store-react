import React, { Component } from "react";
import Book from "./book";

class Books extends Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        {books ? books.map(x => <Book key={x.id} book={x}></Book>) : null}
      </div>
    );
  }
}

export default Books;
