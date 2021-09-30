import categoryImgFilms from '../../public/categories/films.png';
import categoryImgPicture from '../../public/categories/picture.png';
import categoryImgSoftware from '../../public/categories/software.png';
import categoryImgGame from '../../public/categories/game.png';
import categoryImgMusic from '../../public/categories/music.png';
import categoryImgAnime from '../../public/categories/anime.png';
import categoryImgBook from '../../public/categories/book.png';
import categoryImgStudy from '../../public/categories/study.png';
import categoryImgHelp from '../../public/categories/help.png';
import categoryImgOther from '../../public/categories/others.png';

const categories = [
  { id: '1', title: '影  视', imgUri: categoryImgFilms },
  { id: '2', title: '图  片', imgUri: categoryImgPicture },
  { id: '3', title: '软  件', imgUri: categoryImgSoftware },
  { id: '4', title: '游  戏', imgUri: categoryImgGame },
  { id: '5', title: '音  乐', imgUri: categoryImgMusic },
  { id: '6', title: '动  漫', imgUri: categoryImgAnime },
  { id: '7', title: '书  籍', imgUri: categoryImgBook },
  { id: '8', title: '学  习', imgUri: categoryImgStudy },
  { id: '9', title: '求  助', imgUri: categoryImgHelp },
  { id: '10', title: '其  他', imgUri: categoryImgOther },
];

export default {
  siteTitle: '云盘引擎',
  siteCopyright: 'Copyright © 云盘引擎 【云时代, 爱上云, 分享云】',
  categories,
};
