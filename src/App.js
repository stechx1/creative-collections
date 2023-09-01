import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { lazy, Suspense } from "react";
import LoaderHome from "./components/loader/loaderHome";
import Error404 from "./components/errors/404Error";
import Home from "./components/layout/Home";
import NFTmint from "./components/layout/NFTmint";
import NFTMarketPlace from "./components/layout/NFTMarketPlace";
import HomeLayout from "./components/layout/HomeLayout";

// const Error404 = lazy(() => import("./components/errors/404Error"));
// const Home = lazy(() => import("./components/layout/Home"));
// const NftMint = lazy(() => import("./components/layout/NFTmint"));
// const HomeLayout = lazy(() => import("./components/layout/HomeLayout"));

function App() {
  return (
    <div className="fontToUse">
      {/* <Suspense fallback={<LoaderHome />}> */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/create-collectible" element={<NFTmint />} />
          <Route path="/nftmarketplace" element={<NFTMarketPlace />} />
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
