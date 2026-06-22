import { useState } from "react";
import { MoreIcon, HeartIcon, CommentIcon, RepostIcon, BookmarkIcon, DeleteIcon, EditIcon } from "@/assets/icons";



// --- Util for format number ---
const formatCount = (n) => {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(".0", "") + "K";
  return n;
};

// --- TweetCard ---
export function TweetCard({ tweet }) {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [bookmarked, setBookmarked] = useState(tweet.bookmarked);
  const [likes, setLikes] = useState(tweet.likes);
  const [reposts, setReposts] = useState(tweet.reposts);
  const [menuOpen, setMenuOpen] = useState(false);
  if (!tweet) return null;

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleRepost = () => {
    setReposted(!reposted);
    setReposts(reposted ? reposts - 1 : reposts + 1);
  };

  return (
    <div className="border-b border-gray-200 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex gap-3">

        {/* Аватар */}
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />

        {/* Правая часть */}
        <div className="flex-1 min-w-0">

          {/* Header */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-bold text-gray-900 text-sm truncate">{tweet.author.name}</span>
              <span className="text-gray-500 text-sm truncate">@{tweet.author.username}</span>
              <span className="text-gray-400 text-sm flex-shrink-0">· {tweet.date}</span>
            </div>

            {/* More button */}
            <div className="relative flex-shrink-0">
              <button
                onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                className="p-1.5 rounded-full text-gray-400 hover:text-[#1d9bf0] hover:bg-blue-50 transition-colors"
              >
                <MoreIcon className="w-4 h-4" />
              </button>

              {/* Dropdown меню */}
              {menuOpen && (
                <div className="absolute right-0 top-8 w-36 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                  {tweet.isOwn ? (
                    <>
                      <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                        <EditIcon className="w-4 h-4" /> Edit
                      </button>
                      <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50">
                        <DeleteIcon className="w-4 h-4" /> Delete
                      </button>
                    </>
                  ) : (
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                      Report
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Текст твита */}
          <p className="text-gray-900 text-sm mt-1 leading-relaxed">{tweet.content}</p>

          {/* Действия */}
          <div className="flex items-center justify-between mt-3 text-gray-500">

            {/* Comment */}
            <button className="flex items-center gap-1.5 group">
              <span className="p-1.5 rounded-full group-hover:bg-blue-50 group-hover:text-[#1d9bf0] transition-colors">
                <CommentIcon className="w-4 h-4" />
              </span>
              <span className="text-xs group-hover:text-[#1d9bf0] transition-colors">{formatCount(tweet.comments)}</span>
            </button>

            {/* Repost */}
            <button onClick={handleRepost} className="flex items-center gap-1.5 group">
              <span className={`p-1.5 rounded-full transition-colors ${reposted ? "text-green-500" : "group-hover:bg-green-50 group-hover:text-green-500"}`}>
                <RepostIcon className="w-4 h-4" />
              </span>
              <span className={`text-xs transition-colors ${reposted ? "text-green-500" : "group-hover:text-green-500"}`}>{formatCount(reposts)}</span>
            </button>

            {/* Like */}
            <button onClick={handleLike} className="flex items-center gap-1.5 group">
              <span className={`p-1.5 rounded-full transition-colors ${liked ? "text-pink-500" : "group-hover:bg-pink-50 group-hover:text-pink-500"}`}>
                <HeartIcon filled={liked} className="w-4 h-4" />
              </span>
              <span className={`text-xs transition-colors ${liked ? "text-pink-500" : "group-hover:text-pink-500"}`}>{formatCount(likes)}</span>
            </button>

            {/* Bookmark */}
            <button onClick={() => setBookmarked(!bookmarked)} className="flex items-center group">
              <span className={`p-1.5 rounded-full transition-colors ${bookmarked ? "text-[#1d9bf0]" : "group-hover:bg-blue-50 group-hover:text-[#1d9bf0]"}`}>
                <BookmarkIcon filled={bookmarked} className="w-4 h-4" />
              </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

