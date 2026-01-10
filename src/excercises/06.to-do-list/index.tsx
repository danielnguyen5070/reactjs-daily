import { useState, useEffect } from "react"

type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const todos = localStorage.getItem("todos")
        return todos ? JSON.parse(todos) : []
    })

    const [text, setText] = useState<string>("")
    const [error, setError] = useState<string>("")

    useEffect(() => {
        if (todos) localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function handleAdd() {
        if (!text.trim()) {
            setError("please enter new todo")
            return
        }

        if (todos.some((item) => item.text === text)) {
            setError("Todo already exists")
            return
        }

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        }
        setText("")
        setTodos([...todos, newTodo])
    }

    function handleDelete(id: number) {
        setTodos(todos.filter((item) => item.id !== id))
    }

    function handleToggle(id: number) {
        setTodos(todos.map((item) => (item.id === id) ? { ...item, completed: !item.completed } : item))
    }

    return (
        <>
            <div>
                <div>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                    <button onClick={handleAdd}>Add</button>
                </div>
                {error && <p>{error}</p>}
            </div>
            <ul>
                {
                    todos && todos.map((item) => {
                        return (
                            <li key={item.id}>
                                <button className={`${item.completed ? "underline" : ""}`} onClick={() => handleToggle(item.id)}>{item.text}</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default TodoList