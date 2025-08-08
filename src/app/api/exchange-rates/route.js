export async function GET() {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/EUR`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rates: ${response.status}`);
    }

    const data = await response.json();

    return Response.json({
      plnRate: data.conversion_rates.PLN,
      success: true,
    });
  } catch (error) {
    console.error("Exchange rate API error:", error);
    return Response.json(
      {
        error: "Failed to fetch exchange rates",
        plnRate: 4.25, // fallback rate
        success: false,
      },
      { status: 500 }
    );
  }
}
