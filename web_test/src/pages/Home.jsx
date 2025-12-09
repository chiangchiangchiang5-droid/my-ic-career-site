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
          <h2>關於我</h2>
          <p>
            你好！我是台北大學電機工程學系的學生。 
            我對半導體產業充滿熱情，專注於數位電路設計與計算機架構。 
          </p>
        </div>

        {/* 職涯動機區塊 */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          background: 'rgba(56, 189, 248, 0.05)', 
          borderLeft: '4px solid var(--accent-cyan)',
          borderRadius: '0 8px 8px 0',
          textAlign: 'left'
        }}>
           <h3 style={{ color: 'var(--accent-cyan)', marginTop: 0, fontSize: '1.25rem' }}>
             🌟 職涯動機：從 AI 浪潮看見晶片價值
           </h3>
           <p style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
             在人工智慧逐漸成為產業核心的時代，運算需求的提升也帶動了對<strong>高效能晶片</strong>的高度依賴。
             面對 AI 主宰的未來，我希望不只是使用科技，而能參與其核心建構，逐步朝 IC 設計方向發展。
           </p>
        </div>

      </div>

      {/* 🔥 新增區塊：AI 在 IC 設計中的應用 (AI for Chip Design) */}
      <div className="card" style={{ border: '1px solid rgba(139, 92, 246, 0.3)', background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, rgba(0,0,0,0) 100%)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>🤖 AI 賦能：未來 IC 設計師的助手</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-sub)', marginBottom: '2rem' }}>
            不只是「設計 AI 晶片」，更要懂得「用 AI 工具設計晶片」 (AI for EDA)。
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {/* 特點 1 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', marginTop: 0 }}>加速 PPA 優化</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    利用機器學習模型輔助 EDA 工具，能更快速預測最佳的<strong>擺放與繞線 (Place & Route)</strong>，在更短時間內達成最佳的功耗 (Power)、效能 (Performance) 與面積 (Area) 平衡。
                </p>
            </div>

            {/* 特點 2 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🐞</div>
                <h3 style={{ color: 'var(--accent-purple)', fontSize: '1.1rem', marginTop: 0 }}>智慧驗證 (Smart Verification)</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    隨著晶片複雜度提升，傳統隨機測試已不足夠。AI 能自動生成更具針對性的測試案例，協助工程師更快抓出隱藏極深的 <strong>Corner Case Bugs</strong>，大幅縮短除錯時間。
                </p>
            </div>

            {/* 特點 3 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⌨️</div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', marginTop: 0 }}>RTL 程式碼輔助</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    透過類似 Copilot 的 AI 助手，協助生成標準化的 <strong>Verilog / SystemVerilog</strong> 模組與 Testbench，讓工程師能從繁瑣的編碼中解放，專注於更高層次的架構設計。
                </p>
            </div>
        </div>
      </div>

      {/* 2. 雙欄佈局：左邊放修課背景，右邊放未來專題 */}
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