import React, {useEffect, useState} from 'react';
import SlotsService from '../services/SlotService';

const SlotContext = React.createContext();

export function SlotContextProvider({children}) {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        SlotsService.getSlots()
        .then((data) => {
            // console.log(data);
            setSlots(data);
        });
    },[setSlots]);

    return (
        <SlotContext.Provider value={{slots, setSlots}}>
            {children}
        </SlotContext.Provider>
    );
}

export default SlotContext;