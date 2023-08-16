import React, { useEffect, useState } from 'react';
import Loder from '../../components/loader/Loder';
import stylesheet from './home.module.css';

const Home = () => {
  const [loader, setLoader] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000)
  }, []);

  return (
    <div className={stylesheet.main}>
      {loader &&
        <Loder />
      }
      {!loader &&
        <div className={stylesheet.container}>
            <h3>Home page</h3>
        </div >
      }
    </div>
  )
}

export default Home;