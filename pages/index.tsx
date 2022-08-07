import { Auth } from '../components/Auth'
import { Layout } from '../components/Layout'
import { GetStaticProps } from 'next'
import { dehydrate } from 'react-query/hydration'
import { fetchNews } from '../hooks/useQueryNews'
import { News } from '../types/types'
import { QueryClient, useQueryClient } from 'react-query'
import { SakeListMemo } from '../components/SakeList'

export default function Home() {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<News[]>('news')
  return (
    <Layout title="Home">
      <p className='mb-5 text-blue-500 cursor-pointer'>Sake List</p>
      <div className="grid  gap-40">
          <SakeListMemo />
      </div>
    </Layout>
  )
}

