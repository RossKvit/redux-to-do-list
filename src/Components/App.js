import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import {createItem} from '../AC';
import {deleteItem} from '../AC';
import {toggleCheckItem} from '../AC';
import {connect} from 'react-redux';


class App extends Component {

    render() {
      const { items, createItem, deleteItem, toggleCheckItem} = this.props;

      return (
        <div className="to-do-app">
          <TodoList items={items} toggleCheck={toggleCheckItem} deleteItem={ deleteItem } />
          <Form save={createItem} />
        </div>
      );
    }
}

export default connect( ({toDoList}) => ({"items": toDoList.items}) , {createItem, deleteItem, toggleCheckItem} )(App);
