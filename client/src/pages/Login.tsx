import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-primaryDark1">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-20 sm:h-16"
            src="../assets/TaskM.svg"
            alt=""
          />
        </div>

        <p className="mt-1 text-center text-gray-300">
          Login in to your account
        </p>

        <form>
          <div className="w-full mt-4">
            <Input type="email" placeholder="Email Address" label="Email Address" />
          </div>

          <div className="w-full mt-4">
            <Input type="password" placeholder="Password" label="Password" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link to="#" className="text-sm text-gray-300 hover:text-primaryDark2">
              Forgot Password?
            </Link>

            <Button onClick={() => {}}>Sign in</Button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-secondaryDark2">
        <span className="text-sm text-white">
          Don&apos;t have an account?{" "}
        </span>
        <Link to="#" className="mx-2 text-sm font-bold text-blue-500 hover:underline" >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
