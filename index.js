// UI Controller
const UIController = (() => {
  const DOMStrings = {
    menu: 'hamburger',
    navList: 'nav-list',
  };

  return {
    getDOMStrings: () => DOMStrings,
  };
})();

// Global Controller
const Controller = (() => {
  const DOMStrings = UIController.getDOMStrings();

  setupEventListeners = () => {
    const { menu, navList } = DOMStrings;

    // Togglelist on menu button click
    document.querySelector(`.${menu}`).addEventListener('click', (e) => {
      document.querySelector(`.${navList}`).classList.toggle('collapse');
    });
  };

  return {
    init: () => {
      setupEventListeners();
    },
  };
})();

Controller.init();
