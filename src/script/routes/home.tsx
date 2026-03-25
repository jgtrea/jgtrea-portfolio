import '../../styles/navbar.css';
import '../../styles/content.css';
import '../../styles/theme.css';
import Email from '@/assets/lucide/email.tsx';
import Gith from '@/assets/lucide/github.tsx';
import Linkin from '@/assets/lucide/linkedin.tsx';
import Resume from '@/assets/lucide/resume.tsx';
import profileImage from '@/assets/profile-image-picture.JPG';


const Home = () => {
  return (
    <div className="profile-section" id="home">
      <div className="profile-details">
        
        <div className="top-row">
          <div className="user-info">
            <div className="img-container">
              <img src={profileImage} alt="Profile" />
            </div>
            <div className="user-text">
              <p className="intro-text"><b>Jan Gabriel Rea</b></p>
              <p className="main-headline">Software Developer</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="mailto:jangabriel.formal@gmail.com" className="icon-link"><Email /></a>
            <a href="https://github.com/SuperficialFlow" target="_blank" rel="noreferrer" className="icon-link"><Gith /></a>
            <a href="https://www.linkedin.com/in/jan-rea-b566b1344/" target="_blank" rel="noreferrer" className="icon-link"><Linkin /></a>
            
            <a href="/resume.pdf" target="_blank" className="rect-btn">
              <Resume />
              <span className='button-text'>resume</span>
            </a>
          </div>
        </div>

        <div className="summary-content">
          <p className="main-headline">
            I'm an Information Technology student studying at Malayan Colleges of Laguna, with 3 years of 
            hands-on experience in software development. Currently looking for an OJT opportunity to apply my skills.
          </p>
        </div>                
      </div>          
    </div>
  );
};

export default Home;