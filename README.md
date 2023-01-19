# 📝 Typescript-Todo-List
A simple Todo List app written in Typescript.

# Running the project locally

1. Clone the repo:

```
git clone https://github.com/bcostaaa01/Typescript-Todo-List
```

2. Navigate to the `src` folder:

```
cd src
```

3. Run the JS file:

```
node main.js
```

You should now see your terminal logging the following:

<img width="498" alt="Screenshot 2023-01-19 at 19 37 02" src="https://user-images.githubusercontent.com/72168158/213543015-00749e8b-ff9b-45e9-a5d7-f3f4437ad616.png">

🎉 Congrats! The project is now running on your local machine!

# Code Design Explanation

1. First, a `Task` class is defined with two properties: `name` of type `string` and `completed` of type `boolean`.

2. The `class` has a `constructor` method that takes a `name` argument and assigns it to the `name` property. It also initializes the `completed` property to `false` and calls the `complete()` method.

3. The `complete()` method sets the `completed` property to `true`.

4. Next, a `TodoList` class is defined with one property: `tasks` of type `Task[]` (an array of `Task` objects).

5. The `class` has a `constructor` method that initializes the `tasks` property to an empty array.

6. The `class` has an `addTask()` method that takes a `task` argument of type `Task` and pushes it to the `tasks` array.

7. The `class` has a `removeTask()` method that takes a `task` argument of type `Task` and finds its `index` in the `tasks` array using the `indexOf()` method. It then uses the `splice()` method to remove the task from the `tasks` array.

8. The `class` has a `getCompletedTasks()` method that filters the `tasks` array and returns a new array containing only the tasks that have the `completed` property set to `true`.

9. Then, four new `Task` objects are created with the `name` argument passed to the `constructor`.

10. Next, a new `TodoList` object is created.

11. The newly created `Task` objects are added to the `TodoList` object by calling the `addTask()` method.

12. Finally, the `getCompletedTasks()` method is called on the `TodoList` object and the result is logged to the console.

# 🤔 Why Typescript?

Using TypeScript for this project is beneficial because it adds type checking to the JavaScript code. This means that the TypeScript compiler will check the code for type errors and alert you of any issues before you run the code. This can help prevent runtime errors and make it easier to catch and fix bugs. Additionally, TypeScript has a rich set of features such as classes, interfaces, and decorators that can help to organize and structure the code in a clean and maintainable way. This can make the code more readable and understandable, especially for large or complex projects.
