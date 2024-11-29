'use client'

import { useState } from 'react'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'react-hot-toast'

export function AIWritingAssistant() {
  const [content, setContent] = useState('')
  const [enhancedContent, setEnhancedContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const enhanceContent = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Enhance the following blog post content: ${content}` }),
      })

      if (!response.ok) {
        throw new Error('Failed to enhance content')
      }

      const data = await response.json()
      setEnhancedContent(data.choices[0].message.content)
      toast.success('Content enhanced successfully!')
    } catch (error) {
      console.error('Error enhancing content:', error)
      toast.error('Failed to enhance content. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="original-content">Original Content</Label>
        <Textarea
          id="original-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          placeholder="Enter your blog post content here..."
        />
      </div>
      <AnimatedButton onClick={enhanceContent} disabled={isLoading || !content}>
        {isLoading ? 'Enhancing...' : 'Enhance Content with AI'}
      </AnimatedButton>
      {enhancedContent && (
        <div>
          <Label htmlFor="enhanced-content">Enhanced Content</Label>
          <Textarea
            id="enhanced-content"
            value={enhancedContent}
            readOnly
            rows={10}
          />
        </div>
      )}
    </div>
  )
}

