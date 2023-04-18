import React from 'react'
import { About } from '../components/about/About'
import { MainContent } from './../components/mainContent/MainContent';

export const HomePage = ({db}) => {
  return (
    <div>
      <About/>
      <MainContent db={db}/>
    </div>
  ) 
}
