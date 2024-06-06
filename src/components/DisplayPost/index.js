import React, { useState } from 'react'
import { deletePosts, retrievePosts } from '../api/api';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const DisplayPosts = ({seteditData}) => {
    const  queryClient  = useQueryClient()
    const [isEdit ,setIsEdit] = useState(false);
    const {
        data: posts,
        error,
        isLoading,
    } = useQuery({queryKey : ["postsData"], queryFn: retrievePosts});

    const {mutate} = useMutation({
        mutationFn : deletePosts,
        onSuccess: () => {
            queryClient.invalidateQueries(["postsData"])
          },
      }
    );


    if (isLoading) return <div>Fetching posts...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

   
    const hanldeDelete = (id) => {
           console.log(id) 
           mutate({id})
    }

    const handleUpdate = (post) => {
        // console.log(id)
        seteditData(post);
        setIsEdit(true);
    }

    return (
        <div>
            {posts.map((post) => (
             <div key={post.id}>
                <p >{post.title}</p>
                <button onClick={() => handleUpdate(post)}>Update</button>
                <button onClick={() => hanldeDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayPosts;