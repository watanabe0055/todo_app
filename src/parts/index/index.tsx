import React from 'react';
import { FormDate } from '../create';

export const TaskIndex = (data: FormDate) => {
    const { title, content } = data;
    return (
        <>
            <p>{title}</p>
            <p>{content}</p>
        </>
    );
};
