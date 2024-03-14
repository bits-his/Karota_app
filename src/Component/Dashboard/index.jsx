import React from 'react';
import MonthlyRevenueBarChart from './MonthlyRevenueBarChart';
import MonthlyTransactionLineChart from './MonthlyTransactionLineChart'
import { Col, Container, Row } from 'reactstrap';

const App = () => {
    const monthlyRevenueData = [
        { month: 'January', total: 1000000 },
        { month: 'February', total: 1500000 },
        { month: 'March', total: 2000000 }
    ];

    const monthlyTransactionData = [
        { month: 'January', transaction_count: 200 },
        { month: 'February', transaction_count: 350 },
        { month: 'March', transaction_count: 150 },
        // Add more months as needed
    ];


    return (
        <Container>
            <Row>
                <Col md={6}>

                    <h1 className='text-center'>Monthly Revenue</h1>
                    <MonthlyRevenueBarChart data={monthlyRevenueData} />
                </Col>
                <Col md={6}>
                    <h1>Monthly Transaction Count</h1>
                    <MonthlyTransactionLineChart data={monthlyTransactionData} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
