import { FC } from "react";
import SalesBanner from "../shared/SalesBanner";

const HomeWrapper: FC = () => {
    return (
        <>
            <SalesBanner />
            <section className='container mx-auto py-8'>
                Products
            </section>
        </>
    )
}

export default HomeWrapper