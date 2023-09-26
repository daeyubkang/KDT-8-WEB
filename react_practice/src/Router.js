import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./12_router/Header";
import Home from "./12_router/Home";
import About from "./12_router/About";
import NotFound from "./12_router/404";
import User from "./12_router/User";
import Redirect from "./12_router/Redirect";
import UserDetail from "./12_router/UserDetail";
import App from "./App";
import Error from "./12_router/Error";
import Comment from "./12_router/Comment";
import KDT from "./12_router/KDT";
import Codingon from "./12_router/Codingon";
import SearchParam from "./12_router/SearchParam";

// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header></Header>
//         <Routes>
//           <Route path="/" element={<Home></Home>}></Route>
//           <Route path="/about" element={<About></About>}></Route>
//           <Route path="/user" element={<User></User>}></Route>
//           <Route
//             path="/user/:userId"
//             element={<UserDetail></UserDetail>}
//           ></Route>
//           <Route path="/redirect" element={<Redirect></Redirect>}></Route>
//           <Route path="*" element={<NotFound />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

//ver2
// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home></Home>,
//         errorElement: <Error></Error>,
//       },
//       {
//         path: "about",
//         element: <About></About>,
//       },
//       {
//         path: "redirect",
//         element: <Redirect></Redirect>,
//       },
//     ],
//     errorElement: <NotFound></NotFound>,
//   },
//   {
//     path: "/user",
//     element: <App></App>,
//     children: [
//       {
//         path: "",
//         element: <User></User>,
//       },
//       {
//         path: ":userId",
//         element: <UserDetail></UserDetail>,
//         children: [
//           {
//             path: "comment",
//             element: <Comment></Comment>,
//           },
//         ],
//       },
//       {
//         path: "redirect",
//         element: <Redirect></Redirect>,
//       },
//     ],
//   },
// ]);

//practice01
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/student",
    children: [
      {
        path: ":userId",
        element: <KDT></KDT>,
        errorElement: <Error></Error>,
      },
      {
        path: "new",
        element: <SearchParam></SearchParam>,
      },
    ],
  },
]);

export default Router;
