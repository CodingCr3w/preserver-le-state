import React from "react"
import TabPanel from "./ui/TabPanel"
import TextInput from "./ui/TextInput"

export default function Profile() {
  const [name, setName] = React.useState("Dupont")
  const [firstName, setFirstName] = React.useState("Marc")

  return (
    <TabPanel>
      <h2 className="text-lg font-semibold text-gray-50">Profil</h2>
      <p className="mb-5 text-gray-300">
        Modifiez vos informations personnelles ci-dessous.
      </p>
      <div className="space-y-4">
        <TextInput
          name="name"
          label="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          name="name"
          label="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
    </TabPanel>
  )
}
