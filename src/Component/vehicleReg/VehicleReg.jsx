import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { stateLga } from '../../assets/state_and_lgas'
import { _post } from '../../Utils/Helper'

export default function RegistrationTable() {

	const _form = {
		step: 0,
		engine_no: "",
		plate_no: "",
		manufacturer: '',
		manufacturing_date: '',
		purchase_date: "",
		state_registered: "",
		registered_lg: "",
		lga_reg_no: "",
		owners_name: "",
		owners_email: "",
		owners_phone: "",
		owners_state: "",
		owners_lga: "",
		owners_next_of_kin: "",
		owners_dob: "",
		owners_nin: "",
		owners_address: "",
		driver_name: "",
		driver_email: "",
		driver_phone: "",
		driver_state: "",
		driver_lga: "",
		driver_dob: "",
		driver_nin: "",
		driver_address: "",
		password: ""
	}

	const [form, setForm] = useState(_form)
	const [loading, setLoading] = useState(false)

	const handleChange = ({ target: { name, value } }) => {
		setForm((p) => ({ ...p, [name]: value }))
	}
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true);
		_post(
			"vehicles/registration",
			form,
			(res) => {
				setLoading(false);
				if (res.success) {
					alert("sucessful");
					console.log(form);
					setForm(_form);
				}
			},
			(err) => {
				setLoading(false);
				console.log(err);
			}
		);

	};

	const handleCopyOwner = () => {

	}

	return (
		<Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
			{/* {JSON.stringify({ form })} */}
			<Row>
				<Col md={12}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<h4 className="app_title">{form.step < 1 ? 'Vehicle Registeration' : form.step === 1 ? "Vehicle Owner Form" : "Vehicle Driver Form"}</h4>
						<button
							className="app_button"
							style={{
								width: 150,
								padding: 10,
								marginLeft: 15,
								color: '#000',
								borderRadius: 10,
							}}
							onClick={() => navigate("/Vehicleownertable")}
						>
							Back
						</button>
					</div>

					<hr />
				</Col>
				<Col md={12}>

					<Form onSubmit={handleSubmit} className='mx-auto'>
						{form.step < 1 ?
							<>
								<Row className='margin-bottom-input'>
									<Col md={6} className='first-col'>
										<FormGroup>
											<Label for="plate_no">
												Plate No
											</Label>
											<Input
												onChange={handleChange}
												id="plate_no"
												name="plate_no"
												value={form.plate_no}
												placeholder="Vehicle's Plate No"
												type="numbert"
												className="app_input"
											/>
										</FormGroup>
									</Col>
									<Col md={6}>
										<FormGroup>
											<Label for="engine_no">
												Engine No.
											</Label>
											<Input
												onChange={handleChange}
												id="engine_no"
												name="engine_no"
												value={form.engine_no}
												placeholder="Engine No."
												type="text"
												className="app_input"
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row className='margin-bottom-input'>

									<Col md={6} className='first-col'>
										<FormGroup>
											<Label for="manufacturer">
												Manufactururer
											</Label>
											<Input
												onChange={handleChange}
												id="manufacturer"
												name="manufacturer"
												value={form.manufacturer}
												type="text"
												className="app_input"
											/>
										</FormGroup>
									</Col>
									<Col md={6} className='first-col'>
										<FormGroup>
											<Label for="manufacturing_date">
												Manufacturing Date
											</Label>
											<Input
												onChange={handleChange}
												id="manufacturing_date"
												name="manufacturing_date"
												value={form.manufacturing_date}
												type="date"
												className="app_input"
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row className='margin-bottom-input'>
									<Col md={6} className='first-col'>
										<FormGroup>
											<Label for="state_registered">
												State Registred
											</Label>
											<Input
												onChange={handleChange}
												id="state_registered"
												name="state_registered"
												type="select"
												className="app_input"
												required
											>
												<option value={''}>
													Select State
												</option>
												{stateLga.map((item, idx) => <option key={idx}>
													{item.state}
												</option>)}

											</Input>
										</FormGroup>
									</Col>
									<Col md={6}>
										<FormGroup>
											<Label for="registered_lg">
												L.G.A. Registred
											</Label>
											<Input
												onChange={handleChange}
												id="registered_lg"
												name="registered_lg"
												type="select"
												className="app_input"
											>
												<option value={''}>
													--Select LGA--
												</option>
												{stateLga.filter(
													(item) => item.state === form.state_registered
												)[0]?.lgas?.map((lga, idx) => <option key={idx}>
													{lga}
												</option>)
												}
											</Input>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col md={6}>
										<FormGroup>
											<Label for="lga_reg_no">
												L.G.A. Reg. No.
											</Label>
											<Input
												onChange={handleChange}
												id="lga_reg_no"
												name="lga_reg_no"
												type="text"
												required
												value={form.lga_reg_no}
												className="app_input"
											/>
										</FormGroup>
									</Col>
									<Col md={6}>
										<FormGroup>
											<Label for="purchase_date">
												Purchase Date
											</Label>
											<Input
												onChange={handleChange}
												name="purchase_date"
												id="purchase_date"
												value={form.purchase_date}
												placeholder='Purchase Date'
												type="date"
												className="app_input"
											/>
										</FormGroup>
									</Col>
								</Row>

							</> : form.step === 1 ?
								<>
									<Row className='margin-bottom-input'>
										<Col md={6} className='first-col'>
											<FormGroup>

												<Label for="owners_name">
													Name
												</Label>
												<Input
													onChange={handleChange}
													id="owners_name"
													name="owners_name"
													value={form.owners_name}
													placeholder="Name of Vehicle owner"
													type="text"
													className="app_input"
												/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="owners_phone">
													Phone
												</Label>
												<Input
													onChange={handleChange}
													id="owners_phone"
													name="owners_phone"
													value={form.owners_phone}
													placeholder="+234-8100000000"
													type="tel"
													className="app_input"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row className='margin-bottom-input'>
										<Col md={6} className='first-col'>
											<FormGroup>

												<Label for="owners_dob">
													Owners Date of Birth
												</Label>
												<Input
													onChange={handleChange}
													id="owners_dob"
													name="owners_dob"
													value={form.owners_dob}
													placeholder="Name of Vehicle owner"
													type="date"
													className="app_input"
												/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="owners_next_of_kin">
													Next of kin
												</Label>
												<Input
													onChange={handleChange}
													id="owners_next_of_kin"
													name="owners_next_of_kin"
													value={form.owners_next_of_kin}
													placeholder="Next of kin"
													type="text"
													className="app_input"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row className='margin-bottom-input'>
										<Col md={6} className='first-col'>
											<FormGroup>
												<Label for="owners_address">
													Residential Address
												</Label>
												<Input
													onChange={handleChange}
													id="owners_address"
													name="owners_address"
													value={form.owners_address}
													type="text"
													className="app_input"
												/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="owners_email">
													email
												</Label>
												<Input
													onChange={handleChange}
													id="owners_email"
													name="owners_email"
													value={form.owners_email}
													placeholder="owneranization@fake.com"
													type="email"
													className="app_input"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row className='margin-bottom-input'>
										<Col md={6} className='first-col'>
											<FormGroup>
												<Label for="owners_state">
													State of residence
												</Label>
												<Input
													onChange={handleChange}
													id="owners_state"
													name="owners_state"
													type="select"
													className="app_input"
													required
												>
													<option value={''}>
														Select State
													</option>
													{stateLga.map((item, idx) => <option key={idx}>
														{item.state}
													</option>)}

												</Input>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="owners_lga">
													LGA of residence
												</Label>
												<Input
													onChange={handleChange}
													id="owners_lga"
													name="owners_lga"
													type="select"
													className="app_input"
												>
													<option value={''}>
														--Select LGA--
													</option>
													{stateLga.filter(
														(item) => item.state === form.owners_state
													)[0]?.lgas?.map((lga, idx) => <option key={idx}>
														{lga}
													</option>)
													}
												</Input>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md={6}>
											<FormGroup>
												<Label for="owners_nin">
													NIN
												</Label>
												<Input
													onChange={handleChange}
													name="owners_nin"
													id="owners_nin"
													value={form.owners_nin}
													type="number"
													className="app_input"
												/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="tin">
													Password
												</Label>
												<Input
													onChange={handleChange}
													id="password"
													name="password"
													value={form.password}
													type="password"
													className="app_input"
												/>
											</FormGroup>
										</Col>
									</Row>
								</>
								: <>
									<Row className='margin-bottom-input'>
										<Row>

											<Col md={9}>
												<h4 className='text-center'>If the vehicle owner is the Driver click <span onClick={handleCopyOwner} className='btn btn-sm inline btn-primary' style={{ display: 'inline' }}>Here</span></h4>
											</Col>

										</Row>
										<Col md={6} className='first-col'>
											<FormGroup>
												<Label for="driver_name">
													Driver Name
												</Label>
												<Input
													onChange={handleChange}
													id="Name"
													name="driver_name"
													value={form.driver_name}
													placeholder="Name of Vehicle driver"
													type="text"
													className="app_input"
												/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="driver_phone">
													Phone
												</Label>
												<Input
													onChange={handleChange}
													id="driver_phone"
													name="driver_phone"
													placeholder="+234-8100000000"
													type="tel"
													className="app_input"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row className='margin-bottom-input'>
										<Col md={6} className='first-col'>
											<FormGroup>
												<Label for="driver_address">
													Residential Address
												</Label>
												<Input
													onChange={handleChange}
													id="driver_address"
													name="driver_address"
													type="text"
													className="app_input"
												/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="driver_email">
													email
												</Label>
												<Input
													onChange={handleChange}
													id="driver_emailexample"
													name="driver_email"
													value={form.driver_email}
													placeholder="driveranization@fake.com"
													type="email"
													className="app_input"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row className='margin-bottom-input'>
										<Col md={6} className='first-col'>
											<FormGroup>
												<Label for="driver_state">
													State  of residence
												</Label>
												<Input
													onChange={handleChange}
													id="driver_state"
													name="driver_state"
													value={form.driver_state}
													type="select"
													className="app_input"
													required
												>
													<option value={''}>
														Select State
													</option>
													{stateLga.map((item, idx) => <option key={idx}>
														{item.state}
													</option>)}

												</Input>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="driver_lga">
													LGA of residence
												</Label>
												<Input
													onChange={handleChange}
													id="driver_lga"
													name="driver_lga"
													value={form.driver_lga}
													type="select"
													className="app_input"
												>
													<option value={''}>
														--Select LGA--
													</option>
													{stateLga.filter(
														(item) => item.state === form.driver_state
													)[0]?.lgas?.map((lga, idx) => <option key={idx}>
														{lga}
													</option>)
													}
												</Input>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md={6}>
											<FormGroup>
												<Label for="driver_nin">
													NIN
												</Label>
												<Input
													onChange={handleChange}
													id="driver_nin"
													name="driver_nin"
													value={form.driver_nin}
													type="number"
													className="app_input"
												/>
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="driver_dob">
													D.O.B
												</Label>
												<Input
													onChange={handleChange}
													id="driver_dob"
													name="driver_dob"
													value={form.driver_dob}
													type="date"
													className="app_input"
												/>
											</FormGroup>
										</Col>
									</Row>
								</>}
						<Row className="mt-3" style={{
							display: "flex",
							justifyContent: "space-between",
							alignContent: 'center',
							marginTop: 30,
						}}
						>
							{form.step > 0 ?
								<Col md={6} className='text-left'> <button
									className="app_button"
									style={{
										width: 150,
										marginLeft: 30,
										padding: 10,
										color: "",
										cursor: "pointer",
									}}
									onClick={() => setForm((p) => ({ ...p, step: 0 }))}
								>
									Prev
								</button></Col> : null}
							{form.step <= 2 ?
								<Col className='text-right'>
									<button
										className="app_button p-4"
										style={{
											width: 150,
											marginLeft: 30,
											padding: 10,
											color: "",
											cursor: "pointer",
										}}
										onClick={() => setForm((p) => ({ ...p, step: p.step + 1 }))}
									>
										Next
									</button>
								</Col>
								:
								<Col className='text-right'> <button
									className="app_button"
									style={{
										width: 150,
										marginLeft: 30,
										padding: 10,
										color: "",
										cursor: "pointer",
									}}
									onClick={handleSubmit}
								>
									Submit
								</button></Col>}
						</Row>
					</Form>
				</Col>
			</Row>
		</Card>
	)
}