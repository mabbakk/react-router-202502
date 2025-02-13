import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import BlogPostDetail from "../pages/BlogPostDetail";

// 라우터 설정
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <IndexPage />,
            },
            {
                path: 'blog',
                element: <BlogPage />,
            },
            {
                path: 'blog/:postId',
                element: <BlogPostDetail />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
]);