import SliderComponent from '../Slider/Slider';
import './main.css';
import { Places } from '../../constants';
import heart from '../../img/heart1.png';

const Main: React.FC = () => {
  return (
    <>
      <div className="heart-background">
        <img src={heart} className="heart" alt="Heart Background" />
      </div>
      <div className="main-container"></div>
      <div className="slider">
        <h2>Несколько прикольных вариантов</h2>
        <p className="intro-text1">
          Снизу я оставил парочку вариантов, ты можешь выбрать любое место которое ты захочешь....
          (только не ящерицу)
        </p>
        <p className="text-small1">Типа прикол из старого видоса</p>
        <div className="slider-item">
          <SliderComponent places={Places} />
        </div>
        <p className="text-small">Свайпай вправо и нажимай на понравившееся</p>
      </div>
      <div className="container1"></div>
    </>
  );
};

export default Main;
