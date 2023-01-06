import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
  //     img: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
  //     img: "https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
  //     img: "https://images.pexels.com/photos/326519/pexels-photo-326519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
  //     img: "https://images.pexels.com/photos/326506/pexels-photo-326506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
  //     img: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  // ];
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;