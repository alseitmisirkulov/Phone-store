import React from 'react';
import './MainContent.scss';
import { Cases } from './cases/Cases';
import { Headphones } from './headphones/Headphones';
import Airpods from './airpods/Airpods';

export const MainContent = ({ db }) => {
  return (
    <div className="container main-content">
      <Cases db={db} />
      <Headphones db={db} />
      <Airpods db={db} />
    </div>
  );
};
