import React, { useEffect, useState } from 'react'
import { UpdatePosts, addPosts } from '../api/api';
import { useMutation, useQueryClient } from 'react-query';

const CreatePost = ({ setCreatePost, editData,seteditData }) => {
    const [title, setTitle] = useState(editData?.title);
    const [body, setBody] = useState(editData?.body);

    const  queryClient  = useQueryClient()

    const {mutate, isLoading, isError} = useMutation({
      mutationFn : addPosts,
      onSuccess: (newPost) => {
        // queryClient.setQueryData(["postsData", newPost.id], newPost)
        queryClient.invalidateQueries(["postsData"])
        seteditData(null)
      },
    }
    );

    const mutation = useMutation({
        mutationFn : UpdatePosts,
        onSuccess: (newPost) => {
          // queryClient.setQueryData(["postsData", newPost.id], newPost)
          queryClient.invalidateQueries(["postsData"])
        },
      }
      );

    useEffect(() => {
        setTitle(editData?.title);
        setBody(editData?.body)
     }, [editData?.body, editData?.title])

    const submitData = () => {
        mutate({ title, body });
    };

    const handleUpdate = () => {
        let data = {
            title: title,
            body : body
        }
       mutation.mutate(editData.id, data)
    }

    if (isLoading) {
        return <span>Submitting...</span>;
    }


    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
            />
            <button onClick={editData ? handleUpdate :  submitData}>Submit</button>
        </div>
    )
}

export default CreatePost