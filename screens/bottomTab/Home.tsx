import React, { useCallback, useEffect, useState } from 'react';

import EmptyHome from '../../components/Home/EmptyHome';
import CheckListHome from '../../components/Home/CheckListHome';
import axios from 'axios';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';

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
      console.log(response.data.data);
      if (response.data.data.length !== 0) setIsCheckList(true);
    } catch (error) {
      console.error(error);
    }
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
          <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            <EmptyHome />
          </ScrollView>
        )
      ) : (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} />
      )}
    </>
  );
}

export default Home;
