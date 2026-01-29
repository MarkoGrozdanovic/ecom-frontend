import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const StripePayment = () => {
  return (
    <div>
      <Alert severity="warning" variant="filled" style={{ maxWidth: "400px" }}>
        <AlertTitle>Stripe Method Unavailable</AlertTitle>
        Stripe payment is not implemented yet. Please use another payment
        method.
      </Alert>
    </div>
  );
};

export default StripePayment;
