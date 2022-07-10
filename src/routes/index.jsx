import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {FeaturedGif} from '../component/home';
import {SearchResults} from '../component/searchResults';

export const Routing =() => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<FeaturedGif/>}/>
      <Route exact path='/search/:val' element={<SearchResults/>}/>
      </Routes>
    </BrowserRouter>
  );
}
