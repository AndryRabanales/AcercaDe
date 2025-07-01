export default function Team({ teamMembers, darkMode }) {
    return (
      <section id="nosotros" className="mb-40">
        <h2 className="text-5xl font-bold mb-10">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="w-full rounded-xl backdrop-blur-lg bg-white/10 p-6 shadow-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-blue-400">{member.role}</p>
              <p className="mb-4">
                {darkMode ? member.bio : <span className="text-gray-900">{member.bio}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="px-2 py-1 text-xs rounded bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  