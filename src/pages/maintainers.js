import MaintainerTile from "../../components/MaintainerTile";
import Navbar from "../../components/Navbar";

const Maintainers = () => {
    return ( 
        <>
            <Navbar />
            <h1 className="text-center text-3xl pt-10">Meet our Maintainers</h1>
            <div className="flex gap-6 mx-auto mt-14 h-20 p-5 flex-wrap justify-center fade-up">
                <MaintainerTile img="" name="Emmanuel Tanimowo" github="" linkedin="" />
                <MaintainerTile img="" name="Tope Akinkuade" github="" linkedin="" />
                <MaintainerTile img="" name="Oreoluwa Favour" github="" linkedin="" />
                <MaintainerTile img="" name="Joba Onakomaiya" github="" linkedin="" />
                <MaintainerTile img="" name="Issac Odeh" github="" linkedin="" />
            </div>
        </>
     );
}
 
export default Maintainers;