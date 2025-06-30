// src/services/api-service.ts
import { Certification, ContactForm, ContactResponse, ExperiencePost, Project } from '@/lib/types';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL; 

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});


export const fetchExperiencePosts = async () => {
  const response = await apiClient.get<ExperiencePost[]>('/experiences');
  return response.data;
};

export const fetchProjects = async () => {
  const response = await apiClient.get<Project[]>('/projects');
  return response.data;
};

export const fetchCertifications = async () => {
  const response = await apiClient.get<Certification[]>('/certifications');
  return response.data;
};

export const fetchCV = async () => {
  const response = await apiClient.get<Blob>('/cv/download', {
    responseType: 'blob',
  });
  return response.data;
};

export const sendEmailGetInTouch = async (contactForm: ContactForm) => {
  const response = await apiClient.post<ContactResponse>('/contact', contactForm);
  return response.data;
};