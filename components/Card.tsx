'use client';

import useSWR from 'swr';
import Image from './Image'
import Link from './Link'
import { TechStackList } from '@/components/DevIcons'
import { fetcher } from '@/utils/fetcher';
import GithubRepo from '@/components/GithubRepo'
import type { GithubRepository } from '@/types/server';
import { useEffect } from 'react';

const Card = ({ title, description, imgSrc, href, sourceCode, techStack, repo }) => {

  const { data } = useSWR(`/api/github?repo=${repo}`, fetcher);
  const repository: GithubRepository = data?.repository;
  sourceCode = repository?.url || sourceCode;

  return (

    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${imgSrc && 'h-full'
          } overflow-hidden rounded-md border-2 hover:border-3 border-gray-200 hover:border-gray-400 border-opacity-60 hover:border-opacity-100 dark:border-gray-700 dark:hover:border-gray-500 shadow-nextjs dark:shadow-nextjs-dark`}
      >
        {imgSrc && <div className="flex-shrink-0 object-none">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-72 lg:h-72 border-b-2 border-gray-200 dark:border-gray-900"
              width={500}
              height={500}
              priority
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-72 lg:h-72 border-b-2 border-gray-200 dark:border-gray-900"
              width={500}
              height={500}
              priority
            />
          )}
        </div>
        }
        <div className="p-6">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>

          <p className="prose mt-3 mb-5 max-w-none text-gray-600 dark:text-gray-300">
            {description}
          </p>

          <TechStackList techs={techStack} />

          <div className='mt-5'>
            {repository ? <GithubRepo repo={repository} homepageUrlBackup={href} /> : <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
