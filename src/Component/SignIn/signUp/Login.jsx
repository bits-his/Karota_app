import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
// import {keke} from '../../../assets/keke_napep.png'
//import { motion } from "framer-motion"
import keke from "../../../assets/keke_napep.png";
// import kano from '../../../Images/kano.jpeg'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { toParagraph } from "../../../Utils/Helper";
import './login.css'
import { sidebarModules } from "../../use-admin/Module";

export default function Login() {
  const [form, setForm] = useState({
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user)
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const getDefaultRoute = (func) => {
    let allRoutes = [];

    sidebarModules.forEach((m) => {
      if (m.subMenu) {
        m.subMenu.forEach((s) =>
          allRoutes.push({ ...s, route: m.route })
        );
      } else {
        allRoutes.push({ title: m.title, path: m.route });
      }
    });

    let foundRoute = allRoutes.find((a) => a.title === func || a.label === func);

    return foundRoute;
  };

  const handleSubmit = () => {
    setLoading(true);
    dispatch(
      login(
        { username: form.email, password: form.password },
        (res) => {
          setLoading(false);
          console.log("gfsdasgasdgasdgfa",res);

          const firstItem = res.user.functionalities.split(",")[0];
          const route = getDefaultRoute(firstItem);

          if (route) {
            if (route.route) {
              navigate(route.route);
            } else {
              navigate(route.path);
            }
          } else {
            navigate("/");
          }
        },
        (err) => {
          setLoading(false);
          setError(err);
        }
      )
    );
  };



  return (
    <div
      className="login"
      style={{
        height: '100vh'
      }}
    >
      <div
        className="idc"
      >

        <CardBody
          className="login-form"
          style={{
            // border: "1px solid black",
            boxShadow: '1px 2px grey',
            borderRadius: "15px",

          }}
        >
          <div className="logo">
            <img
              src={keke}
              alt="kek Image"
            />
          </div>
          <Card>

            <Col component="form" role="form">
              <Col mb={12} className="mar-b">
                <Label>Email</Label>
                <Input
                  type="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Col>
              <Col mb={12} className="mar-b">
                <Label style={{}}>Password</Label>
                <Input
                  type="password"
                  label="Password"
                  //Variant="standard"
                  fullWidth
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Col>
              {/* {JSON.stringify(error)} */}
              <p className="mt-3 text-danger text-center">
                {" "}
                <b>{toParagraph(Object.keys(error)[0])}</b>{" "}
                <i>{Object.values(error)[0]}</i>
              </p>
              <Col mt={12} className="top-up-submit" mb={1}>
                <Button
                  style={{ outline: 'none', width: '150px', backgroundColor: 'white', borderRadius: '20px', color: '#000', fontWeight: '700', boxShadow: '1px 2px grey' }}
                  variant="gradient"
                  color="light"
                  fullWidth
                  onClick={handleSubmit}
                >
                  {loading ? <Spinner size={'sm'} /> : 'Sign In'}
                </Button>

              </Col>
            </Col>

          </Card>
        </CardBody>


      </div>
    </div>
  );
}
