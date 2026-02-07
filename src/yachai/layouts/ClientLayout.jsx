import { Outlet } from "react-router"
import { CustomHeader } from "../../shared/custom/CustomHeader"
export const ClientLayout = () => {
    return (
        <div className="background-image-hero ">
            <CustomHeader />
            <Outlet />
        </div>
    )
}
