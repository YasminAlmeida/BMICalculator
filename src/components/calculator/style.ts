import styled from "styled-components";


export const ContainerCalculator = styled.section`
 display: grid;
  grid-template-columns: 1fr 1fr;
`
export const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 40px;
  align-content: center;
`
export const RightContainer = styled.div`
  margin-left: 20px;
  display: grid;
  grid-template-columns: 1fr;
`
export const BigImage = styled.div`
  margin-left: 20px;
  display: grid;
  grid-template-columns: 1fr;
  div{
    display: flex;
  }
`
export const ContainerImagens = styled.div`  
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  div{
    display: flex;
    flex-direction: column;
  }
`
export const Information = styled.p`
font-size: 16px;
color: #6A7D8B;
margin-bottom: 40px;
`
export const Title = styled.h1`
font-size: 40px;
color: #3A4B5C;
margin: 0px;
margin-bottom: 40px;
`
export const Input = styled.input`
width: 100%;
border: 0;
border-bottom: 2px solid rgba(150, 163, 171, .5);
padding: 10px 20px;
margin-bottom: 20px;
font-size: 14px;
outline: 0;
`
export const Btn = styled.button`
background-color: #227C9D;
color: #FFF;
font-size: 15px;
border: 0;
border-radius: 10px;
padding: 15px 0;
width: 100%;
cursor: pointer;
margin-top: 40px;
transition:  all ease .7s;
&:hover{
  opacity: .7;

}
`