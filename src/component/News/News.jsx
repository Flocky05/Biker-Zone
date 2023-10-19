
import img2 from "../../assets/images/others/feature-bike.png"
import icon1 from "../../assets/images/others/android.png"
import icon2 from "../../assets/images/others/ios.png"
const News = () => {
    return (
        <div>
            <div className="bg-white  lg:flex  border-2 rounded-md shadow-lg z-10 justify-center items-center p-20">
                <img src={img2} alt="" />
                <div className="p-10">
                    <h2 className="text-2xl font-bold">Bike 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta blanditiis excepturi voluptatum delectus repellat, molestias necessitatibus cum nisi porro?</p>
                    <button className="bg-blue-300 px-6 py-2 rounded-md text-center text-white mt-3">Learn More</button>
                </div>
            </div>
            <div className="lg:flex justify-center items-center p-20 gap-5 m-10">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
            </div>
        </div>
    );
};

export default News;