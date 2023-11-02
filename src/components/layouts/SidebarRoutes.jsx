import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaSnowflakeSolid } from "react-icons/lia";
import { AiOutlineHistory } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { SlLogin } from "react-icons/sl";
import { TbMessage2Exclamation } from "react-icons/tb";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";

const unauthUserRoutes = {
  Log: {
    title: "Log",
    links: [
      {
        title: "Вход",
        path: "/login",
        icon: <SlLogin />,
      },
    ],
  },
};

const authUserRoutes = {
  Data: {
    title: "Data",
    links: [
      {
        title: "История покупок",
        path: "/my-history",
        icon: <AiOutlineHistory />,
      },
      {
        title: "Заморожено",
        path: "/contacts-information",
        icon: <LiaSnowflakeSolid />,
      },
    ],
  },
  Log: {
    title: "Log",
    links: [
      {
        title: "Выход",
        path: "/contact-us2",
        icon: <ImExit />,
      },
    ],
  },
};

const adminRoutes = {
  Admin: {
    title: "Admin",
    links: [
      {
        title: "Заявки",
        path: "/calendar2",
        icon: <TbMessage2Exclamation />,
      },
      {
        title: "Товары",
        path: "/products",
        icon: <AiOutlineDatabase />,
      },
      {
        title: "Настройки",
        path: "/calendar1",
        icon: <FiSettings />,
      },
    ],
  },
};

export const SidebarRoutes = () => {
  const userContext = useContext(AuthContext);
  const adminContext = useContext(AdminContext);
  const routes = {
    Data: {
      title: "Data",
      links: [
        {
          title: "Магазин",
          path: "/",
          icon: <AiOutlineShoppingCart />,
        },
      ],
    },
    Contacts: {
      title: "Contacts",
      links: [
        {
          title: "Связь с нами",
          path: "/contact-us",
          icon: <BsFillPersonLinesFill />,
        },
      ],
    },
    Admin: {
      title: "",
      links: [],
    },
    Log: {
      title: "Log",
      links: [],
    },
  };

  if (userContext.isAuthenticated) {
    routes.Data.links = routes.Data.links.concat(authUserRoutes.Data.links);
    routes.Log.links = authUserRoutes.Log.links;
  } else {
    routes.Log.links = unauthUserRoutes.Log.links;
  }

  if (adminContext.isAdmin) {
    routes.Admin = adminRoutes.Admin;
  }

  return routes;
};

//export { sidebarRoutes };
