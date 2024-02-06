import { useCallback, useState, useContext, useEffect } from "react";
import BikeService from "../services/BikeService";
import BikeContext from "../context/BikeContext";

export function useBikes() {
    const { bikes, setBikes } = useContext(BikeContext);
    const [oneBike, setOneBike] = useState({});
    const [Validated, setValidated] = useState(false);

    const useDeleteBike = useCallback(
        (slug) => {
            BikeService.deleteBike(slug)
                .then(({ data, status }) => {
                    if (status === 204) {
                        console.log('Bicicleta eliminada con exito');
                        setBikes(bikes.filter(bike => bike.slug !== slug))
                    }
                })
                .catch(e => console.error(e));
        }, [setBikes]
    );

    const useAddBike = useCallback(
        data => {
            let data_bike = {
                bike_name: data.bike_name,
                bike_status: data.bike_status
            }

            BikeService.createBike(data_bike)
                .then(({ data, status }) => {
                    if (status === 201) {
                        setBikes([...bikes, data]);
                        setValidated(true);
                        console.log('Bicicleta creada con exito');
                        setTimeout(() => { setValidated(false); }, 1000);
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        }, []
    );

    const useUpdateBike = useCallback(
        (slug, data) => {
            
            let data_bike = {
                bike_name: data.bike_name,
                bike_status: data.bike_status
            }

            BikeService.updateBike(slug, data_bike)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setBikes(bikes.map(bike => bike.slug === slug ? data : bike));
                        setValidated(true);
                        console.log('Bicicleta actualizada con exito');
                        setTimeout(() => { setValidated(false); }, 1000);
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        }, [bikes]
    );

    const useOneBike = useCallback(
        (slug) => {
            BikeService.getBike(slug)
                .then(({ data }) => {
                    setOneBike(data);
                })
                .catch(e => console.error(e));
        }, [oneBike]
    );

    return {
        bikes,
        useDeleteBike,
        useAddBike,
        useUpdateBike,
        useOneBike,
        oneBike,
        setOneBike,
        Validated
    }
}
