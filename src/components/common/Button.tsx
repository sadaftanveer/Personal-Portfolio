import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const className = `button button-${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;