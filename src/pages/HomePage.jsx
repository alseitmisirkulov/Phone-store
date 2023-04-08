import React from 'react'
import { About } from '../components/about/About'
import { Header } from '../components/header/Header'
import { MainContent } from './../components/mainContent/MainContent';

export const HomePage = () => {
  return (
    <div>
      <Header/>
      <About/>
      <MainContent/>
    </div>
  ) 
}
