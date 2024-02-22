import { useCallback, useContext, useState, useEffect } from "react";
import RentService from "../services/RentService";
import RentContext from "../context/RentContext";
import { useNavigate } from "react-router-dom";

export function useRents() {
    const { rents, setRents } = useContext(RentContext);
    const navigate = useNavigate();



    const useAddRent = useCallback(
        (data) => {
            let data_rent = {
                initial_slot_slug: data,
            }

            RentService.createRent(data_rent)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setRents([...rents, data]);
                        console.log('Rent creada con exito');
                        navigate('/home');
                    }
                })
                .catch(e => console.error(e));
        }, [navigate]
    );

    const useReturnBike = useCallback(
        (data) => {
            let data_rent = {
                final_slot_slug: data,
            }

            console.log(data_rent);

            RentService.updateRent(data_rent)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setRents([...rents, data]);
                        console.log('Bici devuelta con exito');
                        navigate('/home');
                    }
                })
                .catch(e => console.error(e));
        }, [navigate]
    );

    return { rents, setRents, useAddRent, useReturnBike };
}

