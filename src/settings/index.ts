
export const LANGCHAIN_API_KEY = import.meta.env.VITE_LANGCHAIN_API_KEY as string
export const VITE_LLM_API_KEY = import.meta.env.VITE_LLM_API_KEY as string
if (!LANGCHAIN_API_KEY) {
  throw new Error('VITE_LANGCHAIN_API_KEY environment variable is required')
}