const TopComp = ({ frontData, backData }) => {
  return (
    <div>
      <ol>
        <li>프론트엔드</li>
        {/* frontData */}
        <ul>
          {frontData.map((data, idx) => (
            <li key={idx}>{data}</li>
          ))}
        </ul>
        <li>백엔드</li>
        <ul>
          {backData.map((data, idx) => (
            <li key={idx}>{data}</li>
          ))}
        </ul>
      </ol>
    </div>
  );
};

export default TopComp;
