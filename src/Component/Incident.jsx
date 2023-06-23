// import React, { useState } from 'react'
// import { Card, Col, Row } from 'reactstrap'
// import InputForm from './Component/InputForm'
// import { _post } from '../Utils/Helper'

// export default function Incident() {
//   const [form, setForm] = useState({
//     user_name: '',
//     type: '',
//     description: '',
//   })

//   const handleChange = ({ target: { name, value } }) => {
//     setForm((p) => ({ ...p, [name]: value }))
//     console.log(form)
//   }

//   const handleSubmit = () => {
//     _post(
//       'api/create_incident',
//       form,
//       (res) => {
//         setForm({
//           user_name: '',
//           type: '',
//           description: '',
//         })
//         alert('SuccessFul')
//         console.log(res)
//       },
//       (err) => {
//         console.log(err)
//       },
//     )
//   }

//   return (
//     <div>
//       <Card className="app_card dashboard_card m-0 p-0">
//         <Col md={12}>
//           <center>
//             <h4 className="app_title">INCIDENT </h4>
//           </center>
//         </Col>
//         <Row className="p-0 m-0">
//           <Col md={12}>
//             <Col md={6}>
//               <InputForm
//                 id="exampleSelect"
//                 label="Name"
//                 className="app_input"
//                 value={form.user_name}
//                 name="user_name"
//                 onChange={handleChange}
//               />
//             </Col>
//             <Col md={6}>
//               <label className="Label mt-2">Type</label>
//               <select
//                 id="exampleSelect"
//                 className="app_input"
//                 value={form.type}
//                 name="type"
//                 onChange={handleChange}
//               >
//                 <option>Select</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="others">Others</option>
//               </select>
//             </Col>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12}>
//             <Col md={6}>
//               <InputForm
//                 id="exampleSelect"
//                 label="Description"
//                 className="app_input"
//                 value={form.description}
//                 name="description"
//                 onChange={handleChange}
//               />
//             </Col>
//           </Col>
//         </Row>
//         <div className="mt-3">
//           <button 
//             className="app_button"
//             onClick={handleSubmit}
//         >Submit</button>
//         </div>
//       </Card>
//     </div>
//   )
// }

import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import useQuery, { _post } from '../Utils/Helper'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function Incident() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    user_name: '',
    type_of_incident: '',
    description: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }

  const handleSubmit = () => {
    _post(
      'api/create_incident',
      form,
      (res) => {
        setForm({
          user_name: '',
          type_of_incident: '',
          description: '',
        })
        alert('SuccessFul')
        console.log(res)
      },
      (err) => {
        console.log(err)
      },
    )
  }

  return (
    <div>
      <Card className="app_card shadow dashboard_card m-0 p-3 mt-2">
        <Row>
          <Col md={12} className="d-flex align-items-center">
            <h5 className="m-0">Incident</h5>
          </Col>
        </Row>
        <Row className="p-0 mt-3">
          <Col md={6}>
            <InputForm
              id="exampleSelect"
              label="Name"
              className="app_input"
              value={form.user_name}
              name="user_name"
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <InputForm
              id="exampleSelect"
              label="Type"
              className="app_input"
              value={form.type_of_incident}
              name="type_of_incident"
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <InputForm
              className="app_input"
              id="exampleSelect"
              label="Description"
              value={form.description}
              name="description"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="mt-3">
          <button 
            className="app_button"
            onClick={() => {
              handleSubmit();
              navigate('/incident')
            }}
        >Submit</button>
        </div>
      </Card>
    </div>
  )
}
