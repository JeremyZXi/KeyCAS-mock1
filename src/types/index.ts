export interface CASProject {
  id: string;
  title: string;
  description: string;
  category: 'Creativity' | 'Activity' | 'Service';
  author: {
    id: string;
    name: string;
    email: string;
  };
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
}