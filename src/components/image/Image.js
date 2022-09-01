import React, { Component } from 'react'
class Image extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state={
            spanCount:"0"
        }
      }
      componentDidMount() {
       this.myRef.current.addEventListener('load',()=>{
        console.log(this.myRef.current.clientHeight);
        const spanCounts=Math.round(this.myRef.current.clientHeight/5)+2;

        this.setState({
            spanCount:spanCounts
        })
       })
      }
    
  render() {
    const{image}=this.props
    return (
      
        <img style={{gridRowEnd:`span ${this.state.spanCount}`}} ref={this.myRef} key={image.id} src={image.urls.small} alt="" />
     
    )
  }
}

export default Image;
