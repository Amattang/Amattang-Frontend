import axios from 'axios';
import { checkListTypes, myItemType } from '../types/checkListTypes';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setMyItems: Dispatch<SetStateAction<myItemType[]>>;
  setOnServerData?: Dispatch<SetStateAction<boolean>>;
  checkListId: number | undefined;
}

export const GetMyItemServerData = async ({ setMyItems, setOnServerData, checkListId }: IProps) => {
  try {
    const serverResponse = await axios.get(`/api/check-list/${checkListId}/custom`);
    setMyItems([
      ...serverResponse.data.data.map((item: checkListTypes) => ({
        ...item,
      })),
    ]);
    {
      setOnServerData && setOnServerData(true);
    }
  } catch (error: any) {
    const status = error?.response?.status;
    if (status === undefined) {
      console.error('데이터 오류');
    } else if (status === 400) {
      console.error('400에러');
    } else if (status === 500) {
      console.error('내부 서버 오류');
    }
  }
};
