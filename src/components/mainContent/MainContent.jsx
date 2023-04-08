import React from 'react';
import './MainContent.scss';
import { Cases } from './cases/Cases';
import { Headphones } from './headphones/Headphones';
import Airpods from './airpods/Airpods';

export const MainContent = () => {
  return (
    <div className="container main-content">
      <Cases />
      <Headphones />
      <Airpods />
      
    </div>
  );
};
