import React from 'react'
import styled from "styled-components"
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer=styled.div`


h1{
font-size:80px;
line-height:70px;
max-width:200px;
margin:0 50px;
}
p{
font-size:24px;
font-weight:500px;
margin:0 20px;
}



`