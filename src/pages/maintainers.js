import MaintainerTile from "../../components/MaintainerTile";
import Navbar from "../../components/Navbar";

const Maintainers = () => {
    return ( 
        <div className="h-full">
            <Navbar />
            <h1 className="text-center text-3xl pt-10">Meet our Maintainers</h1>
            <div className="flex gap-6 mx-auto mt-10 p-8 flex-wrap justify-center fade-up max-w-4xl">
                <MaintainerTile img="" name="Emmanuel Tanimowo" github="" linkedin="" />
                <MaintainerTile img="" name="Tope Akinkuade" github="" linkedin="" />
                <MaintainerTile img="" name="Oreoluwa Ojo" github="" linkedin="" />
                <MaintainerTile img="" name="Joba Onakomaiya" github="" linkedin="" />
                <MaintainerTile img="" name="Issac Odeh" github="" linkedin="" />
            </div>
        </div>
     );
}
 
export default Maintainers;