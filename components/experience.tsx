import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>

        <div className="mt-12 relative">
          <div className="timeline-line"></div>

          <div className="space-y-8">
            <div className="ml-8 relative">
              <div className="timeline-dot"></div>
              <Card className="bg-zinc-800/50 border-zinc-700 card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-emerald-400">Blockchain Developer (Internship)</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-400">Mar 2025 – Present</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">Symbola | Remote</span>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Developing and testing smart contracts using Rust</li>
                    <li>Working with blockchain technologies including Solana and Sui</li>
                    <li>Collaborating with team members to implement blockchain solutions</li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs">
                      Blockchain
                    </span>
                    <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs">Rust</span>
                    <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs">Solana</span>
                    <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs">Sui</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="ml-8 relative">
              <div className="timeline-dot"></div>
              <Card className="bg-zinc-800/50 border-zinc-700 card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-emerald-400">Internship Trainee</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-400">Mar 2024 – Mar 2024 (1 month)</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">Techon Dater Systems Pvt Ltd | Udaipur, Rajasthan</span>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Assisted in development tasks using C programming and data structures</li>
                    <li>Gained exposure to a professional software development environment and lifecycle</li>
                    <li>Collaborated with team members on various projects</li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs">
                      C (Programming Language)
                    </span>
                    <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs">
                      Data Structures
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
