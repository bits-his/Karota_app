import React, { useState } from "react";
import toast from "react-hot-toast";
import { InterswitchPay } from "react-interswitch";


const PaymentButton = ({
  addStyle = {},
  merchantCode = "60969",
  amount = 0,
  label = "", 
  email = "",
  user_id = "",
  name = "",
  reference_no = "",
}) => {
  let [refNo, setRefNo] = useState(null);
  let payItemID = "057502";
  const [checker, setChecker] = useState(false);

  const handleResponse = (response) => {
    if (response.desc === "Approved by Financial Institution") {
      fetch(
        `https://qa.interswitchng.com/collections/api/v1/gettransaction.json?merchantcode=MX${merchantCode}&transactionreference=${
          refNo || reference_no
        }&amount=${amount * 100}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((raw) => raw.json())
        .then((resp) => {
          if (resp) {
            console.log('resp',resp);
            if (resp.ResponseCode === "00") {
              _postApi(
                "/inter-response",
                { ...resp, ...response },
                (res) => {
                  setChecker(true);
                  if (res.successs) {
                    setChecker(true);
                  }
                },
                (err) => {
                  console.log(err);
                  toast.error("Error occured while saving the payment update ");
                }
              );
            }
          } else {
            console.log("Empty response");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Payment aborted 1!");
        });
    } else {
      toast.error("Payment aborted!");
      console.error(response);
    }
  };

  let new_amount = amount * 100;
  let input_amount = new_amount?.toString().split(".")[0];
  const paymentParameters = {
    merchantCode: `MX188877`,
    payItemID:"057502",
    customerEmail: email,
    redirectURL: `https://kekeapp.netlify.app/`,
    text: label,
    mode: "TEST", //"TEST",
    payRef: "WEB",
    customerName: name.replace("'", "&#x27;"),
    customerID: user_id?.toString(),
    currency: "566",
    transactionReference: reference_no,
    amount: input_amount,
    style: {
      // width: '200px',
      height: "35px",
      border: "none",
      color: "#fff",
      backgroundColor: "#449d44",
      padding: "6px 12px",
      width: "100%",
      borderRadius: "5px",
      ...addStyle,
    },
    callback: (response) => {
      handleResponse(response);
      console.log("response: ", response);
    },
  };
  //console.log(paymentParameters)
  return (
    <>
      <InterswitchPay {...paymentParameters} />
    </>
  );
};

export default PaymentButton;
