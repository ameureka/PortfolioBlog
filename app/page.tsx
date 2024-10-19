'use client'

import { useState, useRef } from 'react'

import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import smashing from 'public/images/home/smashing.jpg';
import summit from 'public/images/home/summit.jpg';
import reactathon from 'public/images/home/reactathon.jpg';
import ship from 'public/images/home/ship.jpg';
import filming from 'public/images/home/filming.jpg';
import meetups from 'public/images/home/meetups.jpg';
import vercel from 'public/images/home/vercel.jpg';
import avatar from 'app/avatar.jpg';
import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';

import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
  getViewsCount,
} from 'app/db/queries';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              <Subs name={name} />
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}
// youtube订阅获取接口信息
async function Subs({ name }: { name: string }) {
  noStore();
  let subscribers;
  if (name === '@leerob') {
    subscribers = await getLeeYouTubeSubs();
  } else {
    subscribers = await getVercelYouTubeSubs();
  }

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {subscribers} subscribers
    </p>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  {/* 以下添加视频播放的自定义的内容 */}
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handleVideoError = () => {
    if (videoRef.current) {
      setError(`Video error: ${videoRef.current.error?.message}`)
    }
  }

  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm amerlinhung 👋
      </h1>
      {/* 以下是个人介绍 */}
      <p className="prose prose-neutral dark:prose-invert">
      {/* I am a cybersecurity architect, an optimist, and an explorer of AIGC (Artificial Intelligence Generated Content). Currently, 
      I am employed at Tencent Technology, where I assist clients in constructing security solutions that meet their needs. 
      Additionally, I am actively exploring the use of open-source artificial intelligence frameworks to solve practical problems. */}
        {`I am a cybersecurity architect, an optimist, and an explorer of AIGC (Artificial Intelligence Generated Content), currently `}
        <Link href="/work">employed</Link>

        {` by  `}
        <Link href="https://www.tencent.com">Tencent Technology</Link>

        {/* <span className="not-prose">
          <Badge href="https://vercel.com/home">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#vercel" />
            </svg>
            Vercel
          </Badge>
        </span> */}

        {`, where I help customers build security solutions that meet their needs.  `}

        {/* <Badge href="https://nextjs.org">
          <img
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge> */}

        {` In addition, I am actively exploring the use of open source artificial intelligence frameworks to solve practical problems.`}

        {/* <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge> */}
        .
      </p>

      {/* 以上是个人介绍 */}
      {/* 照片*/}
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>

        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>

        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        {/* 我为客户提供有关网络安全服务，教授他们的有关Web 开发安全，网络安全，数据安全等知识。这有各种形式：
        博客文章、视频、推文、会议演讲和研讨会。 您可以在下面观看我最喜欢的一些内容。 */}
        I provide cybersecurity services to customers, educating them about web development security, 
        network security, data security, and more. This comes in a variety of forms: blog posts, videos, 
        tweets, conference talks, and workshops. Some of my favorite content can be found below.
        </p>
      </div>

      {/* 这里是youtube链接 */}
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={avatar}
          name="@ameureka"
          link="https://www.youtube.com/@seealso1884"
        />
        {/* 这里注释下第二个频道，暂时不要 */}
        {/* <ChannelLink
          img={vercel}
          name="@vercel"
          link="https://www.youtube.com/@vercelhq"
        /> */}
      </div>

      {/* 这里是介绍 */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Over the past decade, I have consistently published articles on my blog and in my e-newsletter. 
        I always try to keep the content clear and concise. In these writings, I discuss the areas of 
        technology that are of interest to me at the time, or I describe my learning and progress along 
        my career path, always happy to share the knowledge I've gained along the way.
        </p>
        {/* 在过去十年中，我不断在我的博客和电子简报上发布文章。我总是尽量保持内容的简明易懂。在这些文章中，我会讨论那些我当时感兴趣的技术领域，
        或者描述我在职业道路上的学习与进步，并且乐于沿途分享我的所学所得。 */}
      </div>

      {/* 这里是blog 内容精选部分，可以随时调整 */}
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="AI新范式必将出现"
          slug="futureaigc"
        />
        <BlogLink name="思维转变的多重思考" slug="changeminds" />
        <BlogLink name="Portfolio个人博客开发实践" slug="todoportfilio" />
      </div>




      <div className="prose prose-neutral dark:prose-invert">
        {/* 这里的文字介绍 */}
        <p>
        {/* 我通过开源工具(Vercel/GPT3.5/OpenAI/Next.js/Supbase/Stripe)构建了一些公开的应用站点。 */}
        I built several public applications using open source tools like {' '}
        <Link href="https://vercel.com">Vercel</Link>,{' '}
        <Link href="https://platform.openai.com/docs/models">GPT-3.5</Link>,{' '}
        <Link href="https://openai.com">OpenAI</Link>,{' '}
        <Link href="https://nextjs.org">Next.js</Link>,{' '}
        <Link href="https://supabase.com">Supabase</Link>,{' '}
        and <Link href="https://stripe.com">Stripe.</Link>,{' '}
        </p>
      </div>

      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        {/* 项目工程 ai twitter bio */}
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://aitwitterbio.ameureka.com">
            <svg width="78" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#twitterbio" />
            </svg>
          </a>
        </div>

        {/* 项目工程 ai code */}

        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://aicode.ameureka.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#aicode" />
            </svg>
          </a>
        </div>

        {/* 项目工程1 */}

        {/* <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
            <svg width="96" height="19" role="img" aria-label="Makeswift logo">
              <use href="/sprite.svg#makeswift" />
            </svg>
          </a>
        </div> */}

        {/* 项目工程1 */}

        {/* <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://resend.com">
            <svg width="70" height="17" role="img" aria-label="Resend logo">
              <use href="/sprite.svg#resend" />
            </svg>
          </a>
        </div> */}


        {/* <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div> */}


      </div>

      <div className="prose prose-neutral dark:prose-invert">
        {/* 这里的文字介绍 */}
        <p>
        {/* 我通过开源工具(Vercel/GPT3.5/OpenAI/Next.js/Supbase/Stripe)构建了一些公开的应用站点。 */}
        Here's the ebook I created via  {' '}
        <Link href="https://www.gitbook.com">Gitbook</Link>{' '}
        </p>
      </div>


      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        {/* 电子书链接001 人人都会用AIGC */}
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://aigcbook.ameureka.com">
            <svg width="125" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#aigc" />
            </svg>
          </a>
        </div>

        {/* 电子书链接002  Generative AI */}
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://genaibook.ameureka.com/">
            <svg width="132" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#genai" />
            </svg>
          </a>
        </div>
      </div>


      {/* 这里的文字介绍删除*/}
      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked with and advised companies on{' '}
          <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
          <Link href="/blog/devrel">developer relations</Link>, building
          open-source communities, product-led growth, and more.
        </p>
      </div> */}



      <div className="prose prose-neutral dark:prose-invert">
        {/* 这里的文字介绍 */}
        <p>
        Here're some videos I created via  {' '}
        <Link href="https://hailuoai.com">AI Tools</Link>{' '}
        </p>
      </div>

      
      {/* 在页面最底部添加视频播放器 */}
      <div className="mt-12">
        <div className="aspect-w-16 aspect-h-9">
          <video 
            controls 
            className="rounded-lg"
            poster="/placeholder.svg?height=720&width=1280"
          >
            <source src="https://portfolior2.ameureka.com/portfilio_page_video/video_preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="mt-12">
      {/* <h2 className="mb-4 text-2xl font-medium tracking-tighter">Featured Video</h2> */}
        <div className="aspect-w-16 aspect-h-9">
          <video 
            ref={videoRef}
            controls 
            className="rounded-lg w-full"
            poster="https://via.placeholder.com/1280x720.png?text=Video+Placeholder"
            onError={handleVideoError}
          >
            <source src="https://portfolior2.ameureka.com/portfilio_page_video/video_preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>



      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/am_eureka"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>


        
        {/* 删除follow me */}
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li> */}
      </ul>

      

      
    </section>
  );
}
