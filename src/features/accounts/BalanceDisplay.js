import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const { balance } = useSelector((store) => store.account);

  useEffect(() => {
    setCurrentBalance(balance);
  }, [balance]);

  return <div className="balance">{formatCurrency(currentBalance)}</div>;
}

export default BalanceDisplay;
