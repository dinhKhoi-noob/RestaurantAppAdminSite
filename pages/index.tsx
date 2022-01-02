import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import NavigationBar from '../components/layouts/NavigationBar';
const Home: NextPage = () => {
  return (
    <div className="container">
      <NavigationBar></NavigationBar>
    </div>
  )
}

export default Home
