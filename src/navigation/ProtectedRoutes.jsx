import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({ user, children }) {
  return (
    user 
    ? 
        <Navigate to="/login" replace />
    :
        { children }
  )
}
