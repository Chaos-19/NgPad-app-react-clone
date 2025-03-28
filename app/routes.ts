import {
    type RouteConfig,
    index,
    route,
    layout,
    prefix
} from "@react-router/dev/routes";

export default [
    //index("routes/home.tsx"),
    layout("layouts/main-layout.tsx", [
        index("routes/home.tsx"),
        route("tutorials", "routes/tutorial.tsx"),
        route("quiz", "routes/quiz.tsx"),
        route("news", "routes/news.tsx"),
        route("learn-more", "routes/learn-more.tsx"),
        route("interview", "routes/interview.tsx"),
        route("help-center", "routes/help-center.tsx")
    ]),
    layout("layouts/course-detail-layout.tsx", [
      route(":courseTitle/course/content/:id", "routes/course-detail.tsx"),
      route(":courseTitle/course/sections/:id", "routes/course-section-detail.tsx"),
    ])
    /*
    ...prefix("course/:title/content", [
    layout("layouts/course-detail-layout.tsx", [])
    ])
    */
] satisfies RouteConfig;
