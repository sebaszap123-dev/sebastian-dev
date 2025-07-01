
interface TechData {
    achievements: string[];
    technologies: string[];
}
export interface ExperiencePost {
    id: number;
    title: string;
    company: string;
    description: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    technologies: TechData;
    employment_type: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    demo_url: string;
    github_url: string;
    technologies: string[];
    download_url: string | null;
    featured: boolean;
    start_date: string | null;
    end_date: string | null;
    live_site: boolean;
    details: string | null;

}
  

export interface Certification {
    id: number;
    title: string;
    issuer: string;
    issue_date: string;
    expiration_date: string;
    credential_id: string | null;
    credential_url: string | null;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    ok: boolean;
    msg: string;
}