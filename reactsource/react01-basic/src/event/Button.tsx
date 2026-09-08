const Button = () => {
  // 버튼 클릭 시 alert('버튼클릭')
  return (
    <div>
      <button className="p-4 bg-orange-300" onClick={() => alert("버튼클릭")}>
        버튼 클릭
      </button>
    </div>
  );
};

export default Button;
