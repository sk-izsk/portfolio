import React from "react";
import { FaCamera, FaCode, FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles, IoIosSchool } from "react-icons/io";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../theme";
import { AppBarItem } from "../AppBarItem/AppBarItem";

interface AppBarProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    position: "sticky",
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },
}));

interface AppBarItemType {
  title: string;
  icon: JSX.Element;
}

const appBarItems: AppBarItemType[] = [
  {
    title: "Home",
    icon: <FaHome />,
  },
  {
    title: "About",
    icon: <FaUser />,
  },
  {
    title: "Education",
    icon: <IoIosSchool />,
  },
  {
    title: "Experience",
    icon: <FaCode />,
  },
  {
    title: "Photography",
    icon: <FaCamera />,
  },
  {
    title: "Contact",
    icon: <IoIosChatbubbles />,
  },
];

const AppBar: React.FC<AppBarProps> = () => {
  const classes: Record<"mainContainer", string> = useStyles();
  return (
    <div className={classes.mainContainer}>
      {appBarItems.map((appBarItem: AppBarItemType) => {
        return (
          <AppBarItem key={appBarItem.title} icon={appBarItem.icon}>
            {appBarItem.title}
          </AppBarItem>
        );
      })}
    </div>
  );
};

export { AppBar };
