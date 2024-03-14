export type NewTask = {
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
};

export type Task = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
};
