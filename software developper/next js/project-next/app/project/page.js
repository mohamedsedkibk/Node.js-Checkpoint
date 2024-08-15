import React from 'react'


const project = () => {
  const projects = [
    {
      title: 'ToDo List Application',
      description: 'A simple ToDo list app where users can add, edit, and delete tasks. Implement features like task prioritization, reminders, and categories.',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting application that uses a public API to display current weather and forecasts based on user location or search queries.',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website to showcase your projects, skills, and contact information. Use modern web technologies and animations.',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-fledged e-commerce platform with features like product listings, shopping cart, payment gateway integration, and user authentication.',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard that aggregates data from various social media platforms. Implement features like analytics, post scheduling, and content management.',
    },
  ]
  return (
    <div>
       {console.log('projects', projects)}
      {projects.map((elm, i) => 
        <div key={i} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h1 style={{ marginBottom: '10px' }}>{elm.title}</h1>
          <p>{elm.description}</p>
        </div>
      )}
    </div>
  )
}

export default project