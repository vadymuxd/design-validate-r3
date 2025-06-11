import React, { useState } from "react";
import { getClientInfo } from "../../lib/getClientInfo";
import { sendFeedback } from "../../lib/feedbackApi";

export type FeedbackVariant = "like" | "dislike";

interface FeedbackProps {
  variant?: FeedbackVariant;
  className?: string;
}

export const Feedback: React.FC<FeedbackProps> = ({ variant = "like", className }) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const { ip, deviceId } = await getClientInfo();
      await sendFeedback({ sentiment: variant, ip, deviceId });
      setSent(true);
      setTimeout(() => setSent(false), 2000);
    } catch {
      // Optionally handle error
    } finally {
      setLoading(false);
    }
  };

  const src = variant === "dislike"
    ? "/icons/Feedback-dislike.svg"
    : "/icons/Feedback-like.svg";

  return (
    <>
      <img
        src={src}
        alt={variant === "like" ? "Like feedback" : "Dislike feedback"}
        className={className}
        height={31}
        width={24}
        draggable={false}
        style={{ display: "block", cursor: "pointer", opacity: loading ? 0.5 : 1 }}
        onClick={handleClick}
      />
      {sent && (
        <div style={{ color: "#fff", fontSize: 12, marginTop: 4, textAlign: "center" }}>
          Thanks! Feedback sent
        </div>
      )}
    </>
  );
};
