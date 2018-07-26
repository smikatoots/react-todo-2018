import React from 'react'
import ReactDOM from 'react-dom'
import InputLine from './InputLine';
import TodoList from './TodoList';


var dummyData = [
    { taskText: 'clean', completed: false },
    { taskText: 'wash', completed: true },
    { taskText: 'dry', completed: false },
];

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.setState({todos: dummyData})
    }

    addTodo(todoItem) {
        console.log("adds a todo");
        dummyData.push({
            taskText: todoItem,
            completed: false
        })
        this.setState({todos: dummyData})
    }

    removeTodo(index) {
        dummyData.splice(index, 1)
        this.setState({todos: dummyData})
    }

    toggleTodo(index) {
        dummyData[index].completed = !dummyData[index].completed;
        this.setState({todos: dummyData})
    }

    render() {
        return (
            <div>
                <InputLine submit={(todoItem) => this.addTodo(todoItem)}/>
                <TodoList todos={this.state.todos}
                todoXClick={(index) => this.removeTodo(index)}
                todoToggle={(index) => this.toggleTodo(index)}/>
            </div>

        )
    }
}

export default TodoApp;
