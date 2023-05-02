import { useForm } from 'react-hook-form';

type FormDate = {
    title: string;
    content: string;
};

export const TasKCreate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDate>();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">タイトル</label>
                <input
                    id="title"
                    type="text"
                    placeholder="title"
                    {...register('title', { required: '※必須項目' })}
                />
                <p>{errors.title?.message}</p>
                <label htmlFor="">コンテンツ</label>
                <input id="title" type="text" placeholder="title" {...register('content')} />
                <button type="submit">送信</button>
            </form>
        </>
    );
};
