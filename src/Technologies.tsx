import { TECH_STACK } from "@/constants/techstacks";

const Technologies = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TECH_STACK.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="group flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tech.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {tech.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group/item"
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-12 h-12 object-contain mb-2 group-hover/item:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <p className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Technologies;
