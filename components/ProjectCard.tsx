import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-lg aspect-[4/3] cursor-pointer">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-60"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-2 py-1 mb-2 text-xs font-medium tracking-wider border border-white/30 rounded-full backdrop-blur-md">
          {project.category}
        </span>
        <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center text-sm text-gray-300">
          <MapPin size={14} className="mr-1" />
          {project.location}
        </div>
      </div>

      {/* Hover Icon */}
      <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        <ArrowUpRight className="text-white" size={20} />
      </div>
    </div>
  );
};

export default ProjectCard;