export interface Task {
  _id: string;       // Task ID (must match your backend field)
  name: string;     // Task name
  description: string; // Task description
  completed: boolean;  // Task completion status
}
