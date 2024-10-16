// import content
import { skills } from "../../content/Contents";


const Skills = () => {

    return (
        <div className="min-h-fit bg-theme_bg" id="skills">
            {/* content */}
            <div className="md:container px-5  py-14 mt-[80px]">
                <h1 className="title text-3xl ext-theme_bg_copy" data-aos="fade-down">
                    {skills.title}
                </h1>
                <h1 className="font-paprika text-3xl text-theme_bg_copy/60 pt-2" data-aos="fade-down">
                    {skills.subtitle}
                </h1>
                <br />
                <div className="flex flex-wrap gap-4 justify-center">
                    {skills.skills_content.map((skill, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 400}
                            className="sm:cursor-pointer bg-theme_fg
                       relative group w-full flex flex-col
                       p-5 max-w-sm rounded-md border-2 border-theme_border"
                        >
                            <div className="flex items-center gap-5">
                                <img
                                    src={skill.logo}
                                    alt="..."
                                    className="w-[50px] group-hover:scale-125 duration-200"
                                />
                                <h2 className="font-bold text-lg text-theme_fg_copy">{skill.name}</h2>
                            </div>
                            <p className="mt-4 text-sm text-theme_bg_copy">{skill.description}</p>
                            <div className="flex flex-wrap mt-4">
                                {skill.skills && skill.skills.map((sk, index) => (
                                    <div key={index} className="m-1">
                                        <button className="bg-primary text-primary_content px-3 py-1 hover:bg-primary_dark rounded-md w-auto">
                                            {sk}
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Skills;
