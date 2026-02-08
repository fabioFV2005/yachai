import { Outlet } from "react-router"
import { CustomHeader } from "../../shared/custom/CustomHeader"
export const ClientLayout = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 right-0 z-50">
                <CustomHeader />
            </div>
            <Outlet />
        </div>
    )
}
