import logo from "@/assets/nowpurchase-logo.png";
import tagline from "@/assets/tagline.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 md:px-12 lg:px-16">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="NowPurchase"
          className="h-12 md:h-16 lg:h-20 w-auto object-contain"
        />
      </div>

      {/* Tagline */}
      <div className="flex items-center">
        <img
          src={tagline}
          alt="The Future of Metal Manufacturing is now"
          className="h-10 md:h-14 lg:h-16 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
