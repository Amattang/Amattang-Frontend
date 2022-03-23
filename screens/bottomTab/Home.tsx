import React, { useEffect, useState } from 'react';

import EmptyHome from '../../components/Home/EmptyHome';
import CheckListHome from '../../components/Home/CheckListHome';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

function Home() {
  const [loading, setLoading] = useState(false);
  const [isCheckList, setIsCheckList] = useState(false);
  const [homeCheckList, setHomeCheckList] = useState([]);

  const getHomeDataHandler = async () => {
    try {
      const response = await axios.get('/api/check-list');
      setHomeCheckList(response.data.data);
    } catch (error) {
      console.error(error);
    }
    setIsCheckList(true);
    setLoading(true);
  };

  useEffect(() => {
    getHomeDataHandler();
  }, []);

  return (
    <>
      {loading ? (
        isCheckList ? (
          <CheckListHome homeCheckList={homeCheckList} />
        ) : (
          <EmptyHome />
        )
      ) : (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} />
      )}
    </>
  );
}

export default Home;
