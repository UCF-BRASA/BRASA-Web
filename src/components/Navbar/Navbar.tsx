import Link from 'next/link'
import { useState, type FC } from 'react'

const Navbar: FC = () => {

  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <header className="p-2 bg-myblue">
      <nav className='bg-myblue border-blue-200 px-2 sm:px-4 py-2.5 dark:bg-grey-900'>
        <div className='container flex flex-row items-center justify-between mx-auto'>
          <div className='order-first bg-inherit w-full md:block md:w-auto'>
            <ul className='flex flex-row items-center p-4 rounded-lg md:space-x-8 md:text-sm md:font-medium'>
              <li>
                <Link href='/' className='flex items-center'>
                  <img
                    src='/brasa-logo.png'
                    className='h-6 mr-3 sm:h-9'
                    alt='Flowbite Logo'
                  />
                  <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                    Survey
                  </span>
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white md:p-0 hover:cursor-pointer">
                <Link href='/follow-us'>
                  Follow Us
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white md:p-0 hover:cursor-pointer">
                <Link href='/become-member'>
                  Become a Member
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white md:p-0 hover:cursor-pointer">
                <Link href='/meet-the-board'>
                  Meet the Board
                </Link>
              </li>
            </ul>
          </div>
          
          <div className='order-last'>
            <ul className='flex flex-row items-center p-4 rounded-lg text-white md:space-x-8 md:text-sm md:font-medium'>
              <li>
                <Link href='/'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link href='/'>
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar