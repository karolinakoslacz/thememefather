import { useEffect, useState } from 'react'
import DefaultImage from '../assets/default-image.jpg';

const HotMeme = (props) => {
    const [upvote, setUpvote] = useState(null)
    const [downvote, setDownvote] = useState(null)
  
    useEffect(() => {
      setUpvote(props.upvotes)
      setDownvote(props.downvotes)
    }, [])    //ustawia początkową wartość upvotes i downvotes 
  
    useEffect(() => {
      // obsluzenie warunku poczatkowego, gdy upvote = null i downvote = null, warunek upvote - downvote < 5
      // jest spelniony, wiec element automatycznie jest usuwany z tablicy hotMemes
      //logika do usuwania mema z HotMeme do RegularMeme
      if(upvote !== null && downvote !== null && upvote - downvote < 5) {
        const currentMeme = {
          downvotes: downvote,
          upvotes: upvote,
          id: props.id,
          title: props.title,
          src: props.src
        }
        props.setHotMemes(currentHotMemes => currentHotMemes.filter(meme => meme.id !== props.id))
        props.setRegularMemes(currentRegularMemes => [...currentRegularMemes, currentMeme])
      }
    }, [upvote, downvote])
  
    const onUpvoteHandler = () => {
      setUpvote(upvote + 1)
    }
  
    const onDownvoteHandler = () => {
      setDownvote(downvote + 1)
    }
  
  
    return <div className="meme">
      <h1>{props.title}</h1>
      <img src={props.src || DefaultImage}/>
      Upvotes: {upvote} <button onClick={onUpvoteHandler}>+</button>
      Downvotes: {downvote} <button onClick={onDownvoteHandler}>-</button>
    </div>
  }

  export default HotMeme