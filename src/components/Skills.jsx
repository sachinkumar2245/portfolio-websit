const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "☕", level: "Advanced" },
        { name: "JavaScript", icon: "🟨", level: "Advanced" },
        { name: "Python", icon: "🐍", level: "Intermediate" },
        { name: "C++", icon: "⚡", level: "Intermediate" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️", level: "Advanced" },
        { name: "HTML/CSS", icon: "🌐", level: "Advanced" },
        { name: "TailwindCSS", icon: "🎨", level: "Advanced" },
        { name: "TypeScript", icon: "📘", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢", level: "Advanced" },
        { name: "Express.js", icon: "🚂", level: "Advanced" },
        { name: "MongoDB", icon: "🍃", level: "Intermediate" },
        { name: "SQL", icon: "🗄️", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "📚", level: "Advanced" },
        { name: "Docker", icon: "🐳", level: "Intermediate" },
        { name: "AWS", icon: "☁️", level: "Beginner" },
        { name: "DSA", icon: "🧮", level: "Advanced" }
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-600 bg-green-100'
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-100'
      case 'Beginner':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I've developed a diverse skill set through my academic journey and personal projects. 
            Here's what I bring to the table:
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="card p-4 text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {skill.name}
                    </h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Additional <span className="gradient-text">Capabilities</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RESTful APIs", "GraphQL", "Microservices", "CI/CD", 
              "Testing", "Agile/Scrum", "Problem Solving", "Team Collaboration"
            ].map((skill, index) => (
                             <span 
                 key={index}
                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
               >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
