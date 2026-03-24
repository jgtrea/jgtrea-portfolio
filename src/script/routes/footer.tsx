import Email from '../../assets/lucide/email.tsx';
import Gith from '../../assets/lucide/github.tsx';
import Linkin from '../../assets/lucide/linkedin.tsx';
import Copyr from '../../assets/lucide/copyr.tsx';

const FooterBar = () => {
  return (
    <div className="footer-wrapper">      
      <footer className="footer-container">
        <div className="footer-left">
          <Copyr /> 2026 Jan Gabriel Rea
        </div>
        <div className="footer-right">
          <a href="mailto:@email.com"><Email /></a>
          <a href="https://github.com/myprofile"><Gith /></a>
          <a href="https://linkedin.com/in/myprofile"><Linkin /></a>
        </div>
      </footer>
    </div>
  );
};

export default FooterBar;
