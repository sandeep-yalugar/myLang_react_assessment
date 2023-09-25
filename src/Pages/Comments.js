import React, { useState,useEffect } from 'react';
import './Comments.css'

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const handlePost = () => {
    if (comment) {
      const Updated = [...comments, comment]
      setComments(Updated); 
      setComment(''); 
      const dataString = JSON.stringify(Updated);
      localStorage.setItem('comments', dataString);

    }
  }

  useEffect(() => {
    const storedDataString = localStorage.getItem('comments');
  
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      setComments([...comments, ...storedData]);
    }
  }, []);
  return (
    <div className='main'>
      <div className="form">
        <input className="inp" onChange={(e) => handleChange(e)} value={comment} placeholder='Leave a Comment' />
        <div className="button" onClick={handlePost}>POST</div> {/* Add onClick event */}
      </div>
      <div className="section">
        {comments.map((item, index) => (
          <div className="comment_div" key={index}> {/* Added 'key' prop */}
            <p>
              <span>{item}</span><br />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
