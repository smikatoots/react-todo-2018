import React from 'react';
import ReactDOM from 'react-dom'

var dummyData = ['clean', 'cook', 'wash'];

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li><button>x</button>{this.props.task}</li>
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
                {dummyData.map((todoItem) => <Todo task={todoItem}/>)}
            </ul>
        )
    }
}

ReactDOM.render(<p><TodoList/></p>,
   document.getElementById('root'));
