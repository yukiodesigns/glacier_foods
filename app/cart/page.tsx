import Breadcrumb from '@/components/shared/Breadcrumb';
import Link from 'next/link'
import React from 'react'

const bgImage = 'https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-01/Veg_crop_carrot-2743498_1920_Pix.jpg?itok=RXPlXhI7'
const title = 'Cart';
 const navItems = [
   { label: 'Shop', link: '/shop' },
   { label: 'Cart' },
 ];
const page = () => {
  return (
    <div>
      <Breadcrumb title={title} navItems={navItems} bgImage={bgImage}/>
    </div>
  )
}

export default page