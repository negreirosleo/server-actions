import { Heading, Grid, GridItem, Text, Flex, Box } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { calendarDays } from "../utils/calendar";
import { getTasks } from "@/infra/tasks";
import { CreateTask } from "./components/CreateTask";

const getTasksByDay = async () => {
  const { data: tasks } = await getTasks();

  const tasksByDay = calendarDays.map((date) => {
    return {
      date,
      tasks: tasks.filter((task) => {
        return (
          DateTime.fromISO(task.startDate).startOf("day").valueOf() ===
          date.startOf("day").valueOf()
        );
      }),
    };
  });

  const tasksCount = tasksByDay.reduce((acc, nextValue) => {
    if (nextValue.date.hasSame(DateTime.now(), "month")) {
      return acc + nextValue.tasks.length;
    }

    return acc;
  }, 0);

  return { tasksByDay, tasksCount };
};

export default async function Home() {
  const { tasksByDay, tasksCount } = await getTasksByDay();

  return (
    <Flex
      as="main"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap="48px"
    >
      <Heading margin="36px 0 0">SERVER ACTIONS ARE COOL!</Heading>
      <CreateTask tasksCount={tasksCount} />

      <Grid
        width="fit-content"
        templateColumns="repeat(7, 1fr)"
        justifyItems="center"
        borderRadius="9px"
        borderColor="Mountbatten pink"
        borderWidth="2px"
        borderStyle="solid"
        bg="Thistle"
        gap="1px"
        padding="1px"
      >
        {tasksByDay.map(({ date, tasks }) => {
          return (
            <GridItem
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              padding="16px"
              key={`${date.day}${date.monthShort}`}
              w="120px"
              h="120px"
              borderRadius="8px"
              borderColor="Mountbatten pink"
              borderWidth="2px"
              borderStyle="solid"
              bg="Ghost white"
              as="button"
              sx={{
                _hover: {
                  borderColor: "Mountbatten pink",
                  bg: "Thistle",
                },
                _active: {
                  bg: "Mountbatten pink",
                },
              }}
            >
              <Text color="Dark purple">
                {date.day}, {date.monthShort}
              </Text>
              <Box display="flex" gap="4px" alignSelf="flex-end">
                {tasks.map((task) => (
                  <Box key={task.id}>o</Box>
                ))}
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}
