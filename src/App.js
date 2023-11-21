import TodoList from "./Components/TodoList";

function App() {
    const todoArray = [
        {
            id: 1,
            title: "Todo 1",
            completed: true,
        },
        {
            id: 2,
            title: "Todo 2",
            completed: false,
        },
    ];

    return (
        <div className={"container"}>
            {/* Передаем todoArray в TodoList через пропс */}
            <TodoList todos={todoArray} />
        </div>
    );
}

export default App;
