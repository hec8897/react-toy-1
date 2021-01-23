import React, { Component } from 'react';
import TodoInfo from './TodoInfo'

class ToDoList extends Component {
    state = {
        style: {
          border: '1px solid #d0d0d0',
          padding: '25px',
          listStyleType:'none',
          margin: '15px 0px'
        },
    };

    render(){
        const { data, onUpdate, onRemove } = this.props;
        const { style } = this.state

        return(
            <div 
                className='lists content'
            >
                <ul>
                    {data.map((data, index) => (
                        <li style={style} key={index}>
                            <TodoInfo 
                                data={data} 
                                onUpdate={onUpdate} 
                                onRemove={onRemove} 
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDoList;