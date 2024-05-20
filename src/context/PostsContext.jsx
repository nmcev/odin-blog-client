import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const PostsContext = createContext(null)

export function PostsContextProvider({ children }) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`)

                const data = await response.json();

                setPosts(data);
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }

        }

        fetchPosts();
    }, [])

    const values = {
        posts,
        loading,
        error,
        setPosts,
    }


    return (
        <PostsContext.Provider value={values}>
            {children}
        </PostsContext.Provider>
    )
}



PostsContextProvider.propTypes = {
    children: PropTypes.node
}