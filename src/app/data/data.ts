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
    { id: 4, name: 'Specials', target: 'specials', active: false },
    { id: 5, name: 'Events', target: 'events', active: false },
    { id: 6, name: 'Chefs', target: 'chefs', active: false },
    { id: 7, name: 'Gallery', target: 'gallery', active: false },
];

export const whyUs = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
          consectetur ducimus vero placeat`,
    },
    {
      id: 2,
      title: 'Repellat Nihil',
      content: `Dolorem est fugiat occaecati voluptate velit esse. Dicta
      veritatis dolor quod et vel dire leno para dest`,
    },
    {
      id: 3,
      title: 'Ad ad velit qui',
      content: `Molestiae officiis omnis illo asperiores. Aut doloribus vitae
      sunt debitis quo vel nam quis`,
    },
  ];
  
  export const menu = [
    {
      id: 1,
      name: 'Mutton Gravy (Red)',
      preview: '/assets/images/menu/lobster-bisque.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 2,
      name: 'Mutton Gravy (Green)',
      preview: '/assets/images/menu/bread-barrel.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 3,
      name: 'Mutton Kurma',
      preview: '/assets/images/menu/cake.jpg',
      ingredients:
        'A delicate crab cake served on a toasted roll with lettuce and tartar sauce',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 4,
      name: 'Mutton Sukka',
      preview: '/assets/images/menu/caesar.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 5,
      name: 'Mutton Pepper',
      preview: '/assets/images/menu/tuscan-grilled.jpg',
      ingredients:
        'Grilled chicken with provolone, artichoke hearts, and roasted red pesto',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 6,
      name: 'Mutton Garlic',
      preview: '/assets/images/menu/mozzarella.jpg',
      ingredients: 'Lorem, deren, trataro, filede, nerada',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 7,
      name: 'Mutton Stoo',
      preview: '/assets/images/menu/greek-salad.jpg',
      ingredients: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 8,
      name: 'Mutton Biryani (Fry)',
      preview: '/assets/images/menu/spinach-salad.jpg',
      ingredients:
        'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 9,
      name: 'Mutton Pulav',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 10,
      name: 'Mutton Lollypop',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 11,
      name: 'Mutton Pepper Fry',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 12,
      name: 'Mutton Ginger',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 13,
      name: 'Mutton Chops',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'mutton',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 14,
      name: 'Chicken Gravy (Red)',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 15,
      name: 'Chicken Gravy (Green)',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 16,
      name: 'Chicken Sukka',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 17,
      name: 'Chicken 65',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 18,
      name: 'Chicken Pepper',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 19,
      name: 'Chicken Garlic',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 20,
      name: 'Chicken Manchurian',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 21,
      name: 'Chicken Chilli',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 22,
      name: 'Chicken Kebab',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 23,
      name: 'Chicken Lollypop',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 24,
      name: 'Chicken Roce Curry',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 25,
      name: 'Chicken Biryani',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 26,
      name: 'Lemon Chicken',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 27,
      name: 'Chicken Hyderabad',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 28,
      name: 'Chicken Kundapur',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 29,
      name: 'Chicken Tandoori',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 30,
      name: 'Chicken Ginger',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 31,
      name: 'Chicken Chops',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'chicken',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 32,
      name: 'Pork Bafath',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
      category: 'pork',
      description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
      Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
      Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`,
    },
    {
      id: 33,
      name: 'Pork Chilly (Chinese)',
      preview: '/assets/images/menu/lobster-roll.jpg',
      ingredients:
        'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
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

  
  export const specials = [
    {
      id: 1,
      image: './assets/images/specials/specials-1.png',
      title: 'Architecto ut aperiam autem id',
      subtitle:
        'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
      content:
        'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
      active: true,
    },
    {
      id: 2,
      image: './assets/images/specials/specials-2.png',
      title: 'Et blanditiis nemo veritatis excepturi',
      subtitle:
        'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
      content:
        'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal',
      active: false,
    },
    {
      id: 3,
      image: './assets/images/specials/specials-3.png',
      title: 'Impedit facilis occaecati odio neque aperiam sit',
      subtitle:
        'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut',
      content:
        'Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae',
      active: false,
    },
    {
      id: 4,
      image: './assets/images/specials/specials-4.png',
      title:
        'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
      subtitle:
        'Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus',
      content:
        'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore',
      active: false,
    },
    {
      id: 5,
      image: './assets/images/specials/specials-5.png',
      title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
      subtitle: 'Omnis blanditiis saepe eos autem qui sunt debitis porro quia.',
      content:
        'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
      active: false,
    },
  ];
  
  export const specialsFilters = [
    {
      id: 1,
      name: 'Modi sit est',
      active: true,
    },
    {
      id: 2,
      name: 'Unde praesentium sed',
      active: false,
    },
    {
      id: 3,
      name: 'Pariatur explicabo vel',
      active: false,
    },
    {
      id: 4,
      name: 'Nostrum qui quasi',
      active: false,
    },
    {
      id: 5,
      name: 'Iusto ut expedita aut',
      active: false,
    },
  ];
  
  export const events = [
    {
      id: 1,
      image: './assets/images/events/event-birthday.jpg',
      title: 'Birthday Parties',
      price: 189,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.`,
      details: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ],
      summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur`,
    },
    {
      id: 2,
      image: './assets/images/events/event-private.jpg',
      title: 'Private Parties',
      price: 290,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.`,
      details: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ],
      summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur`,
    },
    {
      id: 3,
      image: './assets/images/events/event-custom.jpg',
      title: 'Custom Parties',
      price: 99,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.`,
      details: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ],
      summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur`,
    },
  ];
  
  export const testimonials = [
    {
      id: 1,
      content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. 
      Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.`,
      avatar: './assets/images/testimonials/testimonials-1.jpg',
      client: 'Saul Goodman',
      position: 'CEO',
    },
    {
      id: 2,
      content: `Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum 
      eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.`,
      avatar: './assets/images/testimonials/testimonials-2.jpg',
      client: 'Sara Wilsson',
      position: 'Consultant',
    },
    {
      id: 3,
      content: `Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis 
      minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.`,
      avatar: './assets/images/testimonials/testimonials-3.jpg',
      client: 'Jena Karlis',
      position: 'Store Owner',
    },
    {
      id: 4,
      content: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim 
      velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.`,
      avatar: './assets/images/testimonials/testimonials-4.jpg',
      client: 'Matt Brandon',
      position: 'Freelancer',
    },
    {
      id: 5,
      content: `Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
       culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.`,
      avatar: './assets/images/testimonials/testimonials-5.jpg',
      client: 'John Larson',
      position: 'Entrepreneur',
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
  
  export const chefs = [
    {
      id: 1,
      name: 'Walter White',
      photo: './assets/images/chefs/chefs-1.jpg',
      position: 'Master Chef',
      delay: '100',
    },
    {
      id: 2,
      name: 'Sarah Jhonson',
      photo: './assets/images/chefs/chefs-2.jpg',
      position: 'Patissier',
      delay: '200',
    },
    {
      id: 3,
      name: 'William Anderson',
      photo: './assets/images/chefs/chefs-3.jpg',
      position: 'Cook',
      delay: '300',
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
  