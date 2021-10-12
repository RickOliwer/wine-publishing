import Head from 'next/head'
import Client from '../src/apollo/client'
import Advantages from '../src/components/content/advantages';
import Intro from '../src/components/content/intro';
import Readers from '../src/components/content/readers';
import Table from '../src/components/content/table';
import Layout from '../src/components/layout';
import { GET_MENUS } from '../src/queries/get-menus'
import { GET_PAGE } from '../src/queries/get-page';

export default function Home({ data, content }) {
  return (
    <Layout key="layout" data={data} >
      <div id="wine-publishing">
          <Intro  IntroContent={content?.pages?.intoduktion} />
      </div>

      <div id="readers">
          <Readers ReadersContent={content?.pages?.readers} />
      </div>

      <div id="material-spec">
        <Table MaterialContent={content?.pages?.materialSpecification} />
      </div>
      <div id="advantages">
          <Advantages AdvantagesContent={content?.pages?.advantages} />

      </div>
    </Layout>
  )
}




export async function getStaticProps(){
  const {data, loading, networkStatus} = await Client.query({
    query: GET_MENUS
    
  })

  const response = await Client.query({
    query: GET_PAGE
  })

  console.log('My response', response);
  
  

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

      },

      content: {
        pages: response?.data?.pageBy || [],
      },
      
    },
  }
}