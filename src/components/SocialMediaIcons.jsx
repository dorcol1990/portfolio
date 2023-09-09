import github from "../assets/github.png";
import  instagram from "../assets/instagram.png";
import  linkedin from "../assets/linkedin.png";

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/milan-isailovic-45bb12265/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedin} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/iskee90/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instagram} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/dorcol1990"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src={github} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
  