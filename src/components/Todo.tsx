import React from 'react';
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';

interface TodoProps {
  todo: TodoType;
}

function Todo({ todo }: TodoProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black', padding: '10px', margin: '10px' }}>
      <div>{todo.content}</div>
      <div className='icons' style={{ padding: '10px', display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <IoMdRemoveCircleOutline />
        <FaRegEdit />
      </div>
    </div>
  )
}

export default Todo;
