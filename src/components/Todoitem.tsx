'use client'

import React, {useState} from 'react';
import './todoitem.scss'

type Props = {
    id:string;
    title:string;
    complete:boolean;
    toggleTodo: (id:string, complete:boolean) => void;
}

const Todoitem:React.FC<Props> = ({id,title,complete,toggleTodo}) => {
    const [itemComplete, setItemComplete] = useState(complete);
    return (
        <li className='todo-item'>
            <input id={id} type={'checkbox'} className={`todo-item-checkbox`} checked={itemComplete} onChange={(e)=> {
                setItemComplete(prev => !prev);
                toggleTodo(id,e.target.checked)
            }}/>
            <label htmlFor={id} className={`${itemComplete && 'todo-checked'} todo-item-label`}>{title}</label>
        </li>
    );
};

export default Todoitem;
