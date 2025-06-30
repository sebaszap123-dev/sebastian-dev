// src/actions/portfolio.ts
'use server';

import { fetchExperiencePosts, fetchProjects, fetchCertifications, sendEmailGetInTouch } from '@/services/api-service';
import { ExperiencePost, Project, Certification } from '@/lib/types';

export async function getExperiencePosts(): Promise<ExperiencePost[]> {
  try {
    const data = await fetchExperiencePosts();
    return data;
  } catch (error) {
    console.error('Error fetching experience posts:', error);
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await fetchProjects();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getCertifications(): Promise<Certification[]> {
  try {
    const data = await fetchCertifications();
    return data;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return [];
  }
}

export async function sendContactForm(formData: FormData) {
  const contactForm = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };
  const response = await sendEmailGetInTouch(contactForm);
  return { success: response.ok, data: response.msg };
}