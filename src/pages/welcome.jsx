import logo from "../static/logo.png";
import appconfig from "../data/app-config.json";

const Welcome = () => {
  return (
    <header className="w-full pt-[40px] pb-[6px] pr-[12px] pl-[16px]">
        <div className="app-header no-border flex-none flex items-center space-x-2">
            <img
                className="w-8 h-8 rounded-lg border-inset"
                src={logo}
                alt="App Logo"
            />
            <div>
                <h1 className="text-[15px] leading-[20px] font-medium">{appconfig.app.title}</h1>
            </div>
        </div>
    </header>
  );
};

export default Welcome;
