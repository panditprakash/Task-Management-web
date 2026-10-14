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