import Logo from '../assets/jotrLogo.png'

const NavBar = () => {
  return 
  <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src= {Logo} alt="logo" />
    </div>
  </nav>
};

export default NavBar