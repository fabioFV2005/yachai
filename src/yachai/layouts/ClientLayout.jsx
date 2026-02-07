import { Outlet } from "react-router"
import { CustomHeader } from "../../shared/custom/CustomHeader"
export const ClientLayout = () => {
    return (
        <div className="">
            <CustomHeader />
            <Outlet />
        </div>
    )
}
