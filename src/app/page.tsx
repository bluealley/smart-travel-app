import { supabase } from '@/lib/supabaseClient';

export default async function Home() {
  const { data: cities, error } = await supabase.from('cities').select('*');

  if (error) {
    console.error('Error fetching cities:', error.message);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Smart Travel</h1>
      {cities && cities.length > 0 ? (
        <ul>
          {cities.map((c) => (
            <li key={c.id}>
              {c.name}, {c.country}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cities found.</p>
      )}
    </main>
  );
}