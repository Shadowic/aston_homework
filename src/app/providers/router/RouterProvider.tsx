import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
const UserPostsWithLoading = withLoading(UserPosts);
const UserAlbumsWithLoading = withLoading(UserAlbums);
const UserTodosWithLoading = withLoading(UserTodos);
const AlbumPhotosWithLoading = withLoading(AlbumPhotos);

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostListPageWithLoading />} />
            <Route path="posts" element={<PostListPageWithLoading />} />
            <Route path="posts/:id" element={<PostDetailsWithLoading />} />

            <Route path="users">
              <Route index element={<UserListWithLoading />} />
              <Route path=":id">
                <Route path="posts" element={<UserPostsWithLoading />} />
                <Route path="albums" element={<UserAlbumsWithLoading />} />
                <Route path="todos" element={<UserTodosWithLoading />} />
                <Route path="albums/:albumId">
                  <Route path="photos" element={<AlbumPhotosWithLoading />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
