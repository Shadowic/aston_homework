import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { PostList } from "../../../pages/PostList";
import { PostDetails } from "../../../pages/PostDetails";
import { UserAlbums } from "../../../pages/UserAlbums/UserAlbums";
import { AlbumPhotos } from "../../../pages/AlbumPhotos/AlbumPhotos";
import { UserTodos } from "../../../pages/UserTodos/UserTodos";
import { UserPosts } from "../../../pages/UserPosts/UserPosts";
import { UserList } from "../../../pages/UserList/UserList";
import { LoadingSpinner } from "../../../shared/ui/LoadingSpinner/LoadingSpinner";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostList />} />
            <Route path="posts" element={<PostList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="users" element={<UserList />} />
            <Route path="users/:id/albums" element={<UserAlbums />} />
            <Route path="albums/:id/photos" element={<AlbumPhotos />} />
            <Route path="users/:id/todos" element={<UserTodos />} />
            <Route path="users/:id/posts" element={<UserPosts />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
