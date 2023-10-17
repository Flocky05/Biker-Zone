import img1 from "../../assets/images/others/user-1.png"
import img2 from "../../assets/images/others/user-2.png"
import img3 from "../../assets/images/others/user-3.png"
import icons from "../../assets/images/icons/star-solid.svg"

const HappyClients = () => {
    return (
        <div>
            <h2 className="text-5xl text-center p-14">Happy <span className="text-orange-900"> Clients Says</span> </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-20">
                <div className="bg-gray-100 p-10 rounded-lg border shadow-lg">
                    <img src={img1} alt="" />
                    <div className="mt-3">
                        <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                        <div className="flex justify-center mx-auto ">
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                        </div>
                        <p className="text-light-blue-300 text-center">Delax Roy</p>
                        <p className="text-light-gray-300 text-center">Software Engineer</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-10  rounded-lg border shadow-lg">
                    <img src={img2} alt="" />
                    <div className="mt-3">
                        <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                        <div className="flex justify-center mx-auto ">
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                        </div>
                        <p className="text-light-blue-300 text-center">Maly Jhon</p>
                        <p className="text-light-gray-300 text-center">Teacher</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-10  rounded-lg border shadow-lg">
                    <img src={img3} alt="" />
                    <div className="mt-3">
                        <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                        <div className="flex justify-center mx-auto ">
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                            <img className="w-10" src={icons} alt="" />
                        </div>
                        <p className="text-light-blue-300 text-center">Regina Miles</p>
                        <p className="text-light-gray-300 text-center">Banker</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClients;