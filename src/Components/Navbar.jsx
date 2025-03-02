import LogoNav from '../Assets/logo-inside2.png'

const navbarLinks = [
    {
id: 1,
title: 'inicio',
link: '/'
},
{
    id: 2,
    title: 'Planes',
    link: '#'
    },
{
        id: 3,
        title: 'Contacto',
        link: '#'
        },
]



const Navbar = () => {
  return (
    <nav>
        <div>
             <div>
                <img src={LogoNav} alt="inside spanish" className='w-100'/>
            </div>
            <div>
                <ul>
             <li></li>
                </ul>
            </div>

            <div>
                <ul>
                   {navbarLinks.map((link)=>(
                <li key={link.id}>
                    <a>{link.title}</a>
                </li>
                   ))}
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar