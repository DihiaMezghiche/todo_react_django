import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () =>{
            try {
                const response = await axios.get('/api/todos/');
                setTodos(response.data);
            } catch(error){
                console.error('Error fetching todos: ', error)
            }
        };

        fetchTodos();
    }, []);

    return (
        <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
    );

}
export default TodoList;