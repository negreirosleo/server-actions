import { Button, Spinner } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <Button
      bg="Dark purple"
      color="Ghost white"
      type="submit"
      sx={{
        _hover: { bg: "Dark purple" },
        _disabled: {
          bg: "Thistle",
          border: "1px solid",
          borderColor: "Mountbatten pink",
          color: "Mountbatten pink",
        },
      }}
      isDisabled={pending}
    >
      {children}
      {pending && <Spinner marginLeft="8px" />}
    </Button>
  );
};
