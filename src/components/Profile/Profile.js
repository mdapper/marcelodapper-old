import React from 'react';
import styles from './Profile.css';

const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.image}>
      <img src="img/perfil.jpg" alt="Imagem de perfil" />
    </div>
    <div className={styles.bio}>
      <h3>Hello, my name is Marcelo Dapper!</h3>
      <p>Here, you can see my work as a Front End Developer.</p>
      <p>
        For several years, I worked in the Oil and Gas sector as a software developer. In the last two years, I studied Front End development and fell in love with it. So, I decided to make a shift in my career.
      </p>
      <p>
        Since then, I had the opportunity to learn a lot and apply what I gathered in some cool projects that you can see here.
      </p>
      <p>
        I also launched a blog.
        {' '}
        <a href="https://devheroes.io/" target="_blank" rel="noopener">DevHeroes</a>
        {' '}
        is a blog written in Portuguese to share and talk about web development. I am writing a series about JavaScrit, since mastering it is my focus now. I decided to start with the basics, so more people can go along with it. But I intend to go until I can cover advanced topics such as ES6, functional programing and the use of some frameworks like React and Vue.js.
      </p>
      <p>
        When I am not building new stuff, or writing for my blog, I like to read, play video games, watch movies and series with my wife.
      </p>
    </div>
  </div>
);

export default Profile;
