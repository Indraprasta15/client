import React from 'react'

const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
          img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
          img: "https://images.pexels.com/photos/948050/pexels-photo-948050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
          img: "https://images.pexels.com/photos/326519/pexels-photo-326519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
          img: "https://images.pexels.com/photos/326506/pexels-photo-326506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 5,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis corporis obcaecati quas veniam tempora reprehenderit accusamus voluptas quisquam reiciendis magni molestias labore eum neque esse tenetur id dolorum delectus corrupti et culpa, inventore nemo non nesciunt. Obcaecati inventore doloribus aspernatur commodi tenetur aliquam minus, magni at autem culpa eveniet praesentium repudiandae nisi qui sunt itaque dolore deleniti consequuntur velit accusantium vitae? Temporibus explicabo nisi laudantium magnam delectus quod necessitatibus ducimus minus tempora quam esse deserunt quia aperiam molestiae error eos iure, quos libero doloribus, accusantium repudiandae vel vero. Consequatur quis repellat tenetur accusamus voluptas labore esse cum ipsam nam.",
          img: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
      ];
  return (
    <div className='menu'>
        <h1>Other post may you like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu