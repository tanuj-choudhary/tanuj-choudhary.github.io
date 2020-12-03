// UI Controller
const UIController = (() => {
  const DOMStrings = {
    menu: 'hamburger',
    navList: 'nav-list',
    viewButton: 'btn-view',
    fbFollowLink: 'follow__link__fb',
    twitterFollowLink: 'follow__link__twitter',
    linkedinFollowLink:'follow__link__linkedin'
  };

  return {
    getDOMStrings: () => DOMStrings,
  };
})();

// Global Controller
const Controller = (() => {
  const DOMStrings = UIController.getDOMStrings();

  function openFb()  {
    window.open("https://www.facebook.com/tanuj.choudharyy/");
  }

  function openTwitter()  {
    window.open("https://twitter.com/Tanuj_C");
  }

  function openGithub()  {
    window.open("https://github.com/Tanuj-Choudhary/");
  }

  function openLinkedin()  {
    window.open("https://www.linkedin.com/in/tanuj-choudhary01");
  }

  setupEventListeners = () => {
    const { menu, navList,viewButton,fbFollowLink,twitterFollowLink,linkedinFollowLink } = DOMStrings;

    // Togglelist on menu button click
    document.querySelector(`.${menu}`).addEventListener('click', (e) => {
      document.querySelector(`.${navList}`).classList.toggle('collapse');
    });

    // Open my profiles in new tab
    document.querySelector(`.${viewButton}`).addEventListener('click', openGithub);
    document.querySelector(`.${fbFollowLink}`).addEventListener('click', openFb);
    document.querySelector(`.${twitterFollowLink}`).addEventListener('click', openTwitter);
    document.querySelector(`.${linkedinFollowLink}`).addEventListener('click', openLinkedin);
  };

  return {
    init: () => {
      setupEventListeners();
    },
  };
})();

Controller.init();
