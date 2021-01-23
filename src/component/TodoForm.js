import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        text:''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
          text: '',
        });
    };

    render() {
        const { text } = this.state;
        return(
            <div className='forms content'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={text} 
                        name="text" 
                        placeholder="추가하기" 
                        onChange={this.handleChange} 
                    />

                    <button type="submit">추가</button>
                </form>
            </div>
        )
    }

}

export default TodoForm;