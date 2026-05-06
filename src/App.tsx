
import Container from './components/Container'
import ProjectCard from './components/ProjectCard'
import { projects } from './projects'

const App = () => {
  return (
    <div className='min-h-screen bg-neutral-300'>
      <Container>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
      
    </div>
  )
}

export default App