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
    await axios.get('/api/check-list').then((response) => setHomeCheckList(response.data.data));
    setIsCheckList(true);
    setLoading(true);
  };

  useEffect(() => {
    // 체크리스트 데이터 있으면 넣어주기
    getHomeDataHandler();
    console.log(homeCheckList);
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
