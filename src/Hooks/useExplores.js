

import {
    useState
} from "react"

const useExplore = () => {
    const [explores, setExplores] = useState([]);

    fetch("https://sheltered-mountain-47444.herokuapp.com/explores")
        .then(res => res.json())
        .then(data => setExplores(data));
    return {
        explores,
        setExplores
    }
}
export default useExplore;