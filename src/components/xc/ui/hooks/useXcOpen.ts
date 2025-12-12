import {useState} from "react";

const useXcOpen = (defaultValue: boolean = false) => {
    const [open, setOpen] = useState<boolean>(defaultValue)

    return {
        open,
        setOpen
    }
}

export default useXcOpen