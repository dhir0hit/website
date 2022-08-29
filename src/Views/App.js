import logo from '../logo.svg';
import '../App.css';
import {Component} from "react";

class App extends Component{
  constructor(props) {
    super(props);
    this.showNav = this.showNav.bind(this);
  }

  showNav() {
    let Nav = document.querySelector(".nav");

    if (Nav.style.display==='' || Nav.style.display==='none') {
      Nav.style.display = "flex";
      console.log(Nav.style.display)
    } else {
      Nav.style.display = "none";
      console.log(Nav.style.display)
    }
  }

  render() {
    return (
      <main className={"home_container"}>
        <div className={"info"}>
          <button className={"Hamburger"} onClick={this.showNav}>
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
          <div>
            <div className={"info_item"}>
              <img src="/images/1.png" alt=""/>
            </div>
            <div className={"info_item"}>
              <img src="/images/2.png" alt=""/>
            </div>
            <div className={"info_item"}>
              <img src="/images/3.png" alt=""/>
            </div>
          </div>
        </div>
        <div className={"nav"}>
          <button className={"Hamburger"} onClick={this.showNav}>
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
          <div className={"user_info"}>
            <img src="/images/Man-Icon-b.png" alt=""/>
            <div className={"name"}>
              <h1>Rohit</h1>
              <h1>Dhir</h1>
            </div>
          </div>
          <div className={"nav_links_container"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Portfolio</a>
            <a href="/">Contact</a>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
