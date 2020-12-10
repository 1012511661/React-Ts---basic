/*
 * @Author: yywh
 * @Date: 2020-12-04 16:09:07
 * @instructions: 加载loading
 */

import React, {useState, useEffect} from "react";
import axios from "axios";

const useURLLoading = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(url).then(res => {
            setData(res.data);
            setLoading(false)
        })
    }, deps);
    return [data, loading]
};
export default useURLLoading;
