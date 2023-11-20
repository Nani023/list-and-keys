import UserProfile from './components/UserProfile/index'

const userDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  userName: 'Ravikishore',
  Role: 'Software Developer',
}

const App = () => <UserProfile userDetails={userDetails} />

export default App
