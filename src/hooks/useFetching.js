import { useState } from "react";

export const useFetching = (callBack) => {
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setIsPostsLoading(true);
      await callBack(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsPostsLoading(false);
    }
  };

  return [fetching, isPostsLoading, error];
};
