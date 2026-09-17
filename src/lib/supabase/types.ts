export type Vacancy = {
  id: string;
  title: string;
  slug: string;
  description: string;
  requirements: string | null;
  location: string | null;
  employment_type: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type Application = {
  id: string;
  vacancy_id: string;
  full_name: string;
  email: string;
  phone: string | null;
  message: string | null;
  cv_path: string | null;
  consent_given: boolean;
  created_at: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};
