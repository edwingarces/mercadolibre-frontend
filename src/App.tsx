import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Layout from './Screens/Layout';
import './assets/scss/flex.scss';
import Items from './Components/Items';
import ItemDescription from './Components/ItemDescription';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<ItemDescription />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
