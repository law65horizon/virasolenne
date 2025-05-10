"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Send, User, Wand2 } from "lucide-react";
import { siteConfig } from "@/config/site";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

type CompanionMode = "author" | "character";

export default function AICompanion() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI companion. You can ask me questions about the world of Eldoria, the books, or the creative process. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [mode, setMode] = useState<CompanionMode>("author");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let responseText = "";
      
      if (mode === "author") {
        responseText = generateAuthorResponse(input);
      } else {
        responseText = generateCharacterResponse(input);
      }
      
      const assistantMessage: Message = {
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const generateAuthorResponse = (userInput: string): string => {
    const responses = [
      "That's a great question about my writing process. I typically start with worldbuilding before diving into character development.",
      "The Crystal Kingdom was inspired by my travels through the Scottish Highlands and ancient crystalline formations I saw there.",
      "When creating magic systems, I always establish clear rules and limitations. Magic without constraints doesn't create interesting challenges for characters.",
      "I spend about a year researching before starting to write each novel. The worldbuilding phase is crucial for creating a consistent universe.",
      "The character of Liora in Storm Caller was partly inspired by my own experiences with social anxiety, though her magical abilities are unfortunately not something I share!",
      "I recommend aspiring fantasy writers read widely, both within and outside the genre. Some of my favorite craft books are Brandon Sanderson's lectures and Ursula K. Le Guin's essays.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const generateCharacterResponse = (userInput: string): string => {
    const responses = [
      "As the royal crystalmancer, I must maintain the balance of the Genesis Crystal. It's a responsibility I never asked for, but one I cannot escape.",
      "The shadows whisper secrets if you know how to listen. I've spent years training my ears to hear what others cannot.",
      "Storm magic requires both precision and passion. Too much control, and the winds won't respond; too little, and they'll consume you.",
      "The Ember Deserts may seem harsh, but there's a stark beauty in the glass formations that catch the light at dawn.",
      "I've traveled from the Floating Isles to the Crystal Palace, but nowhere feels quite like home anymore. Perhaps that's the price of the path I've chosen.",
      "The four elemental orders have maintained an uneasy peace for generations, but I fear that time is coming to an end.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const handleModeChange = (newMode: CompanionMode) => {
    setMode(newMode);
    
    // Add system message indicating mode change
    const modeChangeMessage: Message = {
      role: "assistant",
      content: newMode === "author" 
        ? "You're now chatting with J.R. Writer, the author behind the Elemental Chronicles. Feel free to ask about the writing process, worldbuilding decisions, or upcoming projects."
        : "You're now chatting with Liora, the Storm Caller from the Elemental Chronicles. Ask about her adventures, her perspective on the world of Eldoria, or her relationships with other characters.",
      timestamp: new Date(),
    };
    
    setMessages([modeChangeMessage]);
  };
  
  return (
    <div className="h-[700px] flex flex-col">
      <Tabs defaultValue="author" className="w-full" onValueChange={(value) => handleModeChange(value as CompanionMode)}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="author" className="flex items-center gap-2">
            <Wand2 className="h-4 w-4" />
            <span>Ask the Author</span>
          </TabsTrigger>
          <TabsTrigger value="character" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            <span>Chat with Character</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="author" className="mt-0 border-0 p-0">
          <div className="flex flex-col h-[640px]">
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="flex flex-col">
                    <div
                      className={`flex items-start gap-3 ${
                        message.role === "assistant" ? "justify-start" : "justify-end"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <Avatar>
                          <AvatarImage src={siteConfig.author_obj.image} />
                          <AvatarFallback>JW</AvatarFallback>
                        </Avatar>
                      )}
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          max-w-[80%] rounded-lg p-4
                          ${
                            message.role === "assistant"
                              ? "bg-card text-card-foreground"
                              : "bg-primary text-primary-foreground"
                          }
                        `}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        <div
                          className={`text-xs mt-1 ${
                            message.role === "assistant"
                              ? "text-muted-foreground"
                              : "text-primary-foreground/70"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </motion.div>
                      
                      {message.role === "user" && (
                        <Avatar>
                          <AvatarFallback>
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={siteConfig.author_obj.image} />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <Card className="max-w-[80%] p-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-secondary animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-3 w-3 rounded-full bg-secondary animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-3 w-3 rounded-full bg-secondary animate-bounce"></div>
                      </div>
                    </Card>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about the books, writing process, or worldbuilding..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="character" className="mt-0 border-0 p-0">
          <div className="flex flex-col h-[640px]">
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="flex flex-col">
                    <div
                      className={`flex items-start gap-3 ${
                        message.role === "assistant" ? "justify-start" : "justify-end"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <Avatar>
                          <AvatarImage src="https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                      )}
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          max-w-[80%] rounded-lg p-4
                          ${
                            message.role === "assistant"
                              ? "bg-card text-card-foreground"
                              : "bg-primary text-primary-foreground"
                          }
                        `}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        <div
                          className={`text-xs mt-1 ${
                            message.role === "assistant"
                              ? "text-muted-foreground"
                              : "text-primary-foreground/70"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </motion.div>
                      
                      {message.role === "user" && (
                        <Avatar>
                          <AvatarFallback>
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                      <AvatarFallback>LC</AvatarFallback>
                    </Avatar>
                    <Card className="max-w-[80%] p-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-secondary animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-3 w-3 rounded-full bg-secondary animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-3 w-3 rounded-full bg-secondary animate-bounce"></div>
                      </div>
                    </Card>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Chat with Liora, the Storm Caller..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}