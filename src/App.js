import { useEffect, useState } from 'react'
import React from "react";
import './App.css';
import { memeArray } from './memes'

import Banner from './components/Banner';

import HotMeme from './components/HotMeme';
import RegularMeme from './components/RegularMeme';

function App() {  
  const [regularMemes, setRegularMemes] = useState([])
  const [hotMemes, setHotMemes] = useState([])
  const [tab, setTab] = useState('hot') //aktualna zakładka

  useEffect(() => {
    const filteredHotMemes = memeArray.filter(meme => meme.upvotes - meme.downvotes > 5)
    const filteredRegularMemes = memeArray.filter(meme => meme.upvotes - meme.downvotes < 5)
    setHotMemes(filteredHotMemes) 
    setRegularMemes(filteredRegularMemes)
  }, [])

  const onNavigationHandler = (tab) => setTab(tab)


  return (
    <><div>
      <Banner />
    </div><div className="App">
        <div className="navigation">
          <button onClick={() => onNavigationHandler('hot')}>Hot</button>
          <button onClick={() => onNavigationHandler('regular')}>Regular</button>
        </div>
        {tab === 'hot' && <>
          <h2 className="sectionTitle">Hot memes</h2>
          {hotMemes.map((meme, index) => <HotMeme key={meme.id} id={meme.id} src={meme.src} title={meme.title} setRegularMemes={setRegularMemes} setHotMemes={setHotMemes} upvotes={meme.upvotes} downvotes={meme.downvotes} />)}
        </>} 
        {tab === 'regular' && <>
          <h2 className="sectionTitle">Regular memes</h2>
          {regularMemes.map((meme, index) => <RegularMeme key={meme.id} src={meme.src} id={meme.id} setRegularMemes={setRegularMemes} setHotMemes={setHotMemes} title={meme.title} upvotes={meme.upvotes} downvotes={meme.downvotes} />)}
        </>} 

      </div></>
  );
}

export default App;

