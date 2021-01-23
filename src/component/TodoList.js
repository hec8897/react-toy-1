import React, { Component } from 'react';
import TodoInfo from './TodoInfo'

class ToDoList extends Component {
    state = {
        style: {
          border: '1px solid black',
          padding: '25px',
          margin: '15px',
          listStyleType:'none'
        },
    };

    render(){
        const { data, onUpdate, onRemove } = this.props;
        const { style } = this.state

        return(
            <div>
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