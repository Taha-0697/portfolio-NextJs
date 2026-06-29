'use client'

import { useEffect, useMemo, useState } from 'react'
import { projects } from '@/data/projects'

export default function Projects () {
  const [currentFilter, setCurrentFilter] = useState('all')
  const filteredProjects =
    currentFilter === 'all'
      ? projects
      : projects.filter(project => project.categories?.includes(currentFilter))

  const [visibleCount, setVisibleCount] = useState(3)
  const visibleProjects = filteredProjects.slice(0, visibleCount)

  const categories = useMemo(() => {
    const counts = projects.reduce((acc, project) => {
      project.categories?.forEach(category => {
        acc[category] = (acc[category] || 0) + 1
      })

      return acc
    }, {} as Record<string, number>)

    return [
      { label: 'All', value: 'all', icon: '🎯', count: projects.length },
      ...Object.entries(counts).map(([category, count]) => ({
        label: category,
        value: category,
        icon:
          category === 'E-Commerce'
            ? '🛒'
            : category === 'Enterprise'
            ? '🏢'
            : category === 'Project Management'
            ? '📊'
            : category === 'Web Design'
            ? '🎨'
            : '📁',
        count
      }))
    ]
  }, [])

  return (
    <section className='section' id='projects'>
      <h2>Featured Projects</h2>

      <div className='project-filters'>
        <div className='filter-track'>
          {categories.map(category => (
            <button
              key={category.value}
              className={`filter-btn ${
                currentFilter === category.value ? 'active' : ''
              }`}
          
                onClick={() => setCurrentFilter(category.value)}
            >
              {category.icon} {category.label}
              <span className='filter-count'>{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className='projects-grid'>
        {visibleProjects.map(project => (
          <div key={project.id} className='project-card'>
            <div className='project-header'>
              <h3>{project.name}</h3>
              <div className='project-categories'>
                {project.categories?.map((category, index) => (
                  <span key={index} className='project-category'>
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <p>{project.description}</p>
            <ul className='project-features'>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className='project-tags'>
              {project.technologies.map(tech => (
                <span className='tech-tag' key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <a href={project.link} target='_blank' className='project-link'>
              View Project →
            </a>
          </div>
        ))}
      </div>

      {filteredProjects.length > 3 && (
        <div className='projects-actions'>
          {visibleCount < filteredProjects.length ? (
            <button
              className='view-more-btn'
              onClick={() =>
                setVisibleCount(count =>
                  Math.min(count + 3, filteredProjects.length)
                )
              }
            >
              View More ({filteredProjects.length - visibleCount} remaining)
            </button>
          ) : (
            <button
              className='view-more-btn'
              onClick={() => setVisibleCount(3)}
            >
              Show Less ↑
            </button>
          )}
        </div>
      )}
    </section>
  )
}

