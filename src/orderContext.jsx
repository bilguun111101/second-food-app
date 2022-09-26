import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const OrderContext = createContext();

export const OrderContextProvider = (props) => {
  const { children } = props;
  const [orderDetail, setOrderDetail] = useState({});
  const [booleanDet, setBooleanDet] = useState(false);
  const [addFood, setAddFood] = useState(false);
  return (
    <OrderContext.Provider
      value={{
        orderDetail,
        setOrderDetail,
        booleanDet,
        setBooleanDet,
        addFood,
        setAddFood,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
