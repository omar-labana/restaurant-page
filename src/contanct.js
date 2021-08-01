import { create, createFrame } from './shared';

const createContact = () => {
  const homeContainer = create('div', ['flex', 'flex-col']);
  const frameOne = createFrame();

  homeContainer.appendChild(frameOne);

  const frameOneContent = create('div', ['flex', 'justify-center', 'items-center', 'h-60']);

  const frameOneImage = create('img', ['w-1/2', 'rounded-md', 'p-10']);
  frameOneImage.src = 'https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  const frameOneText = create('div', []);
  frameOneText.appendChild(create('h2', [], 'Maro'));
  frameOneText.appendChild(create('p', [], 'Barista'));
  frameOneText.appendChild(create('p', [], '555-555-5554'));
  frameOneText.appendChild(create('p', [], 'totallyRealEmail@notFake.com'));

  frameOneContent.appendChild(frameOneImage);
  frameOneContent.appendChild(frameOneText);

  frameOne.appendChild(frameOneContent);

  return homeContainer;
};

export default createContact;