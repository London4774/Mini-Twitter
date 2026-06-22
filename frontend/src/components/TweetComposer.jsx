import { useState } from "react";
import Container from "@/components/ui/Container"
import { ImageIcon, GifIcon, EmojiIcon, CalendarIcon } from "@/assets/icons";

// --- Mock data  ---
const currentUser = {
  avatar: "https://i.pravatar.cc/100?img=8",
  username: "yourname",
};

const MAX_CHARS = 280;

// --- Component ---
export function TweetComposer() {
  const [text, setText] = useState("");
  const charsLeft = MAX_CHARS - text.length;
  const isOverLimit = charsLeft < 0;
  const isNearLimit = charsLeft <= 20;
  const progress = Math.min(text.length / MAX_CHARS, 1);

  // Progress circle calculation
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  const handlePost = () => {
    if (!text.trim() || isOverLimit) return;
    alert(`Твит опубликован: "${text}"`);
    setText("");
  };

  return (
    <div className="px-4 py-3">
      <Container>
        <div className="flex gap-3 pb-5">

          {/* Avatar */}
          <img
            src={currentUser.avatar}
            alt={currentUser.username}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />

          {/* Right piece */}
          <div className="flex-1 flex flex-col gap-3">

            {/* Textarea */}
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's happening?"
              rows={3}
              className="w-full resize-none bg-transparent text-gray-900 text-lg placeholder-gray-400 outline-none"
            />

            {/* Bottom panel */}
            <div className="flex items-center justify-between">

              {/* Action icons */}
              <div className="flex items-center gap-1">
                {[
                  { Icon: ImageIcon, title: "Image" },
                  { Icon: GifIcon, title: "GIF" },
                  { Icon: EmojiIcon, title: "Emoji" },
                  { Icon: CalendarIcon, title: "Schedule" },
                ].map(({ Icon, title }) => (
                  <button
                    key={title}
                    title={title}
                    className="p-2 rounded-full text-[#1d9bf0] cursor-pointer hover:bg-blue-50 transition-colors"
                  >
                    <Icon className="w-5 h-5 opacity-50" />
                  </button>
                ))}
              </div>

              {/* Right piece: counter + button */}
              <div className="flex items-center gap-3">

                {/* Progress circle + counter */}
                {text.length > 0 && (
                  <div className="flex items-center gap-2">
                    {/* Circle */}
                    <svg width="28" height="28" viewBox="0 0 28 28">
                      {/* Background */}
                      <circle
                        cx="14" cy="14" r={radius}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2.5"
                      />
                      {/* Progress */}
                      <circle
                        cx="14" cy="14" r={radius}
                        fill="none"
                        stroke={isOverLimit ? "#f4212e" : isNearLimit ? "#ffd400" : "#1d9bf0"}
                        strokeWidth="2.5"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        transform="rotate(-90 14 14)"
                      />
                    </svg>
                    {/* Show number less chars left */}
                    {isNearLimit && (
                      <span className={`text-sm font-medium ${isOverLimit ? "text-red-500" : "text-gray-400"}`}>
                        {charsLeft}
                      </span>
                    )}
                  </div>
                )}

                {/* Post button */}
                <button
                  onClick={handlePost}
                  disabled={!text.trim() || isOverLimit}
                  className="px-4 py-1.5 bg-[#1d9bf0] text-white text-sm font-bold rounded-full
                      cursor-pointer hover:bg-[#1a8cd8] transition-colors
                      disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  + Post
                </button>
              </div>

            </div>

          </div>
        </div>
        {/* Разделитель */}
        <div className="border-t border-gray-200" />
      </Container >
    </div>
  );
}
