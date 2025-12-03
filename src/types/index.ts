/**
 * Central type exports
 *
 * Import types from here instead of individual files:
 * import type { Project, AIResponse, ChatMessage } from '@/types'
 */

// AI Response types
export type {
  AIAction,
  AIResponseType,
  AIResponse,
  PatternMatchResult,
} from './ai-response'

export { isModalAction } from './ai-response'

// Data types
export type {
  Project,
  TimelineItem,
  Skill,
  About,
  ContactInfo,
  ProjectCategory,
  ProjectTechnology,
  TimelineCategory,
} from './data'

// Chat types
export type {
  MessageSender,
  MessageStatus,
  ChatMessage,
  ChatState,
  CreateMessageInput,
} from './chat'
