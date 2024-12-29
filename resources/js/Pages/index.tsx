import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'

export default function index({}: PageProps)  {
  return (
    <>    
      <div className='flex justify-center min-h-screen items-center'>
        <Head title="Home" />

        <main>
          <p>Hello!, this is templatews Laravel React by Purwa aaxxx</p>
        </main>
      </div>
    </>
  )
}
