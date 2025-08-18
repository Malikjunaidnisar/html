
import { useQuery } from '@apollo/client';
import './App.css'
import GETALLPOST from './graphql/query/post';

function App() {
  const { loading, error, data } = useQuery(GETALLPOST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data)
  return (
    <>
      {data.posts.data.map(({title,body})=>(
          
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>

      ))}
    </>
  )
}

export default App
