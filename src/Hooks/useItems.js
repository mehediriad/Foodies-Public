import { useEffect } from "react";
import { useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://vast-basin-46033.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}

export default useItems;