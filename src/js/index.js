// UI Controller
const UIController = (() => {
  const DOMStrings = {
    menu: 'hamburger',
    navList: 'nav-list',
    viewButton:'btn-view'
  };

  return {
    getDOMStrings: () => DOMStrings,
  };
})();

// Global Controller
const Controller = (() => {
  const DOMStrings = UIController.getDOMStrings();

  setupEventListeners = () => {
    const { menu, navList,viewButton } = DOMStrings;

    // Togglelist on menu button click
    document.querySelector(`.${menu}`).addEventListener('click', (e) => {
      document.querySelector(`.${navList}`).classList.toggle('collapse');
    });

    // Open my github profile in new tab
    document.querySelector(`.${viewButton}`).addEventListener('click', function () {
      window.open("https://github.com/Tanuj-Choudhary/");
    })
  };

  return {
    init: () => {
      setupEventListeners();
    },
  };
})();

Controller.init();
