import Link from 'next/link';

// // 添加portfilio 标签
// const navItems = {
//   '/': {
//     name: 'home',
//   },
//   '/work': {
//     name: 'work',
//   },
//   '/blog': {
//     name: 'blog',
//   },
//   '/portfolio': {
//     name: 'portfolio',
//   },
//   '/guestbook': {
//     name: 'guestbook',
//   },
// };


// 通过在 navItems 对象中为 '/portfolio' 项目设置一个完整的 URL 来实现这一目标。
// 为了确保其他导航项仍然使用相对路径，你可以在 Navbar 组件中添加逻辑来处理这种情况。


// 添加portfolio 标签并设置外部链接
const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/blog': {
    name: 'blog',
  },
  '/portfolio': {
    name: 'portfolio',
    external: true,
    url: 'https://portfoliopage.ameureka.com',
  },
  '/guestbook': {
    name: 'guestbook',
  },
};


export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, external, url }]) => {
              // 如果是外部链接，使用 <a> 标签
              if (external) {
                return (
                  <a
                    key={path}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                  >
                    {name}
                  </a>
                );
              }
              // 否则使用 <Link> 组件
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}