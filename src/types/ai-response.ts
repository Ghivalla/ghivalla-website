/**
 * AI Response Types
 *
 * These types define the structured responses from our AI service.
 * All responses follow this format to ensure type-safe rendering.
 */

/**
 * Possible actions the AI can trigger in the UI
 */
export type AIAction =
  | 'OPEN_TIMELINE_SHEET'
  | 'OPEN_PROJECTS_SHEET'
  | 'OPEN_ABOUT_SHEET'
  | 'OPEN_CONTACT_SHEET'
  | 'SHOW_FALLBACK_LINKS'
  | 'SHOW_TEXT_ONLY'

/**
 * Response types that determine how the UI renders
 */
export type AIResponseType =
  | 'text'       // Simple text message
  | 'timeline'   // Timeline data + modal trigger
  | 'projects'   // Projects data + modal trigger
  | 'about'      // About/skills data + modal trigger
  | 'contact'    // Contact form trigger
  | 'error'      // Error state with fallback links

/**
 * Core AI Response structure
 *
 * This is what /api/chat returns and what the chat UI expects.
 */
export interface AIResponse {
  type: AIResponseType
  message: string                  // Natural language message to display
  data?: unknown                   // Structured data (timeline, projects, etc.)
  action?: AIAction                // UI action to trigger
  metadata?: {
    source: 'ai' | 'pattern' | 'fallback'  // Which layer responded
    timestamp: number
    confidence?: number            // Pattern matching confidence (0-1)
  }
}

/**
 * Helper type for pattern matching results
 */
export interface PatternMatchResult {
  intent: string                   // Detected intent (e.g., "projects", "timeline")
  confidence: number               // Confidence score (0-1)
  keywords: string[]               // Matched keywords
}

/**
 * Type guard to check if response requires a modal
 */
export function isModalAction(action?: AIAction): boolean {
  const modalActions: AIAction[] = [
    'OPEN_TIMELINE_SHEET',
    'OPEN_PROJECTS_SHEET',
    'OPEN_ABOUT_SHEET',
    'OPEN_CONTACT_SHEET',
  ]
  return action ? modalActions.includes(action) : false
}
