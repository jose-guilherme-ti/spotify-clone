import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'

const Home: NextPage = () => {
  const router = useRouter()
  const {status, data: session} = useSession({
    required: true,
    onUnauthenticated(){
      router.push('/auth/signin')
    }
  })

  if(status ==='loading'){
    return <Loader />
  }

  return (
    <div /* className="flex min-h-screen flex-col items-center justify-center py-2" */>
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard/>
      
    </div>
  )
}

export default Home
