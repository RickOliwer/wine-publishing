import Head from 'next/head'
import Client from '../src/apollo/client'
import Layout from '../src/components/layout';
import { GET_MENUS } from '../src/queries/get-menus'


export default function Home({ data }) {
  
  return (
    <Layout key="layout" data={data} >
      <div className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, totam recusandae. Itaque non quam quis veritatis fuga assumenda modi! Culpa iste ipsa doloribus corrupti dolor temporibus velit rem, ut ducimus?
      </div>
    </Layout>
  )
}




export async function getStaticProps(){
  const {data, loading, networkStatus} = await Client.query({
    query: GET_MENUS
  })

  console.warn( 'data', data );

  return {
    props: {
      data: {
        header: data?.header || [],
        
        menus: {
          headerMenus: data?.headerMenus?.edges  || [],
          footerMenus: data?.footerMenus?.edges  || [],
        },
        footer: data?.footer  || [],
      }
      
    },
  }
}