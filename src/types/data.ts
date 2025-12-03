/**
 * Data Types
 *
 * These types define the structure of our portfolio data.
 * They match the JSON files in /data/json/
 */

/**
 * Project type
 */
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]           // e.g., ["React", "TypeScript", "Tailwind"]
  category: string                 // e.g., "Web App", "Mobile", "AI"
  image?: string                   // Path to screenshot
  images?: string[]                // Multiple screenshots
  demoUrl?: string                 // Live demo link
  githubUrl?: string               // GitHub repo link
  highlights: string[]             // Key achievements/features
  startDate: string                // ISO date string
  endDate?: string                 // ISO date string (undefined = ongoing)
  featured: boolean                // Show in featured projects
}

/**
 * Timeline item type
 */
export interface TimelineItem {
  id: string
  year: number
  month?: number                   // 1-12 (optional for events spanning a year)
  title: string
  company?: string                 // Company/organization name
  role?: string                    // Job title or role
  description: string
  achievements?: string[]          // Bullet points of achievements
  technologies?: string[]          // Technologies used
  category: 'work' | 'education' | 'personal' | 'achievement'
  icon?: string                    // Icon name or emoji
  featured: boolean                // Highlight this item
}

/**
 * Skill type
 */
export interface Skill {
  id: string
  name: string
  category: 'language' | 'framework' | 'tool' | 'soft-skill'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
  icon?: string                    // Icon name or path
  description?: string
}

/**
 * About data type
 */
export interface About {
  name: string
  title: string                    // e.g., "Front-End Developer"
  bio: string                      // Short bio (1-2 sentences)
  longBio: string                  // Full bio (multiple paragraphs)
  location: string
  languages: string[]              // Spoken languages
  interests: string[]              // Personal interests
  profileImage?: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
    website?: string
  }
}

/**
 * Contact info type
 */
export interface ContactInfo {
  email: string
  phone?: string
  availability: 'available' | 'open-to-offers' | 'not-available'
  preferredContact: 'email' | 'phone' | 'linkedin'
  timezone: string                 // e.g., "Europe/Paris"
  responseTime: string             // e.g., "within 24 hours"
}

/**
 * Helper type for filtering projects
 */
export type ProjectCategory = Project['category']
export type ProjectTechnology = string

/**
 * Helper type for grouping timeline items
 */
export type TimelineCategory = TimelineItem['category']
