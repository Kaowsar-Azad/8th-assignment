import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://pixgen-project-x2ts.vercel.app" // Default to current origin if not set
})
