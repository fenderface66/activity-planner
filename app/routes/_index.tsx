import type { ActionFunction, V2_MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import React, { FormEvent } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  //here, do something with the form data and return a value  
  return data;
}

export default function Index() {
  const data = useActionData(); //we access the return value of the action here
  console.log(data);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Plan your trip</h1>
      <Form method="post">
        <label>Destination</label>
        <input type="text" name="destination" />
        <input type="submit" />
      </Form>
    </div>
  );
}
