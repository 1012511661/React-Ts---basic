import React from "react";
import "./App.css";

import HelloWarp from "./components/hello";
import UseStateCon from "./components/hooks/useState";
import UseEffectCon from "./components/hooks/useEffect";
import UseCustomCon from "./components/hooks/useCustom";

function App() {
  const postion = UseCustomCon(); // 使用自定义hooks
  return (
    <div className="App">
      <HelloWarp message="hello world" />
      <br />
      <h3>useState</h3>
      <UseStateCon />
      <h3>useEffect</h3>
      <UseEffectCon />
      <h3>自定义 hooks (获取鼠标移动坐标)</h3>
      <p>
        鼠标坐标：x:{postion.x},y:{postion.y}
      </p>
    </div>
  );
}

export default App;
