import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="logo">
          <Link href="/">Logo</Link>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/">Меню</Link>
              </li>
              <li>
                <Link href="/branches">Филиалы</Link>
              </li>
              <li>
                <Link href="/about">O нас</Link>
              </li>
              <li>
                <Link href="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>

          <div>
            {/*Location*/}
            {/*Languages*/}
          </div>
        </div>

        <div>
          <ul>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/cabinet">Cabinet</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
