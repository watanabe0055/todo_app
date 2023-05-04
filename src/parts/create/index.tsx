import { Box, Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export type FormDate = {
    title: string;
    content: string;
};

type TasKCreateProps = {
    onFormSubmit: (formData: FormDate) => void;
};

export const TasKCreate = ({ onFormSubmit }: TasKCreateProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormDate>();

    const onSubmit = (data: FormDate) => {
        onFormSubmit(data);
        reset();
    };

    return (
        <>
            <Box
                sx={{
                    padding: 2,
                    backgroundColor: '#C0DBEA',
                    borderRadius: 3,
                    '&:hover': {
                        backgroundColor: '#C0DBEA',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="title"
                            label="タイトル"
                            type="text"
                            variant="outlined"
                            {...register('title', { required: '※必須項目' })}
                            sx={{ width: 500 }}
                        />
                        <p>{errors.title?.message}</p>
                        <TextField
                            id="content"
                            label="コンテンツ"
                            type="text"
                            variant="outlined"
                            {...register('content')}
                            sx={{ width: 500 }}
                        />
                        <p>{errors.content?.message}</p>
                        <Button variant="outlined" type="submit">
                            送信
                        </Button>
                    </form>
                </Stack>
            </Box>
        </>
    );
};
