// Ваш код в компоненте TodoItem
import React from "react";

const TodoItem = (props) => {
    const { id, title, completed } = props.todo;

    // Функция вызывается при клике на кнопку "Delete"
    const handleDeleteClick = () => {
        // Вызываем функцию onDelete из пропсов и передаем ей id для удаления todo
        props.onDelete(id);
    };

    return (
        <div className={"d-flex align-items-center gap-3"}>
            <input type="checkbox" className={"form-check-input"} defaultChecked={completed} />
            <h3 className={"mb-0"}>{title}</h3>
            <button className={"btn btn-primary"}>Edit</button>
            {/* Вызываем функцию handleDeleteClick при клике на кнопку "Delete" */}
            <button className={"btn btn-primary"} onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
