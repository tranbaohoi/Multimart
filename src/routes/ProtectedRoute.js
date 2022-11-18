import React, { Children } from 'react'
import { Navigate } from 'react-router'
import useAuth from '../custom-hooks/useAuth'

const ProtectedRoute = ({ children }) => {

    const { currentUser } = useAuth()
    return currentUser ? children : <Navigate to='login' />
}

export default ProtectedRoute