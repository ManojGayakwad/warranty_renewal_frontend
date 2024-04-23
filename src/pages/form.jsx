import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Stack, Flex, Spacer } from "@chakra-ui/react";

const Form = () => {
    const [formData, setFormData] = useState({
        customerName: "",
        customerMobileNumber: "",
        customerEmail: "",
        productId: "",
        productName: "",
        dateOfPurchase: "",
        warrantyPeriod: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to backend
        console.log(formData);
    };

    return (
        <Flex p={1} flexDirection="column" boxShadow="md" m={3} borderRadius="5px">
            <Flex>
                <Spacer />
                <Button type="Upload" colorScheme="blue" m={2}>Upload to Excel</Button>
            </Flex>
            <form onSubmit={handleSubmit}>
                <Flex justify="center">
                    <Stack spacing={4} border="1px solid gray" borderRadius="5px" p={5} width={{ base: "100%", md: "50%" }}>
                        <FormControl id="customerName">
                            <FormLabel>Customer Name</FormLabel>
                            <Input
                                type="text"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="customerMobileNumber">
                            <FormLabel>Customer Mobile Number</FormLabel>
                            <Input
                                type="tel"
                                name="customerMobileNumber"
                                value={formData.customerMobileNumber}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl id="customerEmail">
                            <FormLabel>Customer Email</FormLabel>
                            <Input
                                type="email"
                                name="customerEmail"
                                value={formData.customerEmail}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="productId">
                            <FormLabel>Product ID</FormLabel>
                            <Input
                                type="text"
                                name="productId"
                                value={formData.productId}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="productName">
                            <FormLabel>Product Name</FormLabel>
                            <Input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="dateOfPurchase">
                            <FormLabel>Date of Purchase</FormLabel>
                            <Input
                                type="date"
                                name="dateOfPurchase"
                                value={formData.dateOfPurchase}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl id="warrantyPeriod">
                            <FormLabel>Warranty Period</FormLabel>
                            <Input
                                type="text"
                                name="warrantyPeriod"
                                value={formData.warrantyPeriod}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Flex ml="45%">
                            <Button type="submit" colorScheme="blue">Submit</Button>
                        </Flex>

                    </Stack>
                </Flex>
            </form>
        </Flex>
    );
};

export default Form;
