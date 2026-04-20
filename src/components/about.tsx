import { Lightbulb } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-[40px] scroll-mt-[90px] leading-relaxed"
    >
      <div className="space-y-6 px-6 md:px-[75px] lg:px-[150px]">
        <div className="rounded-2xl bg-[#e9eef5] p-6 md:p-12">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#11182c]/8 text-[#11182c]">
              <Lightbulb className="size-6" />
            </div>
            <p className="text-[40px] leading-none font-semibold">
              About The Project
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <div className="flex items-center gap-3 md:hidden">
                <p className="text-[18px]">
                  Hi! My name is Dill M., and I created this website from the
                  ground up.
                </p>
                <img
                  src="https://cdn.discordapp.com/avatars/244983930250330114/19785530ed4eff8510f2dd52dd8faecc.webp?size=240"
                  alt="Discord Avatar"
                  className="h-20 w-20 shrink-0 rounded-full object-cover shadow-md sm:h-24 sm:w-24"
                />
              </div>
              <p className="hidden text-[18px] md:block">
                Hi! My name is Dill M., and I created this website from the
                ground up.
              </p>
              <p className="text-[18px]">
                I am a student at Purdue Unviersity, and this project serves as
                both my final project for HONR 460: Technological Justice, as
                well as my Honors College curriculum scholarly project.
              </p>
              <p className="text-[18px]">
                The goal of this project is to provide a draft of a tool that
                could aid those in the Purdue community who are curious about
                the accessibility infrastructure on Purdue's campus. This
                documentation is critical for current and prospective students,
                faculty, and the greater community for understanding how to
                navigate campus before they arrive, or while on campus. This
                information could dictate decisions such as where a student
                chooses to live, or what a person's route from
                building-to-building might be.
              </p>
              <p className="text-[18px]">
                Though this project is just a draft created in ~2 months, I hope
                that it can serve as a base for disability advocacy at Purdue
                and other colleges nationwide.
              </p>
            </div>
            <div className="hidden shrink-0 md:flex md:justify-end">
              <img
                src="https://cdn.discordapp.com/avatars/244983930250330114/19785530ed4eff8510f2dd52dd8faecc.webp?size=240"
                alt="Discord Avatar"
                className="h-32 w-32 rounded-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
