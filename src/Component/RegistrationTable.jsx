import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import QRCode from "qrcode.react";
import { _get } from "../Utils/Helper";

export default function RegistrationTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchList, setSearchList] = useState("");
  const [loading, setLoading] = useState(false);

  const getState = () => {
    _get(
      `api/getCreate_user?query_type=select-all`,
      (res) => {
        setData(res.results);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  };

  useEffect(() => {
    getState();
  }, []);

  const search = [];
  data &&
    data.forEach((item) => {
      if (
        item.phone_no.toLowerCase().indexOf(searchList.toLowerCase()) === -1 &&
        item.classes_number.toLowerCase().indexOf(searchList.toLowerCase()) ===
        -1 &&
        item.name.toLowerCase().indexOf(searchList.toLowerCase()) === -1 &&
        item.plate_number.toLowerCase().indexOf(searchList.toLowerCase()) === -1
      ) {
        return;
      } else search.push(item);
    });

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Col md={12}>
        <h4 className="app_title"> Registered List </h4>
        <hr />
      </Col>
      <button
        className="app_button"
        style={{
          width: 150,
          padding: 10,
          marginLeft: 15,
          color: "#000",
        }}
        onClick={() => navigate("/registration")}
      >
        Register New +
      </button>
      <Col md={12}>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>

          <Col md={12}>
            <div className="search">
              <CiSearch
                style={{
                  fontSize: 30,
                  width: 25,
                  marginTop: 3,
                  color: "#000",
                }}
              />
              <input
                style={{
                  width: "100%",
                  fontSize: 20,
                }}
                className="app_input2"
                placeholder="Search Individual"
                value={searchList}
                onChange={(e) => setSearchList(e.target.value)}
              />

            </div>
          </Col>
          <label className="label_title" style={{ color: "#000" }}>
            Search
          </label>
        </div>
      </Col>
      <Row>
        <Col md={12}>
          <div className="table_overflow">
            <table
              style={{
                border: "1px solid #ccc",
                padding: 0,
                marginTop: 40,
                maxWidth: "90%",
              }}
              className="mt-5"
            >
              <thead>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  First Name
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Middle Name
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Surename
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Gender
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Nationality
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  State Of Origin
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Local Goverment
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Date Of Birth
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Place Of Birth
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Phone Number
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Blood Group
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Geno Type
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Address
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  NIN Number
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Next Of Kin
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Next Of Kin Address
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Next Of Kin Phone Number
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Plate Number
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Classes Number
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Side Number
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Phone Number
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  Name Of Company or Individual
                </th>
                <th
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #f5c005",
                  }}
                >
                  QR Code
                </th>
              </thead>
              {search?.map((i) => (
                <tbody>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.name}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.middle_name}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.surname}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.gender}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.status}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.nationality}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.state_of_origin}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.lg}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.date_of_birth}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.place_of_birth}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.phone_no}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.blood_group}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.genotype}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.address}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.NIN_number}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.next_of_kin}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.next_of_kin_address}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.phone_no2}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.plate_number}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.classes_number}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.side_number}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.phone_no3}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    {i.name_of_company}
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                    }}
                  >
                    <QRCode
                      value={i.qrcode}
                      renderAs="canvas"
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    />
                  </td>
                </tbody>
              ))}
            </table>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
