/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list'); // Creating a navigation global variable
console.log('Navigation', navBar);
const sections = document.querySelectorAll('section');  // creating a section 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// create a loop to the section
const createNav = function () {
   
  let displayNav = '';
  
  sections.forEach(section => {
    const sectionId = section.id;
    const sectionData = section.dataset.nav;

    displayNav += `<li><a class = "menu__link" href= "#${sectionId}"> ${sectionData}</a></li>`;

  });// end of forEach
  navBar.innerHTML = displayNav;


}; // end of function expression
 
createNav();

// Add class 'active' to section when near top of viewport

// to get the higher value 
const info =  (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// Delete Active Class
const deleteActive =(section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = 'background-color:#044F67';
};

//Add the active class
const addActive = function (statement, section) {
  if (statement) {
    section.classList.add('your-active-class');
    section.style.cssText = 'background-color:#F9690E';
  };  // end of statement

}; // end of function


const getInfo = function () {
  sections.forEach(section => {
    const getInfo = info(section);

    inviewport = () => getInfo < 100 && getInfo >= -100;

    deleteActive(section);
    addActive(inviewport(), section);
  });
};
  
window.addEventListener('scroll', getInfo);

  // Scroll to anchor ID using scrollTO event
const scroll =  () => {

 const menuNav = document.querySelectorAll('.navbar__menu a');
  
 
  menuNav.forEach(nav => {
    nav.addEventListener('click', () => {
      for ( i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(nav));
      } // end of loop
    });
  });// end of forEach
  };
scroll(); //call the function
  /**
   * End Main Functions
   * Begin Events
   * 
  */

  // Build menu 

  // Scroll to section on link click

  // Set sections as active

