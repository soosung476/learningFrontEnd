import { useEffect, useState } from "react";

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

type UserResponseType = {
  results: User[];
  info: {
    seed: string;
    number: number;
    page: number;
    version: string;
  };
};
const RandomUser = ({ onProfile }: { onProfile: (user: User) => void }) => {
  const [result, setResult] = useState<User[]>([]);

  const getData = async () => {
    const response = await fetch(`https://api.randomuser.me?results=10`);
    const data: UserResponseType = await response.json();
    return data.results;
  };

  useEffect(() => {
    console.log("3. useEffect 실행");
    // get myData.json after rendering
    const fetchData = async () => {
      const localData = await getData();
      setResult(localData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <table className=" [&_th]:border-gray-700 [&_th]:border [&_th:nth-child(4)]:text-amber-600">
        <thead>
          <tr>
            <th>사진</th>
            <th>로그인</th>
            <th>이름</th>
            <th>국가</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {result.map((user) => (
            <tr key={user.login.uuid} className="border border-gray-500">
              <td className="border w-20">
                {/* pictures */}
                <img
                  src={user.picture.thumbnail}
                  alt=""
                  className="w-full h-full"
                ></img>
              </td>
              <td className="border text-center p-2">
                {/* username */}
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    onProfile(user);
                  }}
                >
                  {user.login.username}
                </a>
              </td>
              <td className="border text-center p-2">
                {/* name.title, first, last */}
                <p>
                  {user.name.title}{" "}
                  <span className="text-blue-600">"{user.name.first}"</span>
                  {user.name.last}
                </p>
              </td>
              <td className="border text-center p-2">
                {/* nat */}
                <p className="text-amber-600">{user.nat}</p>
              </td>

              <td className="border text-center p-2">
                {/* email */}
                <p>{user.email}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RandomUser;
