import { NextRequest, NextResponse } from "next/server";
import { getUserCollection } from "../../graphql/queries";

export const config = {
  runtime: "edge",
  regions: ["iad1", "dub1"],
};

const apiUrl = process.env.GRAFBASE_API_URL as RequestInfo | URL;
const apiKey = process.env.GRAFBASE_API_KEY as string;

const handler = async (req: NextRequest) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      query: getUserCollection,
      variables: { first: 10 },
    }),
    headers: {
      "x-api-key": apiKey,
    },
  });

  const data = await response.json();

  const config = {
    status: 200,
    headers: {
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  };

  return NextResponse.json(data, config);
};

export default handler;
