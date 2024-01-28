import React, { useEffect } from 'react';
import StationFormPage from '../../../components/admin/stations/StationFormPage';
import { useNavigate } from 'react-router-dom';
import { useStations } from '../../../hooks/useStations';

const StationsCreate = () => {
  const { Validated, useAddStation} = useStations();
  const navigate = useNavigate();
  const form_type = 'create';

  useEffect(() => {
    if (Validated) {
      navigate("/dashboard/stations");
    }
  }, [Validated, navigate]);


  return (
    <div className='station_add_container'>
      <div className='title'>
        <h1>Crear Estación</h1>
      </div>
      <StationFormPage form_type={form_type} sendData={ (data) => useAddStation(data) }/>
    </div>
  )

}

export default StationsCreate;
