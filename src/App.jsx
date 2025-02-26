import { useState } from "react";
import SurpriseButton from "./components/SurpriseButton";

function App() {
    const [bgColor, setBgColor] = useState("lightgray");

    return (
        <div className="app-container" style={{ backgroundColor: bgColor, height: "100vh" }}>
            <h1>Try Clicking the Button! 😆</h1>
            <SurpriseButton setBgColor={setBgColor} />
        </div>
    );
}

export default App;
