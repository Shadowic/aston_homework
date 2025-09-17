import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { PostListPage } from "../../../pages/PostList";
import { PostDetails } from "../../../pages/PostDetails";
import { UserAlbums } from "../../../pages/UserAlbums/UserAlbums";
import { AlbumPhotos } from "../../../pages/AlbumPhotos/AlbumPhotos";
import { UserTodos } from "../../../pages/UserTodos/UserTodos";
import { UserPosts } from "../../../pages/UserPosts/UserPosts";
import { UserList } from "../../../pages/UserList/UserList";
import { LoadingSpinner } from "../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { withLoading } from "../../../shared/lib/hoc/withLoading";

const PostListPageWithLoading = withLoading(PostListPage);
const PostDetailsWithLoading = withLoading(PostDetails);
const UserListWithLoading = withLoading(UserList);
const UserAlbumsWithLoading = withLoading(UserAlbums);
const AlbumPhotosWithLoading = withLoading(AlbumPhotos);
const UserTodosWithLoading = withLoading(UserTodos);
const UserPostsWithLoading = withLoading(UserPosts);

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostListPageWithLoading />} />
            <Route path="posts" element={<PostListPageWithLoading />} />
            <Route path="posts/:id" element={<PostDetailsWithLoading />} />
            <Route path="users" element={<UserListWithLoading />} />
            <Route path="users/:id/albums" element={<UserAlbumsWithLoading />} />
            <Route path="albums/:id/photos" element={<AlbumPhotosWithLoading />} />
            <Route path="users/:id/todos" element={<UserTodosWithLoading />} />
            <Route path="users/:id/posts" element={<UserPostsWithLoading />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
