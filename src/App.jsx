import { useState } from "react";
import HabitoScreen from "./screens/HabitoScreen";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");

  return (
    <div className="app-wrapper">
      <div className="phone-frame">
        <div className="notch" />

        {activeScreen === "home" && (
          <HomeScreen onNavigate={setActiveScreen} />
        )}
        {activeScreen === "habito" && (
          <HabitoScreen onNavigate={setActiveScreen} />
        )}
      </div>

      {/* Preview switcher — fora do frame, só pra demo */}
      <div className="preview-switcher">
        <button
          className={activeScreen === "home" ? "active" : ""}
          onClick={() => setActiveScreen("home")}
        >
          📰 Feed de Edições
        </button>
        <button
          className={activeScreen === "habito" ? "active" : ""}
          onClick={() => setActiveScreen("habito")}
        >
          🔥 Hábito
        </button>
      </div>
    </div>
  );
}
