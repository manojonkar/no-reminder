import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { commitmentId, assignee, proposedDeadline, solution, reason } = body;

    if (!commitmentId || !assignee) {
      return NextResponse.json({ success: false, error: "Missing required fields (commitmentId, assignee)" }, { status: 400 });
    }

    // Mocking the escalation logic
    const mockEscalation = {
      id: `esc_${Date.now()}`,
      commitmentId,
      assignee,
      status: "pending_leader_approval",
      escalationLevel: "early",
      details: {
        reason: reason || "Unexpected blockers.",
        proposedDeadline: proposedDeadline || "Next Tuesday",
        solution: solution || "Re-prioritized other tasks."
      },
      messageToLeader: `Task delayed. ${assignee} proposes a new deadline of ${proposedDeadline || "Next Tuesday"} by implementing solution: ${solution || "Re-prioritized other tasks."}. Approve?`
    };

    // Normally this would update the commitment in the database and notify the leader's dashboard.

    return NextResponse.json({
      success: true,
      message: "Smart early escalation triggered.",
      data: mockEscalation
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to parse request" }, { status: 400 });
  }
}
