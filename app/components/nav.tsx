import Link from 'next/link';

// 通过在 navItems 对象中为 '/portfolio' 项目设置一个完整的 URL 来实现这一目标。
// 为了确保其他导航项仍然使用相对路径，你可以在 Navbar 组件中添加逻辑来处理这种情况。

// 定义导航项的类型
type NavItem = {
  name: string;
  external?: boolean;
  url?: string;
};

// 定义导航项对象的类型
const navItems: { [key: string]: NavItem } = {
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
            {Object.entries(navItems).map(([path, item]) => {
              // 使用类型断言来处理不同的情况
              if (item.external && item.url) {
                return (
                  <a
                    key={path}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}