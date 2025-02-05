import Footer from "./Footer"

const journeyData = [
  {
    week: "Week 1",
    title: "Initial Consult",
    description: "Review terms and sign contract with client. Present project timeline and clarify scope.",
  },
  {
    week: "January 2025: GDG Organizer",
    title: "GDG (Google Developers Group) Organizer",
    description:
      "Joined the GDG community as an organizer, fostering knowledge-sharing and networking among tech enthusiasts. Spearheaded meetups, workshops, and events, connecting developers with industry leaders to advance learning and innovation.",
  },
  {
    week: "January 2024: Software Engineer Role",
    title: "Software Engineer – 01 Founders",
    description:
      "Stepped into a full-time Software Engineer role, actively developing applications, optimizing systems, and contributing to innovative tech solutions. Engaged in DevOps, cloud computing, and security practices to enhance software scalability and performance.",
  },
  {
    week: "October 2023: Recognized Achievement",
    title: "Award-Winning Software Engineer Learner",
    description: "Received recognition for outstanding performance and contributions in software engineering. Demonstrated excellence in problem-solving, technical skills, and innovation, further solidifying expertise in the field.",
  },
  {
    week: "June 2023: First Industry Role",
    title: "Coding Assistant – 01 Founders",
    description:
      "Transitioned into a leadership role, mentoring aspiring developers while refining technical expertise. Provided guidance on software development, DevOps practices, and debugging strategies. Assisted in managing coding environments, fostering collaboration, and enhancing the learning experience for students.",
  },
  {
    week: "2022: Entry into Tech",
    title: "Software Engineer Learner – 01 Founders",
    description:
      "Embarked on a rigorous software engineering program at 01 Founders, mastering full-stack development, problem-solving, and industry best practices. Worked on real-world projects, building a strong foundation in coding, DevOps, and cybersecurity.",
  },
]

const Journey = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section id="journey" className="w-full py-24 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Client Project Timeline</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-24">
              {journeyData.map((item, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className="w-5/12 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 relative">
                    {/* Circle on the line */}
                    <div
                      className="absolute top-1/2 w-4 h-4 bg-[#003B49]  rounded-full"
                      style={{ [index % 2 === 0 ? "right" : "left"]: "-34px" }}
                    ></div>
                    <h3 className="text-xl font-semibold mb-2">{item.week}</h3>
                    <h4 className="text-lg font-medium mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export default Journey

