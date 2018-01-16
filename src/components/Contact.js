import React from 'react';

class Contact extends React.Component {
    constructor (props){
        super(props);
    }
    render () {
        return (
            <div id="form__container">
            <h1>Contact</h1>
            <hr className="form__rule"/>
            <div id="form__info">
                <p id="form__phone-message">
                    You can reach me by calling or sending a text message to <a href="+8593021532">859-302-1532</a>.
                </p>    
                <p id="form__email-message">
                    My e-mail address is <a href="mailto:travis@travisturner.io">travis@travisturner.io</a>.
                </p>
            </div>
            </div>
        )
    }
}

export default Contact;