import { useState, useEffect, useCallback } from "react";
import { mockPosts } from "../../../../shared/mocks/posts";

export const usePosts = (userId?: number) => {
  const [posts, setPosts] = useState(mockPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Имитация API запроса
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filteredPosts = mockPosts;
      if (userId) {
        filteredPosts = mockPosts.filter(
          (post) => post.userId === Number(userId),
        );
      }

      setPosts(filteredPosts);
    } catch (err) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const refetch = useCallback(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    refetch,
  };
};
