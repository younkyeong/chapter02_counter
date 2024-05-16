import styled from '@emotion/styled';
import { FC } from 'react';

const Container = styled.span`
margin: 0 16px;
font-size: 1.2rem;
`;

interface Props {
    readonly data: number;
}
// FC 사용한 함수식
// const Lable: FC<Props> = ({data}) => {
//     return <Container>{data}</Container>
// }

// FC 사용안한 함수식
const Lable = ({data}: Props) => {
    return <Container>{data}</Container>
}

export default Lable;
