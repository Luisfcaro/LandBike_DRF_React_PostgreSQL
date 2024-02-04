import { useCallback, useContext, useState } from "react";
import SlotService from "../services/SlotService";
import SlotContext from "../context/SlotContext";


export function useSlots() {
    const { slots, setSlots } = useContext(SlotContext);
    const [oneSlot, setOneSlot] = useState({});
    const [Validated, setValidated] = useState(false);

    const useAddSlot = useCallback(
        data => {
            let data_slot = {
                    slot_name: data.slot_name,
                    slot_status: data.slot_status,
                    image: data.image,
                    station: data.station,
                    bike: data.bike || null
            }

            console.log(data_slot);

            SlotService.createSlot(data_slot)
                .then(({ data, status }) => {
                    if (status === 201) {
                        setSlots([...slots, data]);
                        setValidated(true);
                        console.log('Slot creado con exito');
                        setTimeout(() => { setValidated(false); }, 1000);
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }, []


    );

    const useDeleteSlot = useCallback(
        (slug) => {
            SlotService.deleteSlot(slug)
                .then(({ data, status }) => {
                    if (status === 204) {
                        console.log('Slot eliminado con exito');
                        setSlots(slots.filter(slot => slot.slug !== slug))
                    }
                })
                .catch(e => console.error(e));
        }, [setSlots]
    );

    const useUpdateSlot = useCallback(
        
        (slug, data) => {
            let data_slot = {
                slot_name: data.slot_name,
                slot_status: data.slot_status,
                image: data.image,
                station: data.station,
                bike: data.bike || null
            }

            SlotService.updateSlot(slug, data_slot)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setSlots(slots.map(slot => slot.slug === slug ? data : slot));
                        setValidated(true);
                        console.log('Slot actualizado con exito');
                        setTimeout(() => { setValidated(false); }, 1000);
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }, [setSlots]
    );


    const useOneSlot = useCallback(
        (slug) => {
            SlotService.getSlot(slug)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setOneSlot(data);
                    }
                })
                .catch(e => console.error(e));
        }, [setOneSlot]
    );

        return {
            slots,
            setSlots,
            oneSlot,
            setOneSlot,
            Validated,
            setValidated,
            useAddSlot,
            useDeleteSlot,
            useUpdateSlot,
            useOneSlot
        };
    }