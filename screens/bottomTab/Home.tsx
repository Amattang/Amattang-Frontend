import React, { useEffect, useState } from 'react';

import EmptyHome from '../../components/Home/EmptyHome';
import CheckListHome from '../../components/Home/CheckListHome';
import axios from 'axios';

function Home() {
  const [isCheckList, setIsCheckList] = useState(false);
  const getHomeApi = async () => {
    const response = await axios.get('/api/check-list');
    console.log(response);
  };
  useEffect(() => {
    // 체크리스트 데이터 있으면 넣어주기
    axios.get('/api/check-list').then((response) => console.log(response));

    setIsCheckList(true);
  }, []);
  return <>{isCheckList ? <CheckListHome /> : <EmptyHome />}</>;
}

export default Home;
