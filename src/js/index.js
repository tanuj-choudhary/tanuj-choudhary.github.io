// UI Controller
const UIController = (() => {
  const DOMStrings = {
    menu: "hamburger",
    navList: "nav-list",
    viewButton: "btn-view",
    fbFollowLink: "follow__link__fb",
    twitterFollowLink: "follow__link__twitter",
    linkedinFollowLink: "follow__link__linkedin",
    formSubmitButton: "btn-form",
    nameInput: "name",
    subjectInput: "subject",
    emailInput: "email",
    messageInput: "message",
  };

  return {
    getDOMStrings: () => DOMStrings,
  };
})();

// Global Controller
const Controller = (() => {
  const DOMStrings = UIController.getDOMStrings();

  function openFb() {
    window.open("https://www.facebook.com/tanuj.choudharyy/");
  }

  function openTwitter() {
    window.open("https://twitter.com/Tanuj_C");
  }

  function openGithub() {
    window.open("https://github.com/Tanuj-Choudhary/");
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/in/tanuj-choudhary01");
  }

  function getFormValues() {
    const { nameInput, subjectInput, emailInput, messageInput } = DOMStrings;

    const name = document.getElementById(nameInput).value;
    const subject = document.getElementById(subjectInput).value;
    const email = document.getElementById(emailInput).value;
    const message = document.getElementById(messageInput).value;

    const formValues = { name, subject, email, message };

    return formValues;
  }

  function sendEmail(e) {
    e.preventDefault();

    const formValues = getFormValues();

    window.open(
      `mailto:tanujchoudhary001@example.com?subject=${formValues.subject}&body=${formValues.message}`
    );
  }

  setupEventListeners = () => {
    const {
      menu,
      navList,
      viewButton,
      fbFollowLink,
      twitterFollowLink,
      linkedinFollowLink,
      formSubmitButton,
    } = DOMStrings;

    // Togglelist on menu button click
    document.querySelector(`.${menu}`).addEventListener("click", (e) => {
      document.querySelector(`.${navList}`).classList.toggle("collapse");
    });

    // Open my profiles in new tab
    document
      .querySelector(`.${viewButton}`)
      .addEventListener("click", openGithub);
    document
      .querySelector(`.${fbFollowLink}`)
      .addEventListener("click", openFb);
    document
      .querySelector(`.${twitterFollowLink}`)
      .addEventListener("click", openTwitter);
    document
      .querySelector(`.${linkedinFollowLink}`)
      .addEventListener("click", openLinkedin);

    // Send mail
    document
      .querySelector(`.${formSubmitButton}`)
      .addEventListener("click", sendEmail);
  };

  return {
    init: () => {
      setupEventListeners();
    },
  };
})();

Controller.init();
