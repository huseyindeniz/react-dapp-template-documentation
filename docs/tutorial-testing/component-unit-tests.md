---
sidebar_position: 2
---

# Component Unit Tests

Unit testing React components is an essential part of ensuring the quality and functionality of your dApp's user interface. In your React dApp project, you can use React Testing Library in combination with Storybook scenarios to perform unit tests on your React components.

## Prerequisites

Before you begin unit testing your React components, ensure the following prerequisites are met:

1. **Storybook Integration:** Components should be designed and documented using Storybook. Storybook allows you to create interactive component showcases, making it easier to visualize component behavior.

2. **React Testing Library:** The project should be configured with React Testing Library to enable unit testing of React components.

## Writing Unit Tests

To create unit tests for your React components using React Testing Library and Storybook scenarios, follow these steps:

1. **Folder Structure:** Place your test files in a directory structure that mirrors the component structure. Name your test files with the `.test.tsx` extension.

Example:

```
src/
└── features
    └── myfeature
        ├── components
            ├── MyComponent
                ├── MyComponent.tsx
                └── MyComponent.test.tsx
                └── MyComponent.stories.tsx
```
