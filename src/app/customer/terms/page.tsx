import { LegalPage } from "@/components/Legal";
import { FiFileText, FiUser, FiCreditCard } from "react-icons/fi";

export default function CustomerTerms() {
  const highlights = [
    {
      icon: <FiFileText />,
      text: "By using Jayple, you agree to these legal terms and our community guidelines."
    },
    {
      icon: <FiUser />,
      text: "You are responsible for your account security and the content you post."
    },
    {
      icon: <FiCreditCard />,
      text: "Payments are final based on the vendor's specified cancellation policy."
    }
  ];

  const sections = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      content: (
        <p>
          By accessing or using the Jayple platform, you agree to be bound by these Terms & Conditions. These terms constitute a legally binding agreement between you and Jayple Technologies Inc. If you disagree with any part of these terms, you must immediately cease all use of our services.
        </p>
      )
    },
    {
      id: "service",
      title: "Description of Service",
      content: (
        <p>
          Jayple provides a marketplace platform that connects independent beauty and wellness professionals ("Vendors") with clients. <strong>Important:</strong> Jayple does not provide beauty services. All services are performed by independent contractors. We facilitate the discovery, booking, and payment processing, but the quality and execution of the service are the sole responsibility of the Vendor.
        </p>
      )
    },
    {
      id: "registration",
      title: "Account Registration",
      content: (
        <>
          <p>
            To access most features, you must register for an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security of your password and accept all risks of unauthorized access.</li>
            <li>Notify us immediately if you discover or suspect any security breaches related to the service.</li>
          </ul>
        </>
      )
    },
    {
      id: "bookings",
      title: "Bookings and Payments",
      content: (
        <>
          <p>
            When you book a service, you are entering into a direct contract with the Vendor.
          </p>
          <ul>
            <li><strong>Pricing:</strong> Prices are set by Vendors and are subject to change before a booking is confirmed.</li>
            <li><strong>Payments:</strong> You authorize Jayple to charge your chosen payment method for the total amount of the booking.</li>
            <li><strong>Taxes:</strong> Fees are inclusive of applicable sales taxes unless stated otherwise.</li>
          </ul>
        </>
      )
    },
    {
      id: "cancellations",
      title: "Cancellations & Refunds",
      content: (
        <p>
          Each Vendor maintains their own cancellation policy (e.g., 24-hour notice). It is your responsibility to review these policies before confirming a booking. Jayple reserves the right to charge a "No-Show" fee if you fail to arrive at your appointment without prior notice, as dictated by the Vendor's policy.
        </p>
      )
    },
    {
      id: "conduct",
      title: "User Conduct",
      content: (
        <p>
          You agree not to: (a) use the service for any illegal purpose; (b) harass, threaten, or defraud Vendors or other users; (c) attempt to bypass the Jayple booking system to pay Vendors directly; (d) post fake reviews or misleading content. Violation of these rules may result in immediate account termination.
        </p>
      )
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law, Jayple shall not be liable for any indirect, incidental, special, or consequential damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of the platform or the services provided by any Vendor.
        </p>
      )
    }
  ];

  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The rules and guidelines for using Jayple to discover and book world-class beauty services."
      lastUpdated="March 16, 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
