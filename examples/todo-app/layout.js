import React from "react";
import { Text } from "react-native";
import { About } from "../../src/components/About";
import { ActionComp } from "../../src/components/ActionComp";
import { Comp5 } from "../../src/components/Comp5";
// import { JsonForm } from "./components/JsonForm";
import { Home } from "../../src/components/Home";
import { RandomPic } from "../../src/components/RandomPic";
import { rowStyle, styles } from "../common";

// ******************** TODO APP EXAMPLE ************************* //
import { TodoApp1 } from "./TODOAPP/TodoApp1";
import { TodoApp2 } from "./TODOAPP/TodoApp2";
import { SideNavBar } from "./TODOAPP/SideNavBar";
import { DefaultScreen } from "./TODOAPP/DefaultScreen";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  TodoApp1,
  TodoApp2,
  SideNavBar,
  DefaultScreen,
  // JsonForm
};

// components section
const schema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
  },
};

export const routes = {};

routes.routeThree = {
  0: {
    // col no : 1
    0: {
      layout: {
        colConfig: {
          colSize: 2.5,
          height: "100vh",
        },
        // row 1
        0: {
          0: {
            // col no
            idx: "SideNavBar",
            label: "sideNavBar",
            colStyle: { borderWidth: 1, height: "100vh" },
          },
        },
      },
    },
    // col no : 2
    1: {
      layout: {
        colConfig: {
          colSize: 12,
          height: "100vh",
        },
        0: {
          // Row 1
          0: {
            // col no
            colSize: 1,
            idx: "TodoApp1",
            label: "todoAppComponent1",
            colStyle: {
              display: "flex",
              borderWidth: 2,
              // //  borderColor: "yellow",
              height: "50vh",
            },
          },
        },
        1: {
          // Row 2
          0: {
            // col no
            colSize: 1,
            // idx: "Home",
            // label: "body-header",
            colStyle: {
              display: "none",
              // borderWidth: 2,
              //  borderColor: "yellow",
              // height: "50vh",
            },
          },
        },
        // Row 3
        // 2: {
        //   // Row 3
        //   0: {
        //     // col no
        //     colSize: 1,
        //     idx: "Home",
        //     label: "body-footer",
        //     colStyle: { borderWidth: 1, height: "10vh" },
        //   },
        // },
      },
    },
  },
};

routes.routeFour = {
  0: {
    // col no : 1
    0: {
      layout: {
        colConfig: {
          colSize: 2.5,
          height: "100vh",
        },
        // row 1
        0: {
          0: {
            // col no
            idx: "SideNavBar",
            label: "sideNavBar",
            colStyle: { borderWidth: 1, height: "100vh" },
          },
        },
      },
    },
    // col no : 2
    1: {
      layout: {
        colConfig: {
          colSize: 12,
          height: "100vh",
        },
        0: {
          // Row 1
          0: {
            // col no
            colSize: 1,
            idx: "TodoApp1",
            label: "todoAppComponent1",
            colStyle: {
              display: "flex",
              borderWidth: 2,
              //  borderColor: "yellow",
              height: "50vh",
            },
          },
        },
        1: {
          // Row 2
          0: {
            // col no
            colSize: 1,
            idx: "TodoApp2",
            label: "todoAppComponent1",
            colStyle: {
              display: "flex",
              borderWidth: 2,
              //  borderColor: "yellow",
              height: "50vh",
            },
          },
        },
        // Row 3
        // 2: {
        //   // Row 3
        //   0: {
        //     // col no
        //     colSize: 1,
        //     idx: "Home",
        //     label: "body-footer",
        //     colStyle: { borderWidth: 1, height: "10vh" },
        //   },
        // },
      },
    },
  },
};

// *************************************************
//  Layout config
// *************************************************
export const appConfig = {
  /// 1st layout
  componentsSet,
  links: {
    "/": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Home",
    },
    "/about": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Feed",
    },
    "/contact": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Messages",
    },
  },
  layout: {
    // row no
    "1.container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: rowStyle,
      },
      // col no
      "1.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 3,
            colStyle: { backgroundColor: "grey" },
          },
          "1.1.leftNavHeaderRow": {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: rowStyle,
            },
            leftNavHeader: {
              // col no
              colSize: 1,
              idx: "SideNavBar",
              label: "sideNavBar",
              colStyle: {
                borderColor: "cyan",
                borderWidth: 4,
                height: "100vh",
                backgroundColor: "lightgreen",
              },
            },
          },
        },
      },
      "1.2.bodyCol": {
        rowConfig: {
          rowSize: 1,
          rowStyle: rowStyle,
        },
        layout: {
          colConfig: {
            colSize: 11,
            colStyle: {
              backgroundColor: "grey",
            },
          },
          "1.2.1.bodyHeaderRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: rowStyle,
            },
            bodyHeader: {
              // col no
              colSize: 1,
              idx: "TodoApp1",
              label: "todoAppComponent1",
              colStyle: {
                borderColor: "cyan",
                alignSelf: "center",
                borderWidth: 4,
                height: "80vh",
                backgroundColor: "skyblue",
              },
            //   passProps: {
            //     _formData,
            //     schema,
            //     uiSchema,
            //   },
            },
          },
        },
      },
    },
  },
};

// *************************************************
//  "../applications/app-one/screen-one";
// *************************************************
// bind events to
//  logic that binds

export const events = {
  /// <label>
  //<label>-<element-id> : <handler>
  "sideNavBar-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeThree"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-2" },
          children: null,
        },
      });
    },
  },
  "sideNavBar-btn-two": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      console.log("Back button clicked");
      setLayoutConfig(routes["routeFour"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-2" },
          children: null,
        },
      });
    },
  },
  "todoAppComponent1-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeFour"]);
      // setAppState({
      //   bodyFooter: {
      //     ui: "ActionComp",
      //     props: { label: "bodyFooter" },
      //     children: <Text>Hello from RandomPic</Text>,
      //   },
      //   bodyContent: {
      //     ui: "RandomPic",
      //     props: { label: "actioncomp-2" },
      //     children: null,
      //   },
      // });
    },
  },
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      // setLayoutConfig(routes["routeTwo"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-2" },
          children: null,
        },
      });
    },
  },
  //<label>-<element-id>
  "leftNavHeader-btn-two": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeOne"]);
    },
  },

  // <label>
  "leftNavBody-btn-two": {},
  "leftNavBody-btn-one": {},
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (elId, setLayoutConfig, setAppState) => {
  const elEvents = {};
  events[elId] &&
    Object.keys(events[elId]).map((eventName) => {
      // console.log({ [eventName]: events[elId][eventName] });
      elEvents[eventName] = () =>
        events[elId] && events[elId][eventName] && events[elId][eventName]
          ? events[elId][eventName](setLayoutConfig, setAppState)
          : {};
    });
  // console.log(elEvents);
  return elEvents;
};
