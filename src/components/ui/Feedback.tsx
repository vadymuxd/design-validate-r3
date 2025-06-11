import React from "react";

export type FeedbackVariant = "like" | "dislike";

interface FeedbackProps {
  variant?: FeedbackVariant;
  className?: string;
}

export const Feedback: React.FC<FeedbackProps> = ({ variant = "like", className }) => {
  const src = variant === "dislike"
    ? "/icons/Feedback-dislike.svg"
    : "/icons/Feedback-like.svg";
  return (
    <img
      src={src}
      alt={variant === "like" ? "Like feedback" : "Dislike feedback"}
      className={className}
      height={31}
      width={24}
      draggable={false}
      style={{ display: "block" }}
    />
  );
};
