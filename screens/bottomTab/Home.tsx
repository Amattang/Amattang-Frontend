import React, { useCallback, useEffect, useState } from 'react';

import EmptyHome from '../../components/Home/EmptyHome';
import CheckListHome from '../../components/Home/CheckListHome';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

function Home() {
  const [loading, setLoading] = useState(false);
  const [isCheckList, setIsCheckList] = useState(false);
  const [homeCheckList, setHomeCheckList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  //refreshcontrol을 호출할 때 실행되는 callback함수
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getHomeDataHandler();
    setRefreshing(false);
  }, []);

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
          <CheckListHome
            homeCheckList={homeCheckList}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
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
