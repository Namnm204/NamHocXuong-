import instance from "../api";
import { signInValid } from "../validations/auth.valid";
import { router } from "../utils/common";

async function signIn() {
  try {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const user = {
      email,
      password,
    };

    if (signInValid(user)) {
      const response = await instance.post("/login", user);
      if (response && response.data && response.data.user) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
        const valueConfirm = confirm(
          "Đăng nhập thành công! Bạn có muốn chuyển sang trang chủ không?"
        );
        if (valueConfirm) {
          router.navigate("/");
        }
      }
    }
  } catch (error) {
    alert("Đã xảy ra lỗi khi đăng nhập.");
    console.error(error);
  }
}
export default signIn;
