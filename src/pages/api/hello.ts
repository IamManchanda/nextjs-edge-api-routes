import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest) => {
  const data = {
    name: "Harry Manchanda",
  };

  const config = {
    status: 200,
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate",
    },
  };

  return NextResponse.json(data, config);
};

export default handler;
