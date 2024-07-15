"use client";

// Back-end login page

// Components
import Layout from "@/components/Layout";
import ActionButton from "@/components/admin/inputs/ActionButton";
import InputValue from "@/components/admin/inputs/InputValue";
import { VscArrowRight } from "react-icons/vsc";

// Hooks
import { useRouter } from "next/navigation";

// Context
import { useAuthContext } from "@/context/AuthContext";

export default function page() {
  // Router hook
  const router = useRouter();
  // Context hook
  const Authentication = useAuthContext();
  // Button logic
  const onClick = () => {
    console.log("work");
    router.push("/dashboard/experiences");
  };

  return (
    <Layout>
      <article className="flex items-center">
        {/* Form submission */}
        <form className="flex flex-col text-theme-main h-fit bg-theme-gray rounded-lg bg-opacity-5 px-28 py-20">
          <h1 className="mb-5 text-theme-main text-xl font-bold">
            ADMIN LOGIN
          </h1>

          <label htmlFor="username" className="mb-2">
            USER
          </label>
          <InputValue id="username" type="text" placeholder="Username" />

          <label htmlFor="password" className="mb-2">
            PASSWORD
          </label>
          <InputValue id="password" type="password" placeholder="Password" />
          <ActionButton className="mt-5 w-[6rem]" onClick={onClick}>
            Log-in <VscArrowRight />
          </ActionButton>
        </form>
      </article>
    </Layout>
  );
}
