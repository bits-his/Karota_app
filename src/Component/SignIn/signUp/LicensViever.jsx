import { PDFViewer } from "@react-pdf/renderer";
import React, { useCallback, useEffect, useState } from "react";
import { LicensPDF } from "./LicensPDF";
import { useParams } from "react-router-dom";
import { _get } from "../../../Utils/Helper";

export default function LicensViever() {
  const [data, setData] = useState([]);
  const vehicle_id = useParams().vehicle_id;

  const getVehicles = useCallback(() => {
    // setLoading(true);
    _get(`vehicles?query_type=get_vehicle_by_plate_no&plate_no=${vehicle_id}`, (resp) => {
      if (resp.data && resp.data.length) {
        setData(resp.data);
        // setLoading(false);
      }
    });
  }, [vehicle_id]);

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  return (
    <div>
      {/* {JSON.stringify({ data, vehicle_id })} */}
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <LicensPDF />
      </PDFViewer>
    </div>
  );
}
