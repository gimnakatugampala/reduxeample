import React,{useEffect ,useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

const Posts = ({fetchPosts}) => {

    const [data, setData] = useState([])



    useEffect(() =>{
        fetchPosts()

    })

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

Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object
}

const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost:state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Posts)
