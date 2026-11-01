import Navbar from "@/components/Navbar";
import resume from "@/data/resume";
import SkillBar from "@/components/SkillBar";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="p-10">

        <h1 className="text-6xl font-bold text-cyan-400">
          {resume.name}
        </h1>

        <p className="text-2xl text-gray-400 mt-3">
          {resume.title}
        </p>

        <p className="mt-4 text-lg">
          Experience: {resume.experience}
        </p>

        <div className="mt-10">

          <h2 className="text-3xl font-bold text-cyan-400 mb-5">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {resume.skills.map((skill) => (
              <div
                key={skill}
                className="border border-cyan-500 rounded-xl p-4 text-center hover:bg-cyan-500/10"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

        <div className="mt-12">

          <h2 className="text-3xl font-bold text-cyan-400 mb-5">
            Certifications
          </h2>

          {resume.certifications.map((cert) => (
            <div
              key={cert}
              className="border border-cyan-500 rounded-xl p-4 mb-3"
            >
              {cert}
            </div>
          ))}

        </div>

        <div className="mt-14">

         <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              Skill Levels
          </h2>

          <SkillBar skill="AWS" percent={95} />
          <SkillBar skill="Azure" percent={95} />
          <SkillBar skill="Kubernetes" percent={92} />
          <SkillBar skill="Docker" percent={90} />
          <SkillBar skill="Terraform" percent={88} />
          <SkillBar skill="Python" percent={85} />

        </div>
        

      </div>

    </main>
  );
}
