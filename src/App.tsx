import { useState } from 'react';
import './App.css';
import { FormDate, TasKCreate } from './parts/create';
import { TaskIndex } from './parts/index';

function App() {
    const [todoList, setTodoList] = useState<FormDate[]>([]);
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const handleFormSubmit = (data: FormDate) => {
        setTodoList((prevTodoList) => [...prevTodoList, data]);
    };
    return (
        <>
            <TasKCreate onFormSubmit={handleFormSubmit} />
            {todoList.map((todo, index) => (
                <TaskIndex title={todo.title} content={todo.content} key={index} />
            ))}
        </>
    );
}

export default App;
