import { useState } from "react"

const useExplore=()=>{
const [explores,setExplores]=useState([]);

    fetch("http://localhost:5000/explores")
    .then(res =>res.json())
    .then(data =>setExplores(data));
    return{
        explores,
        setExplores
    }
}
export default useExplore;