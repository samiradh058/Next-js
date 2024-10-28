"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  // useFormStatus should always be inside of the form
  //   const status = useFormStatus();
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Share meal"}
    </button>
  );
}
