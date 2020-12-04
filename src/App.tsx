import React, { useState } from "react";
import "./App.css";

import HelloWarp from "./components/hello";
import UseStateCon from "./components/hooks/useState";
import UseEffectCon from "./components/hooks/useEffect";
import UseMousemoveCon from "./components/hooks/useMousemove";
import UseURLLoadingCon from "./components/hooks/useURLLoading";

interface IShowResult {
  message: string;
  status: string;
}

const App: React.FC = () => {
  // 使用自定义hooks
  const postion = UseMousemoveCon();
  const [show, setShow] = useState(true);
  const [
    data,
    loading,
  ] = UseURLLoadingCon("https://dog.ceo/api/breeds/image/random", [show]);
  console.log("11111");
  const dogResult = data as IShowResult;
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
      <h3>自定义 loading</h3>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        更新舔狗
      </button>
      <br />
      {loading ? (
        <p>舔狗加载中...</p>
      ) : (
        <img src={dogResult && dogResult.message} alt="舔狗" />
      )}
    </div>
  );
};

export default App;
