
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Portafolio from './Components/Portafolio';
import Testimonials from './Components/Testimonials'
// import Contacts from './Components/Contacts'
import ContactsV2 from './Components/Contacts'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
    <Particles
    className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
     <Portafolio />
     <Testimonials/>
     <ContactsV2 />
     <Footer />
    </div>
     
  );
}

export default App;
