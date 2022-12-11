import './portfolio-card.css';
import {
  FaLinkedin,
  FaFacebook,
  FaDev,
  FaGithub,
  FaAt,
  FaTelegram,
  FaStackOverflow,
  FaNpm,
} from 'react-icons/fa';

export const PortfolioCard = () => {
  return (
    <div className={'card'}>
      <span>noctifer20</span>
      <div className="icons">
        <a href="mailto:noctifer20@gmail.com" rel="noreferrer">
          <FaAt />
        </a>
        <a
          href="https://github.com/noctifer20"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/noctifer20"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/noctifer20"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.dev.to/noctifer20"
          target="_blank"
          rel="noreferrer"
        >
          <FaDev />
        </a>
        <a href="https://t.me/noctifer20" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a
          href="https://stackoverflow.com/users/10060294/noctifer20"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow />
        </a>
        <a
          href="https://www.npmjs.com/~noctifer20"
          target="_blank"
          rel="noreferrer"
        >
          <FaNpm />
        </a>
      </div>
    </div>
  );
};
