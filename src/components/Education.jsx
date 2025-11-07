const Education = () => {
  const educationData = [
    {
      year: "2020 - 2024",
      degree: "Bachelor of Technology in Chemical Engineering",
      institution: "Harcourt Butler Technical University",
      location: "Kanput, Uttar Pradesh",
      score: "6.17/10",
      description: "I hold a degree in Chemical Engineering, where I studied core subjects like thermodynamics, reaction engineering, fluid mechanics, and process design. My coursework and projects helped me build strong analytical, problem-solving, and process optimization skills.",
      achievements: [
        "Chemcon 2022",
        "InDa Lab water purification using AI Technologies",
        "Research Assistant in AI Lab"
      ]
    },
    {
      year: "2016-2018",
      degree: "High Secondary Certificate",
      institution: "Navals National Academy",
      location: "Gorakhpur, Uttar Pradesh",
      score: "82%",
      description: "Completed Class 12 (HSC) under CBSE Board with a focus on Physics, Chemistry, and Mathematics (PCM).",
      achievements: [
        "2nd Rank Inter School Quiz Competiton",
        "Best academic performance certification"
      ]
    },
    {
      year: "2015-2016",
      degree: "Secondary School Certificate",
      institution: "St. Xavier's Public School",
      location: "Gorakhpur, Uttar Pradesh",
      score: "7.2/10",
      description: "Completed Class 10 under CBSE curriculum with consistent academic performance.",
      achievements: [
        "Recognized for regular schooling and punctuality",
        
      ]
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Education</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic path has been driven by curiosity and a passion for technology. 
            Here's where I've learned and grown:
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
          
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg -translate-y-2`}></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Year Badge */}
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {education.year}
                    </div>
                    
                    {/* Degree and Institution */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {education.degree}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-1">
                      {education.institution}
                    </h4>
                    <p className="text-gray-600 mb-3">
                      📍 {education.location}
                    </p>
                    
                    {/* GPA */}
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Score: {education.score}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {education.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-800">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {education.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Education */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Continuous <span className="gradient-text">Learning</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Online Courses",
                description: "IIT MADRAS, Udemy, and Coding Ninjas certifications in Data Structures & Algorithms and Full Stack Development",
                icon: "🎓"
              },
              {
                title: "Workshops & Bootcamps",
                description: "Intensive coding bootcamps and industry workshops",
                icon: "⚡"
              },
              {
                title: "Self-Study",
                description: "Regular practice on platforms like LeetCode and HackerRank",
                icon: "📚"
              }
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
