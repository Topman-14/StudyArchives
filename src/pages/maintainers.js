import MaintainerTile from "../../components/MaintainerTile";
import Navbar from "../../components/Navbar";

const Maintainers = () => {
    return ( 
        <div className="h-full">
            <Navbar />
            <h1 className="text-center text-3xl pt-10">Meet our Maintainers</h1>
            <div className="flex gap-6 mx-auto mt-10 p-8 flex-wrap justify-center fade-up max-w-4xl">
                <MaintainerTile img="https://avatars.githubusercontent.com/u/68563757?v=4" name="Emmanuel Tanimowo" github="https://github.com/Mannuel25" linkedin="https://www.linkedin.com/in/emmanuel-tanimowo-6122291aa/" />
                <MaintainerTile img="https://pbs.twimg.com/profile_images/1683872791924285440/cyZgvDES_400x400.jpg" name="Tope Akinkuade" github="https://github.com/Topman-14" linkedin="https://www.linkedin.com/in/tope-akinkuade/" />
                <MaintainerTile img="https://media.licdn.com/dms/image/C4E03AQEp4bbQhTw7ng/profile-displayphoto-shrink_200_200/0/1648838979255?e=1695859200&v=beta&t=GKMJzL_pjknX3fyLsIZXJVKiHjTKn6FPQHyzSalPocM" name="Oreoluwa Ojo" github="https://github.com/Lloyd-the-god" linkedin="https://www.linkedin.com/in/favour-ojo-426795233/" />
                <MaintainerTile img="" name="Joba Onakomaiya" github="https://github.com/JobaOnaks" linkedin="" />
                <MaintainerTile img="" name="Isaac Odeh" github="" linkedin="" ig="https://instagram.com/videopro__?igshid=MmU2YjMzNjRlOQ==" />
            </div>
        </div>
     );
}
 
export default Maintainers;