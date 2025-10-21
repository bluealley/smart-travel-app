"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleAddCity = async () => {
    const { data, error } = await supabase
      .from("cities")
      .insert([{ name: "Test City", country: "Nowhere" }]);

    if (error) {
      setMessage("Insert failed: " + error.message);
    } else {
      setMessage("Insert succeeded: " + JSON.stringify(data));
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Smart Travel App</h1>
      <button onClick={handleAddCity}>Add Test City</button>
      {message && <p>{message}</p>}
    </main>
  );
}