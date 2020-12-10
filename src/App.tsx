import React, {useState} from 'react';
import './App.css';

import HelloWarp from './components/hello';
import UseStateCon from './components/hooks/useState';
import UseEffectCon from './components/hooks/useEffect';
import UseMousemoveCon from './components/hooks/useMousemove';
import UseURLLoadingCon from './components/hooks/useURLLoading';
import UseRefCon from './components/hooks/useRef';
import UseContextCon from './components/hooks/useContext';

// 图片验证
interface IShowResult {
    message: string;
    status: string;
}

// 颜色验证
interface IThemeStyle {
    [key: string]: { color: string, background: string }
}

const themeStyle: IThemeStyle = {
    'light': {
        color: '#000',
        background: '#e3e3e3'
    },
    'dark': {
        color: '#e3e3e3',
        background: '#000'
    },
};
export const ThemeContext = React.createContext(themeStyle.light);
//  React.createContext() 接收方的组件不许使用 <XXX.Provider value=''></XXX.Provider> 包裹
const App: React.FC = () => {
    const [show, setShow] = useState(true); // 加载...
    const [mouse, serMouse] = useState(false); // 开始获取鼠标移动位置
    const [theme, setTheme] = useState('light');
    // 使用自定义hooks
    const position = UseMousemoveCon(mouse);
    const [data, loading] = UseURLLoadingCon('https://dog.ceo/api/breeds/image/random', [show]);
    const dogResult = data as IShowResult;
    return (
        <div className="App">
            <HelloWarp message="hello world"/>
            <br/>
            <h3>useState</h3>
            <UseStateCon/>
            <h3>useEffect</h3>
            <UseEffectCon/>
            <h3>自定义 hooks (获取鼠标移动坐标)</h3>
            <p>
                <button onClick={() => {
                    serMouse(!mouse);
                }}>{mouse ? '取消' : '获取'}坐标
                </button>
                鼠标坐标：x:{position.x},y:{position.y}
            </p>
            <h3>自定义 loading</h3>
            <button onClick={() => {
                setShow(!show);
            }}> 更新舔狗
            </button>
            <br/>
            {loading ? (
                <p>舔狗加载中...</p>
            ) : (
                <img src={dogResult && dogResult.message} alt="舔狗"/>
            )}
            <h3>useRef</h3>
            <UseRefCon></UseRefCon>
            <h3>useContext</h3>
            <button onClick={() => {
                setTheme('dark');
            }}>深色
            </button>
            <button onClick={() => {
                setTheme('light');
            }}>浅色
            </button>
            <ThemeContext.Provider value={themeStyle[theme]}>
                <UseContextCon></UseContextCon>
            </ThemeContext.Provider>
        </div>
    );
};

export default App;
