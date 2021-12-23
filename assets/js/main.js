const speakers = [
  {
    img: 'assets/img/vitalik.png',
    fulname: 'Vitalik',
    position: 'Co-founder of Etherium',
    link: 'https://vitalik.ca/general/2021/10/31/cities.html',
    quote:
      'We are even seeing projects with varying degrees of radicalness - Cul de sac, Telosa, CityDAO, Nkwashi, Prospera and many more',
  },
  {
    img: 'assets/img/nolan.png',
    fulname: 'Nolan Myers',
    position: 'CEO at DoubleGDP',
    link: 'https://www.doublegdp.com/about/',
    quote: `Another interesting trend of the last year has been the rapid
    mainstreaming of crypto ideas such as coins`,
  },
  {
    img: 'assets/img/jackma.png',
    fulname: 'Jack Ma',
    position: 'Founder of Alibaba',
    link: 'https://www.alibaba.com',
    quote:
      'Each of these experiments is still small scale and largely still trying to find its way around, but they are all at least seeds that could turn into interesting things.',
  },
  {
    img: 'assets/img/mwiya.png',
    fulname: 'Mwiya',
    position: 'CEO at Nkwashi',
    link: 'https://www.nkwashi.com',
    quote:
      ' The team is currently finalizing a purchase of their first plot of land in a far-off corner of Wyoming.',
  },
  {
    img: 'assets/img/Sam_Altman.png',
    fulname: 'Sam Altman',
    position: 'CEO of OPenAI',
    link: 'https://www.opnai.com',
    quote:
      'With the acceleration of AI and other new technology…experimenting with ideas like basic income even more important in the years to come.',
  },
  {
    img: 'assets/img/sid.png',
    fulname: 'Sid Sijbrandij',
    position: 'Co-founder of GitLab Inc.',
    link: 'https://about.gitlab.com/handbook/ceo/#:~:text=Sid%20Sijbrandij%20is%20the%20Co,Inc.%2C%20the%20DevOps%20platform.',
    quote:
      'Using blockchains to create more trusted, transparent and verifiable versions of existing processes.',
  },
];

const container = document.getElementById('speakers');

function data() {
  speakers.forEach((speaker) => {
    container.innerHTML += ` <div class="speakersGrid">
    <div class="gridImage">
      <img src="${speaker.img}" alt="${speaker.fulname}'s Portrait" />
    </div>
    <div class="speakerDetails">
      <h3>${speaker.fulname}</h3>
      <h4>${speaker.position}</h4>
      <p class="quotes">
        <i><a href="${speaker.link}">${speaker.quote}</a></i>
      </p>
    </div>
  </div>`;
  });
}

window.onload = data();

// Hamburger Button

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
const menuItems = document.querySelectorAll('.menuItem');
menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);
