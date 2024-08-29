// import content
import { skills } from "../../content/Content";


const Skills = () => {

    return (
        <div className="min-h-fit bg-bg_light_primary" id="skills">
            {/* content */}
            <div className="md:container px-5  py-14 mt-[80px]">
                <h2 className="title text-3xl" data-aos="fade-down">
                    {skills.title}
                </h2>
                <h4 className="font-paprika text-3xl text-gray-500/50" data-aos="fade-down">
                    {skills.subtitle}
                </h4>
                <br />
                <div className="flex flex-wrap gap-4 justify-center">
                    {skills.skills_content.map((skill, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 400}
                            className="bg-white sm:cursor-pointer dark:bg-primary_dark/50
                       relative group w-full flex flex-col
                       p-5 max-w-sm rounded-md border-2 border-slate-200"
                        >
                            <div className="flex items-center gap-5">
                                <img
                                    src={skill.logo}
                                    alt="..."
                                    className="w-[50px] group-hover:scale-125 duration-200"
                                />
                                <h6 className="font-bold text-lg">{skill.name}</h6>
                            </div>
                            <p className="mt-3 text-sm">{skill.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Skills;
