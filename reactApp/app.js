import React from 'react';
import ReactDOM from 'react-dom'

var dummyData = [
    { taskText: 'clean', completed: false },
    { taskText: 'wash', completed: true },
    { taskText: 'dry', completed: false },
];

class InputLine extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="task"></input>
                <button>Add todo</button>
            </div>
        )
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <InputLine />
                <TodoList />
            </div>

        )
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>
                <button>x</button>
                <span>{!this.props.completed ?
                    <span> {this.props.task} </span> :
                    <strike> {this.props.task} </strike>}
                </span>
            </li>
        )
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                {dummyData.map((todoItem) => <Todo task={todoItem.taskText} completed={todoItem.completed}/>)}
            </ul>
        )
    }
}

ReactDOM.render(<p><TodoApp/></p>,
   document.getElementById('root'));
