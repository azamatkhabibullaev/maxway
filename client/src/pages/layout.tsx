import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
