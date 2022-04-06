import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { choseCheckListByServerType, deletedCheckListByServerType } from '../types/checkListTypes';
import axios from 'axios';

interface contextType {
  deletedCheckListByServer: deletedCheckListByServerType;
  setDeletedCheckListByServer: Dispatch<SetStateAction<deletedCheckListByServerType>>;
  choseCheckListByServer: choseCheckListByServerType;
  setChoseCheckListByServer: Dispatch<SetStateAction<choseCheckListByServerType>>;
  checkListId: number | false;
  setCheckListId: Dispatch<SetStateAction<number | false>>;
  onChoseCheckListHandler: () => void;
  onDeleteCheckListHandler: (data: deletedCheckListByServerType) => void;
}

export const checkListCtx = createContext<contextType | null>(null);

const CheckListStore: React.FC = (props) => {
  const [deletedCheckListByServer, setDeletedCheckListByServer] =
    useState<deletedCheckListByServerType>({ question: [] });
  const [choseCheckListByServer, setChoseCheckListByServer] = useState<choseCheckListByServerType>({
    typeA: [],
    typeB: [],
    typeD: [],
    typeM: {},
  });
  const [checkListId, setCheckListId] = useState<number | false>(false);
  const onDeleteCheckListHandler = (data: deletedCheckListByServerType) => {
    axios
      .put(`/api/check-list/${checkListId}/common/question/status`, data)
      .then(() => setDeletedCheckListByServer({ question: [] }));
  };
  const onChoseCheckListHandler = () => {
    axios.put(`/api/check-list/${checkListId}/common/question`, choseCheckListByServer).then(() => {
      setChoseCheckListByServer({
        typeA: [],
        typeB: [],
        typeD: [],
        typeM: {},
      });
    });
  };

  return (
    <checkListCtx.Provider
      value={{
        deletedCheckListByServer,
        setDeletedCheckListByServer,
        choseCheckListByServer,
        setChoseCheckListByServer,
        checkListId,
        setCheckListId,
        onChoseCheckListHandler,
        onDeleteCheckListHandler,
      }}
    >
      {props.children}
    </checkListCtx.Provider>
  );
};

export default CheckListStore;
