/*
* @Author: yongwenhao
* @Date: 2020-12-10 11:00:50
* @describe: useRef
*/

import React, {useState, useEffect, useRef} from 'react'

const LinkButtonRef: React.FC = () => {
    const r = useRef(0);
    const inputEl = useRef<HTMLInputElement>(null)
    const [n, setN] = useState(0);
    useEffect(() => {
        // 初始化先执行一次
        r.current += 1;
    }, [n]);
    useEffect(() => {
        if (inputEl && inputEl.current) {
            inputEl.current.focus();
        }
    }, [n]);
    return (
        <div className="App">
            <h5>n 改变或者点击 Input,Input 获取焦点<input type="text" ref={inputEl}/></h5>
            <h5>n:{n}</h5>
            <h5>r.current{r.current}</h5>
            <button onClick={() => {
                setN(n + 1);
            }}>
                +1
            </button>
        </div>
    );
};
export default LinkButtonRef;
