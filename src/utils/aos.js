import AOS from 'aos';
import 'aos/dist/aos.css';

const initAOS = () => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic'
  });
};

export default initAOS;