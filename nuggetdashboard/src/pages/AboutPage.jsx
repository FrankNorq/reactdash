import HelpLayout from "../routing/HelpLayout";

function AboutPage() {
  return (
    <div className="text-center justify-center ">
      <h2>About us</h2>
      <HelpLayout />
      <div className="text-gray-800 bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed mb-4">
          At Bitcoin Bros, we believe in the power of decentralized finance. Our
          mission is to educate and empower individuals to embrace the future of
          money through cryptocurrency.
          <br />
          <br />
          We aim to simplify the complexities of Bitcoin and make it accessible
          to everyone. Whether you are a seasoned investor or a curious
          newcomer, we are here to help guide you every step of the way.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our platform is built on the foundation of transparency and community.
          We strive to create a space where users can share knowledge, insights,
          and support each other in their Bitcoin journey.
          <br />
          <br />
          We understand that the world of cryptocurrency can be daunting, which
          is why we prioritize user-friendly resources that break down the
          barriers to entry.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          With a focus on security, our team works tirelessly to ensure that
          your Bitcoin experience is not only enriching but also safe. We
          implement the latest security measures to safeguard your investments
          and data.
          <br />
          <br />
          Our commitment to safety and excellence is unwavering, and we
          continually seek to improve our services for our community.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Join us as we navigate the exciting landscapes of cryptocurrency and
          discover the potential of Bitcoin. Together, we can unlock new
          opportunities and redefine how we think about finance.
          <br />
          <br />
          Let Bitcoin Bros be your trusted partner in exploring the limitless
          possibilities offered by the world of Bitcoin.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
