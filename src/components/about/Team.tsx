import { team } from "@/static/team"
import { Section, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"

export const Team = ()=>{
    return(
         
      <Section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate professionals behind your exceptional rental experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-scale bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    )
}