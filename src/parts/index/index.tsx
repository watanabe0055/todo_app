import { Button, ButtonGroup, Grid } from '@mui/material';
import { FormDate } from '../create';
import styled from 'styled-components';

const TextContentBodyBox = styled.div`
    white-space: pre-wrap;
`;

const TextContentHead = styled.div`
    margin: 8px 0px 4px;
    font-size: 18px;
    letter-spacing: 3px;
`;

const TextContentBody = styled.div`
    margin-left: 8px;
    letter-spacing: 1.5px;
`;

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
                    <TextContentBodyBox>
                        <TextContentHead>タイトル</TextContentHead>
                        <TextContentBody>{title}</TextContentBody>
                    </TextContentBodyBox>
                    <TextContentBodyBox>
                        <TextContentHead>コンテンツ</TextContentHead>
                        <TextContentBody>{content}</TextContentBody>
                    </TextContentBodyBox>
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
