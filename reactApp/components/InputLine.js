import React from 'react'
import ReactDOM from 'react-dom'

class InputLine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            typedText: ""
        }
    }

    handleTyping(event) {
        this.setState({
            typedText: event.target.value
        })
    }

    handleSubmit() {
        this.props.submit(this.state.typedText)
        this.setState({
            typedText: ""
        })
    }

    render() {
        return (
            <div>
                <input onChange={(event) => this.handleTyping(event)}
                    type="text"
                    placeholder="task"
                    value={this.state.typedText}></input>
                <button onClick={() => this.handleSubmit()}>Add todo</button>
            </div>
        )
    }
}

export default InputLine;
