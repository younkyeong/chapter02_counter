import styled from '@emotion/styled';
import { FC } from 'react';

const Container = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
    readonly lable: string;
    readonly onClick: () => void;
}

// FC 사용한 함수식
// const Button: FC<Props> = ({ onClick, lable }) => {
//   return <Container onClick={onClick}> {lable} </Container>
// }

// FC 사용안한 함수식
const Button = (props: Props) => {
  return <Container onClick={props.onClick}> {props.lable} </Container>
}

export default Button;