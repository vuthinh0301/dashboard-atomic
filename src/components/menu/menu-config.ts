const menu = [
  {
    title: 'Dashboard',
    icon: 'squares-four',
    active: false,
    children: [
      { title: 'Overview 1', route: '/', active: false },
      { title: 'Overview 2', route: '/dashboard/overview2', active: false }
    ]
  },
  {
    title: 'E-Commerce',
    route: '/e-commerce',
    icon: 'shopping-cart',
    active: false
  },
  {
    title: 'Calendar',
    route: '/calendar',
    icon: 'calendar',
    active: false
  },
  {
    title: 'Mail',
    route: '/mail',
    icon: 'envelope',
    active: false
  },
  {
    title: 'Chat',
    route: '/chat',
    icon: 'chat',
    active: false
  },
  {
    title: 'Tasks',
    route: '/tasks',
    icon: 'notepad',
    active: false
  },
  {
    title: 'Projects',
    route: '/projects',
    icon: 'stack',
    active: false
  },
  {
    title: 'File Manager',
    route: '/file-manager',
    icon: 'folder-open',
    active: false
  },
  {
    title: 'Notes',
    route: '/notes',
    icon: 'note',
    active: false
  },
  {
    title: 'Contacts',
    route: '/contacts',
    icon: 'address-book',
    active: false
  }
];

export default menu;
