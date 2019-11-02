
export const menuConfig =
    [
        {
            name: 'home',
            type: 'button',
            link: { to: '/', text: 'home' }
        },
        {
            name: 'calcs',
            type: 'dropdown',
            items: [
                { to: 'form', text: 'form' },
                { to: 'hovertest', text: 'hovertest' },
                { to: '/', text: 'home' }
            ]
        },
        {
            name: 'other',
            type: 'dropdown',
            items: [
                { to: 'form', text: 'form' },
                { to: 'hovertest', text: 'hover test' }
            ]
        },
        {
            name: 'test-menu',
            type: 'dropdown',
            items: [
                { to: 'form', text: 'form' },
                { to: 'hovertest', text: 'hovertest' },
                { to: '/', text: 'home' }
            ]
        },
    ];
