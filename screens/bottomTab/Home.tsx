import React, { useEffect, useState } from 'react';

import EmptyHome from '../../components/Home/EmptyHome';
import CheckListHome from '../../components/Home/CheckListHome';

function Home() {
  const [isCheckList, setIsCheckList] = useState(false);

  useEffect(() => {
    // 체크리스트 데이터 있으면 넣어주기
    setIsCheckList(true);
  }, []);
  return <>{isCheckList ? <CheckListHome /> : <EmptyHome />}</>;
}

export default Home;
