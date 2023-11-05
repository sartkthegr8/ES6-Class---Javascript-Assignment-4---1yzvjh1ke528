import React from 'react';
import '../styles/App.css';

const App = () => {
  return (
    <div>
     <nav id="navbar">
     <ul className="navbar-list">
     <li><a href="#">Football</a></li>
     <li><a href="#">Basketball</a></li>
     <li><a href="#">Tennis</a></li>
     <li><a href="#">Cricket</a></li>
     </ul>
     </nav>
       <main id="main-content"> 
            <section className="news-section">
      <h2>Latest Sports News</h2>
      <article><img src="https://shorturl.at/ltBRY"/>
        <h3>Football Match Recap</h3>
        <p>Manchester United defeated Liverpool 2-0 in thrilling match...</p>
      </article>
      <article>
      <img src=" https://shorturl.at/ejvNY"/>
      <h3>NBA Finals Update</h3>
      <p>The Phoneix Suns a 2-1 series lead against the Milwaukee Bucks...</p>
      </article>
      <article>
      <img src="https://shorturl.at/hLQRS"/>
      <h3>Wimbledon Semifinals Set</h3>
      <p>The semifinals of the Wimbledon tennis tournamnet have been decided...</p>
      </article>
     </section>
       </main>
     <footer id="footer"><p className="footer-content">© 2023 Sports Website. All rights reserved.</p></footer>
      {/* Navigation Bar */}

      {/* Main Content Section */}

      {/* Use Below Images for the making articles */}
      {/* Football - https://shorturl.at/ltBRY */}
      {/* Basketball - https://shorturl.at/ejvNY */}
      {/* Tennis - https://shorturl.at/hLQRS */}

      {/* Footer */}
    </div>
  );
};

export default App;
