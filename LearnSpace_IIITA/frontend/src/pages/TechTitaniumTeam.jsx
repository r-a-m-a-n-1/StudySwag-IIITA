import React from 'react';

const teamMembers = [
  {
    name: 'Raman Gautam',
    role: 'Developer',
    imgSrc: '/raman.jpg',
  },
  {
    name: 'Abhishek',
    role: 'Data Engineer, UI/UX Designer & Management',
    imgSrc: '/abhishek.jpg',
  },
];

const TechTitaniumTeam = () => {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center overflow-hidden relative">
      <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text animate-fadeIn">
        Platinum Team
      </h1>
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1 animate-fadeIn"
            >
              <div className="w-32 h-32 mx-auto mb-6">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-center">{member.name}</h2>
              <p className="text-center text-green-400 mt-2 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTitaniumTeam;
