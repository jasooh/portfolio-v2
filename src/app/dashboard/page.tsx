"use client";

// Back-end login page

// Components
import Layout from "@/components/Layout";
import ActionButton from "@/components/admin/inputs/ActionButton";
import InputValue from "@/components/admin/inputs/InputValue";
import { VscArrowRight } from "react-icons/vsc";

// Context
import { useAuthContext } from "@/context/AuthContext";

export default function page() {
  // Context hook
  const Authentication = useAuthContext();
  // Button logic

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

          <div className="text-white mt-5">
            <ActionButton>
              Log-in <VscArrowRight />
            </ActionButton>
          </div>
        </form>
      </article>
    </Layout>
  );
}
