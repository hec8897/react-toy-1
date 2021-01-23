import React, { Component } from 'react';

class TodoInfo extends Component {

    state = {
        toggle: false,
        text  : '',
        style : {
          margin: '5px',
        },
    };

    handleChange = ( e ) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };

    handleToggleChange = () => {
        const { toggle, text } = this.state;
        const { data, onUpdate } = this.props;

        if (!toggle) {

          this.setState({
            text  : data.text,
            toggle: true,
          });

        } else {

          onUpdate(data.id, { text: text });
          this.setState({
            toggle: false,
          });

        }
    };
    
    handleRemove = () => {
        const { data,onRemove } = this.props;
        onRemove(data.id);
    };

    render() {
        const { data } = this.props;
        const { style,toggle,text } = this.state;
        return(
            <div className='item'>
                {toggle?(
                    <input  
                        className="list-input"
                        onChange={this.handleChange}
                        type="text"
                        value={text}
                        name="text"
                    />
                ):(
                    <span style={style}>{data.text}</span>
                )}
                <div>
                  <button onClick={this.handleToggleChange}>{toggle ? '적용' : '수정'}</button>
                  <button className='red' onClick={this.handleRemove}>삭제</button>
                </div>

            </div>
            
        )
    }
}

export default TodoInfo