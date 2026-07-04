function NavbarPage() {
  const navItems = [
    "HOME",
    "MENU",
    "CREATE YOUR BOBA",
    "OUR OUTLETS",
    "ABOUT US",
    "FRANCHISE",
    "CONTACT",
  ];

  return (
    <nav className="w-full bg-[#F7C52B] px-10 py-4 flex items-center justify-between shadow-sm min-h-[80px] max-h-[80px]">
      
      <div className="flex bg-white">
        <img src="logo.png" className="flex h-[60px] " draggable="false" />
      </div>

     
      <div className="flex items-center gap-8  ">
          <button className={`relative text-sm font-bold tracking-wide transition duration-200 hover:text-black cursor-pointer h-[40px] text-[20px]  border-b-2 hover:border-b-2 }`}>
            HOME
          </button>
          <button className={`relative text-sm font-bold tracking-wide transition duration-200 hover:text-black cursor-pointer h-[40px] text-[20px]  border-b-2 border-transparent hover:border-b-2 hover:border-black }`}>
            MENU
          </button>
          <button className={`relative text-sm font-bold tracking-wide transition duration-200 hover:text-black cursor-pointer h-[40px] text-[20px]  border-b-2 border-transparent hover:border-b-2 hover:border-black }`}>
            OUR OUTLETS
          </button>
          <button className={`relative text-sm font-bold tracking-wide transition duration-200 hover:text-black cursor-pointer h-[40px] text-[20px]  border-b-2 border-transparent hover:border-b-2 hover:border-black }`}>
            ABOUT US
          </button>
          <button className={`relative text-sm font-bold tracking-wide transition duration-200 hover:text-black cursor-pointer h-[40px] text-[20px]  border-b-2 border-transparent hover:border-b-2 hover:border-black }`}>
            FRANCHISE
          </button>
          <button className={`relative text-sm font-bold tracking-wide transition duration-200 hover:text-black cursor-pointer h-[40px] text-[20px]  border-b-2 border-transparent hover:border-b-2 hover:border-black }`}>
            CONTACT
          </button>
      </div>

      
      <div className="flex items-center gap-4">
        <button className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 font-bold hover:bg-neutral-800 transition">
          🚴
          <span>ORDER ONLINE</span>
        </button>
      </div>
    </nav>
  );
}

export default NavbarPage;