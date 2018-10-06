import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      headline: [],
      //activeHeadline: ''
    }
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=64531e01e997478aab9721db939f6574`).then(results => {
      console.log('resulte', results)
      this.setState({headline: results.data.articles})
      }
    )
  }


  handleClick() {
    console.log('hi')
  }

  handleChange(val){
    axios.get(`https://newsapi.org/v2/top-headlines?country=${val}&apiKey=64531e01e997478aab9721db939f6574`).then(results => {
    this.setState({headline: results.data.articles})
    })
  }


  render() {
    console.log(this.state.headline)
    return (
      <div className="App">   
            <div className="box">
            <p>Enter your countries code</p>
            <p className="code">ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za . </p>
            <input type="text" placeholder="language switch" onChange={e => this.handleChange(e.target.value)}/> 
              {this.state.headline.map(headline => {
                return <div key={headline.title} className='eachHeadline'>
                <a href={headline.url} target="_blank"><h3>{headline.title}</h3></a>
                <img src={headline.urlToImage} alt=""/>
                <button onClick={this.handleClick}>add</button>
                </div>
              })}
            </div>
            <div>
              <List headline={this.state.headline}/>
            </div>
      </div>
    );
  }
}

export default App;
