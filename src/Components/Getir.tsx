import Header from './GetirComponents/Header'
import Footer from './GetirComponents/Footer'
import Campaigns from './GetirComponents/Campaigns'
import Cards from './GetirComponents/Cards'
import Categories from './GetirComponents/Categories'
import Favourites from './GetirComponents/Favourites'
import HeroSection from './GetirComponents/HeroSection'
import MobileApp from './GetirComponents/MobileApp'

type Props = {}

const Getir = (props: Props) => {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Cards />
      <Campaigns />
      <Favourites />
      <MobileApp />
      <Footer />
    </>
  )
}

export default Getir
