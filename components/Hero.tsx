'use client';

import Link from 'next/link';
import { ReactElement, useEffect } from 'react';
import { renderCanvas } from '@/components/renderCanvas';
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion';

export default function Hero(): ReactElement {

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className='mb-5'>
      <div className="relative z-9 flex h-[calc(100vh-124px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div className="flex cursor-default flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                Do Hung Anh
              </h1>
              <h2 className="text-2xl font-medium opacity-80 sm:text-5xl md:text-5xl xl:text-5xl">
                Software Engineer
              </h2>
              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                Read more about me &rarr;
              </Link>
            </div>

            <div className='absolute bottom-0 left-0 right-0 flex justify-center items-center pb-5'>
              <motion.div
                whileTap={{
                  scale: 0.7,
                  transition: { duration: 0.2 },
                }}
                whileHover={{ scale: 1.05 }}
                className="bottom-4 md:bottom-8"
              >
                <div
                  className="flex cursor-pointer flex-col items-center justify-center"
                  onClick={() => {
                    const intro = document.querySelector('#main_2');

                    intro?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className='animate-bounce p-3 rounded-full ring-2 ring-gray-600 dark:ring-gray-400'>
                    <ArrowDown/>
                  </div>
                </div>
              </motion.div>              
            </div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
