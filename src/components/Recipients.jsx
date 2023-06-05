import "../styles/App.css";

const Recipients = ({ tokenSymbol, textValue, setTextValue }) => {
  return (
    <div className="pt-16">
      <h3 className="recipients and amounts">recipients and amounts</h3>
      <p className="pt-3 text-l font-light">
        enter one address and amount in {tokenSymbol} on each line
      </p>
      <textarea
        spellCheck="false"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        className="input"
        placeholder="0x0061e7958aA1f6bbDA7fFdB4D079fa2d413263dd 0.1 &#10;0x8E5d1Ef824E54648cE19f7f0CC0853DF345c91cF 0.2"
      ></textarea>
    </div>
  );
};

export default Recipients;
