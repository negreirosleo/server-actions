"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Flex
      as="main"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      marginTop="48px"
      gap="16px"
    >
      <Heading>Something went wrong!</Heading>
      <Text>{error.message}</Text>
    </Flex>
  );
}
