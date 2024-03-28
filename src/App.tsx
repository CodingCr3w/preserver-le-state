import React from "react"
import clsx from "clsx"

import Tab from "./components/ui/Tab"
import Profile from "./components/Profile"
import Settings from "./components/Settings"

export default function App() {
  const [view, setView] = React.useState<"profile" | "settings">("profile")
  return (
    <div
      className={clsx(
        "mx-auto max-w-xl min-h-[25rem] rounded-lg shadow-lg p-5 mt-10",
        "bg-custom-navy border border-custom-light-navy"
      )}
    >
      <div role="tablist" aria-label="Vue courante" className="flex gap-5">
        <Tab selected={view === "profile"} onSelect={() => setView("profile")}>
          Profile
        </Tab>
        <Tab
          selected={view === "settings"}
          onSelect={() => setView("settings")}
        >
          Settings
        </Tab>
      </div>
      {view === "profile" ? <Profile /> : <Settings />}
    </div>
  )
}
