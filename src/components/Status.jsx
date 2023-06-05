import { useContext } from "react";

const Status = ({ txnStatus }) => {
  return (
    <div
      className={`flex flex-col ml-4 ${
        txnStatus.status === "pending" && "animate-pulse"
      }`}
    >
      <p
        className={`text-sm italic font-semibold ${
          txnStatus.status === "success" && "text-green-500"
        }`}
      >
        transaction {txnStatus.status}
      </p>
      <a
        href={`${"https://explorer.zksync.io/"}tx/${txnStatus.hash}`}
        target="_blank"
        className="text-xs border-gray-600 border-b-2 font-light"
      >
        {txnStatus.hash}
      </a>
    </div>
  );
};

export default Status;
