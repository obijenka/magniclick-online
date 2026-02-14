// constants/products.js
import boardImg from '../assets/products/board-bg.jpg';
import magneticStickersImg from '../assets/products/magnetic-stickers-bg.jpg';
import markerTabletImg from '../assets/products/marker-tablet-bg.jpg';
import magnetImg from '../assets/products/magnet-bg.jpg';
import reusableStickersImg from '../assets/products/reusable-stickers-bg.jpg';

export const products = [
  {
    id: 1,
    title: "Модульная доска",
    image: boardImg,
    link: "/board",
    size: "Large"
  },
  {
    id: 2,
    title: "Маркерный планшет",
    image: markerTabletImg,
    link: "/marker-tablet",
    size: "Small"
  },
  {
    id: 3,
    title: "Многоразовые стикеры",
    image: reusableStickersImg,
    link: "/reusable-stickers",
    size: "Small"
  },
  {
    id: 4,
    title: "Магнитные стикеры",
    image: magneticStickersImg,
    link: "/magnetic-stickers",
    size: "Small"
  },
  {
    id: 5,
    title: "Маркерный магнит",
    image: magnetImg,
    link: "/magnets",
    size: "Small"
  }
];