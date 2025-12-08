import React from 'react';

function Interviews() {
  // 💡 我們只放影片 ID，程式會自動產生連結和縮圖
  const videos = [
    { 
      id: "cfnpSB3ByAg", 
      title: "IC 設計工程師工作分享 " 
    },
    { 
      id: "wkwP-ddG1oM", 
      title: "數位IC設計工程師上班一天在幹嘛？職場與研究所學生生活差別？以後要在哪裡買房？—好朋友篇 Ep. 25 " 
    },
    { 
      id: "IKQXwnCvHNg", 
      title: "AI硬體數位IC博士生分享，實驗室畢業都去哪上班？神秘益智遊戲挑考試生？—好朋友篇 Ep. 26" 
    }
  ];

  return (
    <div className="container">
      <h1>前輩訪談與經驗分享</h1>
      <p>精選業界訪談與科普影片，點擊下方圖片前往 YouTube 觀看。</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {videos.map((video) => (
          <div key={video.id} className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* 1. 圖片連結 (自動抓縮圖) */}
            <a 
              href={`https://www.youtube.com/watch?v=${video.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', overflow: 'hidden', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <img 
                // YouTube 自動縮圖 (使用 hqdefault 解析度比較好)
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                alt={video.title}
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s' }}
                // 滑鼠移上去會有放大效果
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>

            {/* 2. 標題與按鈕 */}
            <div>
                <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', minHeight: '3em' }}>{video.title}</h3>
                
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none' }}
                >
                  <button style={{ width: '100%', cursor: 'pointer' }}>
                     ▶ 前往 YouTube 觀看
                  </button>
                </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Interviews;