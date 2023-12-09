import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: { light_blue_900: "bg-light_blue-900 shadow-bs text-white-A700_cc" },
  outline: {
    black_900: "border border-black-900 border-solid text-indigo-500",
  },
};
const sizes = { xs: "p-[11px]", sm: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "light_blue_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["light_blue_900", "black_900"]),
};

export { Button };
