import React from 'react';
import { Link } from 'react-router-dom';
import { CASProject } from '../types';

interface ProjectCardProps {
  project: CASProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <span className={`inline-block px-2 py-1 text-sm rounded-full mb-2 ${
          project.category === 'Creativity' ? 'bg-purple-100 text-purple-800' :
          project.category === 'Activity' ? 'bg-green-100 text-green-800' :
          'bg-orange-100 text-orange-800'
        }`}>
          {project.category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            By {project.author.name}
          </span>
          <Link
            to={`/project/${project.id}`}
            className="text-blue-600 hover:text-blue-800"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}