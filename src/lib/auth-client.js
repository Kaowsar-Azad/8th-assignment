import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "http://localhost:3000/" // Default to current origin if not set
})
