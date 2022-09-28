import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import Home from 'pages/Home';
import Match from 'pages/Match';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="match" element={<Match />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
