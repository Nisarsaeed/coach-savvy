import Spacer from "@/components/ui/spacer";
export default function TermsPage() {
  return (
    <div className="min-h-screen w-full">
      <Spacer />
      <div className="text-primary min-h-[40vh] flex flex-col justify-center items-center">
        <h3 className="font-semibold text-xl mb-3 uppercase text-center opacity-80">
          Read Carefully
        </h3>
        <h1 className="font-extrabold text-5xl mb-4 leading-normal text-center">
          Terms and Conditions
        </h1>
        <p className="w-1/2 text-center opacity-80">
          By using our website or purchasing our products, you acknowledge that
          you have read, understood, and agree to these Terms of Service.
        </p>
      </div>
      <div className="bg-accentBlue container text-primary mt-10 rounded-3xl py-10">
        1. Acceptance of Terms By using our website or purchasing any services from
        CS Digital Coaching, you confirm that you have read, understood, and
        agreed to these Terms. If you do not agree with any part of these Terms,
        you must not use our services.
        <br />
        <br />
        <br />
        2. Service Availability CS Digital Coaching strives to maintain continuous
        access to our website and services. However, we reserve the right to
        modify, suspend, or discontinue any aspect of our services without prior
        notice.
        <br />
        <br />
        <br />
        3. User Responsibilities Users are responsible for maintaining the
        confidentiality of their login credentials and for all activities
        conducted under their account. Any misuse or unauthorized access must be
        reported immediately.
        <br />
        <br />
        <br />
        4. Payment and Refund Policy All payments for digital coaching services are
        final. Refunds are only applicable in cases where services are not
        delivered as promised. Please review our Refund Policy for more details.
        <br />
        <br />
        <br />
        5. Intellectual Property All content, including text, images, and media, is
        the property of CS Digital Coaching and protected by intellectual
        property laws. You may not reproduce or redistribute any content without
        written permission.
        <br />
        <br />
        <br />
        6. Limitation of Liability CS Digital Coaching is not liable for any
        damages resulting from the use or inability to use our services. Users
        access and use our services at their own risk.
        <br />
        <br />
        <br />
        7.Modification of Terms CS Digital Coaching reserves the right to update
        or change these Terms at any time. Continued use of our services after
        modifications indicate acceptance of the revised Terms.
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
