//compoennts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Post = () => {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {posts.map((elem) => {
            return (
              <div key={elem.id} className="col-4">
                <NavLink to={`/posts/${elem.id}`}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{elem.title}</h4>
                      <p className="card-text">{elem.content}</p>
                      <button className='btn btn-primary'> Scopri di più</button>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;

