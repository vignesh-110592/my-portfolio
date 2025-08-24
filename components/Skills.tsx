export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-sm hover:bg-gray-300 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
