import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { AIMessageChunk, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { VITE_LLM_API_KEY } from "../settings";

export const useLlm = () => {

    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash",
        temperature: 0,
        apiKey: VITE_LLM_API_KEY || '',
    });

    const askToLLM = async (question: string): Promise<AIMessageChunk> => {
        const messages = [
            new SystemMessage("Respond the following sentence as if you were a bard in the language the user is speaking:"),
            new HumanMessage(question),
        ];
        const response = await model.invoke(messages);
        return response as AIMessageChunk;
    }

    return {
        askToLLM
    }

}