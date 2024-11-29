import { Brain, Edit, TrendingUp, BookOpen } from 'lucide-react'

export function AIFeatures() {
  const features = [
    { icon: Brain, title: 'AI-Powered Writing Assistance', description: 'Get smart suggestions and auto-completions as you write.' },
    { icon: Edit, title: 'Intelligent Editing', description: 'AI helps polish your content for maximum impact.' },
    { icon: TrendingUp, title: 'Trend Analysis', description: 'Stay ahead with AI-driven topic suggestions based on current trends.' },
    { icon: BookOpen, title: 'Automated Summarization', description: 'Create concise summaries of your longer posts with one click.' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-4 bg-white bg-opacity-20 p-4 rounded-lg">
          <feature.icon className="w-8 h-8" />
          <div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

