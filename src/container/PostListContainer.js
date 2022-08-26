import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList";
import { getPosts, clearPost } from "../modules/posts";

function PostListContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(postId));
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}

export default PostListContainer;
