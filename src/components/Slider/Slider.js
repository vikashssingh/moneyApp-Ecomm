import React,{useState,useEffect} from 'react';
import './slider.css';
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIosIcon";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIosIcon";

import  ArrowForwardIosOutlined  from '@material-ui/icons/ArrowForwardIosOutlined';
import  ArrowBackIosOutlined  from '@material-ui/icons/ArrowBackIosOutlined';
const Slider = ({images}) => {
    const [index,setIndex] =useState(0);

    //if user click on arrow it will slides the slider

    useEffect(()=>{
        const lastIndex =images.length-1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    },[index,images]);

    //if user not click on arrow it will slides the slider
    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index +1);
        },5000);

        return ()=>{
            clearInterval(slider);
        }
    },[index])

  return (
    <div className='section'>

        <div className="section-center">
            {
                images.map((image,indexImage)=>{
                    let position = "nextSlide";
                    if(indexImage === index){
                        position = "activeSlide"
                    }
                    if(indexImage === index-1 || (index === 0 && indexImage === images.length -1 )){
                            position ="lastSlide";
                    }
                    return(
                        <article className={position} key={indexImage}>
                            <img src={image} alt="banner_img" className='banner-img'/>
                        </article>
                    )
                })
            }

            <p className='prev' onClick={()=> setIndex(index -1 )}>
            <ArrowBackIosOutlined/>
            </p>
            <p className="next" onClick={()=> setIndex(index +1 )}>
                <ArrowForwardIosOutlined />
            </p>
        </div>

    </div>
  )
}

export default Slider