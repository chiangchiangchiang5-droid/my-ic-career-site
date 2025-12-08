import React from 'react';

function Salary() {
  // 定義薪資查詢資源列表
  const resources = [
    { 
      name: "104 薪資情報 (IC設計)", 
      desc: "台灣本土最詳細的薪資統計，可依年資查看。",
      // 這是 104 的薪資情報首頁，比直接連結報表更穩定
      url: "https://guide.104.com.tw/salary/job/2008001015?analyze=workexp&salary=monthly" 
    },
    { 
      name: "Levels.fyi (台灣區數據)", 
      desc: "查詢外商 (Google, NVIDIA) 與一線台廠的真實年薪結構。",
      // 連結到台灣區的硬體工程師數據
      url: "https://www.levels.fyi/t/hardware-engineer/locations/taiwan" 
    },
    { 
      name: "PTT Tech_Job 版", 
      desc: "最真實的鄉民回報，搜尋關鍵字：面試、薪水、請益。",
      url: "https://www.ptt.cc/bbs/Tech_Job/index.html" 
    },
    {
       name: "Dcard 科技業版",
       desc: "年輕族群與新鮮人的面試心得集中地。",
       url: "https://www.dcard.tw/f/tech_job"
    }
  ];

  return (
    <div className="container">
      <h1>薪資與市場行情</h1>
      
      {/* 說明區塊 */}
      <div className="card">
        <h2>IC工程師的薪資？</h2>
        <p>
            IC 設計工程師是台灣平均薪資最高的職位之一。
            碩士畢業起薪（MTK/聯詠等一線廠）通常具有相當競爭力，且隨著年資與分紅，成長幅度巨大。
        </p>
        <div style={{ 
            background: '#0c283fff', 
            padding: '1rem', 
            borderRadius: '5px', 
            marginTop: '1rem',
            borderLeft: '5px solid #666'
        }}>
            <strong>💡 小提醒：</strong> 下方的網站設有安全保護，無法直接在頁面內預覽，請點擊按鈕開啟新視窗查看。
        </div>
      </div>

      <h2>常用查詢平台</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {resources.map((res, index) => (
          <div key={index} className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <h3 style={{ marginTop: 0 }}>{res.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{res.desc}</p>
            </div>
            
            {/* 這裡的 target="_blank" 是關鍵，它會強制開新分頁 */}
            <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem' }}>
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                前往查看 
                {/* 加一個小箭頭符號表示外連 */}
                <span>↗</span>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salary;