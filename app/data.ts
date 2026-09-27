import type {Pillar} from '@/components/PillarCard';
import type {Project} from '@/components/ProjectCard';
import research from '@/content/research.json';
import projectContent from '@/content/projects.json';

export const pillars: Pillar[] = research.pillars;
export const projects: Project[] = projectContent.projects;
export type CaseStudyEntry = Project & {
  problem: string; data: string; method: string; demonstrated: string;
  limitations: string; partners: string; outputs: string;
};
export const caseStudies = projectContent.projects as CaseStudyEntry[];
