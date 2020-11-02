
/**
 * For instructions and examples, see the README here:
 *    https://github.com/mojave27/react-top-nav
 */

// example minimal config
export const menuConfig = [
  {
    name: 'home',
    type: 'button',
    link: { to: '/', text: 'home' }
  },
  {
    name: 'first_menu',
    type: 'dropdown',
    items: [
      { to: 'item1', text: 'first item' },
      { to: 'item2', text: 'second item' }
    ]
  },
  {
    name: 'sign-out',
    type: 'functionButton'
  }
]

// example full config
export const menuConfig = [
  {
    name: 'home',
    type: 'button',
    auth: false,
    link: { to: '/', text: 'home' }
  },
  {
    name: 'trackers',
    type: 'dropdown',
    auth: false,
    items: [
      { to: '/program-tracker', text: 'program' },
      { to: '/tracker/woday', text: 'woday' }
    ]
  },
  {
    name: 'progress',
    type: 'button',
    auth: false,
    link: { to: '/progress', text: 'workout progress' }
  },
  {
    name: 'manage',
    type: 'dropdown',
    auth: false,
    items: [
      // { to: '/programs', text: 'programs' },
      { to: '/manage/workouts', text: 'workouts' },
      { to: '/exercises', text: 'exercises' }
    ]
  },
  {
    name: 'calcs',
    type: 'dropdown',
    auth: false,
    items: [{ to: '1rm', text: '1 rep max' }]
  },
  {
    name: 'admin',
    type: 'dropdown',
    auth: {
      groups: ['wolog-admin']
    },
    items: [
      { to: '/admin/consistency-check', text: 'data check' },
      { to: '/admin/test', text: 'test page' },
      { to: '/admin/themer', text: 'themer' },
      { to: '/admin/test/woday', text: 'woday test page' }
    ]
  },
  {
    name: 'sign-out',
    type: 'functionButton'
  }
]
