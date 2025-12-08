import React from 'react';

function ICIntro() {
  return (
    <div className="container">
      {/* 標題區塊 */}
      <div className="card">
        <h1>IC 設計工程師介紹</h1>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-sub)', border: 'none', padding: 0, marginTop: '-1rem' }}>
          Integrated Circuit (IC) Design Engineer
        </h2>
        <p>
          IC 設計工程師主要負責將電子系統的功能，從抽象的規格轉化為實際可製造的晶片電路，
          是半導體產業中極具技術深度與專業門檻的工作。依設計內容與技術性質不同，
          IC 設計大致可分為 <strong style={{color: 'var(--accent-cyan)'}}>數位 IC 設計</strong> 與 <strong style={{color: 'var(--accent-purple)'}}>類比 IC 設計</strong> 兩大方向。
        </p>
        

[Image of Integrated Circuit layout blueprint]

      </div>

      {/* 左右並排區塊 (RWD: 手機版會自動變成上下排) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        
        {/* === 數位 IC 設計 === */}
        <div className="card">
          <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', borderBottom: '1px solid rgba(34,211,238,0.2)', paddingBottom: '10px' }}>
            數位 IC 設計 <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Digital IC Design</span>
          </h3>
          
          <p>
            主要以 <strong>0 與 1 的邏輯系統</strong> 為核心，負責處理運算、控制與資料傳輸等功能，
            常見於 CPU、GPU、AI 加速器與各類 SoC 晶片中。
          </p>

          <h4 style={{ color: 'var(--text-main)', marginTop: '1.5rem' }}>🛠 主要工作內容</h4>
          <ul>
            <li>撰寫硬體描述語言（如 Verilog、SystemVerilog）</li>
            <li>設計與實作邏輯電路（FSM、Pipeline、ALU 等）</li>
            <li>功能模擬與驗證（Simulation / Verification）</li>
            <li>與實體設計（Physical Design）團隊合作進行時序與效能優化</li>
          </ul>

          <h4 style={{ color: 'var(--text-main)' }}>🧠 所需能力</h4>
          <ul>
            <li>數位電路與邏輯設計基礎</li>
            <li>熟悉 RTL 設計流程</li>
            <li>良好的除錯與邏輯分析能力</li>
            <li>對晶片架構與效能瓶頸有整體理解</li>
          </ul>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(34, 211, 238, 0.05)', borderRadius: '8px', borderLeft: '3px solid var(--accent-cyan)' }}>
            <strong>特色：</strong>與程式設計概念相近，重視邏輯與結構，開發流程完整、分工明確。
            是目前 IC 產業中需求量最大的設計方向之一。
          </div>
        </div>

        {/* === 類比 IC 設計 === */}
        <div className="card">
          <h3 style={{ color: 'var(--accent-purple)', fontSize: '1.5rem', borderBottom: '1px solid rgba(139, 92, 246, 0.2)', paddingBottom: '10px' }}>
            類比 IC 設計 <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Analog IC Design</span>
          </h3>

          <p>
            著重於 <strong>連續訊號的處理與轉換</strong>，負責將真實世界的電壓、電流與訊號轉換成可供數位系統使用的形式，
            是晶片中不可或缺的基礎。
          </p>

          <h4 style={{ color: 'var(--text-main)', marginTop: '1.5rem' }}>🛠 主要工作內容</h4>
          <ul>
            <li>設計放大器、比較器、OP Amp 等電路</li>
            <li>規劃電源管理電路（LDO、DC-DC Converter）</li>
            <li>進行電路分析與 SPICE 模擬</li>
            <li>評估雜訊、功耗、穩定度與製程變異影響</li>
          </ul>

          <h4 style={{ color: 'var(--text-main)' }}>🧠 所需能力</h4>
          <ul>
            <li>紮實的電子學與半導體元件基礎</li>
            <li>良好的電路直覺與分析能力</li>
            <li>熟悉模擬工具（如 Cadence、SPICE）</li>
            <li>能理解製程與實際物理效應</li>
          </ul>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '8px', borderLeft: '3px solid var(--accent-purple)' }}>
            <strong>特色：</strong>技術門檻高，學習曲線陡。設計較依賴經驗與直覺，專業度高，人才相對稀缺。
          </div>
        </div>

      </div>
    </div>
  );
}

export default ICIntro;