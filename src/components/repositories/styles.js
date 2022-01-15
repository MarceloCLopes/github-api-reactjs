import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRoles = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #fff;
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
    box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

WrapperTabList.tabsRoles = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 32px;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.5);
  display: none;
  margin-top: -5px;
  border-radius: 5px;

  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);

  &.is-selected {
    display: block;
  }
`;

WrapperTabList.tabsRoles = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
