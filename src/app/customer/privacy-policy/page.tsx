import { LegalPage } from "@/components/Legal";
import { FiShield, FiLock, FiUserCheck } from "react-icons/fi";

export default function CustomerPrivacyPolicy() {
  const highlights = [
    {
      icon: <FiShield />,
      text: "We never sell your personal data to third parties for marketing purposes."
    },
    {
      icon: <FiLock />,
      text: "All payment information is encrypted and handled by PCI-compliant partners."
    },
    {
      icon: <FiUserCheck />,
      text: "You have the right to access, export, or delete your data at any time."
    }
  ];

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          At Jayple, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application and website. Our goal is to be transparent about the data we collect and why we need it to provide you with the best beauty service experience.
        </p>
      )
    },
    {
      id: "collection",
      title: "Information We Collect",
      content: (
        <>
          <p>
            We collect information you provide directly to us, such as when you create an account, book an appointment, or communicate with our support team.
          </p>
          <ul>
            <li><strong>Personal Details:</strong> Name, email address, and verified phone number.</li>
            <li><strong>Profile Information:</strong> Your beauty preferences, hair type, or skin concerns you've shared.</li>
            <li><strong>Payment Data:</strong> Securely tokenized credit card info (we do not store raw card numbers).</li>
            <li><strong>Location:</strong> Precise or coarse location to help you find local beauticians.</li>
          </ul>
        </>
      )
    },
    {
      id: "usage",
      title: "How We Use Data",
      content: (
        <>
          <p>
            The information we collect is used solely to provide and improve our services. Specifically:
          </p>
          <ul>
            <li>To facilitate bookings and secure payment processing.</li>
            <li>To send automated appointment reminders and status updates.</li>
            <li>To personalize your "Discover" feed with vendors that match your style.</li>
            <li>To detect and prevent fraudulent transactions or bot activity.</li>
          </ul>
        </>
      )
    },
    {
      id: "sharing",
      title: "Data Sharing",
      content: (
        <p>
          We share your contact information and booking details <strong>only</strong> with the specific Vendor you have booked an appointment with. We do not share your private data with other vendors or third-party advertisers. In some cases, we may share data with law enforcement if required by a valid legal order.
        </p>
      )
    },
    {
      id: "rights",
      title: "Your Rights & Choices",
      content: (
        <>
          <p>
            You have full control over your information. Within the app settings, you can:
          </p>
          <ul>
            <li>Request a copy of all data Jayple holds about you.</li>
            <li>Update or correct any personal information.</li>
            <li>Opt-out of all marketing emails and push notifications.</li>
            <li>Permanently delete your account and all associated data.</li>
          </ul>
        </>
      )
    },
    {
      id: "security",
      title: "Security Measures",
      content: (
        <p>
          We use industry-standard TLS encryption for all data in transit and AES-256 encryption for data at rest. While no system is perfectly secure, we conduct regular security audits and vulnerability assessments to protect our user base.
        </p>
      )
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <p>
          If you have any questions or concerns regarding this policy, please reach out to our Data Protection Officer at <strong>privacy@jayple.com</strong>.
        </p>
      )
    }
  ];

  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we protect your data and respect your privacy at every step of your beauty journey."
      lastUpdated="March 16, 2026"
      highlights={highlights}
      sections={sections}
    />
  );
}
