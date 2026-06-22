import { useState } from "react"
import Container from "@/components/ui/Container"
import { ChevronDownIcon, TwitterIcon } from "@/assets/icons"

const feeds = ["For you", "Following", "Trending"]

export function TopBar() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("For you")

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-15">

          {/* Left — Feed Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm font-bold text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <ChevronDownIcon />
              {selected}
            </button>

            {open && (
              <div className="absolute top-10 left-0 w-40 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                {feeds.map((feed) => (
                  <button
                    key={feed}
                    onClick={() => { setSelected(feed); setOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors
                      ${selected === feed ? "font-bold text-black" : "text-gray-700"}`}
                  >
                    {feed}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Center — Twitter Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <TwitterIcon className="w-9 h-9" />
          </div>

          {/* Right — User Avatar */}
          <div className="ml-auto">
            <button className="w-9 h-9 rounded-full overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="https://i.pravatar.cc/100?img=8"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>

        </div>
      </Container>
    </header>
  );
}