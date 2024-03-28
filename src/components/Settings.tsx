import React from "react"

import TabPanel from "./ui/TabPanel"
import Switch from "./ui/Switch"

export default function Settings() {
  const [newsletter, setNewsletter] = React.useState(true)
  const [notifications, setNotifications] = React.useState(true)

  return (
    <TabPanel>
      <h2 className="text-lg font-semibold text-gray-50">Réglages</h2>
      <p className="mb-5 text-gray-300">
        Personnalisez votre expérience et vos préférences.
      </p>
      <div className="space-y-4">
        <Switch
          label="Recevoir la newsletter"
          checked={newsletter}
          onCheckedChange={setNewsletter}
        />
        <Switch
          label="Activer les notifications"
          checked={notifications}
          onCheckedChange={setNotifications}
        />
      </div>
    </TabPanel>
  )
}
