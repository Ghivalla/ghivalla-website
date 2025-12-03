/**
 * Chat Types
 *
 * Types specific to the chat interface and messaging system.
 */

import type { AIResponse } from './ai-response'

/**
 * Message sender type
 */
export type MessageSender = 'user' | 'ai'

/**
 * Message status
 */
export type MessageStatus = 'sending' | 'sent' | 'error'

/**
 * Chat message type
 */
export interface ChatMessage {
  id: string
  sender: MessageSender
  content: string
  timestamp: number                // Unix timestamp
  status?: MessageStatus           // Only for user messages
  aiResponse?: AIResponse          // Only for AI messages
}

/**
 * Chat state type
 */
export interface ChatState {
  messages: ChatMessage[]
  isLoading: boolean
  error: string | null
  activeSheet: string | null       // Which sheet is currently open
}

/**
 * Helper type for creating messages
 */
export type CreateMessageInput = Omit<ChatMessage, 'id' | 'timestamp'>
