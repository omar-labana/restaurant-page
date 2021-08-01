import { create } from './shared';
import createNavbar from './navbar';
import createHome from './home';

const mainElement = document.getElementById('content');
mainElement.appendChild(createNavbar());

const viewTag = create('div', ['px-30', 'mt-10']);
viewTag.setAttribute('id', 'view');
mainElement.appendChild(viewTag);
// Default view
viewTag.appendChild(createHome());
