import React from 'react'
import ReactDOM from 'react-dom'

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>
                <button onClick={() => this.props.xClick()}>x</button>
                <span onClick={() => this.props.toggle()}>{!this.props.completed ?
                    <span> {this.props.task} </span> :
                    <strike> {this.props.task} </strike>}
                </span>
            </li>
        )
    }
}

export default Todo;
