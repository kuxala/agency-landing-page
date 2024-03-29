import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <section id="section-1">
        <Navbar />
        <h1>We are creatives</h1>
        <div className="creative-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="115"
            viewBox="0 0 36 115"
            fill="none"
          >
            <path
              d="M18 3.54028V103.54"
              stroke="white"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 96.0245L18 111.025L33 96.0245"
              stroke="white"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </section>

      <section id="section-2">
        <div className="left-col">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a>LEARN MORE</a>
        </div>
        <div className="right-col">
          <img src="./src/eg.png" className="image" />
        </div>
      </section>

      <section id="section-3">
        <div className="left-col">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a>LEARN MORE</a>
        </div>
        <div className="right-col">
          <img src="./src/glas.png" className="image" />
        </div>
      </section>

      <section id="section-4">
        <div className="left-col">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="right-col">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>

      <section id="section-5">
        <h1>CLIENT TESTIMONIALS</h1>
        <div className="boxes">
          <div className="box-each">
            <img src="./src/123.png" className="img" />
            <p className="text">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="name">Emily R.</p>
            <p className="position">Marketing Director</p>
          </div>

          <div className="box-each">
            <img src="./src/1234.png" className="img" />
            <p className="text">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p className="name">Thomas S.</p>
            <p className="position">Chief Operating Officer</p>
          </div>

          <div className="box-each">
            <img src="./src/12345.png" className="img" />
            <p className="text">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p className="name">Jennie F.</p>
            <p className="position">Business Owner</p>
          </div>
        </div>
      </section>

      <section id="section-6">
        <div className="images">
          <img src="./src/11.png" />
          <img src="./src/22.png" />
          <img src="./src/33.png" />
          <img src="./src/44.png" />
        </div>
      </section>

      <footer>
        <img src="./src/sunnyside.png"/>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Project</a></li>
        </ul>
        <div className="icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="164" height="20" viewBox="0 0 164 20" fill="none">
          <path d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z" fill="#2C7566"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M58 0C55.2842 0 54.9442 0.0116667 53.8775 0.06C50.2458 0.226667 48.2275 2.24167 48.0608 5.87667C48.0117 6.94417 48 7.28417 48 10C48 12.7158 48.0117 13.0567 48.06 14.1233C48.2267 17.755 50.2417 19.7733 53.8767 19.94C54.9442 19.9883 55.2842 20 58 20C60.7158 20 61.0567 19.9883 62.1233 19.94C65.7517 19.7733 67.775 17.7583 67.9392 14.1233C67.9883 13.0567 68 12.7158 68 10C68 7.28417 67.9883 6.94417 67.94 5.8775C67.7767 2.24917 65.7592 0.2275 62.1242 0.0608333C61.0567 0.0116667 60.7158 0 58 0ZM58 1.8025C60.67 1.8025 60.9867 1.8125 62.0417 1.86083C64.7517 1.98417 66.0175 3.27 66.1408 5.96C66.1892 7.01417 66.1983 7.33083 66.1983 10.0008C66.1983 12.6717 66.1883 12.9875 66.1408 14.0417C66.0167 16.7292 64.7542 18.0175 62.0417 18.1408C60.9867 18.1892 60.6717 18.1992 58 18.1992C55.33 18.1992 55.0133 18.1892 53.9592 18.1408C51.2425 18.0167 49.9833 16.725 49.86 14.0408C49.8117 12.9867 49.8017 12.6708 49.8017 10C49.8017 7.33 49.8125 7.01417 49.86 5.95917C49.9842 3.27 51.2467 1.98333 53.9592 1.86C55.0142 1.8125 55.33 1.8025 58 1.8025ZM52.865 10C52.865 7.16417 55.1642 4.865 58 4.865C60.8358 4.865 63.135 7.16417 63.135 10C63.135 12.8367 60.8358 15.1358 58 15.1358C55.1642 15.1358 52.865 12.8358 52.865 10ZM58 13.3333C56.1592 13.3333 54.6667 11.8417 54.6667 10C54.6667 8.15917 56.1592 6.66667 58 6.66667C59.8408 6.66667 61.3333 8.15917 61.3333 10C61.3333 11.8417 59.8408 13.3333 58 13.3333ZM62.1375 4.6625C62.1375 4 62.675 3.4625 63.3383 3.4625C64.0008 3.4625 64.5375 4 64.5375 4.6625C64.5375 5.325 64.0008 5.8625 63.3383 5.8625C62.675 5.8625 62.1375 5.325 62.1375 4.6625Z" fill="#2C7566"/>
          <path d="M154 0C148.477 0 144 4.47667 144 10C144 14.2367 146.636 17.855 150.356 19.3117C150.268 18.5208 150.189 17.3075 150.391 16.4442C150.573 15.6633 151.563 11.4733 151.563 11.4733C151.563 11.4733 151.264 10.8742 151.264 9.98833C151.264 8.59833 152.07 7.56 153.073 7.56C153.926 7.56 154.338 8.20083 154.338 8.96833C154.338 9.82583 153.793 11.1083 153.51 12.2975C153.274 13.2925 154.009 14.105 154.991 14.105C156.768 14.105 158.134 12.2308 158.134 9.52583C158.134 7.13167 156.414 5.4575 153.958 5.4575C151.113 5.4575 149.443 7.59167 149.443 9.79667C149.443 10.6558 149.773 11.5783 150.187 12.0783C150.268 12.1775 150.28 12.265 150.256 12.3658L149.978 13.4992C149.934 13.6825 149.833 13.7217 149.643 13.6333C148.394 13.0517 147.613 11.2258 147.613 9.75917C147.613 6.605 149.905 3.7075 154.221 3.7075C157.69 3.7075 160.386 6.18 160.386 9.48333C160.386 12.93 158.213 15.7033 155.197 15.7033C154.183 15.7033 153.231 15.1775 152.905 14.555L152.282 16.9325C152.056 17.8017 151.447 18.8908 151.038 19.5542C151.975 19.8433 152.969 20 154 20C159.523 20 164 15.5225 164 10C164 4.47667 159.523 0 154 0Z" fill="#2C7566"/>
          <path d="M116 4.17221C115.264 4.49888 114.473 4.71888 113.643 4.81805C114.491 4.31055 115.142 3.50638 115.448 2.54805C114.655 3.01805 113.777 3.35971 112.842 3.54388C112.094 2.74638 111.027 2.24805 109.847 2.24805C107.198 2.24805 105.251 4.71971 105.849 7.28555C102.44 7.11471 99.4167 5.48138 97.3925 2.99888C96.3175 4.84305 96.835 7.25555 98.6617 8.47721C97.99 8.45555 97.3567 8.27138 96.8042 7.96388C96.7592 9.86471 98.1217 11.643 100.095 12.0389C99.5175 12.1955 98.885 12.2322 98.2417 12.1089C98.7633 13.7389 100.278 14.9247 102.075 14.958C100.35 16.3105 98.1767 16.9147 96 16.658C97.8158 17.8222 99.9733 18.5014 102.29 18.5014C109.908 18.5014 114.212 12.0672 113.952 6.29638C114.754 5.71721 115.45 4.99471 116 4.17221Z" fill="#2C7566"/>
        </svg>
        </div>
      </footer>
    </div>
  );
}

export default App;
