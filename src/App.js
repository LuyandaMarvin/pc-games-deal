import { useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Search from './components/Seaarch';

function App() {

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    (async () => {
      let dealsData;
      
       try{
        // const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
        // dealsData = (await response.json()).results;
        // console.log(dealsData)

        //axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`).then(res => {console.log(res)}).catch(err => { console.log(err)})

        var config = {
          method: 'get',
          url: 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',
          headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS" }
        };

        axios(config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      }catch(error) {
        console.error();
      }

    })();
  }, []);

  return (
    <>
      <Navbar/>
      <Search/>
      <div className="md:flex block flex-wrap justify-between mx-20">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
