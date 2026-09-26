import { createHeader } from '../../shared/ui/header/heder';
import { createHero } from '../../shared/ui/hero/hero';
import { createCarousel } from '../../shared/ui/carousel/carousel';
import './home-page.scss';

export function createHomePage(): HTMLElement {
  const main = document.createElement('main');
  main.className = 'home-page';

  main.append(createHeader());
  main.append(createHero());
  main.append(createCarousel());

  return main;
}