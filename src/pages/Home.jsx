import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import BarChart from "../utils/BarChart";
import { FaUsers } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { GrLineChart } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";
import PieChartWithCenterLabel from "../utils/PieChartWithCenterLabel";
import SeriesFormatter from "../utils/SeriesFormatter";
import LegendStyleSeries from "../utils/LegendStyleSeries";
import FormatterDemo from "../utils/FormatterDemo";

const items = [
  {
    name: "Customer",
    amount: 12.6,
    icon: <FaUsers />,
  },
  {
    name: "Website View",
    amount: 32.5,
    icon: <LuEye />,
  },
  {
    name: "Order",
    amount: 41.9,
    icon: <LuShoppingCart />,
  },
  {
    name: "Growth",
    amount: 50.6,
    icon: <GrLineChart />,
  },
];
export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen flex">
      {/* First section: 70% width */}
      <section className="w-[75%] p-6 border-r border-zinc-700 text-white">
        <Navbar />
        <div className="grid grid-cols-2 gap-5 mt-7">
          <div className="w-full h-[320px]  rounded-2xl grid grid-cols-2 place-content-stretch gap-5 p-5    ">
            {items.map((item, index) => (
              <div
                className=" rounded-2xl bg-neutral-800 flex flex-col justify-between p-4"
                key={index}
              >
                <div className="flex justify-between  items-center text-gray-500">
                  <p className="">{item.name}</p>
                  <p>
                    <CiMenuKebab />
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-semibold">{item.amount}K</p>
                  <span className="p-2 rounded-lg bg-neutral-900/50 text-xl text-amber-500">
                    {item.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-[320px] flex  justify-center  rounded-2xl text-white bg-neutral-800 ">
            <p className="pt-12 px-5 text-xl text-gray-500">Devices</p>
            <PieChartWithCenterLabel />
            {/* <SeriesFormatter /> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="w-full h-[320px]  rounded-2xl bg-neutral-800">
            <LegendStyleSeries />
          </div>
          <div className="w-full h-[320px]  rounded-2xl bg-neutral-800">
            <FormatterDemo />
          </div>
        </div>
      </section>

      {/* Second section: 30% width */}
      <section className="w-[25%] p-6 text-white bg-neutral-800">
        <Profile />
      </section>
    </div>
  );
}
