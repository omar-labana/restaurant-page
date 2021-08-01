import { create, createFrame } from './shared';

const createHome = () => {
  const homeContainer = create('div', ['flex', 'flex-col']);
  const frameOne = createFrame();
  const frameTwo = createFrame();
  const frameThree = createFrame();

  homeContainer.appendChild(frameOne);
  homeContainer.appendChild(frameTwo);
  homeContainer.appendChild(frameThree);

  const frameOneContent = create('div', ['flex', 'justify-center', 'items-center', 'h-60']);

  const frameOneText = create('p', [], `
    Maro's has the best coffee! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, drinking like a bear! This is exactly the kind of place that I like to return to again and again.
    `);

  const frameOneImage = create('img', ['w-1/2', 'rounded-md', 'p-10']);

  frameOneImage.src = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

  frameOneContent.appendChild(frameOneImage);
  frameOneContent.appendChild(frameOneText);
  frameOne.appendChild(frameOneContent);

  // Frame 2
  const frameTwoContent = create('div', ['flex', 'justify-center', 'items-center', 'flex-col']);
  const frameTwoHeading = create('h2', ['text-2xl', 'my-2'], 'Hours');
  const hours = [
    'Sunday: 8am - 8pm',
    'Monday: 6am - 6pm',
    'Tuesday: 6am - 6pm',
    'Wednesday: 6am - 6pm',
    'Thursday: 6am - 10pm',
    'Friday: 6am - 10pm',
    'Saturday: 8am - 10pm',
  ];
  const frameTwoScedule = create('div');
  hours.forEach((hour) => {
    frameTwoScedule.appendChild(create('p', ['my-2'], hour));
  });
  frameTwoContent.appendChild(frameTwoHeading);
  frameTwoContent.appendChild(frameTwoScedule);
  frameTwo.appendChild(frameTwoContent);

  frameThree.appendChild(create('h2', ['text-2xl', 'my-2', 'text-center'], `Location
    `));
  frameThree.appendChild(create('p', ['my-2', 'text-center'], `123 Forest Drive, Forestville, Maine

    `));
  return homeContainer;
};

export default createHome;