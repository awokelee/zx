module.exports = {
  base: '/awoke/',
  title: 'Awoke',
  description: 'Just playing around',
  search: false,
  searchMaxSuggestions: 10,
  lastUpdated: 'Last Updated', // string | boolean
  themeConfig: {
    nav: [
      { text: 'Home', link: '/bar/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [
            { text: 'Chinese', link: '/language/chinese' },
          ]},
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'Promise教程',  /* /foo/one.html */
        '浏览器兼容性问题',  /* /foo/one.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}