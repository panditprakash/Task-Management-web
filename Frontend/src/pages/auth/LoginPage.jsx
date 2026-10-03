// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
// // import toast from "react-hot-toast";
// // import { loginUser } from "../../services/authService";
// // import { useAuth } from "../../context/AuthContext";
// // import AuthShell from "../../components/auth/AuthShell";

// // function LoginPage() {
// //   const navigate = useNavigate();
// //   const { login } = useAuth();
// //   const [formData, setFormData] = useState({ email: "", password: "" });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const update = (event) =>
// //     setFormData({ ...formData, [event.target.name]: event.target.value });

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     if (isSubmitting) return;
// //     setIsSubmitting(true);
// //     try {
// //       const response = await loginUser(formData);
// //       login(response.data.user, response.data.token);
// //       toast.success("Welcome back!");
// //       navigate("/dashboard");
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "We couldn't sign you in. Try again.",
// //       );
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <AuthShell
// //       title="Welcome back"
// //       subtitle="Sign in to pick up where you left off."
// //     >
// //       <form onSubmit={handleSubmit} className="mt-8 space-y-4 border-yellow-600 sm:mt-9 sm:space-y-5 ">
// //         <label className="block text-sm font-semibold text-slate-700">
// //           Email address
// //           <span className="relative mt-2 block">
// //             <Mail
// //               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
// //               size={19}
// //             /> 
// //             <input5 
// //               required
// //               autoComplete="email"
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={update}
// //               placeholder="you@example.com"
// //               className="block w-full min-w-0 rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-base outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:py-3.5"
// //             />
// //           </span>
// //         </label>
// //         <label className="block text-sm font-semibold text-slate-700">
// //           Password
// //           <span className="relative mt-2 block">
// //             <LockKeyhole
// //               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
// //               size={19}
// //             />
// //             <input
// //               required
// //               minLength="6"
// //               autoComplete="current-password"
// //               type={showPassword ? "text" : "password"}
// //               name="password"
// //               value={formData.password}
// //               onChange={update}
// //               placeholder="Enter your password"
// //               className="block w-full min-w-0 rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-base outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:py-3.5"
// //             />
// //             <button
// //               type="button"
// //               onClick={() => setShowPassword(!showPassword)}
// //               aria-label={showPassword ? "Hide password" : "Show password"}
// //               className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 sm:right-4"
// //             >
// //               {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
// //             </button>
// //           </span>
// //         </label>
// //         <div className="flex items-center gap-2 pt-1 text-xs leading-5 text-slate-500">
// //           <ShieldCheck size={16} className="shrink-0 text-indigo-600" />
// //           Your sign-in details are securely protected.
// //         </div>
// //         <button
// //           disabled={isSubmitting}
// //           className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-70"
// //         >
// //           {isSubmitting ? "Signing in…" : "Sign in"}
// //           {!isSubmitting && <ArrowRight size={18} aria-hidden="true" />}
// //         </button>
// //       </form>
// //       <p className="mt-7 rounded-xl bg-slate-50 px-4 py-3 text-center text-sm leading-6 text-slate-500 sm:mt-8">
// //         New to TaskFlow?{" "}
// //         <Link
// //           to="/register"
// //           className="font-semibold text-indigo-600 hover:text-indigo-700"
// //         >
// //           Create an account
// //         </Link>
// //       </p>
// //     </AuthShell>
// //   );
// // }

// // export default LoginPage;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
// import toast from "react-hot-toast";
// import { loginUser } from "../../services/authService";
// import { useAuth } from "../../context/AuthContext";
// import AuthShell from "../../components/auth/AuthShell";

