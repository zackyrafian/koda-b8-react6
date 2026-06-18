import { useParams, Link } from "react-router";
import Header from "../components/header";
import { useEffect, useState } from "react";
export default function ProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  console.log(username);  
  useEffect(() => { 
    const fetchData =  async () => { 
      const res = await fetch('/data.json')
      const data = await res.json(); 
      console.log(data);
      setUser(data.find((u) => u.username === username.replaceAll("@", "")))
    }
    fetchData();
  }, [])
  console.log(user);
  return ( 
    <div className="min-h-screen">
      <Header />
      <div className="flex px-16">
        <div className="flex-1 min-h-screen border-r border-black/20 border">
          <div className="max-w-full ml bg-gray-500 h-37.5"></div>
          {/* max-w-170 */}
          <div className="p-12 mx-auto border-spacing-x-px">
            <header className="flex gap-8 flex-col">
              <h1 className="text-5xl font-semibold">{user.fullname}</h1>
              <div className="flex gap-4 border-b border-b-black/20">
                <div>Home</div>
                <div>Activy</div>
                <div>About</div>
              </div>
            </header>
            <main className="flex flex-col gap-4 pt-8">
              {user.article?.map((article) => (
                <Link to={`/${username}/${article.slug}`} key={article.id} className="flex gap-4 items-center">
                  <div>
                    <div className="flex items-center text-sm gap-1">
                      <div className="w-4 h-4 bg-blue-500 items-center justify-center text-white rounded text-xs flex">A</div>
                      <div>In fazztrack by {user.fullname} Feb 11, 2025</div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="text-2xl font-semibold">{article.title}</div>
                      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ex atque fugiat debitis sunt voluptates recusandae error, vitae quod, rerum, maxime itaque numquam ratione non! In eius quia quo perspiciatis fuga laudantium ipsam odit eum numquam minus dolores hic officia autem laborum adipisci, odio et rerum reiciendis harum aperiam ab.</div>
                    </div>
                  </div>
                  <div>
                    <img src="/dummy.png" alt="pngs" />
                  </div>
                </Link>
              ))}
            </main>
          </div>
        </div>
          <div className="w-1/4 max-w-screen p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-4"> 
            <div className="bg-blue-500 w-22 h-22 rounded-full flex items-center justify-center overflow-hidden">
              <img src={user.photo_profile} alt="" />
            </div>
            <div>{user.fullname}</div>
            <div>{user.followers} followers
</div>
            <div>{user.desription_profile}</div>
            <button className="bg-black text-white rounded-full px-4 py-2">Follow</button>
          </div>
          {/* // Follow
          // Help
          // Status
          // About
          // Careers
          // Press
          // Blog
          // Store
          // Privacy
          // Rules
          // Terms
          // Text to speech*/}
          <div className="flex flex-col gap-2 text-xs">
            <div className="flex gap-2">
              <span>Help</span>
              <span>Status</span>
              <span>About</span>
              <span>Carrers</span>
              <span>Press</span>
              <span>Blog</span>
              <span>Store</span>
              <span>Privacy</span>
            </div>
            <div className="flex gap-2">
              <span>Rules</span>
              <span>Term</span>
              <span>Text speech</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
// 160 x 166
// Fahrul Septiana
// 8 followers
// I am a passionate Full-stack JavaScript Developer with a keen interest in writing about various programming languages.