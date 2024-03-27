import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
  
  <div className="max-w-5xl mx-auto py-20">
    <h1 className="text-7xl font-extrabold">Hello I'm <span className="bg-gradient-to-r from-orange-400 via-purple-600 bg-clip-text text-transparent">Usermind</span></h1>
    <p className="mt-3 text-xl text-gray-600">Check out my projects!</p>
    <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

    <div className="mt-5 grid grid-cols-3 gap-8">
    {projects.map((project) => (
      <div key={project._id} className="border border-gray-500 rounded-lg p-2 mt-2">
        
   
        <div className="font-extrabold">{project.name}</div>
        
        </div>
    ))}
    </div>
  </div>
  );
}
