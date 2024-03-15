import React from "react";
import {
    FormGroup, Input, Row,
    Col, Button, ButtonGroup
} from "reactstrap";
import moment from "moment";

export default function CustomDateRange({
    type = "",
    month = "",
    quarter = "",
    year = "",
    from = "",
    to = "",
    handleChangeDate = (f) => f,
}) {
    const dateRanges = [
        { type: "daily", label: "Daily" },
        { type: "weekly", label: "Weekly" },
        { type: "monthly", label: "Monthly" },
        { type: "quarterly", label: "Quarterly" },
        { type: "annually", label: "Annually" },
        { type: "custom", label: "Custom" },
    ];

    return (
        <Row >
            <Col md={6}>
                <ButtonGroup>
                    {dateRanges.map((r) => (
                        <Button
                            key={r.type}
                            size="md"
                            // color="secondary"
                            name={"type"} // Make sure 'name' is set to the expected value
                            value={r.type} // Make sure 'name' is set to the expected value
                            onClick={handleChangeDate}
                            color={type === r.type ? "warning" : "light"}
                        >
                            {r.label}
                        </Button>
                    ))}
                </ButtonGroup>
            </Col>
            <Col md={6}>
                {type === "monthly" && (
                    <Row>
                        <Col md={6} className="offset-md-6">
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="month"
                                    value={month}
                                    onChange={handleChangeDate}
                                >
                                    <option value="">Select Month</option>
                                    {moment.months().map((month, index) => (
                                        <option key={index} value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                )}
                {type === "quarterly" && (
                    <Row className="d-flex mx-0 px-0 flex-direction-row justify-content-between">
                        <Col md={6}>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="year"
                                    value={year}
                                    onChange={handleChangeDate}
                                >
                                    <option value="">Select Year</option>
                                    {Array.from(
                                        { length: new Date().getFullYear() - 2021 },
                                        (_, index) => 2022 + index
                                    ).map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input
                                    value={quarter}
                                    type="select"
                                    name="quarter"
                                    onChange={handleChangeDate}
                                >
                                    <option value={quarter} >Select Quarter</option>
                                    <option value="Q1">Q1</option>
                                    <option value="Q2">Q2</option>
                                    <option value="Q3">Q3</option>
                                    <option value="Q4">Q4</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                )}
                {type === "annually" && (
                    <Row>
                        <Col className="offset-md-6" md={6} >
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="year"
                                    value={year}
                                    onChange={handleChangeDate}
                                >
                                    <option value="">Select Year</option>
                                    {Array.from(
                                        { length: new Date().getFullYear() - 2021 },
                                        (_, index) => 2022 + index
                                    ).map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                )}
                {
                    ["custom", "daily", "weekly"].includes(type) && (
                        <Row className="d-flex mx-0 px-0 flex-direction-row justify-content-between">
                            <Col md={5}>
                                <FormGroup>
                                    <Input
                                        type="date"
                                        value={from}
                                        name="from"
                                        onChange={handleChangeDate}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={5}>
                                <FormGroup>
                                    <Input
                                        type="date"
                                        value={to}
                                        name="to"
                                        onChange={handleChangeDate}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    )
                }
            </Col >
        </Row >
    );
}
