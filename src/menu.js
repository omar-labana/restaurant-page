import { create } from './shared'
import { createFrame } from './shared'

const createMenu = () => {
    const data = [
        {
            name: "Coffe - 1",
            desc: "Very cool description on how this item is so good",
            price: '14$'
        },
        {
            name: "Coffe - 2",
            desc: "Very cool description on how this item is so good",
            price: '14$'
        },
        {
            name: "Coffe - 3",
            desc: "Very cool description on how this item is so good",
            price: '14$'
        }
    ]

    const homeContainer = create('div', ['flex', 'flex-col'])
    data.forEach(item => {
        const frame = createFrame()
        frame.appendChild(create('h2', ['m-3','a'], item.name))
        frame.appendChild(create('p', ['m-3','a'], item.desc))
        frame.appendChild(create('p', ['m-3','a'], item.price))
        homeContainer.appendChild(frame)
    })
    return homeContainer
}

export default createMenu