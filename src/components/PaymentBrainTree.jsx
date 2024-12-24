"use client";

import { useEffect, useState } from "react";
import dropin from "braintree-web-drop-in";

export default function PaymentComponent({onPaymentCompleted }) {
  const [braintreeInstance, setBraintreeInstance] = useState(undefined);

  useEffect(() => {
      const initializeBraintree = async () =>
        dropin.create(
          {
            // Get this from your backend instead of hardcoding
            authorization: await fetchClientToken(),
            container: "#braintree-drop-in-div",
          },
          function (error, instance) {
            if (error) {
              console.error(error);
            } else {
              setBraintreeInstance(instance);
            }
          }
        );

      if (braintreeInstance) {
        braintreeInstance.teardown().then(() => {
          initializeBraintree();
        });
      } else {
        initializeBraintree();
      }
    
  }, []);

  // Function to fetch client token from your backend
  const fetchClientToken = async () => {
    const response = await fetch("/api/payment/get-braintree-client-token");
    const { clientToken } = await response.json();
    return clientToken;
  };

  const handlePayment = async () => {
    if (braintreeInstance) {
      braintreeInstance.requestPaymentMethod(async (error, payload) => {
        if (error) {
          console.error(error);
        } else {
          const paymentMethodNonce = payload.nonce;

          try {
            const response = await fetch("/api/payment/process-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                nonce: paymentMethodNonce,
                quantity: 10, // Replace with actual amount
              }),
            });

            const result = await response.json();
            console.log(result);
            if (result.success) {
              alert("Payment successful!");
              if (onPaymentCompleted) {
                onPaymentCompleted();
              }
            } else {
              alert("Payment failed. Please try again.");
            }
          } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
          }
        }
      });
    }
  };

  return (
    <div >
      <div id="braintree-drop-in-div" />

      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        disabled={!braintreeInstance}
        onClick={handlePayment}
      >
        Pay
      </button>
    </div>
  );
}
