import React, { useState } from 'react';
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from '../redux/todoSlice';
import type { TodoType } from '../types/Types';

interface TodoProps {
  todo: TodoType;
}

function Todo({ todo }: TodoProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);

  const handleDelete = () => {
    if (window.confirm('Bu todo\'yu silmek istediğinizden emin misiniz?')) {
      dispatch(deleteTodo(todo.id));
    }
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditContent(todo.content);
  };

  const handleSaveEdit = () => {
    if (editContent.trim().length === 0) {
      alert('Todo içeriği boş olamaz!');
      return;
    }
    dispatch(updateTodo({ id: todo.id, content: editContent.trim() }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContent(todo.content);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            onKeyDown={handleKeyPress}
            className="todo-edit-input"
            autoFocus
          />
          <div className="todo-edit-buttons">
            <button onClick={handleSaveEdit} className="edit-save-btn">
              Kaydet
            </button>
            <button onClick={handleCancelEdit} className="edit-cancel-btn">
              İptal
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-content" onClick={handleToggle}>
            {todo.content}
          </div>
          <div className="todo-actions">
            <FaCheck
              className={`icons complete-icon ${todo.completed ? 'completed' : ''}`}
              onClick={handleToggle}
              title={todo.completed ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
            />
            <FaRegEdit
              className="icons edit-icon"
              onClick={handleEdit}
              title="Düzenle"
            />
            <IoMdRemoveCircleOutline
              className="icons delete-icon"
              onClick={handleDelete}
              title="Sil"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
