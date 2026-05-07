
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import { projects } from './projects'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-linear-to-b from-neutral-50 to-neutral-200/60'>
      <Header/>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </Container>
      <Footer/>
      
    </div>
  )
}

export default App