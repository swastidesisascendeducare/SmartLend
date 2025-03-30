import React from "react";
// import groupPhoto from "../assets/group-photo.jpg"; // Add your group photo
// import swasti from "../assets/swasti.jpg";
// import sharvani from "../assets/sharvani.jpg";
// import trupti from "../assets/trupti.jpg";
// import vidhi from "../assets/vidhi.jpg";
import swasti from "../assets/gradient.png";
import sharvani from "../assets/gradient.png";
import trupti from "../assets/gradient.png";
import vidhi from "../assets/gradient.png";
import groupPhoto from "../assets/gradient.png";
import shashank from "../assets/gradient.png";

const mentor = {
  name: "Shashank Sharma",
  role: "Mentor",
  description:
    "Shashank provided invaluable guidance throughout the project, helping refine our approach in AI-driven loan evaluation, system architecture, and best development practices.",
  image: shashank,
};

const teamMembers = [
  {
    name: "Swasti Mishra",
    college: "IIT Dhanbad (Indian Institute of Technology, Dhanbad)",
    role: "Frontend Developer",
    description:
      "Swasti contributed to frontend development, enhancing UI/UX elements and ensuring a seamless user experience.",
    image: swasti,
  },
  {
    name: "Sharvani Pallempati",
    college: "IIT Guwahati (Indian Institute of Technology, Guwahati)",
    role: "Frontend Developer",
    description:
      "Sharvani led the integration of Generative AI for automated loan agreement drafting. She also developed key UI components.",
    image: sharvani,
  },
  {
    name: "Trupti Khodwe",
    college: "IIIT Bangalore (International Institute of Information Technology, Bangalore)",
    role: "Backend Developer",
    description:
      "Trupti contributed to database design and backend development, playing a crucial role in building the ML model for loan approval.",
    image: trupti,
  },
  {
    name: "Vidhi Arora",
    college: "IGDTUW (Indira Gandhi Delhi Technical University for Women)",
    role: "Backend Developer",
    description:
      "Vidhi worked on backend architecture and database management, collaborating on training the ML model for better risk evaluation in loan approvals.",
    image: vidhi,
  },
];

const MeetTheTeam = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      {/* Group Photo */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mt-2">The minds behind SmartLend</p>
        <img
          src={groupPhoto}
          alt="SmartLend Team"
          className="mt-6 mx-auto rounded-xl shadow-lg w-full max-w-4xl"
        />
      </div>

      {/* Mentor Section */}
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 p-8 rounded-xl shadow-md text-center mb-12">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
        />
        <h3 className="text-2xl font-bold text-gray-900">{mentor.name}</h3>
        <p className="text-primary font-semibold">{mentor.role}</p>
        <p className="text-gray-700 mt-2">{mentor.description}</p>
      </div>

      {/* Team Members */}
      <div className="max-w-6xl mx-auto space-y-16">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-64 h-64 object-cover rounded-2xl shadow-md"
            />

            {/* Description */}
            <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md max-w-lg">
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{member.college}</p>
              <p className="text-primary font-semibold mt-1">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
