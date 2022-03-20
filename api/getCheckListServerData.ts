import axios from 'axios';
import { checkListTypes } from '../types/checkListTypes';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  checkListId: number;
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  setDeletedCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  setOnServerData: Dispatch<SetStateAction<boolean>>;
  mainCategory: '외부시설' | '내부시설';
  subCategory: '창문' | '천장' | '부엌' | '화장실' | '벽' | '현관' | '옵션' | null;
}

export const getCheckListServerData = async ({
  checkListId,
  setCheckLists,
  setDeletedCheckLists,
  setOnServerData,
  mainCategory,
  subCategory,
}: IProps) => {
  try {
    const serverResponse = subCategory
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
  } catch (error) {
    console.error(error);
  }
};
