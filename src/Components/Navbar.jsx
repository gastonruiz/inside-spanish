import LogoNav from '../Assets/logo-inside2.png'

const Navbar = () => {
  return (
    <nav>
        <div>
             <div>
                <img src={LogoNav} alt="inside spanish" className='w-100'/>
            </div>
            <div>
                <ul>
                    <li>ejemplo</li>
                    <li>ejemplo</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>redes</li>
                    <li>redes</li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar