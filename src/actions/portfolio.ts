// src/actions/portfolio.ts
'use server';

import { fetchExperiencePosts, fetchProjects, fetchCertifications } from '@/services/api-service';
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