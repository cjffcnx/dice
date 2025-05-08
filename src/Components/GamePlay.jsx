import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const[currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);


  const generateRandomNumber=(min, max)=> {

    return Math.floor(Math.random() * (max - min) + min); 
  };

  const rollDice=()=>{
    if(!selectedNumber) {
setError("You have not selected any number");
      return;
    };
    
   const randomNumber= generateRandomNumber(1,7);
   setCurrentDice(prev=>randomNumber);

  

   if(selectedNumber==randomNumber){
    setScore(prev=>prev+randomNumber);
   }
   else{
    setScore(prev =>prev-2);
   }

   setSelectedNumber(undefined);
  };

  const resetScore=()=>{
    setScore(0);
  }

  

  return (
    <MainContainer>
  <main>
   
  <div className="top_section">
  <TotalScore
  
  score={score}/>
  <NumberSelector
  selectedNumber={selectedNumber}
  setSelectedNumber={setSelectedNumber}
  error={error}
  setError={setError}
  />
  </div>

  </main>
  <RollDice
  currentDice={currentDice}
 rollDice={rollDice}
  />

  <div className='btns'>
<OutlineButton
onClick={resetScore}
>Reset</OutlineButton>
<Button
onClick={()=>setShowRules(prev=>!prev) } 
>{

showRules? "Hide":"Show"
} Rules</Button>
{showRules && <Rules/>}
  </div>
  </MainContainer>
  
  )
}

export default GamePlay

const MainContainer=styled.div`

padding-top:70px;
.top_section{
display:flex;
justify-content:space-around;
align-items:end;
}

.btns{
display:flex;
margin-top:40px;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20px;


}

`