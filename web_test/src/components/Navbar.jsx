// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
        Future IC Designer
      </div>
      <div>
        <Link to="/">首頁</Link>
        <Link to="/intro">IC 設計介紹</Link>
        <Link to="/salary">薪資行情</Link>
        <Link to="/interviews">訪談影片</Link>
      </div>
    </nav>
  );
}

// ▼▼▼ 錯誤就是因為少了這一行 ▼▼▼
export default Navbar;