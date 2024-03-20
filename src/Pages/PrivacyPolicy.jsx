import Container from "../Components/Container"; // Assuming you have a Container component

const PrivacyPolicy = () => {
  return (
    <Container className="bg-white shadow-lg">
      <div className="py-20">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At EdTech, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our website and services.
        </p>
        <h2 className="text-xl font-bold mb-2">
          Information Collection and Use
        </h2>
        <p className="mb-4">
          We may collect personal information from you when you sign up for our
          newsletter, register for courses, or use our services. This
          information may include your name, email address, and other contact
          details.
        </p>
        <h2 className="text-xl font-bold mb-2">Data Security</h2>
        <p className="mb-4">
          We implement security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2 className="text-xl font-bold mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services that collect, monitor, and analyze
          data to improve our services. These third-party service providers have
          their own privacy policies governing the use of your information.
        </p>
        <h2 className="text-xl font-bold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We reserve the right to update or change our Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          updated Privacy Policy on our website.
        </p>
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          {
            <a
              href="mailto:edtech@support.com"
              className="text-[#00d] font-medium"
            >
              edtech@support.com
            </a>
          }
          .
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
