import React, { useEffect, useState } from 'react';
import MonthlyRevenueBarChart from './MonthlyRevenueBarChart';
import MonthlyTransactionLineChart from './MonthlyTransactionLineChart'
import { Card, Col, Container, Row } from 'reactstrap';
import CustomDateRange from '../UI/CustomDateRange';
import moment from 'moment'
import { toParagraph } from '../../Utils/Helper';
import DashboardCard from "./CustomCard"
import Navlogout from '../Navlogout';

const App = () => {

    // date picker setup
    const today = moment();
    const [dateRange, setDateRange] = useState({
        type: "daily",
        month: today.format("MM"),
        quarter: Math.ceil(today.format("MM") / 3).toString(),
        year: today.format("YYYY"),
        from: today.format("YYYY-MM-DD"),
        to: today.format("YYYY-MM-DD"),
    });

    useEffect(() => {
        const today = moment().format("YYYY-MM-DD");
        const weekStart = moment().startOf("week").format("YYYY-MM-DD");
        const weekEnd = moment().endOf("week").format("YYYY-MM-DD");
        const monthStart = moment().startOf("month").format("YYYY-MM-DD");
        const monthEnd = moment().endOf("month").format("YYYY-MM-DD");
        const yearStart = moment().startOf("month").format("YYYY-MM-DD");
        const yearEnd = moment().endOf("month").format("YYYY-MM-DD");

        const qStart = moment(
            `'${dateRange.year}-${dateRange.quarter * 3 - 3}-01`
        ).format("YYYY-MM-DD");
        const qEnd = moment(`'${dateRange.year}-${dateRange.quarter * 3}-01`)
            .endOf("month")
            .format("YYYY-MM-DD");

        switch (dateRange.type) {
            case "daily":
                setDateRange({ ...dateRange, from: today, to: today });
                break;
            case "weekly":
                setDateRange({ ...dateRange, from: weekStart, to: weekEnd });
                break;
            case "monthly":
                setDateRange({ ...dateRange, from: monthStart, to: monthEnd });
                break;
            case "quarterly":
                setDateRange({ ...dateRange, from: qStart, to: qEnd });
                break;
            case "annually":
                setDateRange({ ...dateRange, from: yearStart, to: yearEnd });

            default:
                break;
        }
    }, [dateRange.type]);

    const handleChangeDate = ({ target: { name, value } }) => {
        switch (name) {
            case "month":
                const monthStart = moment(`'${dateRange.year}-${value}-01'`).format(
                    "YYYY-MM-DD"
                );
                const monthEnd = moment(`'${dateRange.year}-${value}'`)
                    .endOf("month")
                    .format("YYYY-MM-DD");

                setDateRange({
                    ...dateRange,
                    from: monthStart,
                    to: monthEnd,
                    month: value,
                });
                break;
            case "year":
                const yearStart = moment(`'${value}-01-01'`).format("YYYY-MM-DD");
                const yearEnd = moment(`'${value}-12'`)
                    .endOf("year")
                    .format("YYYY-MM-DD");

                setDateRange({
                    ...dateRange,
                    from: yearStart,
                    to: yearEnd,
                });
                break;

            case "quarter":
                let startMonth, endMonth;
                let selectedQuarter = value;
                switch (selectedQuarter) {
                    case "Q1":
                        startMonth = 1;
                        endMonth = 3;
                        break;
                    case "Q2":
                        startMonth = 4;
                        endMonth = 6;
                        break;
                    case "Q3":
                        startMonth = 7;
                        endMonth = 9;
                        break;
                    case "Q4":
                        startMonth = 10;
                        endMonth = 12;
                        break;
                    default:
                        // Handle unexpected quarter values
                        break;
                }
                const qStart = moment(`'${dateRange.year}-${startMonth}-01'`).format(
                    "YYYY-MM-DD"
                );
                const qEnd = moment(`'${dateRange.year}-${endMonth}'`)
                    .endOf("month")
                    .format("YYYY-MM-DD");

                setDateRange({
                    ...dateRange,
                    from: qStart,
                    to: qEnd,
                    quarter: selectedQuarter,
                });
                break;
            case "from":
                setDateRange({
                    ...dateRange,
                    from: moment(value).format("YYYY-MM-DD"),
                });
                break;

            case "to":
                setDateRange({
                    ...dateRange,
                    to: moment(value).format("YYYY-MM-DD"),
                });
                break;
            default:
                break;
        }
        setDateRange((prevDateRange) => ({
            ...prevDateRange,
            [name]: value,
        }));
    };

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
        <div>
            <div className="app_card dashboard_card shadow p-4 m-2 mt-2">
                <Row className='mx-0 pt-5' style={{ marginBottom: '30px' }}>
                    <Col md={12}>
                        <CustomDateRange
                            type={dateRange.type}
                            month={dateRange.month}
                            quarter={dateRange.quarter}
                            year={dateRange.year}
                            from={dateRange.from}
                            to={dateRange.to}
                            handleChangeDate={handleChangeDate}
                        />
                    </Col>
                </Row>

                <DashboardCard />

                <Row>
                    <Col md={6}>
                        <Card className='shadow'>
                            <h2 className='text-center'>{toParagraph(dateRange.type)} Revenue</h2>
                            <MonthlyRevenueBarChart type={dateRange.type} data={monthlyRevenueData} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='shadow border'>
                            <h2 className='text-center'>{toParagraph(dateRange.type)} Transaction count</h2>
                            <MonthlyTransactionLineChart type={dateRange.type} data={monthlyTransactionData} />
                        </Card>
                    </Col>
                </Row>
                <hr />


            </div>
        </div>
    );
};

export default App;
