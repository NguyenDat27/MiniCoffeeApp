import Welcome from "./welcome"
import Search from "./inquiry"
import Banner from "./banner"
import Categories from "./categories"
import Recommend from './recommend';
import ProductList from "./product-list";
import { Box, Page } from "zmp-ui";
import { Suspense } from "react";
import Divider from "../components/divider";

const HomePage = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
        <Welcome/>
        <Box className="flex-1 overflow-auto">
            <Search/>
            <Banner/>
            <Suspense>
                <Categories/>
            </Suspense>
            <Divider/>
            <Recommend/>
            <Divider/>
            <ProductList/>
            <Divider/>
        </Box>
    </Page>
  )
}

export default HomePage
