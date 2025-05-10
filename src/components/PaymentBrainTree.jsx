'use client';

import { useEffect, useRef, useState } from 'react';
import dropin from 'braintree-web-drop-in';

export default function PaymentComponent({ onPaymentCompleted, amount }) {
  const containerRef = useRef(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        // 1. Fetch token
        const { clientToken } = await fetch('/api/payment/get-braintree-client-token').then(r => r.json());

        // 2. Ensure container is truly empty
        const container = containerRef.current;
        container.innerHTML = '';

        // 3. Create drop-in once
        const dropinInstance = await dropin.create({
          authorization: clientToken,
          container,
        });

        if (isMounted) setInstance(dropinInstance);
      } catch (err) {
        console.error('Braintree initialization error:', err);
      }
    })();

    return () => {
      isMounted = false;
      // 4. Teardown on unmount
      if (instance) {
        instance.teardown().catch(console.error);
      }
    };
  }, []); // run only on first mount

  const handlePayment = async () => {
    if (!instance) return;
    try {
      const { nonce } = await instance.requestPaymentMethod();
      const res = await fetch('/api/payment/process-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nonce, totalPrice: amount }),
      });
      const { success } = await res.json();
      if (success) onPaymentCompleted();
      else alert('Payment failed. Please try again.');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      {/* 5. This div must be empty before create */}
      <div ref={containerRef} />
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        disabled={!instance}
        onClick={handlePayment}
      >
        Pay
      </button>
    </div>
  );
}
