import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Button } from '@chakra-ui/react';

const data = [
    {
        customerName: "John Doe",
        customerMobileNumber: "123-456-7890",
        customerEmail: "john@example.com",
        productId: "001",
        productName: "Product A",
        dateOfPurchase: "2024-04-23",
        warrantyPeriod: "1 year"
    },
    {
        customerName: "Jane Smith",
        customerMobileNumber: "987-654-3210",
        customerEmail: "jane@example.com",
        productId: "002",
        productName: "Product B",
        dateOfPurchase: "2024-04-20",
        warrantyPeriod: "2 years"
    }
];

const MyTable = () => {
    const handleSend = (index) => {
        console.log("Send button clicked for row " + (index + 1));
    };

    return (
        <Flex p={1} flexDirection="column" boxShadow="md" m={4} borderRadius="5px" >
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Sr.No</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Customer Name</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Mobile Number</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Customer Email</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Product ID</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Product Name</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Date of Purchase</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Warranty Period</Th>
                        <Th textTransform="capitalize" fontSize="16px" fontFamily="arial">Actions</Th>
                    </Tr>
                </Thead>
                <Tbody fontSize="16px">
                    {data.map((item, index) => (
                        <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{item.customerName}</Td>
                            <Td>{item.customerMobileNumber}</Td>
                            <Td>{item.customerEmail}</Td>
                            <Td>{item.productId}</Td>
                            <Td>{item.productName}</Td>
                            <Td>{item.dateOfPurchase}</Td>
                            <Td>{item.warrantyPeriod}</Td>
                            <Td>
                                <Button onClick={() => handleSend(index)} colorScheme="blue" size="sm">Send</Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default MyTable;
