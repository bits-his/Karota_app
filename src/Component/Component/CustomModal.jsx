import React from 'react'

const CustomModal = () => {
    return (
        <div>
            <header>
                <h4 className="app_title text-center"> Vendor Info </h4>
                <button
                    className="app_button text-right"
                    style={{
                        width: 150,
                        padding: 10,
                        marginLeft: 15,
                        color: "#000",
                        textAlign: "center"
                    }}
                >
                    Back
                </button>
            </header>
            <hr style={{ width: "100%" }} />
            <Row>
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
                                    }}
                                />
                                <Input
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        fontSize: 20,
                                        top: -5,
                                    }}
                                    name="filter"
                                    value={filter}
                                    type="text"
                                    className="app_input2"
                                    onChange={({ target: { value } }) => setFilter(value)}
                                    placeholder="Search: eg. Vendor Name | Vendor ID"
                                />
                            </div>
                        </Col>
                        <Label
                            onClick={getReg}
                            className="label_title1"
                            style={{ color: "#000", cursor: "pointer" }}
                        >
                            Search
                        </Label>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default CustomModal