import { useState } from "react";
import { Pill } from "../components/ui/pill";
import { ToolCard } from "../components/ui/ToolCard";
import { GlobalLayout } from "../components/GlobalLayout";
import { Feedback } from "../components/ui/Feedback";
import { usabilityTestingTools } from "../data/usabilityTestingTools";

const PILL_CATEGORIES = [
  { key: "usability", label: "Usability Testing" },
  { key: "event", label: "Event Tracking" },
  { key: "ab", label: "A/B Testing" },
];


export const Homepage = (): JSX.Element => {
  const [selected, setSelected] = useState("usability");

  const handlePillClick = (key: string) => setSelected(key);

  const showTools = selected === "usability";

  return (
    <GlobalLayout>
      <section className="flex flex-col items-center justify-center gap-8 w-full py-8 sm:px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 w-full">
          <div
            className="w-[60px] h-[60px] rounded-[30px] [background:linear-gradient(180deg,rgba(255,54,84,1)_0%,rgba(0,0,0,1)_100%)]"
            aria-hidden="true"
          />
          <h1 className="font-h1 font-[700] text-white text-[48px] sm:text-[32px] text-center leading-normal">
            Design. Validate
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          {PILL_CATEGORIES.map((pill) => (
            <Pill
              key={pill.key}
              variant={selected === pill.key ? "active" : "inactive"}
              onClick={() => handlePillClick(pill.key)}
            >
              <span className="font-label font-[600] text-[12px] leading-normal">
                {pill.label}
              </span>
            </Pill>
          ))}
        </div>

        {showTools ? (
          <>
            <div className="flex flex-col gap-2 w-full max-w-[1200px] items-center">
              {usabilityTestingTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  title={tool.title}
                  description={tool.description}
                  logoUrl={tool.logoUrl}
                  websiteUrl={tool.websiteUrl}
                  upvotes={tool.upvotes}
                  downvotes={tool.downvotes}
                />
              ))}
            </div>
            {/* Feedback section from Figma MCP */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="text-[10px] text-white text-center max-w-[520px] font-normal leading-[1.4]">
                Synthesized analysis of user sentiment (late 2023 - mid-2025) from G2,
                Capterra, TrustRadius, and Reddit. Numbers represent “negative” and
                “positive” mentions by users. It is reflecting the volume and intensity
                of feedback, not a literal count of every comment. Done by Gemini 2.5
                Pro
              </div>
              <div className="flex flex-row gap-4 items-start justify-center">
                <span className="h-[31px] w-6 overflow-clip rounded-[3px] rotate-180 scale-y-[-100%] flex items-center justify-center bg-transparent">
                  <Feedback variant="like" />
                </span>
                <span className="h-[31px] w-6 overflow-clip rounded-[3px] flex items-center justify-center bg-transparent">
                  <Feedback variant="dislike" />
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full mt-8">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2t5eDh3dGZtdHprMXoxcnVtNDZxbmpxOW5qMzBvbHgyb2N6aWE4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wwg1suUiTbCY8H8vIA/giphy.gif"
              alt="Coming soon"
              className="rounded-xl max-w-[400px] w-full"
            />
          </div>
        )}
      </section>
    </GlobalLayout>
  );
};