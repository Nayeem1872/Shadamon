import React from 'react'
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Sidebar = () => {
  return (
    <div className="mt-[50px] left-0 ">
        <TreeView
      aria-label="gmail"
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultExpanded={["1", "4", "15"]}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="Sorting">
        <div className="flex items-center gap-1 ml-4">
          <div>
            <input type="checkbox" />
          </div>
          <TreeItem
            className="whitespace-nowrap"
            nodeId="2"
            label="label one"
          ></TreeItem>
        </div>
        <div className="flex items-center gap-1 ml-4">
          <div>
            <input type="checkbox" />
          </div>
          <TreeItem
            className="whitespace-nowrap"
            nodeId="3"
            label="label one"
          ></TreeItem>
        </div>
        <div className="text-common-color font-semibold ml-8 text-sm">
          <a href="#">See More</a>
        </div>
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
      <TreeItem nodeId="4" label="All Categories">
        <TreeItem nodeId="5" label="Sell">
          <TreeItem nodeId="6" label="option-one">
            <TreeItem nodeId="9" label="option-two"></TreeItem>
            <TreeItem nodeId="10" label="option-two"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="7" label="option-one"></TreeItem>
          <TreeItem nodeId="8" label="option-one"></TreeItem>
        </TreeItem>
        <TreeItem nodeId="12" label="Rent" />
        <TreeItem nodeId="13" label="Jobs" />
        <TreeItem nodeId="14" label="Offer" />
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
      <TreeItem nodeId="15" label="Locations">
        <h2 className="ml-5">All of Bangladesh</h2>
        <TreeItem nodeId="20" label="Dhaka">
          
        </TreeItem>
        <TreeItem nodeId="21" label="Rent" />
        <TreeItem nodeId="18" label="Jobs" />
        <TreeItem nodeId="19" label="Offer" />
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
    </TreeView>
    </div>
  )
}

export default Sidebar