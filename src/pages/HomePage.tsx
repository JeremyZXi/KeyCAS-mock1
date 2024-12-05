import React from 'react';
import { ProjectCard } from '../components/ProjectCard';

// Temporary mock data - will be replaced with real data later
const mockProjects = [
  {
    id: '1',
    title: 'Community Garden Initiative',
    description: 'Creating a sustainable garden to provide fresh produce for local food banks.',
    category: 'Service',
    author: {
      id: '1',
      name: 'Jane Smith',
      email: 'jane@example.com'
    },
    content: '# Community Garden Initiative\n\nDetailed content here...',
    status: 'approved',
    createdAt: '2024-03-15',
    updatedAt: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735'
  },
  {
    id: '2',
    title: 'Student Art Exhibition',
    description: 'Organizing a virtual art exhibition showcasing student artwork.',
    category: 'Creativity',
    author: {
      id: '2',
      name: 'John Doe',
      email: 'john@example.com'
    },
    content: '# Student Art Exhibition\n\nDetailed content here...',
    status: 'approved',
    createdAt: '2024-03-14',
    updatedAt: '2024-03-14',
    imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b'
  }
] as const;

export function HomePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CAS Projects Gallery</h1>
        <p className="text-xl text-gray-600">
          Discover and explore Creativity, Activity, and Service projects from our community
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}