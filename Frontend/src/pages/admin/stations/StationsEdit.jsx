import React, { useEffect } from "react";
import StationFormPage from "../../../components/admin/stations/StationFormPage";
import { useStations } from "../../../hooks/useStations";
import { useNavigate , useParams} from "react-router-dom";

const StationsEdit = () => {
  const { id } = useParams();
  const { Validated, useUpdateStation } = useStations();
  const { oneStation, useOneStation } = useStations();

  const navigate = useNavigate();

  const form_type = "edit";

  useEffect(() => {
    if (id !== '') {
      useOneStation(id);
    }

    if (Validated) {
      navigate("/dashboard/stations");
    }
  }, [Validated, navigate]);


  return (
    <div>
      <div className="title">
        <h1>Editar Estación</h1>
      </div>
      <StationFormPage station={oneStation} form_type={form_type} sendData={(data) => useUpdateStation(id, data)} />
    </div>
  )
}

export default StationsEdit;