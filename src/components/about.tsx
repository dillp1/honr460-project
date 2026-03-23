function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[75px] lg:px-[150px] gap-[40px] scroll-mt-[90px] leading-relaxed"
    >
      <div className="space-y-6">
        {/* About Us */}
        <div className="">
          <p className="text-[40px] font-semibold leading-snug mb-2">
            About This Page
          </p>
          <p className="text-[18px]">
            {/* TODO update the about section */}
            We are ResLife Organized Workers (ROW) — the Resident Assistant
            Union at Purdue University in Indiana. Our mission is to advocate
            for fair working conditions, adequate support, and equitable
            policies for all Resident Assistants (RAs). We recognize that living
            and working in the same environment as the students we serve places
            unique demands on RAs. By forming a union, we are creating a
            collective voice to push for meaningful change, ensuring that RAs’
            concerns are acknowledged, and fostering a healthier and more
            supportive campus community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
