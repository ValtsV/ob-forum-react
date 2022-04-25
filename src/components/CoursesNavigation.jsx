import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeHeader } from './ThemeHeader'

export const CoursesNavigation = () => {
  return (
    <div>
      <div>
        <Link to={'/temas'}>Página principal</Link>
        {/* probs pass which theme is on here */}
       
      </div>
      
    </div>
  )
}
