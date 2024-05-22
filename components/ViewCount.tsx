'use client'

import { useEffect, useState } from 'react'
import { Eye, Clock1 } from 'lucide-react'
import { md5 } from 'js-md5'
import { realtimeDB } from '@/config/firebaseConfig'
import { ref } from 'firebase/database'
import { useObject } from 'react-firebase-hooks/database'
import { formatNumber } from '@/utils/Number'

interface Props {
  timeReadMinutes?: number,
  className?: string,
  slug: string
}

const ViewCount = ({ slug, timeReadMinutes = 0, className }: Props) => {

  const [mounted, setMounted] = useState(false)
  const [countView, loading, error] = useObject(ref(realtimeDB, `blogs/${md5(slug)}/count`))

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted || loading || error || !countView) {
    return <div className={`flex items-center justify-start ${className ? className : ''}`}>
      {
        timeReadMinutes !== undefined
          ? <>
            <Clock1 className='inline' size={14} />
            <span className='px-1'>{`${timeReadMinutes} mins read`}</span>
          </>
          : ''
      }
    </div>
  }

  return <div className={`flex items-center justify-start ${className ? className : ''}`}>
    {
      timeReadMinutes !== undefined
        ? <>
          <Clock1 className='inline' size={14} />
          <span className='ps-1'>{`${timeReadMinutes} mins read`}</span>
          <span className='px-2'>-</span>
          <Eye className='inline' size={16} />
          <span className='ps-1'>{formatNumber(countView.val())} views</span>
        </>
        : ''
    }
  </div>
}

export default ViewCount
