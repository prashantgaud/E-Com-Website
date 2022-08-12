import React from 'react'
import Announcement from '../components/Announcement'
import Budgetdeal from '../components/Budgetdeal'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import ShopByCategories from '../components/ShopByCategories'
import Shopbyproducts from '../components/Shopbyproducts'
import Slider from '../components/Slider'
import TrendingNow from '../components/TrendingNow'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <ShopByCategories/>
        <Categories/>
        <Shopbyproducts/>
        < Products/>
        <TrendingNow/>
        <Budgetdeal/>
        <Newsletter/>
        <Footer/>
       
       

    </div>
  )
}

export default Home