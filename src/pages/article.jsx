import { useParams } from "react-router";
import Header from "../components/header";
import { useEffect, useState } from "react";

export default function Article() { 
  const { username, slug } = useParams()
  const [user, setUser] = useState();
  const [ article, setArticle ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      const foundUser = data.find(
        (u) => u.username === username.replaceAll("@", "")
      );
      if (!foundUser) return;
      setUser(foundUser);
      const foundArticle = foundUser.article.find(
        (a) => a.slug === slug
      );
      setArticle(foundArticle);
    };
  
    fetchData();
  }, [username, slug]);
  console.log(article)
  console.log(user);
  return ( 
    <div className="flex flex-col">
      <Header/>
      <div className="max-w-235 w-full mx-auto py-10 flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{article?.title}</h1>

          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div>{user?.fullname}</div>
            <button className="px-4 py-2 border rounded-full">Follow</button>
            <div>4 min read
            </div>
            <span>Feb 11, 2025</span>
          </div>
        </header>

        <main className="gap-4 flex flex-col">
          <div>
            <img src="https://images.pexels.com/photos/5989926/pexels-photo-5989926.jpeg" alt="" />
          </div>
          <span>Sering kali kita dibingungkan dengan cara handling form di frontend, pada artikel ini mari kita bedah cara-cara melakukan handling form secara efektif dan efisien di frontend!</span>
        </main>
      </div>
    </div>
  )
}