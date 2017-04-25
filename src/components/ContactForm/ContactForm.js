import React from 'react';
import styles from './ContactForm.css';
import stylesButton from '../Button/Button.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.name);
  }

  render() {
    return (
      <form
        name="sendMessage"
        className={styles.form}
        noValidate=""
        onSubmit={this.handleSubmit}
      >
        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            className={styles.control}
            placeholder="who are you?"
            id="name"
            required=""
          />
          <p className={styles.messageName} />
        </div>
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>E-mail</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            className={styles.control}
            placeholder="a valid e-mail"
            id="email"
            required=""
          />
          <p className={styles.messageEmail} />
        </div>
        <div className={styles.group}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            rows="5"
            value={this.state.message}
            onChange={this.handleChangeMessage}
            className={styles.control}
            placeholder="Insert yout request here"
            id="message"
            required=""
          />
          <p className={styles.messageMessage} />
        </div>
        <div className={styles.group}>
          <input
            id="submit"
            type="submit"
            className={stylesButton.default}
            value="Submit"
          />
          <p className={styles.messageSubmitError} />
          <p className={styles.messageSubmitSucess} />
        </div>
      </form>
    );
  }
}

export default ContactForm;
