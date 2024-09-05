import { FaMagento, FaUsb, FaUser } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";

export const sidebarModules = [
    {
        title: "Dashboard",
        route: "/",
        icon: MdDashboard,
    },
    {
        title: "Vendors",
        route: "/vendorReg",
        icon: LiaLayerGroupSolid,
        subMenu: [
            {
                label: "Vendors Top Up",
                path: "/vendortopup",
            },
        ],
    },
    {
        title: "Super Agents",
        route: "/superagenttable",
        icon: FaUser,
        subMenu: [
            {
                label: "Super Agents Top Up",
                path: "/superagenttopup",
            },
        ],
    },
    {
        title: "Agents",
        route: "/agenttable",
        icon: MdOutlineSupportAgent,
        subMenu: [
            {
                label: "Agents Top Up",
                path: "/agenttopup",
            },
        ],
    },
    {
        title: "Collection Point",
        route: "/vehicles",
        icon: FaMagento,
    },
    {
        title: "Report Stolen",
        route: "/report_stolen",
        icon: GoReport,
    },
    {
        title: "Admin",
        route: "/user-admin",
        icon: FaUsb
    }
];
