import React, { Component } from 'react'
import "./searchBar.css"

class SearchBar extends Component{
    state={
        search:""
    }
    constructor(){
        super();
       this.inputChanged=this.inputChanged.bind(this)
    }
    inputChanged(event){
       console.log(event.target.value);
       this.setState({
          search:event.target.value
       })
    }
    searchİmg=()=>{
        console.log("başarılı");
        this.props.onSearchImg(this.state.search);
    }
    render(){
        return (
        <div className="ui icon input loading search-bar-container">
            <input type="text" placeholder="Search..." onKeyPress={(e)=>{if(e.key==="Enter"){this.searchİmg();}}} onChange={this.inputChanged} />
            <button className="ui icon button" onClick={this.searchİmg}>
                <i className="search icon"></i>
            </button>
        </div>

    )
    }
    
}

export default SearchBar; 


