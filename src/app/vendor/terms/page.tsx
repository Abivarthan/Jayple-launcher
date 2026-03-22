import { LegalPage } from "@/components/Legal";
import { FiUsers, FiAward, FiLogOut } from "react-icons/fi";

export default function VendorTerms() {
  const highlights = [
    {
      icon: <FiUsers />,
      text: "You operate as an independent contractor, not an employee of Jayple."
    },
    {
      icon: <FiAward />,
      text: "Maintain high service standards to remain active on the platform."
    },
    {
      icon: <FiLogOut />,
      text: "You can terminate your partnership at any time with standard notice."
    }
  ];

  const sections = [
    {
      id: "relationship",
      title: "Vendor Relationship",
      content: (
        <p>
          By registering as a Vendor, you enter into a partnership with Jayple as an <strong>independent professional</strong>. You control your schedule, your pricing, and your method of work. This agreement does not create an employer-employee relationship, a partnership, or a joint venture between you and Jayple.
        </p>
      )
    },
    {
      id: "responsibilities",
      title: "Listing Responsibilities",
      content: (
        <>
          <p>
            You are responsible for the accuracy of your profile. This includes:
          </p>
          <ul>
            <li>Keeping availability and calendar sync up to date.</li>
            <li>Providing clear and honest pricing for all service variants.</li>
            <li>Uploading only original portfolio work that you have the right to share.</li>
            <li>Maintaining all necessary professional licenses and insurance.</li>
          </ul>
        </>
      )
    },
    {
      id: "fees",
      title: "Platform Fees & Commission",
      content: (
        <p>
          Jayple provides the technology, marketing, and payment infrastructure for your business. In exchange, we charge a fixed commission percentage on every successful booking made through the platform. These fees are automatically deducted from the customer's payment before the remainder is deposited into your account.
        </p>
      )
    },
    {
      id: "standards",
      title: "Service Standards",
      content: (
        <p>
          To maintain the quality of the Jayple marketplace, Vendors must maintain a minimum average rating and low cancellation rate. Excessive negative feedback, "no-shows" for customers, or unprofessional conduct may lead to temporary suspension or permanent removal from the platform.
        </p>
      )
    },
    {
      id: "payouts",
      title: "Payments and Payouts",
      content: (
        <p>
          Payouts are initiated automatically after the successful completion of a service. Funds are typically available in your bank account within 3-5 business days, depending on your financial institution. Jayple is not responsible for delays caused by bank processing or incorrect banking information provided by the Vendor.
        </p>
      )
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content: (
        <p>
          You grant Jayple a non-exclusive, worldwide, royalty-free license to use your business name, logos, and portfolio images for the purpose of promoting your services and the Jayple platform in marketing campaigns, social media, and search engines.
        </p>
      )
    },
    {
      id: "termination",
      title: "Termination",
      content: (
        <p>
          Either party may terminate this agreement at any time. Upon termination, you must honor any existing bookings or provide full refunds to the affected customers. Jayple reserves the right to deactivate accounts immediately in cases of suspected fraud, illegal activity, or severe violations of our safety guidelines.
        </p>
      )
    }
  ];

  return (
    <LegalPage
      title="Vendor Terms"
      subtitle="The professional agreement for beauty and wellness experts joining the Jayple partner network."
      lastUpdated="March 16, 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
