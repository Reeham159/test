/*setting the vars*/
const navigation = document.getElementById("navbar_list");
const Sections = document.querySelectorAll("Section");

/*tried to add the li and link but not sure why its not woking*/

/*const list = document.createElement("li");
const link = document.createElement("a");*/

const navBuilder = () => {
  let textUl = "";

  Sections.forEach((section) => {
    const sectionId = section.id;

    const sectionDataNav = section.dataset.sectionId;

    textUl += `<li><a class="menu_list" href="#${sectionId}">${sectionDataNav}</a></li>`;
  });
  /*this is working but i would like to know how AppendChild method,

  */

  navigation.innerHTML = textUl;
};
navBuilder();
