import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { mockUsers } from '@/lib/mockData'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    
    // Check if user already exists
    const userExists = mockUsers.find(user => user.email === email)
    if (userExists) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create new user
    const newUser = {
      _id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      bio: '',
    }
    mockUsers.push(newUser)

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

