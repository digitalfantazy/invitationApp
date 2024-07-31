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
      <div className="main-container">
        <div className="container intro__content">
          <hr />
          <h2>Приветики ;)</h2>
          <p className="intro-text">
            Знаешь, в этом мире существует один парень, по имени Артем, не Бульвар Депо конечно, но
            он тоже классный) , которому не безрачна одна очень милая и привелекательная девушка)
          </p>
          <p className="intro-text">
            Я решил подойти оригинально и создал этот простенький сайт, хотел сделать что-то
            особенное для тебя и пригласить куда-нибудь)).
          </p>
          <hr />
          <h2>Откровенности</h2>
          <ul className="intro-list">
            <li>
              Честно, мне очень нравится общаться с тобой, я искренне цению наше общение и время
              проведенное вместе ❤️
            </li>
            <li>Очень по тебе соскучился 😟</li>
            <li>Огромное желание увидеться и прекрасно провести с тобой время 😉</li>
          </ul>
          <hr />
        </div>
      </div>
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
