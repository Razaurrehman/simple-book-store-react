import React, { Component } from "react";
import Navbar from "./components/navbar";
import axios from "axios";
import Books from "./components/books";
import "./App.css";

class App extends Component {
  state = {
    couters: [
      { id: 0, value: 1 },
      { id: 1, value: 4 },
      { id: 2, value: 51 },
      { id: 3, value: 12 }
    ]
  };

  componentDidMount() {
    this.getAllBooksDetail();
  }

  async getAllBooksDetail() {
    const response = await axios.get("http://localhost:3000/books");
    this.setState({ books: response.data });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.couters.filter(f => f.value > 0).length}
        />
        <Books books={this.state.books ? this.state.books : null} />
      </React.Fragment>
    );
  }
}

export default App;
