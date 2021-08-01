import { create } from './shared'
import { clearView } from './shared'
import createHome from './home'
import createMenu from './menu'
import createContact from './contanct'

const createNavbar = () => {
    const header = create('header', ['flex', 'justify-center', 'items-center', 'flex-col', 'px-20', 'mt-5'])
    header.appendChild(create('h1', ['text-5xl', 'text-yellow-400'], 'Mero Cafe', 'font-bold'))
    // ul 
    const linksDiv = create('div', ['text-3xl', 'text-yellow-100', 'mt-2'])
    const homeLink = create('a', ['mx-4', 'cursor-pointer'], 'Home')
    const menuLink = create('a', ['mx-4', 'cursor-pointer'], 'Menu')
    const contactLink = create('a', ['mx-4', 'cursor-pointer'], 'Contact')

    homeLink.addEventListener('click', () => {
        clearView()
        const viewElement = document.getElementById('view')
        viewElement.appendChild(createHome())
    })

    menuLink.addEventListener('click', () => {
        clearView()
        const viewElement = document.getElementById('view')
        viewElement.appendChild(createMenu())
    })

    contactLink.addEventListener('click', () => {
        clearView()
        const viewElement = document.getElementById('view')
        viewElement.appendChild(createContact())
    })

    linksDiv.appendChild(homeLink)
    linksDiv.appendChild(menuLink)
    linksDiv.appendChild(contactLink)

    header.appendChild(linksDiv)



    return header
}

export default createNavbar