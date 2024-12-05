import React from 'react';
import { useParams } from 'react-router-dom';
import { CASProject } from '../types';

// This will be replaced with actual API call
const getProject = (id: string): CASProject | undefined => {
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
      content: '# Community Garden Initiative\n\nOur team identified a need in our local community for fresh, healthy produce at food banks. We decided to create a sustainable garden that would not only provide fresh vegetables but also serve as an educational platform for sustainable farming practices.\n\n## Project Goals\n\n- Establish a productive community garden\n- Provide fresh produce to local food banks\n- Educate community members about sustainable gardening\n- Create a lasting impact on local food security\n\n## Implementation\n\nWe started by:\n1. Securing a plot of land\n2. Gathering necessary tools and supplies\n3. Recruiting volunteers\n4. Planning crop rotation and planting schedule\n\n## Impact\n\n- Produced over 500 lbs of fresh vegetables\n- Engaged 50+ community volunteers\n- Conducted 10 workshops on sustainable gardening\n- Established partnerships with 3 local food banks',
      status: 'approved',
      createdAt: '2024-03-15',
      updatedAt: '2024-03-15',
      imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735'
    }
  ];
  return mockProjects.find(p => p.id === id);
};

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id || '');

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
        />
      )}
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 text-sm rounded-full ${
            project.category === 'Creativity' ? 'bg-purple-100 text-purple-800' :
            project.category === 'Activity' ? 'bg-green-100 text-green-800' :
            'bg-orange-100 text-orange-800'
          }`}>
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span>By {project.author.name}</span>
          <span className="mx-2">•</span>
          <span>{new Date(project.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="prose max-w-none">
          {project.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}