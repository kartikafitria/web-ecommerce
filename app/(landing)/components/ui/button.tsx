type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "primary",
  size = "normal",
  ...props
}: TButtonProps) => {
  const baseStyles =
    "inline-flex gap-3 items-center justify-center rounded-md font-medium transition duration-300 hover:scale-105";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    dark: "bg-dark text-white hover:bg-dark/90",
    ghost: "bg-white text-dark hover:bg-gray-100",
  };

  const sizes = {
    normal: "py-4 px-9",
    small: "py-2 px-6 text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
