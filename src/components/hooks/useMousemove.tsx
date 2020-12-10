/*
 * @Author: ywh
 * @Date: 2020-12-04 13:39:23
 * @instructions: 自定义 hooks
 */

import {useState, useEffect} from 'react';

const useMousemove = (params: Boolean) => {
    const [obj, setObj] = useState({x: 0, y: 0});
    useEffect(() => {
        if (!params) return;
        const updateMouse = (e: MouseEvent) => {
            setObj({
                x: e.clientX,
                y: e.clientY,
            });
        };
        document.addEventListener('mousemove', updateMouse);
        return () => {
            document.removeEventListener('mousemove', updateMouse);
        };
    }, [params]);
    return obj; // 这里直接return 数据，在其他组件引用后，可以直接使用该数据
};
export default useMousemove;
