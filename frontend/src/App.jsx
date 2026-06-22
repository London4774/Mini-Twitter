import { TopBar } from "./components/TopBar"
import { TweetComposer } from "./components/TweetComposer"
import { TweetFeed } from "./components/TweetFeed"
import { BottomNavBar } from "./components/BottomNavBar"


function App() {

  return (
    <>
      <TopBar />
      <TweetComposer />
      <TweetFeed />
      <BottomNavBar />
    </>
  )
}

export default App
