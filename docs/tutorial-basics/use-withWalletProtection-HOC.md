---
sidebar_position: 5
---

# use withWalletProtection HOC

The `withWalletProtection` Higher-Order Component (HOC) is a useful tool for protecting specific routes or pages in your React dApp by ensuring that users are connected to their wallets. This HOC is part of the wallet feature and is designed to enhance the security and functionality of your dApp.

## Implementation Example

To demonstrate how to use the `withWalletProtection` HOC, we'll provide an implementation example using a protected page called `ExampleProtectedPage`.

```typescript
import React from "react";

import { Box, Container, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { withWalletProtection } from "@/features/wallet/hocs/withWalletProtection";

import { Header } from "./components/Header";

export const ExampleProtectedPage: React.FC = withWalletProtection(() => {
  const { t } = useTranslation("PageUser");
  return (
    <Box>
      <Container maxW="7xl" py={2} as={Stack} spacing={2}>
        <Header />
        <Box>
          {t(
            "This is a protected page. Users need to connect with their wallet to see this page"
          )}
        </Box>
      </Container>
    </Box>
  );
});
```

In the example above, we have a protected page named ExampleProtectedPage. Here's how the withWalletProtection HOC is utilized:

1. Import the withWalletProtection HOC from the @/features/wallet/hocs/withWalletProtection module.
2. Wrap your page component with the withWalletProtection HOC like this:

```typescript
export const ExampleProtectedPage: React.FC = withWalletProtection(() => {
  // ...page content
});
```

This HOC enhances the page by ensuring that users are connected to their wallets before accessing it. If a user is not connected to a wallet, they will be prompted to do so.

Key Benefits

Using the withWalletProtection HOC offers several key benefits for your dApp:

- Enhanced Security: Protecting specific pages ensures that only authenticated users with connected wallets can access sensitive or protected content.
- Seamless User Experience: The HOC prompts users to connect their wallets if they haven't already, providing a smooth onboarding experience.
- Customizable Messages: You can customize the messages and prompts shown to users when they attempt to access protected content without a connected wallet.
- Modular Approach: By wrapping specific components or routes with the HOC, you can easily control which parts of your dApp require wallet protection.

Integrating the withWalletProtection HOC into your React dApp is a practical way to ensure the security and usability of your application, especially when handling blockchain interactions and sensitive data.
