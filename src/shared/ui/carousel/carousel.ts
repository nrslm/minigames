import './carousel.scss';

interface GameCardData {
    id: number;
    title: string;
    image: string;
    rating: string;
    likes: string;
}

export function createCarousel(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'carousel-section';

    const container = document.createElement('div');
    container.className = 'carousel-section__container';

    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'carousel-section__header';

    const box = document.createElement('div')
    box.className = 'carousel-section__block-title'
    const titleLeftBox = document.createElement('div')
    titleLeftBox.className = 'carousel-section__box'
    const title = document.createElement('h2');
    title.className = 'carousel-section__title';
    title.textContent = 'New Games';
    box.append(titleLeftBox, title)

    const controls = document.createElement('div');
    controls.className = 'carousel-section__controls';

    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'carousel-btn';
    prevBtn.ariaLabel = 'Previous slide';
    prevBtn.innerHTML = '&#8592;';

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'carousel-btn';
    nextBtn.ariaLabel = 'Next slide';
    nextBtn.innerHTML = '&#8594;';

    controls.append(prevBtn, nextBtn);
    headerWrapper.append(box, controls);

    const track = document.createElement('div');
    track.className = 'carousel-track';

    const games: GameCardData[] = [
        { id: 1, title: 'Game Alpha', image: '/assets/games/img_1.jpg', rating: '4.6', likes: '10.2K' },
        { id: 2, title: 'ISLANDERS: New Shores', image: '/assets/games/img_2.jpeg', rating: '4.9', likes: '54.2K' },
        { id: 3, title: 'Vacation Cafe Simulator', image: '/assets/games/img_3.jpg', rating: '4.8', likes: '28.7K' },
        { id: 4, title: 'Winter Burrow', image: '/assets/games/img_4.jpg', rating: '4.9', likes: '32.4K' },
        { id: 5, title: 'Tiny Glade', image: '/assets/games/img_1.jpg', rating: '4.7', likes: '19.1K' },
        { id: 6, title: 'Whisper of the House', image: '/assets/games/img_4.jpg', rating: '4.8', likes: '15.6K' },
    ];

    let currentIndex = 2;

    const getGameAtOffset = (offset: number): GameCardData => {
        const total = games.length;
        const index = (currentIndex + offset + total) % total;
        return games[index];
    };

    const render = (): void => {
        track.innerHTML = '';
        const offsets = [-2, -1, 0, 1, 2];

        offsets.forEach((offset) => {
            const game = getGameAtOffset(offset);
            const card = document.createElement('div');

            let positionClass = '';
            if (offset === 0) positionClass = 'game-card--center';
            else if (offset === -1) positionClass = 'game-card--left-1';
            else if (offset === 1) positionClass = 'game-card--right-1';
            else if (offset === -2) positionClass = 'game-card--left-2';
            else if (offset === 2) positionClass = 'game-card--right-2';

            card.className = `game-card ${positionClass}`;

            card.style.backgroundImage = `url(${game.image})`;


            if (offset != -2 && offset != 2) {
                const infoBox = document.createElement('div');
                infoBox.className = 'game-card__info';
                infoBox.innerHTML = `
                    <h3 class="game-card__title">${game.title}</h3>
                    <div class="game-card__meta">
                    <span class="game-card__rating">⭐ ${game.rating}</span>
                    <span class="game-card__likes">❤️ ${game.likes}</span>
                </div>
                    
                `;
                card.append(infoBox);
            }else{
                
            }

            card.addEventListener('click', () => {
                currentIndex = (currentIndex + offset + games.length) % games.length;
                render();
            });

            track.append(card);
        });
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % games.length;
        render();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + games.length) % games.length;
        render();
    });

    render();

    container.append(headerWrapper, track);
    section.append(container);

    return section;
}