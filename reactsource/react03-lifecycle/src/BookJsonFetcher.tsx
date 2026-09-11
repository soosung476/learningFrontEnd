import { useEffect, useState } from "react";

export type Book = {
  id: number;
  title: string;
  author: string;
};

const BookJsonFetcher = () => {
  const [result, setResult] = useState<Book[]>([]);

  const getData = async () => {
    const response = await fetch(`/data/books.json`);
    const data: Book[] = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const localData = await getData();
      setResult(localData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl">BOOK</h2>
      <table className="[&_th,&_td]:border [&_th,&_td]:border-gray-500 [&_th,&_td]:text-center [&_th,&_td]:p-2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {result.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookJsonFetcher;
