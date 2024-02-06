import { useCallback, useContext, useState , useEffect} from "react";
import StationContext from "../context/StationContext";
import StationService from "../services/StationService";
import { set } from "react-hook-form";
import SlotService from "../services/SlotService";

export function useStations() {
    const { stations, setStations } = useContext(StationContext);
    const [oneStation, setOneStation] = useState({});
    const [Validated, setValidated] = useState(false);
    const [stationSlots, setStationSlots] = useState([]);

    useEffect(() => {
        const station = { 'station_id': oneStation.id };
        SlotService.getSlots(station)
            .then(({data , status}) => {
                if (status === 200) {
                    // console.log(data);
                    setStationSlots(data);
                }
            })
            .catch(e => console.error(e));
    }, [oneStation]);



    const useDeleteStation = useCallback (
        (id) => {
            StationService.deleteStation(id)
                .then(({ data, status }) => {
                    if (status === 204) {
                        console.log('Estacion eliminada con exito');
                        setStations(stations.filter(station => station.id !== id))
                    }
                })
                .catch(e => console.error(e));
        }, [setStations]
    );

    const useAddStation = useCallback(
        data => {
            let data_station = {
                station_name: data.station_name,
                station_desc: data.station_desc,
                location: data.location,
                id_zone: data.id_zone,
                num_slots: data.num_slots
            }

            StationService.createStation(data_station)
                .then(({ data, status }) => {
                    if (status === 201) {
                        setStations([...stations, data]);
                        setValidated(true);
                        console.log('Estacion creada con exito');
                        setTimeout(() => { setValidated(false); }, 1000);
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }, []
    );


    const useUpdateStation = useCallback(
        (id, data) => {
            let data_station = {
                station_name: data.station_name,
                station_desc: data.station_desc,
                location: data.location,
                id_zone: data.id_zone
            }

            // console.log(data_station);
            StationService.updateStation(id, data_station)
                .then(({ data, status }) => {
                    if (status === 200) {
                        let old_stations = [...stations];
                        console.log(old_stations);
                        const index = old_stations.findIndex(station => station.id !== id)
                        if (index !== 1) {
                            old_stations[index] = data;
                            setStations(old_stations);
                        }
                        setValidated(true);
                        console.log('Estacion actualizada con exito');
                        setTimeout(() => { setValidated(false); }, 1000);
                    }

                })
                .catch(e => {
                    console.error(e);
                })

        }, []
    );


    const useOneStation = useCallback(
        (id) => {
            // console.log(id);
            StationService.getStation(id)
                .then(({ data, status }) => {
                    // console.log(data);
                    if (status === 200) {
                        // console.log('He buscado');
                        setOneStation(data);
                    }
                })
                .catch(e => console.error(e))

        }, [oneStation]
    );




    return { stations, setStations, useDeleteStation, useAddStation, useUpdateStation, useOneStation, oneStation, setOneStation, Validated, setValidated, stationSlots, setStationSlots};
}

