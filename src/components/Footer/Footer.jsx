import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span>Durga Praveen Pechetti</span>
          <p>Video Editor & Graphics Designer </p> 
          <p> Creating compelling visual stories through expert editing and design.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="links-column">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Video Editing</a></li>
              <li><a href="#services">Color Grading</a></li>
              <li><a href="#services">Thumbnail Design</a></li>
              <li><a href="#services">Motion Graphics</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h3>Connect</h3>
            <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com/@CinemaCelluloid" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>

            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Durga Praveen Pechetti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;