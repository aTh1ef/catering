import { title } from "process";

export interface NavItem {
    id: number;
    name: string;
    target: string;
    active: boolean;
}

export const navs: NavItem[] = [
    { id: 1, name: 'Home', target: 'hero', active: false },
    { id: 2, name: 'About', target: 'about', active: false },
    { id: 3, name: 'Menu', target: 'menu', active: false },
    { id: 4, name: 'Events', target: 'events', active: false },
    { id: 5, name: 'Gallery', target: 'gallery', active: false },
    { id: 6, name: 'Contact', target: 'contact', active: false }, 
];

export const whyUs = [
  {
    id: 1,
    title: 'Decades of Experience',
    content: `With over two decades of experience in catering, serving, and conducting events, we bring unmatched expertise to every occasion.`,
  },
  {
    id: 2,
    title: 'Excellence in Mangalore',
    content: `Proudly recognized as one of the best in Mangalore, our commitment to quality and service sets us apart.`,
  },
  {
    id: 3,
    title: 'Amazing Food',
    content: `We cook incredible food using only the finest natural ingredients, ensuring every bite is delightful.`,
  },
];

  
  export const menu = [
    {
      id: 1,
      name: 'Mutton Gravy (Red)',
      preview: '/assets/images/menu/lobster-bisque.jpg',
      //ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 2,
      name: 'Mutton Gravy (Green)',
      preview: '/assets/images/menu/bread-barrel.jpg',
      //ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 3,
      name: 'Mutton Kurma',
      preview: '/assets/images/menu/cake.jpg',
     // ingredients:'A delicate crab cake served on a toasted roll with lettuce and tartar sauce',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 4,
      name: 'Mutton Sukka',
      preview: '/assets/images/menu/caesar.jpg',
      //ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 5,
      name: 'Mutton Pepper',
      preview: '/assets/images/menu/tuscan-grilled.jpg',
      //ingredients:'Grilled chicken with provolone, artichoke hearts, and roasted red pesto',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 6,
      name: 'Mutton Garlic',
      preview: '/assets/images/menu/mozzarella.jpg',
     // ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 7,
      name: 'Mutton Stoo',
      preview: '/assets/images/menu/greek-salad.jpg',
      //ingredients: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 8,
      name: 'Mutton Biryani (Fry)',
      preview: '/assets/images/menu/spinach-salad.jpg',
      //ingredients:'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 9,
      name: 'Mutton Pulav',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 10,
      name: 'Mutton Lollypop',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 11,
      name: 'Mutton Pepper Fry',
      preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 12,
      name: 'Mutton Ginger',
      preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 13,
      name: 'Mutton Chops',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 14,
      name: 'Chicken Gravy (Red)',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 15,
      name: 'Chicken Gravy (Green)',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 16,
      name: 'Chicken Sukka',
      preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 17,
      name: 'Chicken 65',
      preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 18,
      name: 'Chicken Pepper',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 19,
      name: 'Chicken Garlic',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 20,
      name: 'Chicken Manchurian',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
       // 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 21,
      name: 'Chicken Chilli',
      preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:
      //  'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 22,
      name: 'Chicken Kebab',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
      //  'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 23,
      name: 'Chicken Lollypop',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
       // 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 24,
      name: 'Chicken Roce Curry',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
       // 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 25,
      name: 'Chicken Biryani',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
       // 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 26,
      name: 'Lemon Chicken',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
      //  'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 27,
      name: 'Chicken Hyderabad',
      preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
        //'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 28,
      name: 'Chicken Kundapur',
     // preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:
      //  'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 29,
      name: 'Chicken Tandoori',
     // preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
       // 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 30,
      name: 'Chicken Ginger',
     // preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:
      //  'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 31,
      name: 'Chicken Chops',
     // preview: '/assets/images/menu/lobster-roll.jpg',
      //ingredients:
    //    'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 32,
      name: 'Pork Bafath',
    //  preview: '/assets/images/menu/lobster-roll.jpg',
   //   ingredients:
   //     'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 33,
      name: 'Pork Chilly (Chinese)',
     // preview: '/assets/images/menu/lobster-roll.jpg',
     // ingredients:
     //   'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 34,
      name: 'Pork Chilly (Indian)',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 35,
      name: 'Pork Hindad',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 36,
      name: 'Pork Garlic',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 37,
      name: 'Pork Pepper',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 38,
      name: 'Pork Kurgu',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 39,
      name: 'Pork Roast',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 40,
      name: 'Pork Surpatail',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 41,
      name: 'Prawns Lollypop',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'prawn',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 42,
      name: 'Prawns Pepper',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'prawn',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 43,
      name: 'Prawns Gasi',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'prawn',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 44,
      name: 'Prawns Fried Rice',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'prawn',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 45,
      name: 'Prawns Noodles',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'prawn',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 46,
      name: 'Lime',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 47,
      name: 'Mango',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 48,
      name: 'Pineapple',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 49,
      name: 'Orange',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 50,
      name: 'Watermelon',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 51,
      name: 'Pulp Mango',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 52,
      name: 'Pista',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 53,
      name: 'Badam',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'juices',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 54,
      name: 'Vanilla',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'icecreams',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 55,
      name: 'Butterscotch',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'icecreams',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 56,
      name: 'Mango',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'icecreams',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },

    {
      id: 57,
      name: 'Chocolate',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'icecreams',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },

    {
      id: 58,
      name: 'Fruit Salad,',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'icecreams',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },





  ];
  
  export const filters = [
    {
        id: 1,
        name: 'Mutton Items',
        category: 'mutton',
        active: true,
    },
    {
        id: 2,
        name: 'Chicken Items',
        category: 'chicken',
        active: false,
    },
    {
        id: 3,
        name: 'Pork Items',
        category: 'pork',
        active: false,
    },
    {
        id: 4,
        name: 'Prawn Items',
        category: 'prawn',
        active: false,
    },
    {
        id: 5,
        name: 'Juices',
        category: 'juices',
        active: false,
    },
    {
        id: 6,
        name: 'Ice Creams',
        category: 'icecreams',
        active: false,
    },
];

