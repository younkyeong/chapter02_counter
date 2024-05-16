import logo from "./logo.svg";
import "./App.css";
import styled from '@emotion/styled';
import { useState } from 'react';
import { setCommentRange } from "typescript";
import { Button } from 'components/Button'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
algin-items: center;
justify-content: center;
`;

const Title = styled.h1`
margin-bottom: 32px;
align-items: center;
`;

const Contents = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Lable = styled.span`
margin: 0 16px;
font-size: 1.2rem;
`;



function App() {
  //[데이터 초기값이 들어간 변수, 데이터를 수정할수있는 set함수] = useState(초기값)
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter -1);
  }
  
  const add = () => {
    setCounter(counter +1);
  }
  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button lable="-" onClick={ sub }/>
        <Lable>{counter}</Lable>
        <Button lable="+" onClick={ add }/>
      </Contents>
    </Container>
  );
}

export default App;
