import React, { Component } from 'react';

class Form extends Component {

    render() {
        let isEditMode = this.props.isEditMode,
            title = isEditMode? 'Editing task':'Enter task description',
            butTitle = isEditMode? 'Edit':'Add';

        return (
            <div>
                <form className="todo-form">
                    <p>{title}</p>
                    <textarea>{ this.props.text }</textarea>
                    <button onClick={this.props.save} className="save">{butTitle}</button>
                </form>
            </div>
        );
    }
}


export default Form;

