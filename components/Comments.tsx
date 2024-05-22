'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { useEffect } from 'react'
import { md5 } from 'js-md5'
import { realtimeDB } from '@/config/firebaseConfig'
import { set, ref, get, child } from 'firebase/database'

export default function Comments({ slug }: { slug: string }) {

  // const [loadComments, setLoadComments] = useState(false)
  
  // When mounted on client, now we can handle logic
  useEffect(() => {
    get(child(ref(realtimeDB), `blogs/${md5(slug)}/count`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        return 1
      }
    }).catch((error) => {
      console.error(error);
    })
    .then(val => {
      set(ref(realtimeDB, `blogs/${md5(slug)}`), {
        slug,
        count: val + 1
      })
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* {!loadComments && <button onClick={() => setLoadComments(true)}>Load Comments</button>} */}
      {siteMetadata.comments && /* loadComments && */ (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </>
  )
}
