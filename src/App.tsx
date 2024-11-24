import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Organisms/Layout/Layout';
import Series from './Components/Pages/Series/Series';
import Movies from './Components/Pages/Movies/Movies';
import MyPage from './Components/Pages/Mypage/Mypage';

import './App.module.sass';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to WillAn's world</h1>
                <p>Explore Series, Movies, and more!</p>
              </div>
            }
          />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
