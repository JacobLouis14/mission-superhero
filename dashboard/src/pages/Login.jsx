import React, { useContext, useState } from "react";
import { loginApiHandler } from "../services/allApi";
import { AuthContext } from "../context/Authprovider";
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";

const Login = () => {
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [renderHelper, setRenderHelper] = useState({
    isSubmit: false,
    isLoading: false,
  });

  const loginSubmitHandler = async () => {
    setRenderHelper({ isLoading: true, isSubmit: true });
    const { email, password } = loginData;
    if (!email || !password) {
      alert("Complete the full form data");
      return;
    }

    const res = await loginApiHandler(loginData);
    // console.log(res);
    if (res.status < 200 || res.status >= 300) {
      setRenderHelper({ isLoading: false, isSubmit: true });
      alert(res.response.data.message);
      return;
    } else {
      setAuthData({ token: res.data.token });
      sessionStorage.setItem("token", res.data.token);
      navigate("/dashboard", { replace: true });
      setRenderHelper({
        isSubmit: false,
        isLoading: false,
      });
    }
  };

  return (
    <div className="min-h-dvh text-gray-600 bg-slate-100 flex items-center justify-center flex-col">
      {!renderHelper.isSubmit && !renderHelper.isLoading && (
        <>
          <div className="p-6 flex flex-col sm:w-80">
            <h2 className="text-center mb-16 font-bold text-4xl">Login</h2>
            <div className="mb-7">
              <p className="mb-3">Enter your email</p>
              <input
                type="email"
                className="px-4 py-2 outline-none rounded-md w-full"
                placeholder="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-10">
              <p className="mb-3">Enter password</p>
              <input
                type="password"
                className="px-4 py-2 outline-none rounded-md w-full"
                placeholder="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <button
              className="ms-auto p-3 bg-yellow-900 rounded-lg text-white font-bold"
              onClick={loginSubmitHandler}
            >
              Submit
            </button>
          </div>
          <p className="mt-8 text-2xl font-light italic text-yellow-900 tracking-widest px-5">
            Where solutions begins
          </p>
          <div className="mt-8 text-yellow-900">
            <p>
              email: <span>hero@gmail.com</span>
            </p>
            <p>
              password: <span>12345</span>
            </p>
          </div>
        </>
      )}
      {renderHelper.isSubmit && renderHelper.isLoading && <Loading />}
      {!renderHelper.isLoading && renderHelper.isSubmit && (
        <>
          <p>Something went wrong</p>
        </>
      )}
    </div>
  );
};

export default Login;
