import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      width: window.innerWidth, 
      height: 0,
      mobile: null,
      expanded: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  handleExpansion = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded
    }));
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (this.state.width < 642){
      this.setState(() => ({
        mobile: true
      }), () => {
        this.setState(() => ({
          width: window.innerWidth, height: window.innerHeight 
        }));
      })
    }
    if (this.state.width > 642){
      this.setState(() => ({
        mobile: false
      }), this.setState(() => ({
        width: window.innerWidth, height: window.innerHeight 
      })));
    }
  }
  render () {
    return (
      <header className="header">
      <div className="header__content">
        <div className="header__title">
          Travis Turner
          <p>Developer</p>
        </div>
        
        <div id="header__nav">
          {
            this.state.mobile ? 
              this.state.expanded ?
                <div>
                    <div className="menu-bar">
                      <a id="fa fa-bars" onClick={this.handleExpansion}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                      </a> 
                    </div>
                  <NavBar />
                </div>
                :
                <div className="menu-bar">
                  <a id="fa fa-bars" onClick={this.handleExpansion}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </a> 
                </div>
                
            : 
            <div>
                <NavBar />
            </div>
          }
                    
        </div>
      </div>
    </header>
    )
  }
};



export default Header;
