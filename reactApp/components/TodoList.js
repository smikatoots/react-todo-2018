import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                {this.props.todos.map((todoItem, index) =>
                    <Todo task={todoItem.taskText}
                        completed={todoItem.completed}
                        toggle={() => this.props.todoToggle(index)}
                        xClick={() => this.props.todoXClick(index)}
                    />)}
            </ul>
        )
    }
}

export default TodoList;
