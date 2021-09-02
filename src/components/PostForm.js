import React ,{useState} from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import { createPost } from '../actions/postActions'

const PostForm = ({createPost}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const post ={
            title,
            body
        }
        
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        setTitle('')
        setBody('')

        // Call in Action
        createPost(post)

    }





    return (
        <div>
            <h3>Add Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title :</label><br />
                    <input type="text" name="title" value={title} onChange={ (e) =>  setTitle(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label>Body :</label><br />
                    <textarea name="body" value={body} onChange={(e) =>  setBody(e.target.value)} />
                </div>

                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

PostForm.propTypes = {
    createPost : PropType.func.isRequired
}

export default connect(null,{createPost})(PostForm)
