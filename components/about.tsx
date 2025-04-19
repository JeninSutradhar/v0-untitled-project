import { Terminal, MapPin, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <Card className="bg-zinc-800/50 border-zinc-700 card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Terminal className="h-6 w-6 text-emerald-400 mt-1" />
                  <h3 className="text-xl font-semibold">My Journey</h3>
                </div>

                <p className="text-gray-300 mb-4">
                  Hi! I am Jenin, a Software Developer with foundational experience in Go, C/C++, Java, and Python, now
                  specializing in Rust and Blockchain development. Currently gaining hands-on experience as a Blockchain
                  Developer Intern at Symbola.
                </p>

                <p className="text-gray-300 mb-4">
                  I possess skills in cloud concepts, network security, web development (React, TypeScript), and
                  database management. I'm eager to leverage my growing expertise in Rust, Blockchain, and secure
                  software development in challenging, fast-paced environments.
                </p>

                <p className="text-gray-300">
                  My passion lies in building secure, efficient systems and exploring the cutting edge of blockchain
                  technology. I'm constantly learning and improving my skills to stay at the forefront of this rapidly
                  evolving field.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-zinc-800/50 border-zinc-700 card-hover h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Personal Info</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                    <span className="text-gray-300">Rajasthan, India</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-emerald-400" />
                    <a
                      href="mailto:j.sutradhar@symbola.io"
                      className="text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      j.sutradhar@symbola.io
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-400" />
                    <a href="tel:+919461942951" className="text-gray-300 hover:text-emerald-400 transition-colors">
                      +91 9461942951
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Current Focus</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span className="text-gray-300">Blockchain Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span className="text-gray-300">Rust Programming</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span className="text-gray-300">Smart Contracts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span className="text-gray-300">Web Development</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
