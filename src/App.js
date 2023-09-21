import React from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {

  const [data, setData] = React.useState()

  async function getPosts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }


  React.useEffect(() => {
    getPosts()
  }, [])

  return (

    <React.Fragment>
      <div>
        <h3> test </h3>
      </div>

      <div>
        <h1>hello </h1>
      </div>

      {

        data?.map((item, index) => {
          return (
            <Card key={index} title={item.title} desc={item.body} />
          )

        })
      }

    </React.Fragment>
  )
}


export default App
