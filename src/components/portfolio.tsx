'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio')

  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'contacto']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack online store",
      image: "/placeholder.svg?height=600&width=600",
      tags: ["Next.js", "Stripe", "Tailwind"],
      size: "large"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather forecasts",
      image: "/placeholder.svg?height=300&width=300",
      tags: ["React", "OpenWeather API"],
      size: "small"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Productivity tool for teams",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Vue.js", "Firebase"],
      size: "medium"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Mobile app for workout routines",
      image: "/placeholder.svg?height=300&width=300",
      tags: ["React Native", "GraphQL"],
      size: "small"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics for multiple platforms",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["D3.js", "Node.js", "Express"],
      size: "medium"
    },
    {
      id: 6,
      title: "AI Chat Bot",
      description: "Intelligent customer service",
      image: "/placeholder.svg?height=300&width=300",
      tags: ["Python", "TensorFlow", "NLP"],
      size: "small"
    },
    {
      id: 7,
      title: "Virtual Reality Game",
      description: "Immersive 3D experience",
      image: "/placeholder.svg?height=600&width=600",
      tags: ["Unity", "C#", "Oculus SDK"],
      size: "large"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-mono">
              &lt;<span className="text-[#FF4B6E]">CristopherPaiva</span>/&gt;
            </span>
            <div className="hidden md:flex space-x-8">
              {['inicio', 'sobre-mi', 'proyectos', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm hover:text-[#FF4B6E] transition-colors ${
                    activeSection === item ? 'text-[#FF4B6E]' : 'text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="inicio" className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              ¡Hola! 👋, mi nombre es
              <br />
              <span className="text-[#FF4B6E]">Cristopher Paiva.</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Desarrollador web full-stack apasionado por crear experiencias digitales únicas y funcionales. 
              Especializado en React, Node.js y tecnologías emergentes.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white"
                onClick={() => scrollToSection('contacto')}
              >
                Contáctame
              </Button>
              <Button variant="outline" className="border-[#FF4B6E] text-[#FF4B6E] hover:bg-[#FF4B6E]/10">
                <Github className="mr-2 h-4 w-4" />
                Ver GitHub
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Cristopher Paiva"
              width={400}
              height={400}
              className="rounded-full"
            />
          </motion.div>
        </section>

        <section id="sobre-mi" className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-[#FF4B6E]">Sobre mí</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  Soy un desarrollador web full-stack con más de 5 años de experiencia en la creación de aplicaciones web y móviles innovadoras. Mi pasión por la tecnología y el aprendizaje continuo me impulsa a mantenerme actualizado con las últimas tendencias y mejores prácticas en el desarrollo de software.
                </p>
                <p className="text-gray-300 mb-4">
                  Me especializo en:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  <li>Desarrollo front-end con React y Next.js</li>
                  <li>Desarrollo back-end con Node.js y Express</li>
                  <li>Bases de datos SQL y NoSQL</li>
                  <li>Arquitectura de microservicios y serverless</li>
                  <li>Integración y despliegue continuo (CI/CD)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#FF4B6E]">Habilidades técnicas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'MongoDB', 'AWS'].map((skill) => (
                    <div key={skill} className="bg-gray-800 rounded-full px-4 py-2 text-center">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="proyectos" className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-[#FF4B6E]">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-xl bg-gray-900 transition-all hover:scale-105
                    ${project.size === 'small' ? 'md:col-span-1 row-span-1' : 
                      project.size === 'medium' ? 'md:col-span-2 row-span-1' : 
                      'md:col-span-2 row-span-2'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-[#FF4B6E]/20 text-[#FF4B6E] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contacto" className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-[#FF4B6E]">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-400 mb-8">
                  ¿Tienes un proyecto en mente o simplemente quieres charlar? No dudes en contactarme. 
                  Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Contact illustration"
                  width={300}
                  height={300}
                />
              </div>
              <form className="space-y-6">
                <Input
                  placeholder="Nombre"
                  className="bg-transparent border-[#FF4B6E] focus-visible:ring-[#FF4B6E]"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-[#FF4B6E] focus-visible:ring-[#FF4B6E]"
                />
                <Textarea
                  placeholder="Mensaje"
                  className="bg-transparent border-[#FF4B6E] focus-visible:ring-[#FF4B6E] min-h-[150px]"
                />
                <Button className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90">
                  Enviar
                </Button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2023 Developed by Cristopher Paiva.
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/cristopherpds" target='_blank' className="text-gray-400 hover:text-[#FF4B6E]">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/pdscristopher/" target='_blank' className="text-gray-400 hover:text-[#FF4B6E]">
                <Linkedin />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&josuepaiva7@gmail.com"  target='_blank' className="text-gray-400 hover:text-[#FF4B6E]">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

