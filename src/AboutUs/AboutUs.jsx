import React from 'react';
import './AboutUs.css';

const Title2 = ({ children }) => <h2 className="title2">{children}</h2>;

const BackButton = ({ onBackClick }) => (
  <div id="button" className="row">
    <button onClick={onBackClick}>Back to Homepage</button>
  </div>
);
const AboutUs = ({ onBackClick }) => {
  return (
    <>
      <h2>About us and our app</h2>

      <Title2>Who are we?</Title2>
      <p>We are 3 students who wanted to make the CEO's life easier. Our names are Boar Daniel-Ioan, Elecfi Sergiu-Andrei, and Maghiar-Cionca Antoniu.</p>

      <Title2>What we are trying to do?</Title2>
      <p>We created the Business Management, an app for small businesses.</p>

      <Title2>Why we created this app?</Title2>
      <p>The app was created as a project for college, but we tend to think that we created a useful app for new CEOs.</p>

      <Title2>What is shown in the app?</Title2>
      <p>In the app, we made a small tutorial on how to use it. We added a few CEOs, TeamLeaders, and employees. We also added a few projects and clients so everyone can see the full function of our project. We will not say all in here, and we hope you will want to discover more trying our app.</p>

      <Title2>Will there be any updates on the app?</Title2>
      <p>Yes, of course. We will try and add a lot of different functions and functionalities in our app, but all future plans aren't something everybody should know. All we can say now is that it will be useful even for bigger companies in the future.</p>

      <p>All this being said, we hope to explore this world of business together.</p>

      <BackButton onBackClick={onBackClick} />
    </>
  );
};

export default AboutUs;
