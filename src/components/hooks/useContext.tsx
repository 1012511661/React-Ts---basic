/*
* @Author: yongwenhao
* @Date: 2020-12-10 13:22:19
* @describe: useContext
*/
import React, {useContext} from 'react';
import {ThemeContext} from '../../App';

const UseContextCon: React.FC = () => {
    const themeStyle = useContext(ThemeContext);
    const stylePEl = {
        color: themeStyle.color,
        background: themeStyle.background,
    };
    return (
        <>
            <p style={stylePEl}>UseContext 传值 改变样式</p>
        </>
    );
};
export default UseContextCon;

