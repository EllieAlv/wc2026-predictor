interface Groups {
    group: string;
    color: number;
    background: number;
    countries: string [4];
}

export function getGroup() {}

export function getGroupGames() {}

/*// app/data-display/page.tsx

interface S3Data {
  title: string;
  items: string[];
}

async function getS3Data(): Promise<S3Data> {
  const apiGatewayUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

  const res = await fetch(`${apiGatewayUrl}/path/to/file.json`, {
    // Standard Next.js caching options:
    next: { revalidate: 60 }, // Revalidate cache every 60 seconds
    headers: {
      'x-api-key': process.env.API_GATEWAY_KEY || '', // Include if API Gateway requires an API key
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  return res.json();
}

export default async function Page() {
  const data = await getS3Data();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <ul>
        {data.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </main>
  );
}*/