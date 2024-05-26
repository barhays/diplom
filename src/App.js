import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { routes } from "./routes";
import { PostPage } from "./pages/PostPage"

export default function App() {
  return (
    <>
      <Routes>
        <Route path={routes.MainPage} element={<MainPage />} />
        <Route path={routes.PostPage} element={<PostPage />} />
      </Routes>
    </>
  )
}