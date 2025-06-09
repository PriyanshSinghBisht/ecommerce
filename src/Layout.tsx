import type { ReactNode } from 'react'
import Footer from './components/Footer'
import TopNav from './components/ui/TopNav'

  const Layout = ({children} : {children : ReactNode}) => {
  return (
    <div className="">
        <TopNav />
          {children}
        <Footer />
    </div>
  )
}

export default Layout