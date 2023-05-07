import { Box, Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AppBox } from '../box';

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
    const Alert = styled.div`
        color: red;
    `;

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
                <Stack spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AppBox>
                            <Alert>
                                <p className="">{errors.title?.message}</p>
                            </Alert>
                            <TextField
                                id="title"
                                label="タイトル"
                                type="text"
                                variant="outlined"
                                fullWidth
                                {...register('title', { required: '※必須項目' })}
                                sx={{ maxWidth: 1000 }}
                            />
                        </AppBox>
                        <AppBox>
                            <TextField
                                id="content"
                                label="コンテンツ"
                                type="text"
                                variant="outlined"
                                {...register('content')}
                                fullWidth
                                multiline
                                rows={4}
                                sx={{ maxWidth: 1000 }}
                            />
                        </AppBox>

                        <AppBox>
                            <Button
                                variant="outlined"
                                type="submit"
                                size="large"
                                endIcon={<SendIcon />}
                            >
                                登録
                            </Button>
                        </AppBox>
                    </form>
                </Stack>
            </Box>
        </>
    );
};
