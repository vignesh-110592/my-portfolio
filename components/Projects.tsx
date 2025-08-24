export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Example Project */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-700">A personal portfolio website built with Next.js, Tailwind CSS, and Bootstrap.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">E-commerce App</h3>
          <p className="text-gray-700">An online store with product listing, shopping cart, and payment integration using React and Node.js.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">Blog Platform</h3>
          <p className="text-gray-700">A dynamic blogging platform with authentication and content management features.</p>
        </div>
      </div>
    </section>
  );
}
