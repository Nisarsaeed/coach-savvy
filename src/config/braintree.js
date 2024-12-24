import braintree from 'braintree';

export const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox, // 'Sandbox' or 'Production'
  merchantId: 'fdpwrsgpwnyw7p3s',
  publicKey: 'n3dm9pvvgsw4n4n4',
  privateKey: '9354534f276da432d48e21af8a697540',
});

