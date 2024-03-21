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
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  header: {
    fontFamily: "DM_SANS",
    fontStyle: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export const LicensPDF = () => {
  return (
    <Document>
      <Page size="A4" orientation="landscape">
        <View style={{ padding: 120 }}>
          <View style={styles.body}>
            <View style={{ width: "100%", alignItems: "center" }}>
              <View>{/* <Image src={coat} style={styles.image1} /> */}</View>
              <Text style={styles.header}>KANO STATE VEHICLE licens </Text>
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
                  FEB 2025
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
                    23423423423242342432342
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
                    AKD34534GA
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
                    2GRD9847389
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
                    5TDDK3DC9BS9872372987H
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
                    Toyota
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
                    Sienna
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
                    Black
                  </Text>
                </Text>
                <Text>
                  Engine Capcity:
                  <Text
                    style={{
                      fontFamily: "DM_SANS",
                      fontStyle: "bold",
                    }}
                  >
                    3.1 - 12
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
                    22/Feb/2024
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
                    22/02/2024
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
                    21/02/2025
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
                <Image src={ahmad} style={styles.image2} />
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
                    https://developer.android.com
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
