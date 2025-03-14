# TaskTracker

TaskTracker is a simple task management application built with Angular that helps users organize and track their tasks (for tests)

## Application Overview

TaskTracker allows users to:
- Create new tasks with titles and descriptions
- View all tasks in an organized list
- Mark tasks as complete or incomplete
- Delete tasks when they're no longer needed
- Clear all tasks at once

## Application Structure

### Components

The application is structured with the following components:

1. **AppComponent**: The root component that serves as the main container for the application. It imports and renders the TaskListComponent and TaskFormComponent.

2. **TaskListComponent**: Displays all tasks in a list format. It shows a message when no tasks are available ("No tasks found!") and renders individual task cards for each task.

3. **TaskCardComponent**: Represents an individual task with its details (title, description) and provides functionality to toggle the completion status of a task. Each card receives a task object as an input.

4. **TaskFormComponent**: Provides a form interface for users to create new tasks. It also includes functionality to add random tasks and clear all tasks. The component emits events when tasks are added or cleared.

### Service

- **TaskService**: A singleton service that manages the task data and operations:
  - `getTasks()`: Returns the current list of tasks
  - `deleteTask(id)`: Removes a task by its ID
  - `addTask(task)`: Adds a new task to the list
  - `toggleComplete(id)`: Toggles the completion status of a task
  - `clearTasks()`: Removes all tasks from the list

### Model

- **Task**: Defines the structure of a task with the following properties:
  - `id`: A unique identifier for the task
  - `title`: The name or title of the task
  - `description`: A detailed description of the task
  - `completed`: A boolean indicating whether the task is completed

## Data Flow

1. The TaskFormComponent collects user input for new tasks
2. When a user submits a task, the TaskService adds it to the task list
3. The TaskListComponent displays all tasks from the TaskService
4. The TaskCardComponent handles individual task interactions (toggling completion)
5. Task deletions and status changes are managed through the TaskService

## Styling

The application uses a consistent styling approach with:
- A `.container` class for consistent padding and borders across components
- Clear visual indicators for task status (completed/active)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
