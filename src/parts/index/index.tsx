import { Button, ButtonGroup, Grid } from '@mui/material';
import { FormDate } from '../create';

export const TaskIndex = (data: FormDate) => {
    const { title, content } = data;
    return (
        <>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ marginTop: 1, padding: 3, backgroundColor: '#FCC8D1', borderRadius: 2 }}
            >
                <Grid item xs={10}>
                    <h3>タイトル:{title}</h3>
                    <h3>コンテンツ:{content}</h3>
                </Grid>
                <Grid item xs={2}>
                    <ButtonGroup
                        variant="text"
                        size="large"
                        color="secondary"
                        aria-label="text button group"
                    >
                        <Button>完了</Button>
                        <Button>削除</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </>
    );
};
