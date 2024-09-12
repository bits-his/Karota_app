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
import { _get, separator } from "../../Utils/Helper";
import { useLocation } from "react-router-dom";

export default function SuperAgentTable() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state && location.state.formData;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [query, setQuery] = useState("select-all");

  const search = () => {
    setQuery("search");
  };

  const getReg = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await _get(`superagent?query_type=${query}&name=${filter}`);
      setLoading(false);

      if (resp.success && resp.results) {
        setData(resp.results);
      } else {
        setError('No data found');
      }
    } catch (err) {
      setLoading(false);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [query, filter]);

  // const getReg = useCallback(() => {
  //   setLoading(true);
  //   _get(`superagent?query_type=${query}&name=${filter}`, (resp) => {
  //     setLoading(false);
  //     if (resp.success && resp.results) {
  //       setData(resp.results);
  //     }
  //   });
  // }, [query]);

  useEffect(() => {
    getReg();
  }, [getReg]);
  useEffect(() => {
    if (!filter) {
      setQuery("select-all");
    }
  }, [filter]);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleViewUser = (userData) => {
    setSelectedUser(userData);
    setIsModalOpen(true);
  };

  return (
    <Card className="app_card2 dashboard_card2 shadow p-4 m-2 mt-2">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="super_header"
      >
        <h4 className="app_title"> Registered SuperAgents </h4>
        <button
          className="app_button p_button_super "
          style={{
            width: 170,
            padding: 10,
            marginLeft: 15,
            color: "#000",
            borderRadius: 7,
          }}
          onClick={() => navigate("/superagent")}
        >
          Add SuperAgent +
        </button>
      </div>
      {/* <Row>
        <Col
          md={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 className="app_title">Registered SuperAgents </h4>
          <button
            className="app_button"
            style={{
              width: 160,
              padding: 10,
              marginLeft: 15,
              color: "#000",
              borderRadius: 7,
            }}
            onClick={() => navigate("/superagent")}
          >
            Add SuperAgent +
          </button>
        </Col>
      </Row> */}

      <hr />

      <div
        // className="mb-4"
        style={{ display: "flex", flexDirection: "row" }}
        className="super_header"
      >
        <div className="search1">
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
              // width: "100%",
              fontSize: 20,
              top: -5,
            }}
            name="filter"
            value={filter}
            type="text"
            className="app_input2"
            onChange={({ target: { value } }) => setFilter(value)}
            placeholder="Search for super agent"
          />
        </div>
        <Button
          onClick={search}
          className="label_title1"
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "none",
            outline: "0",
          }}
        >
          Search
        </Button>
      </div>

      {/* <Row>
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
        </Col> */}

      {loading ? (
        <Spinner
          color="warning"
          className="spinner"
          type="grow"
          style={{ margin: "20px auto" }}
        >
          ""
        </Spinner>
      ) : data.length === 0 ? (
        <Table
          bordered
          responsive
          style={{
            //   position: "relative",
            //   top: "10px",
            //   width: "95.3%",
            //   left: "32px",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Balance</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="text-center">
                No SuperAgent {filter} found
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <Table
          className="super_table"
          bordered
          responsive
          style={{
            // position: "relative",
            // top: "10px",
            // width: "95.3%",
            // left: "32px",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>S/N</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Phone</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Balance</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((agent, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{agent.name}</td>
                <td>{agent.phone}</td>
                <td>{agent.email}</td>
                <td className="text-right">{separator(agent.balance)}</td>
                <td className="text-center">
                  <Button
                    color="info"
                    onClick={() => navigate(`/superagenttopup`)}
                  >
                    Topup
                  </Button>{" "}
                  <Button
                    color="success"
                    onClick={() =>
                      navigate(`/superagenttable/view/${agent.super_agent_id}`)
                    }
                  >
                    View History
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* </Row> */}
    </Card>
  );
}
