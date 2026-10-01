import { useState } from "react";
import "./App.css";
import UserCard from "./component/UserCard";

const App = () => {
  const [userData, setUserData] = useState({
    name: "Sofiya",
    surname: "Məhəmmədova",
    Peşə: "Kompüter şəbəkəsi və şəbəkə inzibatçısı",
    QısaBio:
      "Texnologiyalara maraqlıyam, yeni biliklər öyrənməyi və praktiki bacarıqlarımı inkişaf etdirməyi sevirəm.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcGRNtaBlbgFHL-bcu4YganYASvPHXpcRn9YGeV-sfA&s=10",
  });

  return (
    <div>
      <UserCard data={userData} />
    </div>
  );
};

export default App;
