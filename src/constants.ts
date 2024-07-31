import svetlogorsk from './img/svetlogorsk.jpg';
import chernyahovsk from './img/chernayhovsk.jpg';
import kino from './img/kino.jpg';
import zavedenie from './img/zavedenie.jpg';
import progulka from './img/progulka.jpeg';
import shop from './img/shop.jpg';
import igra from './img/igra.jpg';
import me from './img/me.jpg';

export const Places = [
  {
    id: 1,
    link: 'svet',
    imgURL: svetlogorsk,
    imgAlt: 'inmarsat',
    name: 'Прогулка в Светлогорске',
    descption: 'В Зелике мы уже были, наочереди Светлогорск)',
  },
  {
    id: 2,
    link: 'obl',
    imgURL: chernyahovsk,
    imgAlt: 'nr2000',
    name: 'Сеъздить в область, к примеру Коса, Гвардейск или Черняховск и тд.',
    descption: 'Живя здесь, ни разу не бывал в области',
  },
  {
    id: 3,
    link: 'kino',
    imgURL: kino,
    imgAlt: 'PracticalRadioElectr',
    name: 'А может лучше в кино или просто вместе фильм посмотреть',
    descption: 'Банально, но все же как вариант)',
  },
  {
    id: 3,
    link: 'zav',
    imgURL: zavedenie,
    imgAlt: 'zavedenie',
    name: 'Или может быть провести вечер в заведении',
    descption: 'А потом можно прогуляться',
  },
  {
    id: 4,
    link: 'prog',
    imgURL: progulka,
    imgAlt: 'progulka',
    name: 'Нафиг это все, нет ничего лучше прогулки по городу',
    descption: 'Действительно, да?',
  },
  {
    id: 5,
    link: 'shop',
    imgURL: shop,
    imgAlt: 'shop',
    name: 'Пройтись по магазинам, прикупить новые вещи, шоппинг модный лук...',
    descption: 'Модная шалава, на башке бандана.... ',
  },
  {
    id: 5,
    link: 'igra',
    imgURL: igra,
    imgAlt: 'igra',
    name: 'Сходить поиграть в кооперативную игру вместе',
    descption: 'Ожидается лютая заруба, ахахахах',
  },
  {
    id: 5,
    link: '/',
    imgURL: me,
    imgAlt: 'me',
    name: 'Принимаются и другие варианты',
    descption: 'Понятненько), тогда обусдим в лс',
  },
];
