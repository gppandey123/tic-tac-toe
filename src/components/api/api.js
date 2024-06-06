import axios from "axios";

export const retrievePosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    return response.data;
  };



export const addPosts = async (newPost) => {
    const response =await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
    return response; 
  };



  export const UpdatePosts = async (id, data) => {
     const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
     return response;
    };


  export const deletePosts = async (data) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${data?.id}`)
    return response;
  };
