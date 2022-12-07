import React from 'react'
import FirstGoal from './FirstGoal';
import Header from './Header';
import SecondGoal from './SecondGoal';
import ThirdGoal from './ThirdGoal';


export default function GoalList() {
  return (
    <div className='goals'>


      <FirstGoal></FirstGoal>

      <SecondGoal></SecondGoal>

      <ThirdGoal></ThirdGoal>
      
    </div>
  )
}
