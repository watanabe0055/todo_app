import { useState } from 'react';
import './App.css';
import { FormDate, TasKCreate } from './parts/create';
import { TaskIndex } from './parts/index';
import { Alert, AlertTitle } from '@mui/material';

function App() {
    const [todoList, setTodoList] = useState<FormDate[]>([]);
    const handleFormSubmit = (data: FormDate) => {
        setTodoList((prevTodoList) => [...prevTodoList, data]);
    };

    return (
        <>
            <TasKCreate onFormSubmit={handleFormSubmit} />
            {todoList.length ? (
                todoList.map((todo, index) => (
                    <TaskIndex title={todo.title} content={todo.content} key={index} />
                ))
            ) : (
                <Alert severity="info">
                    <AlertTitle>未登録</AlertTitle>
                    <strong>TODOタスク</strong>が登録されていません
                </Alert>
            )}
        </>
    );
}

export default App;
