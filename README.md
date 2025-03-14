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

- **TaskService**: A singleton service that manages the task data and operations through HTTP requests:
  - `getTasks()`: Fetches tasks from an API endpoint and returns an Observable of tasks
  - `deleteTask(id)`: Sends a DELETE request to remove a task by its ID
  - `addTask(task)`: Sends a POST request to add a new task
  - `toggleComplete(id)`: Sends a PUT request to update a task's completion status
  - `clearTasks()`: Sends a DELETE request to remove all tasks
  - `addRandomTask()`: Fetches a random task from the API
  - `getCounter()`: Returns the count of currently loaded tasks

### Model

- **Task**: Defines the structure of a task with the following properties:
  - `id`: A unique identifier for the task
  - `title`: The name or title of the task
  - `description`: A detailed description of the task (optional)
  - `completed`: A boolean indicating whether the task is completed
  - `userId`: The ID of the user who owns the task (when using external APIs)

## Data Flow

1. The TaskFormComponent collects user input for new tasks
2. When a user submits a task, the TaskService sends an HTTP request to add it to the backend
3. The TaskListComponent subscribes to the TaskService to display all tasks
4. The TaskCardComponent handles individual task interactions (toggling completion, deletion)
5. All data operations are handled asynchronously using RxJS Observables

## HTTP and RxJS Implementation

The application uses Angular's HttpClient for all backend communication:

### HTTP Requests
- The TaskService encapsulates all HTTP requests to the backend API
- API endpoints are configured with a base URL constant
- Each service method returns an Observable that components can subscribe to

### RxJS Usage
- **Observables**: All service methods return Observables to handle asynchronous operations
- **Operators**:
  - `map`: Used to transform API responses (e.g., limiting the number of tasks)
  - `tap`: Used for side effects like logging and updating local state
  - `catchError`: Used to handle error cases gracefully
  
### Component Subscriptions
- Components subscribe to service Observables to receive data and updates
- The TaskListComponent subscribes to getTasks() during initialization
- Event handlers in components subscribe to service methods to perform actions
- Components use event emitters to communicate between parent and child components

### Error Handling
- HTTP errors are caught and logged in the service layer
- Fallback empty arrays or objects are provided when errors occur
- Console logging provides debugging information during development

## Backend Integration

The application connects to a mock REST API at JSONPlaceholder for demonstration purposes. In a production environment, you would replace these endpoints with your actual backend services.

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
