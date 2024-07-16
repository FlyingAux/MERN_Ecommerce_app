import React from 'react'
import Link from 'next/link'
import Header from '../Components/partials/header';
import Footer from '../Components/partials/footer';

const page = () => {
  return (
    <>
    <Header/>
      <Link href='/'>Login Page`</Link>
    <Footer/>
    </>
  )
}

export default page