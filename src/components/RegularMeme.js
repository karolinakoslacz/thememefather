import { useEffect, useState } from 'react'
import DefaultImage from '../assets/default-image.jpg';

const RegularMeme = (props) => {
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)
  
    useEffect(() => {
      setUpvote(props.upvotes)
      setDownvote(props.downvotes)
    }, [])
  
    useEffect(() => {
      if(upvote - downvote >= 5) {
        const currentMeme = {
          downvotes: downvote,
          upvotes: upvote,
          id: props.id,
          title: props.title,
          src: props.src
        }
        props.setRegularMemes(currentRegularMemes => currentRegularMemes.filter(meme => meme.id !== props.id))
        props.setHotMemes(currentHotMemes => [...currentHotMemes, currentMeme])
      }
    }, [upvote, downvote])
  
    const onUpvoteHandler = () => {
      setUpvote((upvote) => upvote + 1)
    }
  
    const onDownvoteHandler = () => {
      setDownvote((downvote) => downvote + 1)
    }
  
  
    return <div className="meme">
      <h1>{props.title}</h1>
      <img src={props.src || DefaultImage}/>
      Upvotes: {upvote} <button onClick={onUpvoteHandler}>+</button>
      Downvotes: {downvote} <button onClick={onDownvoteHandler}>-</button>
    </div>
  }

  export default RegularMeme