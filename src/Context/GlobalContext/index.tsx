import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type ContextType = {
  openLeftBar: boolean;
  setOpenLeftBar: Dispatch<SetStateAction<boolean>>;
};

export const MabetHomeGlobalContext = createContext<ContextType | undefined>(
  undefined,
);

type props = {
  children: ReactNode;
};

export const MabetHomeGlobalProvider = ({ children }: props) => {
  const [openLeftBar, setOpenLeftBar] = useState(false);

  return (
    <MabetHomeGlobalContext.Provider value={{ openLeftBar, setOpenLeftBar }}>
      {children}
    </MabetHomeGlobalContext.Provider>
  );
};
