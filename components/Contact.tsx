export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-center max-w-xl text-gray-700 mb-6">
        I’m always open to discussing new projects or opportunities. Feel free to reach out via email or connect with me on social media.
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
