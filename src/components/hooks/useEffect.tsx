/*
 * @Author: ywh
 * @Date: 2020-12-04 11:01:30
 * @instructions: useEffect
 */

import React, { useState, useEffect } from "react";

// 记录鼠标点击的位置

// const UseEffectCon: React.FC = () => {
//  1. 每次都执行多次
//   const [link, setLink] = useState(0);
//   useEffect(() => {
//     document.title = `点击了${link}次`;
//   });
//   return (
//     <button
//       onClick={() => {
//         setLink(link + 1);
//       }}
//     >
//       计算点击的次数 +1
//     </button>
//   );
//   return (
//     <p>
//       X：{obj.x},Y：{obj.y}
//     </p>
//   );
// };

// const UseEffectCon: React.FC = () => {
//   // 2. useEffect()执行当前useEffect，会对上一个useEffect清除
//   const [obj, setObj] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     // MouseEvent React 内置类型
//     const updataMouse = (e: MouseEvent) => {
//       console.log("useEffect");
//       // 多次累加点击事件
//       // 点击第一次 执行2次
//       // 点击第二次 执行4
//       // ....
//       setObj({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };
//     document.addEventListener("click", updataMouse);
//     // 每次点击完后清除 防止翻倍式绑定单击事件
//     return () => {
//       document.removeEventListener("click", updataMouse);
//     };
//   });
//   // 3. useEffect(()=>{},[]) 第二个参数是空数组 只有在组件初始化或销毁的时候才会触发，用来代替 componentDidMount 和 componentWillUnmount，慎用
//   return (
//     <p>
//       X：{obj.x},Y：{obj.y}
//     </p>
//   );
// };
// const UseEffectCon: React.FC = () => {
//     // 3. useEffect(()=>{},[])
//          第二个参数是空数组 只有在组件初始化或销毁的时候才会触发
//          用来代替 componentDidMount 和 componentWillUnmount，慎用
//     const [obj, setObj] = useState({ x: 0, y: 0 });
//     useEffect(() => {
//       const updataMouse = (e: MouseEvent) => {
//         setObj({
//           x: e.clientX,
//           y: e.clientY,
//         });
//       };
//       document.addEventListener("click", updataMouse);
//       // 每次点击完后清除 防止翻倍式绑定单击事件
//       return () => {
//         document.removeEventListener("click", updataMouse);
//       };
//     },[]);
//     return (
//       <p>
//         X：{obj.x},Y：{obj.y}
//       </p>
//     );
//   };
const UseEffectCon: React.FC = () => {
  // 3. useEffect(()=>{},[AAA])
  // 第二个参数是有值数组
  // 只有在该数组中指定的其中一个值代表就回触发
  const [obj, setObj] = useState({ x: 0, y: 0 });
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!on) return;
    const updataMouse = (e: MouseEvent) => {
      setObj({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener("click", updataMouse);
    // 每次点击完后清除 防止翻倍式绑定单击事件
    return () => {
      document.removeEventListener("click", updataMouse);
    };
  }, [on]);
  return (
    <>
      <p>
        X：{obj.x},Y：{obj.y}
      </p>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {!on ? "开启" : "关闭"}获取鼠标单击坐标
      </button>
    </>
  );
};
export default UseEffectCon;
