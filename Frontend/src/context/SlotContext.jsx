import React, {useEffect, useState} from 'react';
import SlotsService from '../services/SlotService';

const SlotContext = React.createContext();

export function SlotContextProvider({children}) {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        SlotsService.getSlots()
        .then(({data, status}) => {
            if (status === 200) {
                setSlots(data);
            }
        });
    },[setSlots]);

    return (
        <SlotContext.Provider value={{slots, setSlots}}>
            {children}
        </SlotContext.Provider>
    );
}

export default SlotContext;