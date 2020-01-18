import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Politics from './components/politics';
import Tech from './components/tech';
import Strategy from './components/strategy';
import InfiniteScroll from 'react-infinite-scroller';


class App extends Component {

//creating the state.
constructor(props){
  super(props);
  this.state ={
    articles : []
  }
//

}
 componentDidMount (){

  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e9ff9e98a185439486079922f78983bf')
  .then((response) =>{
    return response.json();
  })
  .then((myJson)=> {
    console.log((myJson));
    //put all articles in state
    this.setState ({
      articles: myJson.articles
    });
  });

 } 
  render() {

    console.log(this.state)
    return (
      <div className="App">
        <h2>Tech Paradise</h2>
                
                <Link className="nav" to="/politics">Politics</Link>
                <Link className="nav"to="/tech">Tech</Link>
                <Link className="nav" to="/strategy">Strategy</Link>
                <Link className="nav" to="/">Top</Link>
                
                <Route path="/politics" component={Politics} />
                <Route path="/tech" component={Tech} />
                <Route path="/strategy" component={Strategy} />
                
        
                       
      {this.state.articles.map((item, index)=>{

       return(
         <div key= {item.title}> 
            
            <h2 style= {{textAlign:'center'}}>
              {item.title}
              </h2> 
              <img src ={item.urlToImage} style={{width: '40%'}} alt='article pic' />
              <br></br>
              
              <a href={item.url}  className="readmore"> Read More </a>
              
         </div>
         
       
          );
        }
        )
        }
        
          <footer>this app is powered by <a href ="https://newsapi.org" target="blank">NEWSAPI</a></footer>
       
      </div>
    );
    
  }
}

export default App;