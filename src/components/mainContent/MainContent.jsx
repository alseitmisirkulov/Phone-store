import React from 'react';
import './MainContent.scss';
import { Cases } from './cases/Cases';
import { Headphones } from './headphones/Headphones';
import Airpods from './airpods/Airpods';

export const MainContent = ({ db, favorite, setFavorite }) => {
  return (
    <div className="container main-content">
      <Cases db={db} />
      <Headphones db={db} favorite={favorite} setFavorite={setFavorite}/>
      <Airpods db={db} />
    </div>
  );
};
