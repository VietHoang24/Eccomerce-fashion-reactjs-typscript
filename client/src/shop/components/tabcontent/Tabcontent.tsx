import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Ivymoda from "./Ivymoda";
import Ivymen from "./Ivymen";
import Ivykids from "./Ivykids";
import "./style.scss";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
<div className="tabcontent ">
  <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="IVY moda" {...a11yProps(0)} />
            <Tab label=" IVY men" {...a11yProps(1)} />
            <Tab label="IVY kids" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Ivymoda/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Ivymen/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Ivykids/>
        </TabPanel>
      </Box>

</div>
      
  );
}
