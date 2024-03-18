// import React, { useState, useCallback, useEffect } from "react";
// import { _get } from "../../Utils/Helper";
// import Select from "react-select";
// import { Button } from "reactstrap";
// import SuperDropdown from "./SuperDropdown";
// import AgentDropDown from "../vehicleOwner/AgentDropDown";

// function SuperAgentTopUp() {
//   const [form, setForm] = useState({});
//   const handleChange = ({ target: { name, value } }) => {
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const submitTopUp = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//       <div className="app_card dashboard_card m-0 p-0">
//         <h3 className="text-center fw-bold">Agent Top-Up</h3>

//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             fontWeight: '600',
//             fontSize: '18px',
//           }}
//         >Agent Top-Up</div>
       
//        <div
//           style={{
//             position: 'relative',
//             paddingLeft: '52px',
//             top: '30px',
//             // left: '20%',
//             margin: "0 auto",
//             width: '40%',
//             height: '65vh',
//             borderRadius: '8px',
//             border: '1px solid #f5c005',
//             boxShadow: '1px 2px #f5c005'
//           }}
//         >
//           <div>
//             <div 
//               style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 marginTop: '15px',
//                 marginBottom: '20px'
//                 }}>
//             <span style={{position: 'relative', display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '15px', left: '-36px',}}>Vendor:</span>
//                 <Select 
//                   value={selectedAgent}
//                   onChange={handleSelectChange}
//                   options={data}
//                   placeholder='Search for a vendor........'
//                   styles={{
//                     borderRadius: "none !important",
//                     border: "1px solid #f5c005 !important",
//                     marginBottom: "15px",
//                     width: '50%',
//                     padding: "8px",
//                   }}
//                   isLoading={loading}
//                />
//           </div>
//           <p style={{fontSize: '15px', fontWeight: '600', marginBottom: '20px'}}>Name : <span style={{marginLeft: '47px', fontWeight: '400'}}>Ibrahim Auwal</span></p>
//           <p style={{fontSize: '15px', fontWeight: '600', marginBottom: '20px'}}>ID : <span style={{marginLeft: '70px', fontWeight: '400'}}>12345</span></p>       
//        </div>


//         <div
//         style={{
//             position: 'relative',
//             top: '20px',            
//           }}
//         >
//            <div 
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginTop: '10px',
//             }}>
//             <span style={{position: 'relative', display: 'flex', alignItems: 'center', left: '-55px', marginRight: '5px', fontWeight: '600', fontSize: '15px'}}>Agent:</span>
//             <Select 
//               value={selectedAgent}
//               onChange={handleSelectSuperAgentChange}
//               options={agentData}
//               placeholder='Search for a agents...'
//               styles={{
//                 borderRadius: "none !important",
//                 border: "1px solid #f5c005 !important",
//                 marginBottom: "15px",
//                 width: '60%',
//                 padding: "8px",
//               }}
//               isLoading={loading}
//             />
//           </div>

//           <p style={{fontSize: '15px', fontWeight: '600', marginRight: '57px', marginBottom: '20px', marginTop: '20px'}}>Name : <span  style={{position: 'relative', left: '-17px', marginLeft:  '72px', fontWeight: '400'}}>qwerty</span></p>
//           <p style={{fontSize: '15px', fontWeight: '600', marginRight: '57px', marginBottom: '20px'}}>ID :  <span  style={{position: 'relative', marginLeft: '95px', fontWeight: '400', left: '-17px'}}>1233344455</span></p>
//         </div>


//         <span style={{position: 'relative', top: '2.2rem', display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '15px'}}>Balance:<span  style={{position: 'relative', marginLeft: '60px', fontWeight: '400', left: '-17px', }}>1233344455</span></span>
//         <div>
//             <span
//             style={{position: 'relative', top: '3rem', display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '15px'}}
//             >Amount</span>
//             <input 
//               placeholder='Enter amount here...'
//               className='app_input-topUp'
//               style={{
//               position: 'relative',
//               width: '50%',
//               left: '10.7rem',
//               top: '1.7rem',
//               height: '32px',
//               paddingLeft: '5px',
//               borderRadius: '5px',
//               border: '1px solid',
//               }}
//             />
//         </div>
//         <button
//           style={{
//             position: 'relative',
//                 top: '15px',
//                 borderRadius: '5px',
//                 border: '0px solid',
//                 height: '40px',
//                 backgroundColor: '#f5c005',
//                 left: '10.7rem',
//                 width: '150px',
//                 boxShadow: '1px 2px gray'
//           }}
//         >Submit</button>
//         </div>

//     </div>
//   )
// }

// export default SuperAgentTopUp;
