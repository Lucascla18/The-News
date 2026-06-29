import { useState } from "react";
import "./HabitoScreen.css";

const WEEK_DAYS = ["S", "T", "Q", "Q", "S", "S", "D"];

const INITIAL_HABITS = [
  { id: 1, name: "Ler a edição diária", emoji: "📰", color: "yellow", done: true, meta: "Feito às 06:14 · 23 dias seguidos" },
  { id: 2, name: "Ouvir o podcast", emoji: "🎧", color: "blue", done: true, meta: "Feito hoje · 8 dias seguidos" },
  { id: 3, name: "Registrar leitura", emoji: "📚", color: "purple", done: true, meta: "Feito · 15 dias seguidos" },
  { id: 4, name: "Palavritas", emoji: "🎯", color: "green", done: false, meta: "Pendente · melhor: 5 dias" },
];

export default function HabitoScreen({ onNavigate }) {
  const [habits, setHabits] = useState(INITIAL_HABITS);

  const toggle = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              done: !h.done,
              meta: !h.done ? "Feito agora · boa!" : "Pendente · melhor: 5 dias",
            }
          : h
      )
    );
  };

  const doneCount = habits.filter((h) => h.done).length;
  const progress = (doneCount / habits.length) * 100;

  return (
    <div className="screen habito-screen">
      <div className="status-bar" style={{ color: "#fff" }}>
        <span>09:06</span>
        <div className="signal">
          {[1, 1, 0.3].map((op, i) => (
            <div key={i} className="signal-dot" style={{ background: `rgba(255,255,255,${op})` }} />
          ))}
          <span style={{ fontSize: 10 }}>●●</span>
        </div>
      </div>

      <div className="screen-scroll">
        {/* Header */}
        <div className="hab-header">
          <div className="hab-logo">
            the<span className="hab-dot">.</span>news
          </div>
          <button className="notif-btn" aria-label="Notificações">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <div className="notif-dot" />
          </button>
        </div>

        {/* Streak hero */}
        <div className="streak-hero">
          <div className="streak-fire-big">🔥</div>
          <div className="streak-number">23</div>
          <div className="streak-unit">dias de sequência</div>
          <div className="streak-desc">
            Você leu a edição hoje às 06:14.<br />
            <strong>Próxima: amanhã às 06:06.</strong>
          </div>
        </div>

        {/* Week strip */}
        <div className="week-strip">
          {WEEK_DAYS.map((day, i) => (
            <div className="day-pill" key={i}>
              <span className="day-name">{day}</span>
              <div className={`day-circle ${i < 6 ? "done" : "today"}`}>
                {i < 6 ? "✓" : "29"}
              </div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="progress-section">
          <div className="progress-label">
            <span>Hábitos de hoje</span>
            <span className="progress-count">{doneCount} / {habits.length}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Habit list */}
        <div style={{ marginTop: 20 }}>
          <div className="section-header">
            <span className="section-title">Seus hábitos</span>
            <span className="section-link">editar</span>
          </div>

          <div className="habit-list">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className={`habit-card ${habit.done ? "done" : ""}`}
                onClick={() => toggle(habit.id)}
              >
                <div className={`habit-icon ${habit.color}`}>{habit.emoji}</div>
                <div className="habit-info">
                  <div className="habit-name">{habit.name}</div>
                  <div className={`habit-meta ${habit.done ? "meta-done" : ""}`}>{habit.meta}</div>
                </div>
                <div className={`habit-check ${habit.done ? "checked" : ""}`}>
                  {habit.done && <div className="checkmark" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ranking teaser */}
        <div className="ranking-teaser">
          <span className="rank-icon">🏆</span>
          <div className="rank-info">
            <div className="rank-title">Você está em 3º lugar</div>
            <div className="rank-sub">entre seus amigos esta semana</div>
          </div>
          <span className="rank-arrow">›</span>
        </div>

        {/* Add habit */}
        <div className="add-habit">
          <div className="add-circle">+</div>
          <span>Adicionar hábito</span>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="bottom-nav hab-nav">
        {[
          { icon: "🏠", label: "início", screen: "home" },
          { icon: "🔥", label: "hábito", screen: "habito" },
          { icon: "💬", label: "conversas", screen: "chat" },
          { icon: "☰", label: "mais", screen: "more" },
        ].map((item) => (
          <div
            key={item.screen}
            className={`nav-item ${item.screen === "habito" ? "active" : ""}`}
            onClick={() => onNavigate(item.screen)}
          >
            <div
              className="nav-pip"
              style={{ background: item.screen === "habito" ? "#F5E642" : "transparent" }}
            />
            <div className="nav-icon">{item.icon}</div>
            <div
              className="nav-label"
              style={{
                color: item.screen === "habito" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
