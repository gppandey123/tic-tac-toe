import React, { useState } from 'react'
import './App.css';
import Game from './components/game';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/actions';
import DisplayPosts from './components/DisplayPost';
import CreatePost from './components/CreatePost';

function App() {
  //  const counter = useSelector(state => state.counter);
  //  const dispatch = useDispatch()
  const [createPost ,setCreatePost] = useState(false);
  const [editData ,seteditData] = useState(null);

  //  console.log(counter);
  //  const handleClick = () => {
  //     dispatch(increment(counter+1))
  //  }

  const handleClick = () => {
    setCreatePost(!createPost);
  }
console.log(editData , "editData")
  return (
    <div>
       <Game />
       {/* Counter : {counter`}
       <button onClick={handleClick}>Click</button> */}
       {/* <CreatePost setCreatePost={setCreatePost} editData={editData} seteditData={seteditData}/>
       <DisplayPosts editData={editData} seteditData={seteditData}/> */}
        
    </div>
  );
}

export default App;