export const events = [
  {
    id: 1,
    image: './assets/images/events/events-wedding.jpg',
    title: 'Wedding Events',
    content: `We organize all types of wedding events from Mehendi, Haldi to the actual wedding. We offer a wide variety of delicious food and beautiful decorations.`,
    details: [
      'Professional event planning and coordination.',
      'Customized menu with gourmet catering options.',
      'Elegant and personalized decorations.',
      'Experienced staff to ensure everything goes smoothly.',
    ],
  },
  {
    id: 2,
    image: './assets/images/events/event-birthday.jpg',
    title: 'Birthday Parties',
    content: `We organize birthday parties, from decorations to baking delicious cakes. We handle everything to make your celebration special.`,
    details: [
      'Creative and fun-themed decorations.',
      'Custom cakes and desserts.',
      'Fun activities and entertainment for all ages.',
      'Personalized party favors and gifts.',
    ],
  },
  {
    id: 3,
    image: './assets/images/events/event-private.jpg',
    title: 'Private Events',
    content: `We organize private events like church events and similar gatherings. We provide comprehensive services to make your event memorable.`,
    details: [
      'Event planning tailored to your needs.',
      'High-quality audio and visual equipment.',
      'Catering services with a variety of menu options.',
      'Professional and friendly staff.',
    ],
  },
  {
    id: 4,
    image: './assets/images/events/event-custom.jpg',
    title: 'Custom Parties',
    content: `We organize custom parties like DJ events and DJ nights. We provide the DJ, the whole setup, and decorations to make your party unforgettable.`,
    details: [
      'Top-notch DJ services and equipment.',
      'Vibrant lighting and sound systems.',
      'Themed decorations for a great party atmosphere.',
      'Professional event hosts and entertainers.',
    ],
  },
];

  
  export const gallery = [
    {
      id: 1,
      image: '/assets/images/gallery/gallery1.jpg',
    },
    {
      id: 2,
      image: '/assets/images/gallery/gallery2.jpg',
    },
    {
      id: 3,
      image: '/assets/images/gallery/gallery3.jpg',
    },
    {
      id: 4,
      image: '/assets/images/gallery/gallery4.jpg',
    },
    {
      id: 5,
      image: '/assets/images/gallery/gallery5.jpg',
    },
    {
      id: 6,
      image: '/assets/images/gallery/gallery6.jpg',
    },
    {
      id: 7,
      image: '/assets/images/gallery/gallery7.jpg',
    },
    {
      id: 8,
      image: '/assets/images/gallery/gallery8.jpg',
    },
  ];
  
 
  
  
  export const bookings = [
    {
      id: 1,
      details: {
        name: 'Example Name',
        email: 'info@example.com',
        phone: '12345678',
        date: '2024-2-06',
        time: '11:30',
        people: 3,
        message: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur`,
      },
    },
  ];
  