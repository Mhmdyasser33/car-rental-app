import { stats } from "@/static/stats";

export const Stats = ()=>{
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="hover-scale">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}