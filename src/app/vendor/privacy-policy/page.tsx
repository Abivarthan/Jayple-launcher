import { LegalPage } from "@/components/Legal";
import { FiBriefcase, FiCreditCard, FiCheckCircle } from "react-icons/fi";

export default function VendorPrivacyPolicy() {
  const highlights = [
    {
      icon: <FiBriefcase />,
      text: "We collect professional data to verify your business and showcase your skills."
    },
    {
      icon: <FiCreditCard />,
      text: "Banking info is stored securely for payouts and never shared with users."
    },
    {
      icon: <FiCheckCircle />,
      text: "Your professional profile is visible to users to help grow your client base."
    }
  ];

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          This Vendor Privacy Policy describes how Jayple collects and uses information from our business partners and beauty professionals ("Vendors"). As a Vendor, your data needs are unique, involving both personal and professional information necessary to run a successful business on our platform.
        </p>
      )
    },
    {
      id: "business-data",
      title: "Business Info Collected",
      content: (
        <>
          <p>
            To maintain a high-quality marketplace, we collect specific business data:
          </p>
          <ul>
            <li><strong>Legal Identity:</strong> Business name, tax ID (if applicable), and professional licenses.</li>
            <li><strong>Professional Portfolio:</strong> Service descriptions, pricing, and images of your work.</li>
            <li><strong>Financial Details:</strong> Bank account numbers and routing info for direct deposit payouts.</li>
            <li><strong>Work Schedule:</strong> Your availability and studio location details.</li>
          </ul>
        </>
      )
    },
    {
      id: "usage",
      title: "How We Use Vendor Info",
      content: (
        <>
          <p>
            We use your data to power the marketplace and ensure trust:
          </p>
          <ul>
            <li>To verify your professional identity and business legitimacy.</li>
            <li>To rank and display your profile to relevant nearby customers.</li>
            <li>To process payouts and handle tax reporting requirements.</li>
            <li>To provide analytics on your business performance and booking trends.</li>
          </ul>
        </>
      )
    },
    {
      id: "public-profile",
      title: "Privacy vs. Visibility",
      content: (
        <p>
          While your banking and private contact info remains hidden, your professional profile (name, services, portfolio, location, and reviews) is public to facilitate bookings. By joining Jayple, you acknowledge that this professional data will be shared with potential customers across our web and mobile apps.
        </p>
      )
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: (
        <p>
          We retain your business information for as long as you maintain an active partner account. Even after account closure, we may be legally required to retain certain financial and tax records for up to 7 years to comply with local regulations.
        </p>
      )
    },
    {
      id: "compliance",
      title: "Security & Compliance",
      content: (
        <p>
          Vendors are expected to handle customer names and contact info obtained through Jayple in compliance with relevant data protection laws. Do not use customer data for marketing purposes outside of Jayple without their explicit "opt-in" consent.
        </p>
      )
    }
  ];

  return (
    <LegalPage
      title="Vendor Privacy Policy"
      subtitle="How we manage your professional data and business information as a partner."
      lastUpdated="March 16, 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
