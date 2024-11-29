import { AIChat } from '@/components/ai-chat'

export default function AIAssistantPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gradient">AI Writing Assistant</h1>
      <AIChat />
    </div>
  )
}

