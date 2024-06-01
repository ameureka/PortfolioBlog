import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">

        {/* <p>
          On a mission to build products developers{' '}
          <Link href="/blog/developer-experience">love</Link>, and along the
          way, teach the next generation of developers. Here's a summary of my
          work so far.
        </p> */}

        <p>
        I have always been dedicated to in-depth exploration and practice in the field of cybersecurity. 
        At the same time, I focus on the research and application of cutting-edge market technologies.
        </p>


        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Tencent Technologies Co., Ltd.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Senior Zero Trust Product Architect
        </p>

        {/* <p>
          I joined <a href="https://vercel.com/home">Vercel</a> early to grow{' '}
          <a href="https://nextjs.org">Next.js</a> and our developer community.
          I built our Developer Relations team to teach our community about our
          products.
        </p> */}

        <p>
        Tencent is one of China's leading technology companies, offering a diverse range 
        of services and products including social platforms, digital content, online 
        advertising, financial technology, and corporate services.
        </p>

        <ul>


          {/* <li>
            In 2021, I was promoted to Director of DevRel. We{' '}
            <a href="https://twitter.com/kelseyhightower/status/1105985400110112768">
              translated customer pain
            </a>{' '}
            back into the product roadmap. We spoke at{' '}
            <Link href="/blog/nextjs-conf-2022-recap">conferences</Link>, wrote
            blog posts, and created videos. We built open-source examples and
            contributed back to the product.
          </li> */}

          <li>
          In 2021, I focused primarily on marketing, collaborating closely with other departments 
          such as product management, development, and sales to ensure our product's success among customers.
          </li>

          <li>
          In 2022, I was part of a large health code project design. The XX Health Code project was designed to 
          satisfy the needs of 60 million users, achieving high concurrency on a fully privatized high-concurrency 
          architecture platform. The client wanted to ensure the system ran efficiently, securely, and stably. 
          I joined the project team to participate in the overall system security planning, implementation, 
          and project management. Based on the concept of "shifting security left," we planned and executed 
          in areas such as network security, data security, and privacy compliance.
          </li>


          <li>
          In 2023, as a Senior Solutions Architect, I was involved in the design of a significant data customs project.
           The XXX Data Hub project was aimed at providing Chinese enterprises with a secure data channel to ensure 
           compliance with data privacy regulations for outbound data. I joined the project team as the lead architect, 
           overseeing everything from business logic organization to product solution integration, to the actual design
            and construction. The project received high recognition from clients.
          </li>


        </ul>
        {/* <p>
          Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub with <Stars />. It's used by Walmart, ChatGPT, Starbucks, Okta,
          Datastax, Notion, and <a href="https://nextjs.org/showcase">more</a>.
        </p> */}
        
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Hy-Vee</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Senior Software Engineer, 2018 — 2020
        </p>
        <p>
          Hy-Vee, an almost 100-year-old grocery chain in the United States,
          wanted to build a new version of their digital storefront. I joined a
          team of <Link href="/blog/product-engineers">product engineers</Link>{' '}
          working across web and mobile to rebuild their legacy .NET application
          (~500k MAU) with React and React Native.
        </p>
        <p>
          On the frontend, I led our move from a custom webpack and React
          configuration to Next.js and the latest React patterns. In the
          process, I shared my learnings online, helping educate members of the
          React and Next.js community by creating courses.
        </p>
        <p>
          Throughout my two years, I was able to work on some hard problems:
          decoupling a decade old monolith into microservices, working with a
          federated GraphQL API, learning and occasionally managing a Kubernetes
          cluster, building and implementing a design system, incrementally
          migrating individual components and routes to a new framework and
          infrastructure, and more.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Workiva</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2015 — 2018
        </p>
        <p>
          Workiva ($WK) is a cloud platform for data reporting and compliance.
          During my time at Workiva, I gained my first production experience
          using React. I worked on tooling to help predict and alert and
          regressions in our SaaS platform, building a product similar to
          open-source tools like Sentry.
        </p>
      </div>
    </section>
  );
}
