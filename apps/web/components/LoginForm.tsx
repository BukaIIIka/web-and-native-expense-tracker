"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import { LoginForm as Form } from "@repo/ui/src";

export function LoginForm() {
    const router = useRouter();
    const onLogin = () => {
        router.push("/").then();
    }
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form onSubmit={onLogin} />
            or
            <Link href="/signup">signup</Link>
        </div>
    )
}