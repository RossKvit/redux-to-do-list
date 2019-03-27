import React, { Component } from 'react';


class Item extends Component {

    render() {
        let item = this.props.item;

        return (
           <li>
               <input type="checkbox" onChange={ () => this.props.toggleCheck(item.id) } id={item.id} checked={ item.isChecked } />
               <label htmlFor={item.id} >{item.text}</label>
               <button onClick={ () => {} }>Edit</button>
               <button onClick={ () => { this.props.deleteItem(item.id)} }>Remove</button>
           </li>
        );
    }
}

export default Item;