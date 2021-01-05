import React, {useReducer} from 'react';
import blogContext from './blogContext';
import blogReducer from './blogReducer';

const BlogProvider = props => {
    const initialState = {
        blogPosts: [],
        currentBlogPost: null,
        loading: true,
    }
    
    const [state, dispatch] = useReducer(blogReducer, initialState);

    const getPosts = async () => {
        try{ 
            dispatch({ type: 'SENDING_REQUEST'});
            const res = await fetch('/posts');
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED'});
            dispatch({ type: 'SET_POSTS', payload: data })
        }catch(err){
            console.log(err);
        }
    }

    const getPostById = async id => {
        try{
            dispatch({ type: 'SENDING_REQUEST'});
            const res = await fetch(`/posts/${id}`);
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED'});
            dispatch({ type: 'SET_POST', payload: data })
        }catch (err){
            console.log(err)
        }
    }

    return (
        <blogContext.Provider value={{
            blogPosts: state.blogPosts,
            currentBlogPost: state.currentBlogPost,
            loading: state.loading,
            getPosts: getPosts,
            getPostById: getPostById
        }} >
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogProvider;