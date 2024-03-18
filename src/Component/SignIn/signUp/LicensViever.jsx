import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { LicensPDF } from "./LicensPDF";

export default function LicensViever() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <LicensPDF />
    </PDFViewer>
  );
}
