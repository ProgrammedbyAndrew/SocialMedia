import React, { Component } from 'react';
    import './App.css';
    import Header from './components/Header';
    import Post from './components/Post';

    class App extends Component {
      render() {
        return <div className="App">
            <Header />
            <section className="App-main">
              <Post nickname="Justelis" avatar="https://instagram.ftpa1-2.fna.fbcdn.net/vp/c9798b719c5d561dc66074082851c9ce/5D554D6A/t51.2885-19/s150x150/55731230_2306760852708107_2651456725420343296_n.jpg?_nc_ht=instagram.ftpa1-2.fna.fbcdn.net" caption="Yra lopas" image="https://static.wixstatic.com/media/262881_323b1bf2ea9d452bbad6afe7d7baba97~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01/1.webp" />
              <Post nickname="Jestelis irgi" avatar="https://instagram.ftpa1-2.fna.fbcdn.net/vp/c9798b719c5d561dc66074082851c9ce/5D554D6A/t51.2885-19/s150x150/55731230_2306760852708107_2651456725420343296_n.jpg?_nc_ht=instagram.ftpa1-2.fna.fbcdn.net" caption="Didelis" image="https://static.wixstatic.com/media/262881_f1c8714f18c64ac3a8590b12abe561d9~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01/2.webp" />
          
            </section>
          </div>;
      }
    }

    export default App;