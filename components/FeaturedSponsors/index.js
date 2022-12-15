import { Table, Tooltip, Row, Col, User, Text } from "@nextui-org/react";
import React from "react";

const columns = [
    { name: "Featured Sponsors", uid: "title" },
    { name: "Company", uid: "company" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "pro",
      team: "The Coder School",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@thecoderschool.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "basic",
      team: "Modern Art Practices",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@creativeminds.io",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "premium",
      team: "Cyber Security SPECS",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@rem.com",
    },
  ];

const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "title":
        return (
          <User size="lg" src={user.avatar} name={cellValue} css={{ p: 10, height: "3vw" }}>
			<div> 
				<Text b size={15} css={{ color: "darkblue", tt: "capitalize" }}> 
					{user.name}
				</Text>
			</div>
			<div>
            <Text i size={11} css={{ color: "grey", tt: "capitalize" }}>
				{user.email}
            </Text>
			</div>
          </User>
        );
      case "company":
        return (
          <Col>
            <Row>
              <Text b size={15} css={{ tt: "capitalize", color: "darkblue" }}>
                {user.team}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ color: "$accents7", tt: "capitalize" }}>
                {user.role}
              </Text>
            </Row>
          </Col>
        );

     
      default:
        return cellValue;
    }
  };

const FeaturedSponsors = ({}) => {
  return (
    <>
    <Table css={{backgroundColor: "#DFE3E6"}} className="laptop:w-auto flex-auto">
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
			
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    </>
  );
};

export default FeaturedSponsors;
