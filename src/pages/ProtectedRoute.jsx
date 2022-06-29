import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthState } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user}=useContext(AuthState)
    if(!user)return <Navigate to="/login"/>
  return children
}

export default ProtectedRoute
