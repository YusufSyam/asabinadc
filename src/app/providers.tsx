"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import { system } from "../system"

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
