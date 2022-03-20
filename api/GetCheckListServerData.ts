import axios from 'axios';
import { checkListTypes } from '../types/checkListTypes';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setDeletedCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  setOnServerData: Dispatch<SetStateAction<boolean>>;
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  checkListId: number | undefined;
  mainCategory: '외부시설' | '내부시설';
  subCategory: '창문' | '천장' | '부엌' | '화장실' | '벽' | '현관' | '옵션' | null;
}

export const GetCheckListServerData = async ({
  setDeletedCheckLists,
  setOnServerData,
  setCheckLists,
  checkListId,
  mainCategory,
  subCategory,
}: IProps) => {
  try {
    const serverResponse =
      subCategory === null
        ? await axios.get(`/api/check-list/${checkListId}/common?mainCategory=${mainCategory}`)
        : await axios.get(
            `/api/check-list/${checkListId}/common?mainCategory=${mainCategory}&subCategory=${subCategory}`
          );
    setCheckLists([
      ...serverResponse.data.data.questionList.map((item: checkListTypes) => ({
        ...item,
      })),
    ]);
    setDeletedCheckLists(
      [
        ...serverResponse.data.data.questionList.map((item: checkListTypes) => ({
          ...item,
        })),
      ].filter((item) => !item.visibility)
    );
    setOnServerData(true);
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
