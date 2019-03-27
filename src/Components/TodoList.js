import React, { Component } from 'react';
import Item from './Item';


class TodoList extends Component {
    render() {

        return (
            <div className="todo-list">
                <ul>
                    { this.props.items.map( item => <Item key={item.id} toggleCheck={ this.props.toggleCheck } deleteItem={ this.props.deleteItem } item={item} /> ) }
                </ul>
            </div>
        );
    }
}

export default TodoList;