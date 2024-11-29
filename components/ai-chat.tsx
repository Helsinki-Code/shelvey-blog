'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function AIChat() {
  const [input, setInput] = useState('')
  const [conversation, setConversation] = useState<{ role: 'user' | 'ai'; content: string }[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user' as const, content: input }
    setConversation([...conversation, userMessage])
    setInput('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      })

      if (!response.ok) throw new Error('Failed to generate response')

      const data = await response.json()
      const aiMessage = { role: 'ai' as const, content: data.choices[0].message.content }
      setConversation([...conversation, userMessage, aiMessage])
    } catch (error) {
      console.error('Error:', error)
      // Handle error (e.g., show error message to user)
    }
  }

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 h-96 overflow-y-auto">
        {conversation.map((message, index) => (
          <div key={index} className={`mb-2 ${message.role === 'ai' ? 'text-blue-600' : 'text-green-600'}`}>
            <strong>{message.role === 'ai' ? 'AI: ' : 'You: '}</strong>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the AI assistant..."
          className="flex-grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}

