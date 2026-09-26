import { createButton } from '../button/button';
import './hero.scss';

export function createHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero';

  const container = document.createElement('div');
  container.className = 'hero__container';

  // Карточка с текс || card text
  const contentCard = document.createElement('div');
  contentCard.className = 'hero__card';

  const title = document.createElement('h1');
  title.className = 'hero__title';
  title.textContent = 'Take a Short Break & Have Fun';
// card description
  const description = document.createElement('p');
  description.className = 'hero__description';
  description.textContent = 'Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.';
// card button
  const boxBtn = document.createElement('div')
  const browseButton = createButton({
    text: 'Browse Library',
    variant: 'card',
    size: 'medium',
    className: 'hero__btn',
    onClick: () => {
      window.location.hash = '#library';
    },
  });
  boxBtn.append(browseButton)

  contentCard.append(title, description, boxBtn);
  container.append(contentCard);
  section.append(container);

  return section;
}