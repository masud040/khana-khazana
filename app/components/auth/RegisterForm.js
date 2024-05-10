import { registerUser } from "@/app/actions";
import Buttton from "../Button";

export default function RegisterForm() {
  return (
    <form className="login-form" action={registerUser}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <Buttton btnName="Create Account" />
    </form>
  );
}
