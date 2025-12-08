import React from 'react';

function Home() {
  return (
    <div className="container">
      
      {/* 1. 個人簡介卡片 (Hero Section) */}
      <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--accent-cyan)', padding: '1rem', overflow: 'hidden' }}>
        
        {/* 圖片區塊 (使用網路圖確保顯示正常) */}
        <div style={{ 
          margin: '1rem 0 2rem 0', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          border: '1px solid rgba(56, 189, 248, 0.2)', 
          boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)' 
        }}>
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1740&auto=format&fit=crop" 
            alt="Future IC Designer" 
            style={{ 
              width: '100%',      
              height: '300px',
              display: 'block',   
              objectFit: 'cover'  
            }} 
          />
        </div>

        {/* 簡短介紹 */}
        <div style={{ textAlign: 'left' }}>
          <h2>個人簡介</h2>
          <p>
            我是台北大學電機工程學系的學生。 
            我對半導體產業充滿熱情，想往這個領域發展~~
            這個網頁是大一上對於未來各種幻想的小記錄。
          </p>
        </div>

        {/* 🔥 新增：職涯動機區塊 (Highlight Section) */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          background: 'rgba(56, 189, 248, 0.05)', // 淡藍色背景
          borderLeft: '4px solid var(--accent-cyan)', // 左側亮線
          borderRadius: '0 8px 8px 0',
          textAlign: 'left'
        }}>
           <h3 style={{ color: 'var(--accent-cyan)', marginTop: 0, fontSize: '1.25rem' }}>
              職涯動機：從 AI 浪潮看見晶片價值
           </h3>
           
           

           <p style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
             在人工智慧逐漸成為產業核心的時代，運算需求的提升也帶動了對<strong>高效能晶片</strong>的高度依賴。
             無論是 AI 模型訓練、資料處理，或是未來智慧裝置的發展，背後都離不開穩定且高效的 IC 設計。
           </p>
           <p style={{ lineHeight: '1.8', color: 'var(--text-sub)' }}>
             雖然目前我僅修習過 C 語言、計算機概論與微積分等基礎課程，但這些學習讓我開始理解軟體運作與硬體效能之間的關係，
             也促使我進一步關注晶片如何在底層支撐整個系統的運行。
           </p>
           <p style={{ lineHeight: '1.8', color: 'var(--text-main)', fontWeight: 'bold' }}>
             面對 AI 主宰的未來，我希望不只是使用科技，而能參與其核心建構，
             透過持續累積電機與數位電路相關能力，逐步朝 IC 設計方向發展，跟上這股時代潮流。
           </p>
        </div>

      </div>

      {/* 2. 雙欄佈局 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* 左欄：核心修課 */}
        <div className="card">
          <h2>目前已經修了</h2>
          <p>紮實的理論基礎是設計晶片的基石。</p>
          <ul style={{ lineHeight: '2' }}>
            <li>微積分 (Calculus)</li>
            <li>計算機程式 (C Programming Language)</li>
            <li>計算機概論 (Computer Fundamentals)</li>
          </ul>
        </div>

        {/* 右欄：未來專題規劃 */}
        <div className="card" style={{ borderTop: '4px solid var(--accent-purple)' }}>
          <h2 style={{ color: 'var(--text-main)' }}>🚀 未來專題規劃</h2>
          
          <h3 style={{ color: 'var(--accent-purple)', fontSize: '1.3rem', marginTop: '0' }}>
            簡化版 CPU／處理器設計
          </h3>
          
          <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            透過實作基本處理器架構，深入理解數位電路在實際系統中的運作方式，為數位 IC 設計打下基礎。
          </p>

          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-purple)' }}>🛠️ 預計實作重點</h4>
            <ul style={{ margin: 0 }}>
              <li>
                <strong>指令集規劃 (ISA)：</strong>定義 CPU 的操作指令與格式。
              </li>
              <li>
                <strong>核心模組設計：</strong>實作 <span style={{color: 'var(--accent-cyan)'}}>Program Counter</span>、<span style={{color: 'var(--accent-cyan)'}}>Control Unit</span>、ALU 與 Register File。
              </li>
              <li>
                <strong>模擬與驗證：</strong>利用 <span style={{color: 'var(--accent-cyan)'}}>Verilog HDL</span> 進行功能驗證 (Simulation)。
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;