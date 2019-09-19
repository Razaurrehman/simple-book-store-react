import React, { Component } from "react";

class Book extends Component {
  render() {
    const { author, description, title } = this.props.book;
    return (
      <React.Fragment>
        <div className="book-border-a">
          <div>
            <span>Title: {title}</span>
          </div>
          <div>
            <span>Author: {author}</span>
          </div>
          <div>
            <span>Description: {description}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
