import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {
  return (
    <Layout>
    <h1>Batman TV Shows</h1>
    {/* <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
  </Layout>
  )
};

Index.getInitialProps = async function() {
  const res = await fetch('http://salatraju.org/api/');
  const data = JSON.parse(res);
  // const data = await res.json();
  
  console.log(`Show data fetched. Count: ${data}`);

  // return {
  //   shows: data.map(entry => entry.show)
  // };
  return  {data}
};

export default Index;