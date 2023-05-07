import styled from 'styled-components';

const Box = styled.div`
    margin: 8px 6px;
`;

export const AppBox = (props: any) => {
    return <Box>{props.children}</Box>;
};
