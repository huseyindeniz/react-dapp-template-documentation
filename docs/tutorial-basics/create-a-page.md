---
sidebar_position: 4
---

# Create a Page

Creating a new page in your React dApp is a straightforward process. Follow these steps to add a new page to your project:

1. **Create a Directory:** Start by creating a new directory under the `pages` directory. You can name this directory based on your new page's purpose. For example, let's call it `MyNewPage`.

2. **Create a File:** Inside the `MyNewPage` directory, create a new TypeScript file with a `.tsx` extension. You can name this file based on your page name as well. For instance, let's name it `MyNewPage.tsx`.

3. **Edit `usePages.tsx`:** Open the following file: `src/pages/usePages.tsx`.

4. **Import the New Page:** Add the following code snippet at the beginning of the file to import your new page dynamically using React's `React.lazy`:

```ts
const MyNewPage = React.lazy(() =>
  import(/* webpackChunkName: "MyNewPage" */ "./MyNewPage/MyNewPage").then(
    (module) => ({
      default: module.MyNewPage,
    })
  )
);
```

Replace MyNewPage with your actual page name if it's different.

Add a Route for the New Page: Below the existing routes, add a route for your new page. Here's an example of how to define a route:

```ts
// Home Route
const MyNewPageRoute: PageType = {
  index: true,
  element: <MyNewPage />,
  menuLabel: t("My New Page", { ns: "Menu" }),
  isShownInMainMenu: false,
  isShownInSecondaryMenu: false,
  isProtected: false,
};
```

Add the Route to the Pages Array: After defining the new page route, add it to the Pages array like this:

```ts
// Add the new page route to the Pages array
const Pages: PageType[] = [MyNewPageRoute];
```

That's it! You've successfully created a new page in your React dApp. Your new page is now accessible and can be navigated to using the specified route.

Feel free to repeat these steps to create additional pages as needed for your project. This modular approach makes it easy to extend your dApp with new functionality and user interfaces.
