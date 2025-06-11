import React from "react";

interface VoteButtonProps {
  count: number;
  isUpvote?: boolean;
}

const VoteButton: React.FC<VoteButtonProps> = ({ count, isUpvote = true }) => {
  return (
    <div className="bg-[#f2f2f7] relative rounded-lg w-full flex flex-row items-center justify-center gap-1 px-2 py-1.5">
      <div className="flex items-center justify-center relative">
        <svg
          className={`block h-4 w-4 ${isUpvote ? "" : "rotate-180"}`}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 12"
        >
          <path
            d="M7 0L13.9282 12H0.0717969L7 0Z"
            fill={isUpvote ? "#77DB95" : "#FF3654"}
          />
        </svg>
      </div>
      <span className="font-['Inter'] font-medium text-base leading-[1.4] text-black whitespace-pre">
        {count}
      </span>
    </div>
  );
};

interface ToolCardProps {
  title: string;
  description: string;
  logoUrl: string;
  websiteUrl: string;
  upvotes: number;
  downvotes: number;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  logoUrl,
  websiteUrl,
  upvotes,
  downvotes,
}) => {
  return (
    <div className="bg-white relative rounded-2xl w-full max-w-[730px]">
      {/* Desktop Layout (md and up) */}
      <div className="hidden md:flex flex-row items-center justify-center p-8 gap-6">
        <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center">
          <img
            src={logoUrl}
            alt={`${title} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex flex-col gap-2 items-start">
            <h3 className="font-bold text-lg text-black">{title}</h3>
            <p className="text-base text-black">{description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center min-w-[60px]">
          <VoteButton count={upvotes} isUpvote={true} />
          <VoteButton count={downvotes} isUpvote={false} />
        </div>
      </div>

      {/* Mobile Layout (below md) */}
      <div className="flex md:hidden flex-col items-center p-4 gap-3">
        <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
          <img
            src={logoUrl}
            alt={`${title} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-base text-black hover:underline"
        >
          {title}
        </a>
        <div className="text-gray-700 text-sm font-medium leading-snug text-center">
          {description}
        </div>
        <div className="flex flex-row gap-2 items-center mt-2">
          <VoteButton count={upvotes} isUpvote={true} />
          <VoteButton count={downvotes} isUpvote={false} />
        </div>
      </div>
    </div>
  );
};