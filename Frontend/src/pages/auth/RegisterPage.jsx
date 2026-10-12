

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import AuthShell from "../../components/auth/AuthShell";

function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Update form field values.
   */
  const update = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle registration.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (formData.password.trim().length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await registerUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      // Support different API response structures.
      const resData = response.data?.data || response.data;

      if (login && resData?.token) {
        login(resData.user, resData.token);
      }

      toast.success("Your workspace is ready!");

      navigate("/dashboard");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "We couldn't create your account. Please try again.";

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    {
      id: "name",
      label: "Full name",
      name: "name",
      type: "text",
      placeholder: "Your name",
      icon: UserRound,
      autoComplete: "name",
    },
    {
      id: "email",
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "you@example.com",
      icon: Mail,
      autoComplete: "email",
    },
  ];

  return (
    <AuthShell
      title="Create your account"
      subtitle="Start organizing the work that matters."
    >
      <div className="mx-auto w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
        >
          {/* Name + Email */}
          {fields.map(
            ({
              id,
              label,
              name,
              type,
              placeholder,
              icon: Icon,
              autoComplete,
            }) => (
              <div key={name} className="space-y-1.5">
                <label
                  htmlFor={id}
                  className="block text-xs font-semibold text-slate-700 sm:text-sm"
                >
                  {label}
                </label>

                <div className="relative">
                  <Icon
                    size={18}
                    aria-hidden="true"
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
                    id={id}
                    required
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    value={formData[name]}
                    onChange={update}
                    placeholder={placeholder}
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
            )
          )}

          {/* Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-slate-700 sm:text-sm"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={18}
                aria-hidden="true"
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
                required
                minLength={6}
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.password}
                onChange={update}
                placeholder="At least 6 characters"
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
                onClick={() => setShowPassword((prev) => !prev)}
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

          {/* Terms */}
          <p className="text-[11px] leading-4 text-slate-500 sm:text-xs">
            By continuing, you agree to use TaskFlow responsibly.
          </p>

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
                Creating account...
              </>
            ) : (
              "Create account"
            )}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
          Already have an account?{" "}
          <Link
            to="/"
            className="
              font-semibold
              text-indigo-600
              transition-colors
              hover:text-indigo-700
              hover:underline
              hover:underline-offset-4
            "
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}

export default RegisterPage;