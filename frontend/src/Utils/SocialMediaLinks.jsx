/* eslint-disable react/prop-types */
// Social Media Links
import { Link } from "react-router-dom";

const SocialMediaLinks = ({ facebook, twitter, instagram, pinterest }) => {
  return (
    <ul className="flex gap-2">
      {/* Facebook */}
      <Link to={facebook} target="_blank">
        <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
          <img className="w-full" src="/facebook.png" alt="Facebook" />
        </li>
      </Link>

      {/* Twitter */}
      <Link to={twitter} target="_blank">
        <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
          <img className="w-full" src="/twitter.png" alt="Twitter" />
        </li>
      </Link>

      {/* Pinterest */}
      <Link to={pinterest} target="_blank">
        <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
          <img className="w-full" src="/pinterest.png" alt="Pinterest" />
        </li>
      </Link>

      {/* Instagram */}
      <Link to={instagram} target="_blank">
        <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
          <img className="w-full" src="/instagram.png" alt="Instagram" />
        </li>
      </Link>
    </ul>
  );
};

export default SocialMediaLinks;
