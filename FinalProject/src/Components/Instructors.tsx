import React from 'react';

interface Instructor {
    id: number;
    name: string;
    role: string;
    image: string;
}

const INSTRUCTORS: Instructor[] = [
    {
        id: 1,
        name: "Alexander Bastian",
        role: "Expert Mobile Engineer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Labie Carthaline",
        role: "Marketing Specialist",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Jonathan Doe",
        role: "Financial Strategist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Sarasvati",
        role: "Financial Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    }
];

const InstructorCard: React.FC<{ instructor: Instructor }> = ({ instructor }) => (
    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-xl">

        <img
            src={instructor.image}
            alt={instructor.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>


        <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
            <h3 className="text-xl font-bold mb-1 tracking-tight">
                {instructor.name}
            </h3>
            <p className="text-sm text-gray-300 font-medium">
                {instructor.role}
            </p>
        </div>
    </div>
);

const Instructors: React.FC = () => {
    return (
        <div className="py-16 dark:text-white">
            <div className="max-w-7xl mx-auto px-6">

                <header className="mb-12 text-center md:text-left">
                    
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">ผู้สอนของเรา</h1>
                </header>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {INSTRUCTORS.map((inst) => (
                        <InstructorCard key={inst.id} instructor={inst} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;