import React from 'react';
import { Link } from 'react-router-dom';
import DashboardInfo from './DashboardInfo';

class DashboardPage extends React.Component {
  componentWillMount () {
    localStorage.clear();
  }
  render () {
    return (
      <div>
        <div id="dashboard__container">
          <div id="dashboard__header">
            <h1>Hello,  I'm Travis.</h1>
            <h3>I'm a <strong>full stack web developer</strong> and <strong>programmer from Berea, KY.</strong></h3>
            <h3>My focus is on <strong>JavaScript</strong> as well as its related frameworks and technologies. I'm currently looking for new projects, potential clients and web development opportunities.</h3>
            <Link to="/contact"><button id="dashboard--button">CONTACT ME</button></Link>
          </div>
        </div>
        <DashboardInfo />
      </div>
    )
  }
}

export default DashboardPage;
