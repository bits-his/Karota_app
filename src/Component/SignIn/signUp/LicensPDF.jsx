import {
  Document,
  Font,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import DM_SANS_NORMAL from "../../../assets/DM_Sans/DM_Sans/static/DMSans_24pt-SemiBold.ttf";
import DM_SANS_BOLD from "../../../assets/DM_Sans/DM_Sans/static/DMSans_24pt-Bold.ttf";
import DM_SANS_ITALIC from "../../../assets/DM_Sans/DM_Sans/static/DMSans-Italic.ttf";
import ahmad from "../../../Images/download.png";
import coat from "../../../Images/th.jpeg";
import moment from "moment";
import QRCode from "qrcode";

Font.register({
  family: "DM_SANS",
  fonts: [
    { src: DM_SANS_NORMAL, fontWeight: 700 },
    {
      src: DM_SANS_BOLD,
      fontStyle: "bold",
    },
    {
      src: DM_SANS_ITALIC,
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  body: {
    width: "100%",
    pageBreakInside: "avoid",
    padding: 20,
    paddingLeft: 70,
    paddingRight: 50,
    fontSize: 12,
    border: 3,
    borderRadius: 10,
  },
  image1: {
    width: 70,
    height: 50,
  },
  image2: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  header: {
    fontFamily: "DM_SANS",
    fontStyle: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export const LicensPDF = ({ data = {} }) => {
  let canvas;
  canvas = document.createElement("canvas");
  QRCode.toCanvas(
    canvas,
    `https://kekeapp.netlify.app/view-info?plate_no=${data?.plate_no}`
  );
  const qr = canvas.toDataURL();
  return (
    <Document>
      <Page size="A4" orientation="landscape">
        <View style={{ padding: 120 }}>
          <View style={styles.body}>
            <View style={{ width: "100%", alignItems: "center" }}>
              <View></View>
              <Text style={styles.header}>KANO STATE VEHICLE LICENSE</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                marginTop: 30,
              }}
            >
              <View>
                <Text
                  style={{
                    width: "100%",
                    transform: "rotate(-90deg)",
                    transformOrigin: "left top",
                    writingMode: "vertical-lr",
                    marginLeft: -30,
                    marginTop: 130,
                    fontSize: 20,
                    fontFamily: "DM_SANS",
                    fontStyle: "bold",
                    letterSpacing: 1,
                  }}
                >
                  {moment(data?.create_at).format("MMMM YYYY")}
                </Text>
              </View>
              <View
                style={{
                  width: "60%",
                }}
              >
                <Text>
                  PIN:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.pin || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Reg. Number:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.lg_reg_no || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Engine Number:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.engine_no || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Chassis Number:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.chasis_no || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Vehicle Make:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.vehicle_make || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Vehicle Model:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.vehicle_model || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Color:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.color || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Engine Capacity:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {data?.engine_capacity || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Transaction Date:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {moment(data?.create_at).format("D  MMMM, YYYY") || "N/A"}
                  </Text>
                </Text>
                <Text>
                  Date Issued:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {moment().format("YYYY/MM/DD")}
                  </Text>
                </Text>
                <Text>
                  Expiry Date:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    {moment(data?.expiry_date).format("YYYY/MM/DD")}
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  marginTop: 30,
                  flexDirection: "column",
                  width: "40%",
                  alignItems: "center",
                }}
              >
                <Image source={qr} style={styles.image2} />
                <View
                  style={{
                    width: "100%",
                    // backgroundColor: "#000",/
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={{
                      width: "100%",
                    }}
                  >
                    Verify your Vehicle at
                  </Text>
                  <Text
                    style={{
                      width: "100%",
                    }}
                  >
                      https://kekeapp.netlify.app/view-info?plate_no={data?.plate_no}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
