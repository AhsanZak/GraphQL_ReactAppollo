// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

export default function App() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log("herer ", loading, error, data)
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
