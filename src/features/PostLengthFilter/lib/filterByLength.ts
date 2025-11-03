import type { Post } from "@/entities/post/model/types";

export type SortDirection = "asc" | "desc";

export const filterByLength = (
  posts: Post[],
  direction: SortDirection = "asc",
): Post[] => {
  const sortedPosts = [...posts].sort((a, b) => {
    const lengthA = a.title.length;
    const lengthB = b.title.length;

    if (direction === "asc") {
      return lengthA - lengthB;
    } else {
      return lengthB - lengthA;
    }
  });

  return sortedPosts;
};
