import React,{useEffect ,useState} from 'react'

const Posts = () => {

    const [data, setData] = useState([])

    

    useEffect(() =>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => setData(data))

    },[])

    return (
        <div>
            <h3>Posts</h3>
           {
               data?.map(post => (
                   <div key={post.id}>
                       <h3>{post.title}</h3>
                       <p>{post.body}</p>
                   </div>
               ))
           }
        </div>
    )
}

export default Posts
