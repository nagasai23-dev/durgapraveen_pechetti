import Hero from '../../components/Hero/Hero.jsx';
import Skills from '../../components/Skills/Skills.jsx';
import Projects from '../../components/Projects/Projects.jsx';
import Process from '../../components/Process/Process.jsx';
import Tools from '../../components/Tools/Tools.jsx';
import Store from '../../components/store/store.jsx';
import Contact from '../../components/Contact/Contact.jsx';
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