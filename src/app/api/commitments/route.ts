import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { promise, stakeholder, datetime } = body;

    if (!promise || !stakeholder || !datetime) {
      return NextResponse.json(
        { error: 'Missing required fields: promise, stakeholder, datetime' },
        { status: 400 }
      );
    }

    // Simulate saving to Supabase
    // In a real scenario, this would use the Supabase client
    const mockCommitmentId = crypto.randomUUID();
    
    // Simulate AI-generated sub-actions
    const mockSubActions = [
      { id: crypto.randomUUID(), title: `Initial preparation for "${promise}"`, completed: false },
      { id: crypto.randomUUID(), title: `Update ${stakeholder} on progress`, completed: false },
      { id: crypto.randomUUID(), title: `Finalize delivery before ${new Date(datetime).toLocaleDateString()}`, completed: false }
    ];

    const newCommitment = {
      id: mockCommitmentId,
      promise,
      stakeholder,
      datetime,
      subActions: mockSubActions,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ data: newCommitment }, { status: 201 });
  } catch (error) {
    console.error('Error creating commitment:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
