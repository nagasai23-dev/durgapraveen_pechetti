import './About.css';
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <h1 className="fade-in" ref={addToRefs}>About Me</h1>
          <p className="subtitle fade-in-delay" ref={addToRefs}>
            Durga praveen Pechetti — Video Editor & Graphic Designer
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content slide-in-left" ref={addToRefs}>
            <h2>My Story</h2>
            <p>
              I'm a passionate and skilled video editor and graphic designer with 3 years of hands-on experience in creating compelling visuals using Adobe Premiere Pro and Adobe Photoshop. I specialize in editing promotional videos, social media content, event highlights, and branding visuals that communicate effectively and leave a lasting impression.
            </p>
            <p>
              Throughout my career, I've collaborated with a range of clients across various industries, ensuring each project not only meets but exceeds their expectations. My commitment to creativity, precision, and timely delivery has earned consistent client satisfaction and repeat work.
            </p>
          </div>
          <div className="story-image slide-in-right" ref={addToRefs}>
            <img src="/assets/images/about-me.png" alt="Working on video editing" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="fade-in" ref={addToRefs}>My Approach</h2>
          <div className="values-grid">
            <div className="value-card scale-in" style={{ '--delay': '0.1s' }} ref={addToRefs}>
              <h3>Key Skills</h3>
              <p>
                <span style={{color:"red"}}> Video Editing</span>: Trimming, color grading, transitions, sound syncing, and storytelling with Adobe Premiere Pro.
              </p>
              <p>
                <span style={{color:"red"}}>Graphic Design</span>: Posters, thumbnails, banners, social media graphics, and brand visuals using Adobe Photoshop
              </p>
            </div>
            <div className="value-card scale-in" style={{ '--delay': '0.2s' }} ref={addToRefs}>
              <h3>Quality</h3>
              <p>
                I never compromise on quality. Every frame is carefully considered to ensure 
                the highest standard in my work.
              </p>
            </div>
            <div className="value-card scale-in" style={{ '--delay': '0.3s' }} ref={addToRefs}>
              <h3>Collaboration</h3>
              <p>
                I work closely with clients to understand their vision and bring it to life 
                through open communication.
              </p>
            </div>
            <div className="value-card scale-in" style={{ '--delay': '0.4s' }} ref={addToRefs}>
              <h3>Innovation</h3>
              <p>
                I stay updated with the latest editing techniques and trends to deliver 
                fresh and engaging content.
              </p>
            </div>
            <div className="value-card scale-in" style={{ '--delay': '0.5s' }} ref={addToRefs}>
              <h3>Client Feedback</h3>
              <p>
                I take pride in delivering results that speak for themselves. Clients often commend my ability to quickly grasp their vision, transform it into visuals, and deliver ahead of deadlines—all while maintaining quality and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;