import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div>
            <Card className="bg-zinc-800/50 border-zinc-700 card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-emerald-400 mt-1" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-medium text-emerald-400">Diploma in Computer Science</h4>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-400">Current - 2nd year</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-2">Vidya Bhawan Polytechnic College, Udaipur, Rajasthan</p>
                    <p className="text-gray-400 text-sm">
                      Relevant Coursework: Data Structures and Algorithms, Operating Systems, Computer Networks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-zinc-800/50 border-zinc-700 card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-6">
                  <Award className="h-6 w-6 text-emerald-400 mt-1" />
                  <h3 className="text-xl font-semibold">Certifications & Achievements</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">
                      Winner, Spandan 2k24 Hackathon (Carbon Emission Footprint Tracker)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">50 Days of Problem Solving (LeetCode)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">Cryptography and Network Security (Saylor Academy)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">Java (Basic) Certificate (HackerRank)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">Python Certificate (HackerRank)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">Operating Systems (Saylor Academy)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">Python Certificate (Scaler.com)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 mt-2"></span>
                    <span className="text-gray-300">Solana Developer (HackQuest)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
