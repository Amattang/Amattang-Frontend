import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { choseCheckListByServerType, deletedCheckListByServerType } from '../types/checkListTypes';

interface contextType {
  deletedCheckListByServer: deletedCheckListByServerType;
  setDeletedCheckListByServer: Dispatch<SetStateAction<deletedCheckListByServerType>>;
  choseCheckListByServer: choseCheckListByServerType;
  setChoseCheckListByServer: Dispatch<SetStateAction<choseCheckListByServerType>>;
  checkListId: number;
  setCheckListId: Dispatch<SetStateAction<number>>;
}

export const checkListCtx = createContext<contextType | null>(null);

const CheckListStore: React.FC = (props) => {
  const [deletedCheckListByServer, setDeletedCheckListByServer] =
    useState<deletedCheckListByServerType>({ question: [] });
  const [choseCheckListByServer, setChoseCheckListByServer] = useState<choseCheckListByServerType>({
    typeA: [],
    typeB: [],
    typeD: [],
    typeM: [],
  });
  const [checkListId, setCheckListId] = useState<number>(5354);

  return (
    <checkListCtx.Provider
      value={{
        deletedCheckListByServer,
        setDeletedCheckListByServer,
        choseCheckListByServer,
        setChoseCheckListByServer,
        checkListId,
        setCheckListId,
      }}
    >
      {props.children}
    </checkListCtx.Provider>
  );
};

export default CheckListStore;
