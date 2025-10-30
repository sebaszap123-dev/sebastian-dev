// src/actions/portfolio.ts
'use server';

import { sendEmailGetInTouch } from '@/services/api-service';
import { ExperiencePost, Project, Certification } from '@/lib/types';
import { experiencesData, projectsData, certificationsData } from '@/lib/data';

export async function getExperiencePosts(): Promise<ExperiencePost[]> {
  return Promise.resolve(experiencesData);
}

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projectsData);
}

export async function getCertifications(): Promise<Certification[]> {
  return Promise.resolve(certificationsData);
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