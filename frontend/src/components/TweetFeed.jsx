import { TweetCard } from "./TweetCard";
import { mockTweets } from "../mocks/tweets";


export function TweetFeed() {
  return (
    <div className="max-w-xl mx-auto bg-white border-x border-gray-200 min-h-screen">
      {mockTweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}