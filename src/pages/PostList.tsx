import { FC } from "react";
import { PostListWithLoading } from "../widgets/PostList/PostList";

export const PostList: FC = () => {
  return <PostListWithLoading isLoading={false} />;
};
