import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { MainLayout } from "@shared/layouts/MainLayout";
import { PostList } from "@widgets/PostList/PostList";
import { PostDetails } from "@pages/PostDetails";
import { UserAlbums } from "@pages/UserAlbums/UserAlbums";
import { AlbumPhotos } from "@pages/AlbumPhotos/AlbumPhotos";
import { UserTodos } from "@pages/UserTodos/UserTodos";
import { UserPosts } from "@pages/UserPosts/UserPosts";
import { UserList } from "@pages/UserList/UserList";
import { LoadingSpinner } from "@shared/ui/LoadingSpinner/LoadingSpinner";

export const RouterProvider: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostList />} />
            <Route path="posts" element={<PostList />} />
            <Route path="posts/:id" element={<PostDetails />} />

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":id">
                <Route path="posts" element={<UserPosts />} />
                <Route path="albums" element={<UserAlbums />} />
                <Route path="todos" element={<UserTodos />} />
                <Route path="albums/:albumId">
                  <Route path="photos" element={<AlbumPhotos />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
