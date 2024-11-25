const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-400 hover:underline"
        >
          your.email@example.com
        </a>
        <div className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
