import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Process from '../../components/Process/Process';
import Tools from '../../components/Tools/Tools';
import Store from '../../components/store/store';
import Contact from '../../components/Contact/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Skills />
      <Projects />
      <Process />
      <Tools />
      <Store />
      <Contact />   
    </div>
  );
};

export default Home;