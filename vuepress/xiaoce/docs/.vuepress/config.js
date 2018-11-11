module.exports = {
  title: '小册',
  description: 'some notes',
  search: false,
  sidebarDepth: 2,
  searchMaxSuggestions: 10,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: getNavList(),
    sidebar: getSidebar()
  }
}

function getNavList() {
  return [
    { text: '小册', link: '/xiaoce/' },
  ]
}

function getSidebar() {
  return {
    '/xiaoce/': [
      {
        title: '基础',
        collapsable: false,
        children: [
          '1-1_vue-cli工程中每个文件夹和文件的用处',
        ]
      },
    ],
    '/': [ '', 'contact', 'about']
  }
}