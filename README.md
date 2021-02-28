# list-of-todos ![Weekly downloads](https://img.shields.io/npm/dw/list-of-todos 'Weekly downloads')

A simple ToDo list.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/list-of-todos/).

## Props

| Name          | Type                    | Required | Default | Description                                                     |
| ------------- | ----------------------- | -------- | ------- | --------------------------------------------------------------- |
| classNameItem | CSSProperties           | no       | ...     | The className for an item                                       |
| classNameList | CSSProperties           | no       | ...     | The className for the list                                      |
| items         | Task[]                  | no       | []      | The initial list of items                                       |
| onChange      | (items: Task[]) => void | yes      | -       | The function called when there are changes in the list of items |
| styleItem     | CSSProperties           | no       | ...     | The custom style for an item                                    |
| styleList     | CSSProperties           | no       | ...     | The custom style for the list                                   |

## Props of Task

| Name | Type    | Required | Default | Description                          |
| ---- | ------- | -------- | ------- | ------------------------------------ |
| id   | string  | yes      | -       | The unique if of the item            |
| text | string  | yes      | -       | The text representing the item       |
| done | boolean | no       | false   | It is true if the task was completed |

---

## Versions

| ListOfTodos _uses_ | React  |
| -----------------: | :----: |
|              1.0.x | 16.8.0 |
|              1.1.x | 16.9.0 |

### About versioning schema used for ListOfTodos

- Major - it will be increased if any major version of any dependat package changes or there are breaking changes in this package
- Minor - it will be increased if any minor or patch version of any dependat package changes or there is added functionality in a backwards compatible manner
- Patch - it will be increased if there are backwards compatible bug fixes

---

## Example

Displaying a list having initially two items:

```js
import * as React from "react";
import ListOfTodos from "list-of-todos";

class App extends React.Component {
  private items: Task[] = [
    {
      id: '1',
      text: 'Text 1',
      done: true
    },
    {
      id: '2',
      text: 'Text 2'
    }
  ];

  render() {
    return (
      <div className="App">
        <ListOfTodos items={this.items} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange = (items: Task[]) => console.log({ items });
}

export default App;
```

---

## Changelog

### 1.0.0

- list-of-todos is made publicly available

### 1.0.1

- Inlined the icons in buttons

### 1.0.2

- Fixed the layout

### 1.0.3

- Added a second argument to onChange

### 1.0.4

- Added a key for react when rendering a task in the list

### 1.1.0

- Updated packages

### 1.1.1

- Updated packages
- Moved from npm to yarn

### 1.1.2

- Updated packages

### 1.1.3

- Updated packages

### 1.1.4

- Fixed crash produced by "export \* from"

### 1.1.5

- Added two new props: classNameItem and classNameList

### 1.2.0

- Accepting React 17 as peerDependencies
- Fixed security warnings
