import React, { Component } from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem,
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <div>
          My To Do List...
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button className="add-btn" onClick={() => this.addItem()}>Add</button>
          <br />
          <>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="btn btn-floating"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </>
        </div>
      </div>
    );
  }
}

export default App;
