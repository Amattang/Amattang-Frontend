import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { choseCheckLIstByServerType, deletedCheckListByServerType } from '../types/checkListTypes';

interface contextType {
  deletedCheckListByServer: deletedCheckListByServerType;
  setDeletedCheckListByServer: Dispatch<SetStateAction<deletedCheckListByServerType>>;
  choseCheckLIstByServer: choseCheckLIstByServerType;
  setChoseCheckLIstByServer: Dispatch<SetStateAction<choseCheckLIstByServerType>>;
}

export const checkListCtx = createContext<contextType | null>(null);

const CheckListStore: React.FC = (props) => {
  const [deletedCheckListByServer, setDeletedCheckListByServer] =
    useState<deletedCheckListByServerType>({ question: [] });
  const [choseCheckLIstByServer, setChoseCheckLIstByServer] = useState<choseCheckLIstByServerType>({
    typeA: [],
    typeB: [],
    typeC: [],
    typeD: [],
    typeM: [],
  });

  return (
    <checkListCtx.Provider
      value={{
        deletedCheckListByServer,
        setDeletedCheckListByServer,
        choseCheckLIstByServer,
        setChoseCheckLIstByServer,
      }}
    >
      {props.children}
    </checkListCtx.Provider>
  );
};

export default CheckListStore;
