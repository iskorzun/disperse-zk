import { useContext } from "react";
import "../styles/App.css";

const Status = ({ txnStatus }) => {
  return (
    <div
      className={`flex flex-col ml-4 ${
        txnStatus.status === "pending" && "animate-pulse"
      }`}
    >
      <p className="transaction">transaction {txnStatus.status}</p>
      <a
        href={`${"https://explorer.zksync.io/"}tx/${txnStatus.hash}`}
        target="_blank"
        className="txn"
      >
        {txnStatus.hash}
      </a>
    </div>
  );
};

export default Status;
