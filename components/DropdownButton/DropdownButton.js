import React, { useState } from 'react';
import { Dropdown } from "@nextui-org/react";
import {PythonIcon} from "./PythonIcon.js"

function DropdownButton() {
    const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
    
  );
  console.log(selected.currentKey);
  return (
    <div className="text-sm">
       
        <div>
        <Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Dropdown.Item key="all">All</Dropdown.Item>
                <Dropdown.Item key="python">Python</Dropdown.Item>
                <Dropdown.Item key="react">React</Dropdown.Item>
                <Dropdown.Item key="game-dev">Game Dev.</Dropdown.Item>
                <Dropdown.Item key="Other">Other</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    
    </div>
  )
}

export default DropdownButton