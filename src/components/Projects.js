import React from 'react';

class Projects extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      categoryHover: false
    }
  }
  render (){
    return (
      <div>
        <div id="projects__header">
          <h1>PROJECTS</h1>
        </div>
        <div id="projects__container">
          <div id="web-dev__container">
              <a href="#" id="category-web" className="category-box category--link">
                <h3 className="web-title">WEB</h3>
                <h3 className="web-title" id="h3-dev">DEV</h3>
              </a>
              <div id="web-shape" className="project-shape"></div>
          </div>
          
          <div id="programming__container">
            <a href="#" className="category-prog category-box category--link">
              <h3 className="prog-title">PROGRAMMING</h3>
            </a>
            <div id="prog-shape" className="project-shape"></div>
          </div>
          <div id="graphic-design__container">
            <a href="#" className="category-graphic category-box category--link">
              <div id="graphic-design__flex">
                <h3 className="graphic-title">GRAPHIC</h3>
                <h3 className="graphic-title" id="h3-design">DESIGN</h3>
              </div>
              <div id="graphic-shape"></div>              
            </a>
          </div>
          
        </div>
      </div>
    )
  };
}

export default Projects;