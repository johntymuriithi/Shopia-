import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { notifyInfo } from "../Utils/notifications.js";
import dashboardnavlinks from "../Utils/dashboardnavlinks.js";

//Component definition
const Dashboard = () => {
  // Retrieve user Object from redux state
  const User = useSelector((state) => state.user.currentUser);
  const { param } = useParams();
  const [showLink, setShowLink] = useState(false);

  // Redirect if Not valid user
  const navigate = useNavigate();

  if (!User) {
    navigate("/signin");
    return;
  }
  //  Show a notification for unimplemented routes
  if (param) {
    notifyInfo("😂 Nah I didn't implement that yet ");
  }

  return (
    <div className="max-w-screen-xl w-full p-6 flex flex-col sm:flex-row gap-5 justify-center items-center">
      {/* Navigation Menu */}
      <section className="w-full sm:w-[250px] self-start">
        <div
          className="flex justify-between mb-2 cursor-pointer"
          onClick={() => setShowLink(!showLink)}
        >
          <h2 className="font-extrabold dark:text-darkTer">
            {showLink ? "Hide Navigation" : "Show Navigation"}
          </h2>
        </div>

        {/* Dashboard Navigation starts here */}

        {showLink && (
          <div className="dark:text-darkTer">
            {dashboardnavlinks.map((link, idx) => {
              return (
                <Link to={link.link} key={idx}>
                  <div className="flex items-center  p-2 w-full  hover:bg-green-100 gap-2 cursor-pointer">
                    <img
                      src={link.image}
                      alt=""
                      title={link.title}
                      className="w-[30px]"
                    />
                    <p>{link.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Main details section  */}
      <main className="flex flex-col gap-3 w-full p-4">
        <section className="flex flex-col md:flex-row gap-3">
          {/* User Picture and Edit Link */}
          <div className="w-full border-2 rounded-lg p-4 flex flex-col justify-center items-center overflow-x-hidden dark:bg-darkSec dark:border-0">
            <img
              src="/dashboard/avatar.png"
              alt=""
              className="min-w-[100px] max-w-[150px] pointer-events-none rounded-full mb-3"
            />
            <h2 className="text-xl font-bold dark:text-white">{User.name}</h2>
            <p className="text-sm text-slate-400">
              {User.isAdmin ? "Product Manager" : "Customer"}
            </p>
            <p className="mt-3 text-[#00b207] font-bold hover:text-slate-400 cursor-pointer">
              Edit Profile
            </p>
          </div>

          {/* User Billing Address and Edit  */}
          <div className="w-full border-2 rounded-lg p-4 dark:bg-darkSec dark:border-0 dark:text-white">
            <p>BILLING ADDRESS</p>
            <p className="text-lg mt-3">{User.name}</p>
            <p>{User.address}</p>
            <p>{User.email}</p>
            <p className="mt-3 text-[#00b207] font-bold hover:text-slate-400 cursor-pointer">
              Edit Address
            </p>
          </div>
        </section>
        <section>
          <div className="flex justify-between">
            <h2 className="dark:text-darkTer">Recent Order History</h2>
            <p className="text-[#00B207] hover:underline hover:underline-offset-4 cursor-pointer">
              View All
            </p>
          </div>

          {/* Goodbye section */}
          <div className="w-full flex items-center justify-center bg-slate-100 p-8 flex-col text-center mt-4 rounded-xl">
            <img
              src="walk-loading.gif"
              alt=""
              className=" mix-blend-multiply"
            />

            <Link to={"https://twitter.com/Cre8steveDev"} target="_blank">
              <p className="sm:text-sm text-xs">
                Maybe One of these days I will work on this feature and others.
                But for now, Learning Objectives has been Achieved.{" "}
                <span className="text-green-800 cursor-pointer">
                  Check out my Tweets about Coding on Twitter (X) @Cre8steveDev
                </span>
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
