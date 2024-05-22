import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Hero from '@/components/Hero'
import Tag from '@/components/Tag'
import tagData from 'app/tag-data.json'
// import { slug } from 'github-slugger'
import TagWrapper from '@/components/TagWrapper'
import Image from '@/components/Image'
import ViewCount from '@/components/ViewCount'

const MAX_DISPLAY = 5

export default function Home({ posts }) {

  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <>
      <Hero />

      <div id="main_2" className="divide-y divide-gray-200 dark:divide-gray-700 mt-5">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Popular Tags
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            The most commonly discussed topics
          </p>
        </div>

        <div className='flex flex-wrap py-5 justify-between gap-y-5 gap-x-5'>
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.slice(0, Math.min(sortedTags.length, 6)).sort((a, b) => a.length - b.length).map((t) => <TagWrapper key={t} tagName={t} count={tagCounts[t]} />)}
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-5">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images, timeReadMinutes, readingTime } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, 'en-US')}</time>
                        <div className="py-2 pr-3">
                          {images?.[0] && <div className='rounded-md'><Link href={`/blog/${slug}`}><Image
                            alt={title}
                            src={images?.[0]}
                            className="object-cover object-center rounded-md border rounded-lg dark:border-0"
                            width={1000}
                            height={150}
                          /></Link></div>}
                        </div>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <dd className="mt-1.5 mb-2.5 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <ViewCount slug={slug} timeReadMinutes={timeReadMinutes || Math.ceil(readingTime.minutes)} />
                          </dd>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
