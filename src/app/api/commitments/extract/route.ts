import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text, source } = body;

    if (!text) {
      return NextResponse.json({ success: false, error: "Missing 'text' in request body" }, { status: 400 });
    }

    // In a real app, this would call an LLM (OpenAI, Gemini) to extract the commitment.
    // For this prototype, we mock the NLP extraction.
    const mockExtractedCommitment = {
      id: `comm_${Date.now()}`,
      task: "Deliver Q3 Report",
      assignee: "Sarah",
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
      source: source || "slack",
      originalText: text,
      status: "active"
    };

    // Normally this would be saved to a database.
    
    return NextResponse.json({
      success: true,
      message: "Commitment passively extracted.",
      data: mockExtractedCommitment
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to parse request" }, { status: 400 });
  }
}
