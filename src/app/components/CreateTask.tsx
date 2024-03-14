"use client";

import { Button, Input, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { createTask, CreateTaskResult } from "@/infra/tasks";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";

export const CreateTask = () => {
  const [formOpen, setFormOpen] = useState(false);
  const toast = useToast();
  const [result, formAction] = useFormState(createTask, {} as CreateTaskResult);

  useEffect(() => {
    if (result.success === false) {
      toast({
        title: "Error!",
        description: result.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [result, toast]);

  return (
    <Flex flexDir="column" gap="8px" width="320px">
      <Button
        borderRadius="8px"
        borderColor="Mountbatten pink"
        borderWidth="2px"
        borderStyle="solid"
        bg="Thistle"
        _hover={{
          borderColor: "Mountbatten pink",
        }}
        onClick={() => setFormOpen(true)}
      >
        Create new Task
      </Button>
      <Flex
        as="form"
        action={formAction}
        sx={{ display: formOpen ? "flex" : "none", ...formStyles }}
      >
        <Flex justifyContent="space-between">
          <Heading as="h3" size="md">
            New Task Form!
          </Heading>
          <Button size="xs" type="reset">
            Reset Form
          </Button>
        </Flex>
        <Input sx={inputStyles} name="name" type="text" placeholder="Name" />
        <Input sx={inputStyles} name="date" type="date" placeholder="Date" />

        <Flex alignSelf="flex-end">
          <Button type="button" mr={3} onClick={() => setFormOpen(false)}>
            Close
          </Button>
          <SubmitButton>Submit</SubmitButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

const formStyles = {
  flexDir: "column",
  gap: "8px",
  justifyItems: "center",
  borderRadius: "8px",
  borderColor: "Mountbatten pink",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "8px",
  bg: "Thistle",
};

const inputStyles = {
  borderRadius: "8px",
  borderColor: "Mountbatten pink",
  borderWidth: "2px",
  borderStyle: "solid",
  bg: "Ghost white",
  _hover: {
    borderColor: "Mountbatten pink",
  },
  _active: {
    bg: "Mountbatten pink",
    borderColor: "Mountbatten pink",
  },
  _focus: {
    borderColor: "Mountbatten pink",
  },
};
