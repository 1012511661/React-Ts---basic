/*
 * @Author: ywh
 * @Date: 2020-12-04 13:39:23
 * @instructions: 自定义 hooks
 */

import React, { useState, useEffect } from "react";

const useCustomCon = () => {
  const [obj, setObj] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updataMouse = (e: MouseEvent) => {
      setObj({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener("mousemove", updataMouse);
    return () => {
      document.removeEventListener("mousemove", updataMouse);
    };
  }, []);
  return obj; // 这里直接return 数据，在其他组件引用后，可以直接使用该数据
};
export default useCustomCon;
