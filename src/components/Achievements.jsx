const Achievements = () => {
  const achievements = [
    {
      title: "Data Structure & Algorithms",
      category: "Certification",
      issuer: "Coding Ninjas",
      date: "2023",
      description: "Completed Data Structures & Algorithms and Full Stack Development certification programs.",
      icon: "💻",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Full Stack Development Completion & Generative AI Course",
      category: "Certification",
      issuer: "Udemy",
      date: "2025",
      description: "Completed a professional course in Generative AI covering advanced AI concepts and applications.",
      icon: "🤖",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "AWS Cloud Practitioner",
      category: "Certification",
      issuer: "Amazon Web Services",
      date: "2025",
      description: "Achieved AWS certification demonstrating foundational knowledge of cloud and deployment services.",
      icon: "☁️",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Star Coder",
      category: "Recognition",
      issuer: "CodeChef",
      date: "2025",
      description: "Earned the CodeChef Star Coder recognition for competitive programming performance.",
      icon: "⭐",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Paper Presentation – Biodegradable Plastic",
      category: "Academic",
      issuer: "CHEMCON 2022",
      date: "2022",
      description: "Presented research paper on biodegradable plastic at the international chemical engineering conference.",
      icon: "📄",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Volunteer – CHEMCON 2022",
      category: "Leadership",
      issuer: "IIChE",
      date: "2022",
      description: "Volunteered at CHEMCON 2022 supporting event operations and technical sessions.",
      icon: "🤝",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "AI in Water Purification",
      category: "Certification",
      issuer: "IndA Club",
      date: "2023",
      description: "Certified for work on applying AI technology in water purification systems.",
      icon: "💧",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Chess Tournament Management",
      category: "Leadership",
      issuer: "College Club",
      date: "2023",
      description: "Successfully organized and managed a chess tournament, ensuring smooth execution.",
      icon: "♟️",
      color: "from-gray-500 to-gray-600"
    },
    {
      title: "Inter-School Quiz Competition – Rank 2",
      category: "Competition",
      issuer: "Navals National Academy",
      date: "2017",
      description: "Secured 2nd rank in inter-school quiz competition showcasing general knowledge and teamwork.",
      icon: "🧠",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Best Improvement in Academic Performance",
      category: "Recognition",
      issuer: "Naval's National Academy",
      date: "2017",
      description: "Awarded for demonstrating significant improvement and commitment towards academics.",
      icon: "🎓",
      color: "from-red-500 to-red-600"
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Certification': 'bg-blue-100 text-blue-800',
      'Hackathon': 'bg-yellow-100 text-yellow-800',
      'Leadership': 'bg-green-100 text-green-800',
      'Recognition': 'bg-purple-100 text-purple-800',
      'Academic': 'bg-red-100 text-red-800',
      'Competition': 'bg-orange-100 text-orange-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Throughout my journey, I've been fortunate to receive recognition for my work and contributions. 
            Here are some highlights:
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="card p-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                  {achievement.category}
                </span>
              </div>
              
              {/* Title and Issuer */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-primary-600 font-semibold mb-2">
                {achievement.issuer}
              </p>
              
              {/* Date */}
              <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {achievement.date}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
