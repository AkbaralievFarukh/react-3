// Ваш код в компоненте TodoList
import React, { useState } from "react";
import TodoItem from "../TodoItem/index";

const TodoList = ({ todos }) => {
    // Создаем состояние для хранения списка todo
    const [todoList, setTodoList] = useState(todos);

    // Функция для удаления todo по id
    const handleDeleteTodo = (id) => {
        // Фильтруем todoList, оставляя только те, у которых id не равен переданному id
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        // Обновляем состояние todoList
        setTodoList(updatedTodoList);
    };

    return (
        <div className={"d-flex flex-column justify-content-center align-items-center gap-5 mt-5"}>
            {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;
