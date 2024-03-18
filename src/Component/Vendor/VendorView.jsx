import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Input, Label } from 'reactstrap'

export default function VehicleView() {
  const navigate = useNavigate()
  // const [filter, setFilter] = useState("");
  // const [data, setData] = useState([]);
  // const getReg = useCallback(() => {
  //     setLoading(true); // Set loading to true before API call
  //     _get(`vendors?query_type=select-all&plate_no=${filter}`, (resp) => {
  //         setLoading(false); // Set loading to false after receiving response
  //         if (resp.success && resp.results) {
  //         setData(resp.results);
  //         }
  //     });
  // }, [filter]);
  // useEffect(() => {
  // getReg();
  // }, [getReg]);
  return (
    <div className=''>
      <header>
        <h4 className="app_title text-center"
          style={{
            fontWeight: '600',
            fontSize: '20px'
          }}
        > Vendor Info </h4>
        <button
          className="app_button text-right"
          style={{
            width: 150,
            padding: 10,
            marginLeft: 15,
            color: "#000",
            textAlign: "center"
          }}
          onClick={() => navigate("/vendorReg")}
        >
          Back
        </button>
      </header>
      <hr style={{ width: "100%" }} />
      <Col md={12}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Col md={12}>
            <div className="search1">
              <CiSearch
                style={{
                  fontSize: 30,
                  width: 25,
                  marginTop: 3,
                  color: "#000",
                }} />
              <Input
                style={{
                  position: "relative",
                  width: "100%",
                  fontSize: 20,
                  top: -5,
                  boxShadow: 0,
                }}
                name="filter"
                // value={filter}
                type="text"
                className="app_input2"
                onChange={({ target: { value } }) => setFilter(value)}
                placeholder="Search: eg. Vendor Name | Vendor ID"
              />
            </div>
          </Col>
          <Label
            // onClick={getReg}
            className="label_title1"
            style={{ color: "#000", cursor: "pointer" }}
          >
            Search
          </Label>
        </div>
      </Col>
      <Col md={12}>
        <Card className='container shadow app_card mt-5'
        style={{marginTop:'20px'}}>
          <div><h1>ID : </h1><span></span></div>
          <div><h1>Name : </h1><span></span></div>
          <div><h1>Phone Number : </h1><span></span></div>
          <div><h1>Vendor email : </h1><span></span></div>
          <div><h1>Office Address :</h1><span></span></div>
        </Card>
      </Col>
    </div>
  )
}
