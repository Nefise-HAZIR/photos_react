import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import ImageList from "./image/ImageList"
import "./App.css";

class App extends Component{
  state={
    images:[]
  }

  onSearchImg=async(search)=>{
    console.log("app:"+search);
    const result=await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query:search
      },
      headers:{
        Authorization:'Client-ID xngFZIlCen2hi-DZ_9lXIz3l4EIwwLfNzznV6lsF3vg'
      }
    }) //.then((result)=>{
    //   console.log(result.data.results);
    // })
    console.log(result.data.results);

    this.setState({
      images:result.data.results
    })
  }

  render(){
    return(
      <div className="app-container">
        <SearchBar onSearchImg={this.onSearchImg}/>
        <ImageList images={this.state.images}/>
        {/* {this.state.images.length}   İMAGES ALDIĞIMIZA BAKIYORUZ KONTROL AMAÇLI*/}
      </div>
    )
  }
  
}



export default App;
