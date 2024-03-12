import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'

export default function RegistrationTable() {
    const navigate = useNavigate()

    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
            <Row>
                <Col md={12}>
                    <div 
                        style={{ 
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h4 className="app_title">Vendor Registeration</h4>
                        <button 
                            className="app_button"
                            style={{ 
                                width: 150 ,
                                padding: 10,
                                marginLeft: 15,
                                color: '#000',
                                borderRadius: 10,
                            }}
                            onClick={() => navigate ("/superagent")}
                        >
                            Super agent
                        </button>
                    </div>
                    
                    <hr />
                </Col>
                <Col md={6}>
                    
                </Col>
            </Row>
        </Card>
    )
}