"use client";

import { AuthcontextProvider } from "../context/Authcontext";

const Provider = ({ children }) => {
    return (
        <AuthcontextProvider>
            {children}
        </AuthcontextProvider >
    )
};
export default Provider;