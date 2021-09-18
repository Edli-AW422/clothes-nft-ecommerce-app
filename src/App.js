import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import nft1 from "./images/nft1.png";
import nft2 from "./images/nft2.png";
import nft3 from "./images/nft3.jpg";
import nft4 from "./images/nft4.png";
import nft5 from "./images/nft5.png";
import React from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const images = [
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

const nftImages = [
  nft1, nft2, nft3, nft4, nft5
];


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.onNftSelectedChange = this.onNftSelectedChange.bind(this);
    this.onShirtChange = this.onShirtChange.bind(this);
  }

  state = {
    selectedNft: null,
    shirtIndex: 0
  }

  onNftSelectedChange =(index, item)=>{
      console.log(index);
      console.log(nftImages[index]);
      this.setState({ selectedNft: nftImages[index]});
  }

  onShirtChange = (index) =>{
    console.log('onShirtChange ====', index);
    this.setState({ shirtIndex: index});
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-5 m-auto" style={{width: '60vh'}}>
            <Carousel showThumbs={false} selectedItem={this.state.shirtIndex} onChange={this.onShirtChange}>
              {
                  images.map((item, key)=>{
                    return (
                      <div key={key}>
                        <div className="shirt-block">
                          <img className="shirt-img" src={item}/>
                          {
                              this.state.selectedNft && key===this.state.shirtIndex && <img className="nft-img" src={this.state.selectedNft}/>
                          }
                        </div>
                      </div>
                    )
                  }
                )
            }
            </Carousel>    
          </div>
  
          <div className="row mt-5 m-auto" style={{width: '20vh'}}>
            <Carousel showThumbs={false} onClickItem={this.onNftSelectedChange}>
              {
                nftImages.map((item, key)=>
                  <div key={key}>{<img src={item}/>}</div>
                )
              }
            </Carousel>    
          </div>
  
        </div>
        
      </div>
    );
  }
}

