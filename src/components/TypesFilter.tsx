import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql.tsx";

export default function TypesFilter() {
  interface type {
    id: number;
    name: string;
  }

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["types"],
    queryFn: async () => {
      const result = await sql("SELECT * FROM types");
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  console.log(response);

  return (
    <ul>
      <div className="type">
        <p>Type d'animal</p>
      </div>
      <select name="animaux" id="animaux">
        {response?.map((element: type) => (
          <option key={element.id}>{element.name}</option>
        ))}
      </select>
    </ul>
  );
}
