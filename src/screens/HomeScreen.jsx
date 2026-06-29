import "./HomeScreen.css";

const EDITIONS = [
  { emoji: "💰", caderno: "the news business", headline: "Mercado abre em queda após dados do Fed", time: "06:06 · 4 min", isNew: true },
  { emoji: "🌍", caderno: "the news mundo", headline: "Cúpula do G7 define nova agenda climática", time: "06:06 · 3 min", isNew: true },
  { emoji: "💻", caderno: "the news tech", headline: "IA generativa chega ao sistema de saúde público", time: "Ontem · lida", isNew: false },
  { emoji: "⚽", caderno: "the news esportes", headline: "Copa do Mundo 2026 começa em julho", time: "Ontem · lida", isNew: false },
];

const WEEK = ["S", "T", "Q", "Q", "S", "S", "D"];

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="screen home-screen">
      {/* Status bar */}
      <div className="status-bar" style={{ color: "#1A1A1A" }}>
        <span>09:06</span>
        <div className="signal">
          {[1, 1, 0.3].map((op, i) => (
            <div key={i} className="signal-dot" style={{ background: `rgba(26,26,26,${op})` }} />
          ))}
          <span style={{ fontSize: 10 }}>●●</span>
        </div>
      </div>

      <div className="screen-scroll">
        {/* Header */}
        <div className="home-header">
          <div className="home-logo">
            the<span className="logo-dot">.</span>news
          </div>
          <div className="home-actions">
            <button className="icon-btn" aria-label="Buscar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <div className="avatar">MC</div>
          </div>
        </div>

        {/* Greeting */}
        <div className="greeting">
          <div className="greeting-date">Domingo, 29 jun</div>
          <div className="greeting-text">Bom dia, Maria 👋</div>
        </div>

        {/* Streak badge */}
        <div className="streak-badge" onClick={() => onNavigate("habito")}>
          <span className="streak-fire">🔥</span>
          <div className="streak-info">
            <div className="streak-main">23 dias seguidos</div>
            <div className="streak-sub">Você leu hoje · continue amanhã</div>
          </div>
          <div className="week-dots">
            {WEEK.map((_, i) => (
              <div
                key={i}
                className={`week-dot ${i < 6 ? "on" : "today"}`}
              />
            ))}
          </div>
        </div>

        {/* Featured edition */}
        <section className="section-block">
          <div className="section-label">edição de hoje</div>
          <div className="featured-card">
            <div className="featured-img">
              <div className="feat-bg-text">TNS</div>
              <div className="feat-pill">
                <div className="pill-dot" />
                AO VIVO · Edição nº 847
              </div>
            </div>
            <div className="featured-body">
              <div className="feat-meta">the news · Domingo, 29 jun · 5 min</div>
              <div className="feat-title">O que o mundo precisa saber esta manhã</div>
              <div className="feat-footer">
                <button className="read-btn">Ler agora</button>
                <span className="feat-count">Lida por 94k pessoas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Imparcialidade */}
        <section className="section-block">
          <div className="section-label">termômetro de imparcialidade</div>
          <div className="parcialidade-row">
            <div>
              <div className="parc-label">Pauta de hoje</div>
              <div className="parc-text">Cobertura equilibrada</div>
            </div>
            <div className="thermometer">
              {[
                { h: 20, color: "#4B6CF7" },
                { h: 14, color: "#4B6CF7", op: 0.5 },
                { h: 20, color: "#F5E642" },
                { h: 14, color: "#E85C4A", op: 0.5 },
                { h: 20, color: "#E85C4A" },
              ].map((bar, i) => (
                <div
                  key={i}
                  style={{
                    width: 5,
                    height: bar.h,
                    borderRadius: 3,
                    background: bar.color,
                    opacity: bar.op ?? 1,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Other editions */}
        <section className="section-block">
          <div className="section-label">outros cadernos</div>
          <div className="edition-list">
            {EDITIONS.map((ed, i) => (
              <div className="edition-row" key={i}>
                <div className="edition-thumb">{ed.emoji}</div>
                <div className="edition-info">
                  <div className="edition-caderno">{ed.caderno}</div>
                  <div className="edition-headline">{ed.headline}</div>
                  <div className="edition-time">{ed.time}</div>
                </div>
                <div className={ed.isNew ? "dot-new" : "dot-read"} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: 16 }} />
      </div>

      {/* Bottom nav */}
      <nav className="bottom-nav home-nav">
        {[
          { icon: "🏠", label: "início", screen: "home" },
          { icon: "🔥", label: "hábito", screen: "habito" },
          { icon: "💬", label: "conversas", screen: "chat" },
          { icon: "☰", label: "mais", screen: "more" },
        ].map((item) => (
          <div
            key={item.screen}
            className={`nav-item ${item.screen === "home" ? "active" : ""}`}
            onClick={() => onNavigate(item.screen)}
          >
            <div className="nav-pip" style={{ background: item.screen === "home" ? "#1A1A1A" : "transparent" }} />
            <div className="nav-icon">{item.icon}</div>
            <div className="nav-label" style={{ color: item.screen === "home" ? "#1A1A1A" : "rgba(26,26,26,0.35)" }}>
              {item.label}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
