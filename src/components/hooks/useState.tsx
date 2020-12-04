/*
 * @Author: yongwenhao
 * @Date: 2020-12-04 10:59:24
 * @instructions: useState
 */

import React, {useState} from "react";
// useState() 单个值 1
const LinkButton: React.FC = () => {
    const [link, setLink] = useState(0);
    return (
        <button
            onClick={() => {
                setLink(link + 1);
            }}
        >
            {link} 点赞+1
        </button>
    );
};
// useState() 单个值 2
// const LinkButton: React.FC = () => {
//     const [link, setLink] = useState(0);
//     const handleLink = () => {
//         setLink(link => link + 2)
//     };
//     return (
//         <button onClick={handleLink}>{link} 点赞+2</button>
//     )
// }
// useState() 多个值
// const LinkButton: React.FC = () => {
//     // 注意 useState()两个以上值 需要用{} 表示useState({})
//     // 使用某一个值时，不使用的是也必须协商
//     //  useState() 返回两个参数 [a,b]
//     //   a: 设置的值
//     //   b：改变值的方法
//     const [obj, setObj] = useState({link: 0, on: true});
//     return (
//         <>
//             <button onClick={() => {
//                 setObj({link: obj.link + 1, on: obj.on})
//             }}>{obj.link} 点赞+2
//             </button>
//             <button onClick={() => {
//                 setObj({link: obj.link, on: !obj.on})
//             }}>开关状态：{obj.on ? '开' : '关'} </button>
//         </>
//     )
// }
// useState() 多个 useState()
// const LinkButton: React.FC = () => {
//     const [link, setLink] = useState(0);
//     const [on, setOn] = useState(true);
//     return (
//         <>
//             <button onClick={() => {
//                 setLink(link + 1)
//             }}>{link} 点赞+1
//             </button>
//             <button onClick={() => {
//                 setOn(!on)
//             }}>开关状态：{on ? '开1' : '关1'} </button>
//         </>
//     )
// }
export default LinkButton;
