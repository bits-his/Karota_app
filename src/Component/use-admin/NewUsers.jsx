import React, { useState } from "react";
import { Card, Col, FormGroup, Input, Label, Row, Spinner } from "reactstrap";
import keke from "../../assets/keke_napep.png";
import { useNavigate } from "react-router-dom";
import { sidebarModules } from "./Module";
import { _post } from "../../Utils/Helper";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default () => {
    const [form, setForm] = useState({
        contact_name: "",
        user_name: "",
        contact_email: "",
        contact_phone: "",
        contact_password: "",
        vendor_id: "",
        accessTo: [],
        functionalities: [],
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false); 

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); 
    };

    const handleCheckboxChange = (item) => {
        if (form.accessTo.includes(item.title)) {
            let newList = form.accessTo.filter((a) => a !== item.title);
            setForm((prevForm) => ({ ...prevForm, accessTo: newList }));
            setIsOpen(!isOpen);
        } else {
            let newList = [...form.accessTo, item.title];
            setForm((prevForm) => ({ ...prevForm, accessTo: newList }));
            setIsOpen(!isOpen);
        }
    };

    const handleChildChechBoxChange = (item) => {
        if (form.functionalities.includes(item.label)) {
            let newList = form.functionalities.filter((a) => a !== item.label);
            setForm((prevForm) => ({ ...prevForm, functionalities: newList }));
            // setIsOpen(!isOpen);
        } else {
            let newList = [...form.functionalities, item.label];
            setForm((prevForm) => ({ ...prevForm, functionalities: newList }));
            // setIsOpen(!isOpen);
        }
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const createUser = () => {
        if (!validatePassword(form.contact_password)) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }
    
        setLoading(true);
        _post(
            `admin-user/create`,
            {
                ...form,
                accessTo: form.accessTo.join(","),
                functionalities: form.functionalities.join(","),
                password: form.contact_password,  // Change field name to 'password'
            },
            (resp) => {
                setLoading(false);
                if (resp.success) {
                    setForm({
                        contact_name: "",
                        user_name: "",
                        contact_email: "",
                        contact_phone: "",
                        contact_password: "",
                        vendor_id: "",
                        accessTo: [],
                        functionalities: [],
                    });
                    toast.success("Submit Successful");
                    navigate("/user-admin");
                } else {
                    toast.success("Submit Successful");
                    navigate("/user-admin");
                }
            },
            (error) => {
                setLoading(false);
                toast.error("Error submitting data");
                console.error("Submit error:", error);
            }
        );
    };
    

    const renderSubMenu = (subMenu) => {
        return subMenu.map((subItem, index) => (
            <div
                key={index}
                style={{
                    marginLeft: 20,
                }}
            >
                <label>
                    <input
                        className="pr-3"
                        type="checkbox"
                        checked={form.functionalities.includes(subItem.label)}
                        onChange={() => handleChildChechBoxChange(subItem)}
                    />
                    {subItem.label}
                </label>
            </div>
        ));
    };


    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <button
                    className="app_button"
                    style={{
                        width: "10rem",
                        padding: 10,
                        color: "#000",
                        borderRadius: 10,
                    }}
                    onClick={() => navigate("/user-admin")}
                >
                    Back
                </button>
                <h4 className="app_title vendor_title">
                    Create New User
                </h4>
                <img
                    src={keke}
                    alt="User DP"
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        marginRight: 10,
                    }}
                />
            </div>
            <hr />
            <>
            <Row className="margin-bottom-input">
                    <Col md={6} className="first-col">
                        <FormGroup>
                            <Label for="contact_name">Name <span style={{ color: "red" }}>*</span></Label>
                            <Input
                                onChange={handleChange}
                                id="contact_name"
                                name="contact_name"
                                value={form.contact_name}
                                placeholder="Name"
                                type="text"
                                className="app_input"
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="user_name">User Name <span style={{ color: "red" }}>*</span></Label>
                            <Input
                                onChange={handleChange}
                                id="user_name"
                                name="user_name"
                                value={form.user_name}
                                placeholder="User Name"
                                type="text"
                                className="app_input"
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="contact_phone">Contact Phone <span style={{ color: "red" }}>*</span></Label>
                            <Input
                                onChange={handleChange}
                                id="contact_phone"
                                name="contact_phone"
                                value={form.contact_phone}
                                placeholder="+234-8100000000"
                                type="tel"
                                className="app_input"
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="contact_email">Contact E-mail <span style={{ color: "red" }}>*</span></Label>
                            <Input
                                onChange={handleChange}
                                id="contact_email"
                                value={form.contact_email}
                                name="contact_email"
                                placeholder="organization@fake.com"
                                type="email"
                                className="app_input"
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="contact_password">Password <span style={{ color: "red" }}>*</span></Label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    onChange={handleChange}
                                    id="contact_password"
                                    name="contact_password"
                                    value={form.contact_password}
                                    placeholder="**********"
                                    type={passwordVisible ? "text" : "password"} // Toggle input type
                                    className="app_input"
                                    required
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />} {/* Toggle icons */}
                                </span>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <h4 className="app_title">Permission and Access to</h4>
                <Row>
                    {sidebarModules.map((item, index) => (
                        <Col md="4" key={index}>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={form.accessTo.includes(item.title)}
                                        onChange={() => handleCheckboxChange(item)}
                                    />
                                    <b>{item.title}</b>
                                </label>
                            </div>
                            {form.accessTo.includes(item.title)
                                ? item.subMenu && renderSubMenu(item.subMenu)
                                : ""}
                        </Col>
                    ))}
                </Row>
                <Row>
                    <center>
                        <button
                            className="app_button"
                            style={{
                                width: 150,
                                marginLeft: 0,
                                padding: 10,
                                color: "",
                                cursor: "pointer",
                            }}
                            onClick={createUser}
                            disabled={loading}
                        >
                            <span>
                                {loading ? (<Spinner color="primary"></Spinner>) : ("Submit")}
                            </span>
                        </button>
                    </center>
                </Row>
            </>
        </Card>
    );
}
