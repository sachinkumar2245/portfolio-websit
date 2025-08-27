import { assets } from "../assets/assets"
const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="section-padding pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight flex flex-col">
                Hi, I'm{' '}
                <span className="gradient-text">Sachin Kumar</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Aspiring Software Engineer | Backend & Fullstack Developer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              I'm a passionate developer with a strong foundation in computer science and a love for creating efficient, scalable solutions. 
              With expertise in modern web technologies and a keen eye for clean code, I enjoy turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Picture Placeholder */}
                              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={assets.profile} // 👈 replace with your actual image name & path
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
