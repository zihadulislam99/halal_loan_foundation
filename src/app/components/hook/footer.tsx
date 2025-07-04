import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 pb-18 mx-auto">
        <div className="flex flex-wrap text-center md:text-left">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10 md:mb-0">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">হালাল লোন ফাউন্ডেশন বাংলাদেশ</h2>
            <nav className="list-none">
              <li><a className="text-gray-600 hover:text-gray-800">Full address</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Address</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Email address</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Contact details</a></li>
            </nav>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10 md:mb-0 hidden md:block">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none">
              <li><a className="text-gray-600 hover:text-gray-800">First Link</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Second Link</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Third Link</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
            </nav>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-10 lg:mt-0 mb-10 md:mb-0 hidden md:block">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none">
              <li><a className="text-gray-600 hover:text-gray-800">First Link</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Second Link</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Third Link</a></li>
              <li><a href='/ADMIN' className="text-gray-600 hover:text-gray-800">Admin</a></li>
            </nav>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 md:mt-10 lg:mt-0">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex flex-wrap sm:flex-nowrap justify-center md:justify-start items-end">
              <div className="relative w-full sm:w-auto sm:mr-4 mb-2 sm:mb-0">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 transition duration-200 ease-in-out" />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="hidden lg:block" />waistcoat green juice
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex flex-col sm:flex-row items-center">
          <a className="flex title-font font-medium items-center justify-center sm:justify-start text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 mt-4 sm:mt-0 text-center">© 2020 Tailblocks —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
          </p>
          <span className="inline-flex sm:ml-auto mt-4 sm:mt-0 justify-center sm:justify-start">
            <a className="text-gray-500"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
            <a className="ml-3 text-gray-500"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg></a>
            <a className="ml-3 text-gray-500"><svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /></svg></a>
            <a className="ml-3 text-gray-500"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg></a>
            <a className="ml-3 text-gray-500"><svg fill="square" className="w-5 h-5" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg></a>
          </span>
        </div>
      </div>
    </footer>
  )
}
