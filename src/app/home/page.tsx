"use-client"
import Doctrine from "../doctrine/page";
import HotNews from "./hotnews/Page";

function HomePage() {
  
  return (
      <div className="container flex justify-center py-1 mx-auto">
        <div className="justify-center grid grid-cols-3 min-w-min max-w-7xl w-full">
          <HotNews />
          <Doctrine/>
          
        </div>
      </div>
  );
}

export default HomePage;
