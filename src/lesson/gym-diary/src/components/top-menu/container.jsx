import Welcome from "./welcome.jsx";
import Logo from "./companyLogo.jsx";
import images from "./rabbit-image.jpg";
<img src={images} alt="myimage" />;

const username = "Mary Had A Little Lamb";
const username_1 = "Its fleece was white as snow";
const image = "./rabbit-image.jpg";

const TopMenuContainer = () => {
  return (
    <div className="flex justify-between border border-green-500 p-2 absolute w-full top-0">
      <div className="border border-black p-4">Logo</div>
      <div className="border border-black p-4">Hyperlinks</div>
      <Welcome currentUsers={username} />
      <Welcome currentUsers={username_1} />
      <Logo currentLogo={images} />
      {/* <div className="border border-black p-4">Welcome, John</div> */}
    </div>
  );
};

export default TopMenuContainer;
