import React from 'react';
import superagent from 'superagent';

class Contact extends React.Component {
    constructor (props){
        super(props);
    }
    state = {
        messageSent: false
    }
    componentWillMount () {
        let messageSent = localStorage.getItem('messageSent') || false;
        this.setState(() => {
            return {
                messageSent
            }
        });
    }
    onFormSubmit = (e) => {
        localStorage.setItem('messageSent', true);
    }
    render () {
        return (
            <div id="form__container">
            <h1>Contact</h1>
            <hr className="form__rule"/>
            {this.state.messageSent && <p id="flash__message">Message sent!</p>}
            <div id="form__info">
                <p id="form__phone-message">
                    You can reach me by calling or sending a text message to <a href="+8593021532">859-302-1532</a>.
                </p>    
                <p id="form__email-message">
                    My e-mail address is <a href="mailto:travis@travisturner.io">travis@travisturner.io</a>.
                </p>
            </div>
            <div id="form__form-container">
            
                <div id="form__form-header">
                    
                </div>
                <form onSubmit={this.onFormSubmit} method="POST" 
                action="https://contact-e-mail-forward-er.herokuapp.com/">
                    <div id="form__flex">
                    
                        <div className="form__row">
                            <h3>...or send a message below</h3>
                        </div>
                        <div className="form__row input__row">
                            <div className="inner__row">
                                <div id="form__name">
                                    <label htmlFor="name">Name:<span className="required">*</span></label>
                                    <input type="text" name="name" required/>
                                </div>
                                <div id="form__email">
                                    <label htmlFor="email">E-mail:<span className="required">*</span></label>
                                    <input type="text" name="email" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form__row input__row">
                            <div className="inner__row">
                                <div id="form__website">
                                    <label htmlFor="website">Website:</label>
                                    <input type="text" name="website" />
                                </div>                              
                                <div id="form__phone">
                                    <label htmlFor="phone">Phone:</label>
                                    <input type="text" name="phone" />
                                </div>
                            </div>
                        </div> 
                            <div className="form__row">     
                                    <label id="your__message" htmlFor="message">Your message here:<span className="required">*</span></label>
                            </div>
                            <div className="form__row" id="form__row3">   
                                <div className="inner__row">  
                                    <textarea name="message" required></textarea>
                                </div>
                            </div>
                            <div id="button__container" className="form_row">
                                <button id="submit__button">Send</button>
                            </div>
                        </div>
                    </form>
            </div>
              
            </div>
        )
    }
}

export default Contact;