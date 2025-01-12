import { Component } from "react";
import ProjectItem from "../ProjectItem";
import Footer from "../Footer";
import "./index.css";

const projectsTabs = [
  { tabId: "lowScale", displayTab: "Small Scale" },
  { tabId: "mediumScale", displayTab: "Medium Scale" },
  { tabId: "highScale", displayTab: "High Scale" },
  { tabId: "groupProjects", displayTab: "Group Projects" },
];

const projectsList = [
  {
    id:'p1',
    ImagUrl: "https://i.imgur.com/997wTR9.png",
    title: "Books Shopping Website",
    description:
      "This is a static level project which is like an online Books Shopping Site. Users can place orders via Flipkart or Amazon. Two sample books were used to design this web page with desired functionality implemented using HTML & CSS.",
    role:'',
    exploreLink: "https://books9.ccbp.tech/",
    category: "lowScale",
  },
  {
    id:'p2',
    ImagUrl: "https://i.imgur.com/1qjXUQa.png",
    title: "Origami Website",
    description:
      "A website showcasing Arts & Crafts called Origami. Users can learn how to make crafts by viewing videos and procedure steps embedded in this website.",
    role:'',
    exploreLink: "https://waytoorigami.ccbp.tech/",
    category: "lowScale",
  },
  {
    id:'p3',
    ImagUrl: "https://i.imgur.com/jJf7CQZ.png",
    title: "Flipkart Clone-static",
    description:
      "This project is a clone of Flipkart made using HTML, CSS, and Bootstrap. It replicates the appearance of the real Flipkart site.",
    role: '',
    exploreLink: "https://flipkartuipage.ccbp.tech/",
    category: "lowScale",
  },
  {
    id:'p4',
    ImagUrl: "https://i.imgur.com/b3CwwYj.png",
    title: "Wikipedia Search Application",
    description:
      "This project is a search application powered by an API integration. Built using HTML, CSS, and JavaScript for API handling.",
    role:'',
    exploreLink: "https://wikipediasearchapp.ccbp.tech/",
    category: "mediumScale",
  },
  {
    id:'p5',
    ImagUrl:"https://i.imgur.com/FdC4jLe.png",
    title: "PDF Translator Application",
    description:"In this project users can upload a pdf and change the text in pdf into their desirred language.It has a User-friendly interface to upload pdf's and select Language and then translate it.We can see the translated text over the website.",
    role:'',
    exploreLink: "https://github.com/AswanthAllu/aswanth-pdf-translator.git",
    category: "mediumScale",
  },
  
  {
    id:'p6',
    ImagUrl:"https://i.imgur.com/SiJEHRH.png",
    title: "Match-Touch Game", 
    description:"This project is build using ReactJS.It is Game which is very much useful for children to increse their Searching Ability.This Game consists of diffrent images ,when game starts we should touch the image which show above from below tabs ,meanwhile timer set to 1 minute.Later we can see our results and play again!",
    role:'',
    exploreLink: "https://matchtouchgame.ccbp.tech/",
    category: "highScale",
  },
  {
    id: "p7",
    ImagUrl: "https://i.imgur.com/iJNFFbI.png",
    title: "Blood Donation System Application",
    description: "This project is designed to innovate blood donation by allowing users to request blood donations from others with matching blood types. The app enables users to send blood requests to corresponding blood group users. Additionally, it features an 'Emergency' function, which sends SMS notifications automatically to users of the required blood group.",
    role: "",
    exploreLink: "https://github.com/AswanthAllu/Blood-Donation-System.git",
    category: "highScale"
},
{
  id:'p8',
  ImagUrl:"https://i.imgur.com/i7qX5RO.png",
  title: "Our College Official Website", 
  description:"This is Group Project,As I am a core member GDG SVEC of our campus , we collabrated and made this project and ourselves Contributed to our college.",
  role:'As it is group project, my role is I had resolved bugs in Navbar especially in Departments Dropdown,also added some sections in frontpage which is landing page for this webite.',
  exploreLink: "https://github.com/AswanthAllu/Red_Letter_Mission.git",
  category: "groupProjects",
},
{
  id:'p9',
  ImagUrl:"https://i.imgur.com/k63bbxK.png",
  title: "Personal Portifolio",
  description:"This is Personal protifolio project which is build using ReactJS.In this project I build across with good looking Interface with Descent Animations.",
  role:'',
  exploreLink: "https://aswanthallu.github.io/my_portifolio/",
  category: "mediumScale",
},

];

class Projects extends Component {
  state = {
    activeTabId: projectsTabs[0].tabId,
  };

  updateTablIdFn = (id) => {
    this.setState({ activeTabId: id });
  };

  render() {
    const { activeTabId } = this.state;
    const filteredProjectsList = projectsList.filter(
      (each) => activeTabId === each.category
    );
    return (
      <div className="projects-bg mt-5">
        <h1>My Projects</h1>
        <div className="tabs-con">
          {projectsTabs.map((eachTab) => (
            <h2
              key={eachTab.tabId}
              className={
                eachTab.tabId === activeTabId ? "activeTab" : "unActiveTab"
              }
              onClick={() => this.updateTablIdFn(eachTab.tabId)}
            >
              {eachTab.displayTab}
            </h2>
          ))}
        </div>
        <div className="project-items-con mb-5">
          {filteredProjectsList.map((each) => (
            <ProjectItem key={each.title} eachProjectItem={each} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
