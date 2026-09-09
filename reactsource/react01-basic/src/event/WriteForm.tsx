import type { Form } from "./MyForm";

const WriteForm = ({
  submit,
  form,
  setForm,
}: {
  form: Form;
  submit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  setForm: React.Dispatch<
    React.SetStateAction<{ gubun: string; title: string }>
  >;
}) => {
  return (
    <div className="border-2 py-4 border-gray-400 rounded-sm">
      <form action="" onSubmit={submit}>
        <select
          name="gubun"
          className="mx-3"
          value={form.gubun}
          onChange={(e) => setForm({ ...form, gubun: e.target.value })}
        >
          <option value="">-------</option>
          <option value="front">프론트엔드</option>
          <option value="back">백엔드</option>
        </select>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border border-gray-400 px-3 rounded"
        />
        <input
          type="submit"
          value="추가"
          className="border border-gray-400 px-3 rounded"
        />
      </form>
    </div>
  );
};

export default WriteForm;
