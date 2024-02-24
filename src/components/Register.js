import instance from "../api";
import { router } from "../utils/common";
import { registerValid } from "../validations/auth.valid";

async function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var userInfor = {
    email,
    password,
  };

  if (registerValid({ ...userInfor, confirmPass })) {
    try {
      const { data } = await instance.post("/register", {
        ...userInfor,
        role: "member",
        address: "",
        cart: [],
        history: [],
        comment: [],
        phoneNumber: "",
      });
      if (data.user) {
        const valueCofirm = confirm(
          "đăng ký thành công, vui lòng chuyển sang đăng nhập!"
        );
        if (valueCofirm) {
          router.navigate("/signin");
        }
      }
    } catch (Error) {
      alert(`Error: ${Error.response.data}`);
    }
  }
}

export default register;
