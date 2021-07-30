import { useEffect } from 'react'

const useClickOutside = (element, callBack) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(element.current && !element.current.contains(event.target)) {
                callBack()
            }
        };
        document.addEventListener('mousedown', handleClickOutside)
    });
}

export default useClickOutside;
