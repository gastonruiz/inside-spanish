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

const navbarRedes = [

{
        id: 1,
        title: 'Instagram',
        link: 'aca va la pagina de instagram a linkear',
        icon:'/icons/instagram.png',
        },
      
]

const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3 '>
             <div>
                <img src={LogoNav} alt="inside spanish" className='w-55'/>
            </div>
            <div>
            <ul className='flex sm:space-x-8  space-x-4'>
                   {navbarLinks.map((link)=>(
                <li key={link.id}>
                    <a className='text-gray-700 text-sm' 
                    href={link.link}>{link.title}</a>
                </li>
                   ))}
                </ul>
            </div>

            <div>
                <ul>
                   {navbarRedes.map((red)=>(
                <li key={red.id}>
                    <a href={red.link}>
                    <img src={red.icon} alt={red.title} className="w-6 h-6" />
                    </a>
                </li>
                   ))}
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar