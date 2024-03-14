import React from 'react';
import MonthlyRevenueBarChart from './MonthlyRevenueBarChart';
import MonthlyTransactionLineChart from './MonthlyTransactionLineChart'
import { Card, Col, Container, Row } from 'reactstrap';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');


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
                    <Card className='shadow'>
                        <h1 className='text-center'>Monthly Revenue</h1>
                        <MonthlyRevenueBarChart data={monthlyRevenueData} />
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='shadow border'>
                        <h1 className='text-center'>Monthly Transactions</h1>
                        <MonthlyTransactionLineChart data={monthlyTransactionData} />
                    </Card>
                </Col>
            </Row>
            <hr />

            <button onClick={notify}>Make me a toast</button>
            <Toaster />
        </Container>
    );
};

export default App;
