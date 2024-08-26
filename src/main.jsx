import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import "../src/reactRouter/index.css";
// import Root, {
//   loader as rootLoader,
//   action as rootAction,
// } from "./reactRouter/routes/root";
// import ErrorPage from "./reactRouter/errorPage";
// import Contact, { loader as contactLoader } from "./reactRouter/routes/contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//         loader: contactLoader
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
