import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import Status from "./Status";
import "../styles/App.css";

const ConfirmEther = ({
  recipientsData,
  total,
  tokenBalance,
  remaining,
  disperse,
  txStatus,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (total && tokenBalance) {
      setIsDisabled(!ethers.utils.parseUnits(tokenBalance).gt(total));
    }
  }, [total, tokenBalance]);

  return (
    <div className="list">
      <ul>
        <div className="address_amount_text">
          <p className="address_text">address amount</p>
        </div>

        {recipientsData.length > 0 &&
          recipientsData.map((recipient) => (
            <div className="recipients_results">
              <p>
                {recipient.address +
                  " " +
                  ethers.utils.formatEther(recipient.value)}
              </p>
            </div>
          ))}

        <p className="total">
          total: {total ? ethers.utils.formatEther(total) : ""}
        </p>

        <p className="balance">your balance: {tokenBalance}</p>
        <div
          className={`flex justify-between mt-2 ${
            isDisabled && "text-red-700"
          }`}
        >
          <p className="remaining">remaining: {remaining}</p>
        </div>
      </ul>
      {total && tokenBalance && (
        <div className="mt-8">
          <div className="mt-6 flex items-center ">
            <button
              onClick={disperse}
              disabled={isDisabled}
              className={`px-2 py-3 italic disabled:opacity-50 cursor-pointer ${
                isDisabled && `disabled:cursor-default`
              }`}
              style={{
                background: "aquamarine",
                boxShadow: "6px 6px crimson",
              }}
            >
              disperse ether
            </button>
            {isDisabled && <p className="exceeds">insuficient balance!</p>}
            {txStatus && <Status txnStatus={txStatus} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmEther;
