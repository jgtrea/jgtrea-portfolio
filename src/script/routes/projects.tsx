
import Website from '../../assets/lucide/website.tsx';
import Gith from '../../assets/lucide/github.tsx';

const Projects = () => {
    return (
        <div className="project-container">
            <div className="project-titlebar">
                <span className="intro-text"><b>My Projects</b></span>
            </div>

            <div className="project-wrapper">
                <div className="project-display">
                    <div className="project-display-url">
                        content
                    </div>
                    <div className="project-display-content">
                        <h1><b><i>Projects</i></b></h1>  
                        <p>lorem ipsum</p>
                        <div className="src-wrapper">                        
                            <a href="/path-to-others.pdf" target="_blank" className="rect-btn">
                                <Website />website
                            </a>   
                            <a href="/path-to-others.pdf" target="_blank" className="rect-btn">
                                <Gith />source
                            </a>    
                        </div>                     
                    </div>
                </div>

                <div className="project-display">
                    <div className="project-display-url">
                        content
                    </div>
                    <div className="project-display-content">
                        <h1><b><i>Projects</i></b></h1>  
                        <p>lorem ipsum</p>
                        <div className="src-wrapper">
                            <a href="/path-to-others.pdf" target="_blank" className="rect-btn">
                                <Website />website
                            </a>   
                            <a href="/path-to-others.pdf" target="_blank" className="rect-btn">
                                <Gith />source
                            </a>
                        </div>
                    </div>
                </div>
            </div>              
        </div>
    );
};

export default Projects;
