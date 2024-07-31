import { UserProfileProvider } from "./components/UserProfileContext"
import Profile from "./components/Profile"
import EditProfile from "./components/EditProfile"

function App() {

  return (
    <>
      <UserProfileProvider>
        <div>
          <Profile />
          <EditProfile />
        </div>
      </UserProfileProvider>
    </>
  )
}

export default App