// function LoginPage() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const update = (event) =>
//     setFormData({ ...formData, [event.target.name]: event.target.value });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (isSubmitting) return;
//     setIsSubmitting(true);
//     try {
//       const response = await loginUser(formData);
//       login(response.data.user, response.data.token);
//       toast.success("Welcome back!");
//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "We couldn't sign you in. Try again."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AuthShell
//       title="Welcome back"
//       subtitle="Sign in to pick up where you left off."
//     >
//       {/* Wrapper container with responsive padding & subtle border frame */}
//       <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-8">
//         <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//           {/* Email Field */}
//           <label className="block text-sm font-semibold text-slate-700">
//             Email address
//             <span className="relative mt-1.5 block">
//               <Mail
//                 className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                 size={19}
//               />
//               <input
//                 required
//                 autoComplete="email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={update}
//                 placeholder="you@example.com"
//                 className="block w-full min-w-0 rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm sm:text-base text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-indigo-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 sm:py-3"
//               />
//             </span>
//           </label>

//           {/* Password Field */}
//           <label className="block text-sm font-semibold text-slate-700">
//             Password
//             <span className="relative mt-1.5 block">
//               <LockKeyhole
//                 className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                 size={19}
//               />
//               <input
//                 required
//                 minLength={6}
//                 autoComplete="current-password"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={update}
//                 placeholder="Enter your password"
//                 className="block w-full min-w-0 rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-11 text-sm sm:text-base text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-indigo-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 sm:py-3"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//                 className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </span>
//           </label>

//           {/* Security Indicator */}
//           <div className="flex items-center gap-2 pt-0.5 text-xs text-slate-500">
//             <ShieldCheck size={16} className="shrink-0 text-indigo-600" />
//             <span>Your sign-in details are securely protected.</span>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-70 sm:py-3.5 sm:text-base"
//           >
//             {isSubmitting ? "Signing in…" : "Sign in"}
//             {!isSubmitting && <ArrowRight size={18} aria-hidden="true" />}
//           </button>
//         </form>

//         {/* Footer / Register Link */}
//         <p className="mt-6 rounded-xl border border-slate-200/60 bg-slate-50/80 px-4 py-3 text-center text-xs text-slate-600 sm:text-sm">
//           New to TaskFlow?{" "}
//           <Link
//             to="/register"
//             className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
//           >
//             Create an account
//           </Link>
//         </p>
//       </div>
//     </AuthShell>
//   );
// }

// export default LoginPage;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import AuthShell from "../../components/auth/AuthShell";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Update form values.
   */
  const update = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle user login.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await loginUser({
        email: formData.email.trim(),
        password: formData.password,
      });

      // Support different API response structures.
      const resData = response.data?.data || response.data;

      if (login && resData?.token) {
        login(resData.user, resData.token);
      }

      toast.success("Welcome back to TaskFlow!");

      navigate("/dashboard");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Invalid email or password.";

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue managing your tasks."
    >
      <div className="mx-auto w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
        >
          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 sm:text-sm"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="
                  pointer-events-none
                  absolute
                  left-3.5
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={update}
                placeholder="you@example.com"
                disabled={isSubmitting}
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  pl-10
                  pr-4
                  text-sm
                  text-slate-800
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-indigo-100
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:h-12
                "
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs font-semibold text-slate-700 sm:text-sm"
              >
                Password
              </label>

              <button
                type="button"
                className="
                  text-[11px]
                  font-semibold
                  text-indigo-600
                  hover:text-indigo-700
                  sm:text-xs
                "
                onClick={() =>
                  toast("Password recovery can be added next.")
                }
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <LockKeyhole
                size={18}
                className="
                  pointer-events-none
                  absolute
                  left-3.5
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={formData.password}
                onChange={update}
                placeholder="Enter your password"
                disabled={isSubmitting}
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  pl-10
                  pr-11
                  text-sm
                  text-slate-800
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-indigo-100
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:h-12
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                disabled={isSubmitting}
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="
                  absolute
                  right-3.5
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  transition-colors
                  hover:text-indigo-600
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-indigo-600
              px-5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-indigo-500/20
              transition-all
              hover:bg-indigo-700
              hover:shadow-indigo-500/30
              active:scale-[0.99]
              disabled:cursor-not-allowed
              disabled:opacity-60
              sm:h-12
            "
          >
            {isSubmitting ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="
              font-semibold
              text-indigo-600
              transition-colors
              hover:text-indigo-700
              hover:underline
              hover:underline-offset-4
            "
          >
            Create account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}

export default LoginPage;