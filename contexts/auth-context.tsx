"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem('auth-token')
    const isAuth = !!token
    setIsAuthenticated(isAuth)
    return isAuth
  }

  const login = async (email: string, password: string) => {
    // Here you would typically send a request to your backend to authenticate
    // For now, we'll just set a dummy token
    localStorage.setItem('auth-token', 'dummy-token')
    setIsAuthenticated(true)
    router.push('/dashboard')
  }

  const logout = async () => {
    localStorage.removeItem('auth-token')
    setIsAuthenticated(false)
    router.push('/')
  }

  const value = {
    isAuthenticated,
    login,
    logout,
    checkAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}