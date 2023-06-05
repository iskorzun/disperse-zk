const Recipients = ({ tokenSymbol, textValue, setTextValue }) => {
  return (
    <div className="pt-16">
      <h3 className="text-2xl font-light italic">recipients and amounts</h3>
      <p className="pt-3 text-l font-light">
        enter one address and amount in {tokenSymbol} on each line.
      </p>
      <textarea
        spellCheck="false"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        className="block border-b-2 border-black outline-none px-2 py-2 mt-4 h-32 max-w-3xl"
        style={{
          width: "50%",
          height: "100%",
          background: "aquamarine",
          color: "black",
        }}
        placeholder="0x0061e7958aA1f6bbDA7fFdB4D079fa2d413263dd 0.1 &#10;0x8E5d1Ef824E54648cE19f7f0CC0853DF345c91cF 0.2"
      ></textarea>
    </div>
  );
};

export default Recipients;
