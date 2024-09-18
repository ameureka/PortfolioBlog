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
        I have consistently demonstrated a strong commitment to in-depth exploration and practice in the field of cybersecurity. 
        At the same time, I concentrate on the research and implementation of the latest market technologies.
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
          In 2021, I focused on marketing, collaborating closely with other departments, 
          including product management, development, and sales, to ensure the success of our product with customers.
          </li>

          <li>
          In 2022, I was part of a large health code project design team. The XX Health Code project was designed to meet 
          the needs of 60 million users, achieving high concurrency on a fully privatized high-concurrency architecture platform.
          The client required that the system run efficiently, securely, and stably. I was invited to join the project team to 
          contribute to the overall system security planning, implementation, and project management. In line with the concept 
          of "shifting security left," we developed and implemented plans for network security, data security, and privacy compliance.
          </li>


          <li>
          In 2023, as a Senior Solutions Architect, I was involved in the design of a major data customs project. 
          The Data Hub project was designed to provide a secure data channel for Chinese companies to ensure that outbound data 
          was compliant with data privacy regulations. I was appointed as the lead architect of the project team and was responsible 
          for overseeing all aspects of the project, including business logic design, product solution integration, and on-the-ground 
          implementation. The customer was highly satisfied with the project.
          </li>


          <li>
          In 2024, as a Senior Zero Trust Product Architect, I was responsible for designing and implementing Zero Trust Security 
          Architecture market efforts. My responsibilities included building cybersecurity facilities for clients based on zero-trust 
          principles with the goal of securing corporate data and applications. I led the integration of IOA SaaS product landing 
          solutions suitable for multinational companies' overseas business, aligning with business strategy and meeting market needs. 
          These solutions have been successfully implemented by Trina Solar, GCL Technology, and Risen Energy, and have gained recognition 
          in emerging industries such as photovoltaics, new energy, and energy storage.
          </li>


        </ul>
        {/* <p>
          Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub with <Stars />. It's used by Walmart, ChatGPT, Starbucks, Okta,
          Datastax, Notion, and <a href="https://nextjs.org/showcase">more</a>.
        </p> */}
        
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Sangfor Technologies Co., Ltd.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Cybersecurity Solutions Expert  2016-2021
        </p>

        <p>
        Sangfor, headquartered in Shenzhen, China, is a high-tech enterprise specializing in the research 
        and development and services of cloud computing, network security, and network optimization technologies.
         It has now grown into one of the leaders in network security, cloud computing, and fundamental IT infrastructure in Asia.
        </p>

        <li>
        I assumed responsibility for demand operations by conducting in-depth analysis of market and user data to identify potential 
        needs and developing strategies to meet those demands. In terms of channel management, I established and maintained a robust 
        distribution network, optimized the supply chain, and ensured the effective delivery of products. Furthermore, I have a deep
         understanding of marketing strategies, having successfully implemented numerous promotional campaigns and advertising initiatives, 
         which have enhanced the brand's market presence.
          </li>


          <li>
          In addition, I provided regular customer consultation services to assist them in resolving various technical issues encountered 
          during the use of our products. Furthermore, I spearheaded the development of a range of solutions tailored to the specific needs 
          of our diverse customer base, enhancing customer satisfaction and boosting the market competitiveness of our products.
          </li>


          <li>
          I have had the privilege of collaborating with clients across various industry sectors, including government agencies, financial firms,
           educational institutions, and several large corporations. These experiences have not only broadened my industry perspective but also 
           enhanced my communication and problem-solving skills, enabling me to provide high-quality service and support to customers in high-pressure 
           and fast-paced environments.
          </li>


        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Project Introduction.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Some Projects About Cloud Computing and Network Security
        </p>

        <p>
        Provide services to multinational enterprises by building an infrastructure that meets global business requirements. 
        Develop high-availability and high-concurrency business systems to support customer business growth, and provide the 
        engine for customers' digital transformation and global business expansion.
        </p>

        <img src="https://picdata.ameureka.com/projectpreview/soloar_project.png" alt="Project Image" className="my-6" />

      </div>
    </section>
  );
}
