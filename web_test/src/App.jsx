import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 引入元件
// 從這裡: import Navbar from './src/components/Navbar.jsx';
// 改為這樣 (使用大括號):
import { Navbar } from './src/components/Navbar.jsx';
import Home from './pages/Home';
import ICIntro from './pages/ICIntro';
import Salary from './pages/Salary';
import Interviews from './pages/Interviews';

// 引入 CSS
import './App.css';

function App() {
  return (
    <>
      <Navbar /> {/* 導覽列 */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<ICIntro />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/interviews" element={<Interviews />} />
      </Routes>
    </>
  );
}

export default App;