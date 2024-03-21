import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Row,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Input,
  Label,
} from "reactstrap";
import { _get } from "../../Utils/Helper";
import { useLocation } from "react-router-dom";

export default function SuperAgentTable() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state && location.state.formData;

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [searchData, setSearchData] = useState()
  const datas = searchData
  ? searchData
  : data
 const search = () => {
  setSearchData(data.filter(char => char.name.toLowerCase().includes(filter.toLowerCase())))

 }

  const getReg = useCallback(() => {
    _get(`superagent?query_type=select-all`, (resp) => {
      if (resp.success && resp.results) {
        setData(resp.results);
      }
    });
  }, []);

  useEffect(() => {
    getReg();
  }, [getReg]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleViewUser = (userData) => {
    setSelectedUser(userData);
    setIsModalOpen(true);
  };

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col
          md={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 className="app_title"> Super Agents </h4>
          <button
            className="app_button"
            style={{
              width: 150,
              padding: 10,
              marginLeft: 15,
              color: "#000",
              borderRadius: 7,
            }}
            onClick={() => navigate("/superagent")}
          >
            Add SuperAgent
          </button>
        </Col>
      </Row>

      <hr />
      <Row>
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
                <Input
                  style={{
                    position: "relative",
                    width: "100%",
                    fontSize: 20,
                    top: -4,
                    boxShadow: "none",
                  }}
                  name="filter"
                  value={filter}
                  type="text"
                  className="app_input2"
                  onChange={({ target: { value } }) => setFilter(value)}
                  placeholder="Search for super agent"
                />
              </div>
            </Col>
            <Label
              onClick={search}
              className="label_title"
              style={{ color: "#000", cursor: "pointer" }}
            >
              Search
            </Label>
          </div>
        </Col>

        <Row>
          <div className="table_overflow">
            {datas?.length === 0 ? (
              <Spinner
                color="warning"
                className="spinner"
                type="grow"
                style={{ margin: "20px auto" }}
              >
                ""
              </Spinner>
            ) : (
              <Table
                bordered
                responsive
                style={{
                  position: "relative",
                  top: "10px",
                  width: "95.3%",
                  left: "32px",
                  marginTop: "4px",
                }}
              >
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Contact Address</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {datas?.map((agent, idx) => (
                    <tr key={idx}>
                      <th>{idx + 1}</th>
                      <td>{agent.name}</td>
                      <td>{agent.phone}</td>
                      <td>{agent.email}</td>
                      <td>{agent.address}</td>
                      <td className="text-center">
                        <Button
                          color="info"
                          onClick={() =>
                            navigate(`/superagenttable/view/${agent.id}`)
                          }
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Row>
      </Row>
    </Card>
  );
}
