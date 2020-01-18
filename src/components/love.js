import React, { Component } from 'react';


class Love extends Component {

//creating the state.
constructor(props){
  super(props);
  this.state ={
    articles : []
  }
//

}
 componentDidMount (){

  fetch('https://newsapi.org/v2/everything?q=romance&apiKey=e9ff9e98a185439486079922f78983bf')
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

        {this.state.articles.map((item, index)=>{
       return(
         <div key= {item.title}> 
         <h2 style= {{textAlign:'center'}}>
         {item.title}
         </h2> 
         <img src ={item.urlToImage} style={{width: '50%'}} alt='article pic' />
         <br></br>
         <a href={item.url}  className="readmore"> Read More </a>
         </div>
          );
        })}
       
      </div>
    );
    
  }
}

export default Love;