import { Metadata } from "next";
import AICompanion from "@/components/ai-companion";

export const metadata: Metadata = {
  title: "AI Companion | Chat with Characters",
  description: "Chat with AI characters from the world of Eldoria or ask the author questions about writing and worldbuilding.",
};

export default function ChatPage() {
  return (
    <div className="container_mxd py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          AI Companion
        </h1>
        <p className="text-xl text-muted-foreground">
          Chat with characters from the books or ask the author questions
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <AICompanion />
        
        <div className="mt-8 bg-card rounded-lg p-6 border">
          <h3 className="font-serif text-xl font-bold mb-3">About this Feature</h3>
          <p className="text-muted-foreground mb-4">
            This AI companion has two modes:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex gap-2">
              <span>•</span>
              <span>
                <strong>Ask the Author</strong>: Chat with J.R. Writer about the writing process, worldbuilding choices, and upcoming projects.
              </span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>
                <strong>Chat with Character</strong>: Interact with Liora, the protagonist of the Storm Caller novel, to learn about her perspective on the events and world of Eldoria.
              </span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Note: This AI companion is for entertainment purposes and provides fictional responses based on the world of the Elemental Chronicles series.
          </p>
        </div>
      </div>
    </div>
  );
}