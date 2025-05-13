import { useEffect, useState } from 'react'
import './style.scss'
import { fetchPosts } from './utils/blogApi'
import { deletePost, addPost} from './utils/blogApi'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'

function App() {
  const [posts,setPosts]=useState([])
  const [error,setError]=useState('')
  const [isLoading, setIsLoading]=useState(true)

  useEffect(()=>{
    const loadPosts=async()=>{
      try{
        const data=await fetchPosts();
        setPosts(data)
        setIsLoading(false)
      }catch (error){
        setError('Failed to load posts. Please try again later.')
        setIsLoading(false)
      }
    }
    loadPosts();
  },[])

  const handleDeletePost=async(id)=>{
    try {
      const fliteredPosts=await deletePost(id)
      setPosts([...fliteredPosts])
    } catch (error) {
      setError('Failed to delete post. Please try again later.')
    }
  }
  const handleAddPost=async (post)=>{
    try {
      const newPost=await addPost(post)
      setPosts([...posts,newPost])
    } catch (error) {
      setError('Failed to add post. Please try again later.')
    }
  }

  return (
    <div className='container'>
     <h1>Mini Blog</h1>
     {error&&<p className='error'>{error}</p>}
     <BlogForm onAdd={handleAddPost}/>
     {isLoading?<p>Loading posts...</p>:<BlogList posts={posts} onDelete={handleDeletePost}/>}
    </div>
  )
}

export default App
