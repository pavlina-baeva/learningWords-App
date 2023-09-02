import { useState } from "react";

export default function useLocalStorage(initialValue, key) {
    const localStorageValue = JSON.parse(localStorage.getItem(key));
    const [state, setState] = useState(localStorageValue || initialValue);
    const [bin, setBin] = useState(false);

    function setNewValue(newValue) {
        setState(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }
    return [state, setNewValue];
}