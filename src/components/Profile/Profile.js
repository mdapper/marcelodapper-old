import React from 'react';
import styles from './Profile.css';

const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.image}>
      <img src="img/perfil.jpg" alt="Imagem de perfil" />
    </div>
    <div className={styles.bio}>
      <h3>Hello, my name is Marcelo Dapper!</h3>
      <p>I share here my work as a Front End Developer.</p>
      <p>
        I have worked for several years in the Oil and Gas sector as a software developer. But in the last two years I started to study Front End and fell in love with it. So I decided to make a shift in my carrer.
      </p>
      <p>
        Since then, I have learned a lot and had the opportunity to work on some cool projects that I list here.
      </p>
      <p>
        In the past months I have launched a blog called
        {' '}
        <a href="https://devheroes.io/" target="_blank">DevHeroes</a>
        {' '}
        (in portuguese) to talk about web development, mostly Front End. I am writing a series about JavaScrit, since mastering it is my foucus now. I decided to start with the basics, so more people can go along with it. But I intend to go until I can cover advanced topics such as ES6, functional programing and the use of some frameworks like React and Vue.js.
      </p>
      <p>
        When I am not building new stuff or writing for my blog, I like to read, play video games, watch movies and series with my wife.
      </p>
    </div>
  </div>
);

export default Profile;
