"use server";

import { Task } from "@/domain/Task";

const BASE_API_URL = "http://localhost:3000/";

export const createTask = async (formData: FormData) => {
  const data = {
    name: formData.get("name"),
    start_date: formData.get("date"),
    end_date: formData.get("date"),
  };

  fetch(`${BASE_API_URL}/api/v1/tasks`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};

export const getTasks = async (
  startDate?: Task["startDate"],
  endDate?: Task["endDate"]
) => {
  const searchParams = new URLSearchParams();

  if (startDate && endDate) {
    searchParams.append("start_date", startDate);
    searchParams.append("end_date", endDate);
  }

  const response = await fetch(`${BASE_API_URL}/api/v1/tasks?${searchParams}`);

  if (!response.ok) {
    throw new Error("It wasn't this time :(");
  }

  const data = (await response.json()) as Array<{
    id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
  }>;

  return {
    data: data.map(({ id, name, description, start_date, end_date }) => ({
      name,
      id,
      description,
      startDate: start_date,
      endDate: end_date,
    })),
  };
};
