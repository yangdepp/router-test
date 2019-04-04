export default {
  index: {
    path: '/',
    title: '首页',
    meta: {
      auths: ['index/index'],
    },
    children: {
      two: [
        {
          path: '/',
          title: '首页二级1',
          meta: {
            auths: ['index/index'],
          },
        },
        {
          path: '/',
          title: '首页二级2',
          meta: {
            auths: ['index/index'],
          },
        },
      ],
    },
  },
  about: {
    path: '/about',
    title: '关于',
    meta: {
      auths: ['index/about'],
    },
    children: {
      two: [
        {
          path: '/about/1',
          title: '关于二级1',
          meta: {
            auths: ['index/about/1'],
          },
          children: {
            three: [
              {
                path: '/about/1',
                title: '关于三级1',
                meta: {
                  auths: ['index/about/1/3'],
                },
              },
            ],
          },
        },
      ],
    },
  },
  news: {
    path: '/news',
    title: '新闻',
    meta: {
      auths: ['index/news'],
    },
  },
  events: {
    path: '/events',
    title: '事件',
    meta: {
      auths: ['index/events'],
    },
  },
};
