import ProductList from "./src/components/ProductList";
import register from "./src/components/Register";
import signIn from "./src/components/SignIn";
import SignInPage from "./src/pages/SignInPage";
import SignUpPage from "./src/pages/SignUpPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoundPage";
import { render, router } from "./src/utils/common";
import DetailPage from "./src/pages/DetailPage";
import handleProductDetail from "./src/components/handleProductDetail";

import "./style.css";

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    ProductList();
  },
});
router.on("/home", () => router.navigate("/"));
router.on("/signup", () => render(app, SignUpPage), {
  after: () => {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register; 
  },
});

router.on("/signin", () => render(app, SignInPage), {
  after: () => {
    const btnSignIn = document.getElementById("btnSignIn");
    btnSignIn.onclick = signIn;
  },
});
router.on("/Detail/:id", () => render(app, DetailPage), {
  after({ data }) {
    handleProductDetail(data);
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();



