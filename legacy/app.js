/* ==========================================
   NFR Portal Application Logic (app.js)
   SPA Routing, Curriculum Modals, and
   Interactive Workbook & Visualizers
   ========================================== */

// --- Chapter Data ---
const CHAPTER_DATA = {
  1: {
    title: "The Hidden Cost of Follow-Up",
    badge: "Note 01 • 5 Mins Audio Summary",
    description: `Many organizations treat follow-up as a normal, collaborative coordination habit. In reality, it is a massive tax on organizational efficiency. 
    When a senior leader spends 8 to 12 hours every week asking for status updates, clarifying expectations, and reactivating stalled promises, they lose a full day of productive work. 
    Routine follow-ups shift the psychological responsibility from the person who made the commitment to the person chasing it. 
    NFR reframes follow-up as a defect: every reminder sent is evidence of a failure in commitment design or visibility.`,
    reflection: "How many times did you follow up with your team members yesterday? Estimate how much time that consumed.",
    ceoLeverage: "Every status check you write shifts the psychological ownership from the promise-maker to you. By treating follow-up as a process defect, you recover up to 25% of leadership capacity across the organization.",
    teamExercise: "Audit query logs: Log every status query you send today. Multiply the time by your team size to calculate your team's collective weekly waste.",
    quiz: {
      question: "Under NFR principles, what does a recurring follow-up loop represent?",
      options: [
        "A standard, healthy communication practice in collaborative environments.",
        "A management defect indicating a breakdown in commitment design or status visibility.",
        "A positive indicator of leadership engagement and proactive direction."
      ],
      answer: 1,
      feedback: "Correct! In NFR logic, follow-up is treated as a process defect, showing that expectations or visibility rules were not cleanly designed."
    }
  },
  2: {
    title: "Trust, Reliability, & Survival Mode",
    badge: "Note 02 • 6 Mins Audio Summary",
    description: `When commitments are routinely broken or delayed, organizations enter "Survival Mode." 
    In this state, team members develop defensive behaviors: they build duplicate shadow trackers, insert large buffers into project estimates, and schedule frequent status meetings out of anxiety. 
    This administrative overhead is a rational response to low reliability. 
    NFR is not just a productivity method; it is a trust architecture. 
    By establishing high commitment integrity, you remove the emotional vigilance and defensive overhead, allowing the team to work calmly and move faster.`,
    reflection: "Has your department built shadow trackers or extra status meetings to compensate for another team's unreliability?",
    ceoLeverage: "Over-buffering timelines dilutes velocity and delays market delivery. Restoring deadline integrity eliminates the defensive sync tax, returning focus to core product and strategy.",
    teamExercise: "Shadow tracker audit: Identify trackers in your department. Flag the ones created solely because of another department's historical delay.",
    quiz: {
      question: "What is a common defensive behavior seen in organizations stuck in 'Survival Mode'?",
      options: [
        "Eliminating meetings in favor of continuous coding blocks.",
        "Creating duplicate status trackers and over-buffering project timelines out of distrust.",
        "Relying solely on verbal agreements without documentation."
      ],
      answer: 1,
      feedback: "Correct! When trust is low, people spend time on defensive checks and over-buffer estimates to protect themselves from late surprises."
    }
  },
  3: {
    title: "The Four NFR Pillars",
    badge: "Note 03 • 5 Mins Audio Summary",
    description: `The NFR movement is built on four core operating disciplines:
    1. Systemic Follow-Up Elimination: Redesigning workflows to automate status visibility so chasing isn't required.
    2. Formalized SLAs & Promises: Replacing vague help requests with structured, clear service agreements.
    3. Calendar-Driven Accountability: Moving task delivery out of endless to-do lists and booking dedicated calendar time.
    4. Thoughtful Commitments: Modeling the discipline of saying 'no' or renegotiating when capacity is overloaded.`,
    reflection: "Which of the four NFR pillars is currently weakest in your personal management style?",
    ceoLeverage: "System redesign is the CEO's primary lever. Culture changes when you stop chasing heroics and start rewarding predictable, structured systems.",
    teamExercise: "Team Pillar Scorecard: Score your team (1-10) on the four pillars. Pick the lowest scoring pillar and outline one operational rule to patch it.",
    quiz: {
      question: "Which pillar focuses on converting vague coordination into explicit response times and delivery rules?",
      options: [
        "Pillar 01: Systemic Follow-Up Elimination",
        "Pillar 02: Formalized SLAs & Promises",
        "Pillar 03: Calendar-Driven Accountability"
      ],
      answer: 1,
      feedback: "Correct! Pillar 2 focuses on converting vague, open-ended requests into formal, explicit Service Level Agreements and clean promises."
    }
  },
  4: {
    title: "The Personal Follow-Up Audit",
    badge: "Note 04 • 5 Mins Audio Summary",
    description: `To fix execution, you must first map the drag. 
    The Personal Follow-Up Audit requires you to list all active, recurring status loops in two directions:
    - Chasing: The people, topics, and frequencies you must follow up on to get results.
    - Chased: The stakeholders who frequently check in on you for updates.
    By logging these details, you shift from anecdotal frustration to data-backed diagnostics. You identify the top 3 relationships causing the greatest drag on your weekly focus.`,
    reflection: "Who are the top three individuals or teams you find yourself chasing most frequently?",
    ceoLeverage: "Focus is the CEO's most valuable asset. The follow-up audit exposes the transactional drag that fragments attention, providing data to target operational friction.",
    teamExercise: "Friction mapping session: Aggregate individual chase logs to draw the department's top 3 friction zones.",
    quiz: {
      question: "What is the main diagnostic objective of the Personal Follow-Up Audit?",
      options: [
        "To prove that your team members are not working hard enough.",
        "To gather concrete data on the frequency, direction, and cost of your reminder loops.",
        "To create a list of tasks that can be delegated to junior members."
      ],
      answer: 1,
      feedback: "Correct! The audit is designed to expose the frequency, direction, and cost of chasing loops to target them for redesign."
    }
  },
  5: {
    title: "Design SLAs & Promises",
    badge: "Note 05 • 6 Mins Audio Summary",
    description: `Vague language like "send this ASAP" or "review soon" is the primary driver of status chasing. 
    To eliminate follow-up, every dependent relationship must be bound by explicit promises and SLAs. 
    A high-quality promise includes:
    - Explicit Scope: What constitutes a finished item.
    - Delivery Date and Hour: A precise completion target.
    - Completion Logic: Where the output will be posted (eliminating the need to ask if it is done).
    - Escalation Protocol: What happens if a bottleneck occurs.`,
    reflection: "Review your recent emails. How many contain open-ended requests rather than explicit times and dates?",
    ceoLeverage: "Clear criteria remove coordination overhead. Forcing standard handoff SLAs prevents cross-department friction from stalling company operations.",
    teamExercise: "Commitment overhaul: Re-write 3 vague requests from your inbox into high-quality commitments with explicit dates and checkoff destinations.",
    quiz: {
      question: "Which of the following is a mandatory component of a high-quality promise under NFR?",
      options: [
        "Including an 'ASAP' marker to show executive priority.",
        "A clear, self-service completion destination where the output is verified.",
        "Scheduling a daily reminder sync meeting."
      ],
      answer: 1,
      feedback: "Correct! Defining where and how output is posted allows self-service checkoffs, eliminating status syncs entirely."
    }
  },
  6: {
    title: "Communicate Early & Make Truth Visible",
    badge: "Note 06 • 4 Mins Audio Summary",
    description: `Anxiety is the primary driver of checking behavior. If a stakeholder does not know the status of critical work, they will ask. 
    To stop this, establish a Single Source of Truth (SSOT). 
    Use shared boards, dashboards, or tracking boards where the current state is updated in real time. 
    Combine this with an early warning protocol: if a commitment is at risk of missing its SLA, the owner must proactively alert the stakeholder at least 48 hours before the deadline, presenting alternative options.`,
    reflection: "Does your team have a shared status board that stakeholders can inspect without asking you for an update?",
    ceoLeverage: "Psychological safety is required for early warnings. Reward early alerts to encourage proactive risk transparency, preventing late disruptions.",
    teamExercise: "Alert Board setup: Create a shared board or Slack channel dedicated exclusively to flagging at-risk milestones early, banishing late-delivery excuses.",
    quiz: {
      question: "How does a Single Source of Truth (SSOT) prevent status chasing?",
      options: [
        "It locks task files so other departments cannot edit them.",
        "It provides stakeholders with self-service status visibility, resolving their anxiety.",
        "It automatically escalates late tasks directly to the executive board."
      ],
      answer: 1,
      feedback: "Correct! It provides self-service visibility so they check progress themselves, making updates proactive and pulling reminders out."
    }
  },
  7: {
    title: "Lead from the Calendar",
    badge: "Note 07 • 5 Mins Audio Summary",
    description: `Many leaders manage work from complex, endless task lists. However, a task list does not account for time. 
    NFR teaches leaders to lead from the calendar. 
    Every major commitment you make must be assigned a dedicated execution block on your calendar. 
    If a project requires 4 hours of focus, that block must be visibly locked. 
    This protects your capacity from being diluted by minor meetings and ensures you have the necessary focus time to deliver on your promises.`,
    reflection: "Look at your calendar for the next three days. Is there protected focus time allocated to your high-priority promises?",
    ceoLeverage: "Time allocation is the ultimate indicator of strategy. Protect calendar focus slots for senior leaders to ensure critical work has capacity to succeed.",
    teamExercise: "Calendar lockdown: Block two 2-hour slots next week on your calendar for high-priority commitments. Decline all meeting conflicts in those slots.",
    quiz: {
      question: "What is the primary benefit of moving task execution from a list to a calendar block?",
      options: [
        "It increases the number of meetings you can attend.",
        "It directly accounts for time, ensuring you have dedicated focus blocks to deliver promises.",
        "It alerts stakeholders of your task progress in real time."
      ],
      answer: 1,
      feedback: "Correct! Allocating calendar blocks matches task demands with actual time, ensuring you protect capacity and deliver reliably."
    }
  },
  8: {
    title: "Commit Thoughtfully Under Pressure",
    badge: "Note 08 • 6 Mins Audio Summary",
    description: `Under pressure, it is easy to say "yes" to requests to avoid near-term friction. However, a casual "yes" that results in a late delivery is a major blow to reliability. 
    NFR requires leaders to negotiate thoughtfully. 
    If your capacity is full, you must protect your commitment integrity:
    - Counter-propose a later, realistic timeline.
    - Negotiate a smaller, MVP scope.
    - Reject the task outright with capacity evidence.
    Protecting your "yes" is what makes your commitments credible.`,
    reflection: "Recall a time you said 'yes' to a deadline you knew was impossible. What was the impact on trust and follow-up loops?",
    ceoLeverage: "A culture of compliance breeds empty promises. Encourage realistic capacity negotiation to maintain high commitment integrity.",
    teamExercise: "Overload roleplay: Role-play declining an impossible deadline. Practice counter-proposing MVP scopes or delayed dates with capacity logs.",
    quiz: {
      question: "What does NFR advise when capacity is overloaded and a new request arrives?",
      options: [
        "Accept the work immediately and delegate it without review.",
        "Negotiate scope, extend the timeline, or reject the commitment to protect your yes.",
        "Say yes verbally but log the task as a low priority."
      ],
      answer: 1,
      feedback: "Correct! Negotiating scope, shifting timelines, or declining preserves the integrity of your commitments, maintaining high trust."
    }
  },
  9: {
    title: "The 30-Day NFRL Proof",
    badge: "Note 09 • 6 Mins Audio Summary",
    description: `The final step of the leader journey is running a 30-day implementation cycle to prove reliability has shifted. 
    During this cycle:
    - Log your redesigned SLA loops.
    - Note weekly progress metrics.
    - Secure feedback from stakeholders confirming they no longer need to follow up.
    This evidence pack turns theoretical compliance into verified operational change, which is the cornerstone of earning the NFRL standard.`,
    reflection: "What is the single most important metric you will track to prove your NFR loop is working?",
    ceoLeverage: "Verification pack makes cultural change visible. Celebrate certified leaders and departments to anchor NFR as the organization's standard.",
    teamExercise: "Proof Pack outline: Draft your 30-day verification outline: log weekly reminders before and after your SLA fixes to verify a 50%+ drag reduction.",
    quiz: {
      question: "What is the core focus of the 30-day NFRL proof pack?",
      options: [
        "A written exam on management literature.",
        "Verified before-and-after operational data showing a decline in follow-up cycles.",
        "Attending a series of leadership training lectures."
      ],
      answer: 1,
      feedback: "Correct! The proof pack requires actual before-and-after tracking data to verify a drop in chasing cycles and an increase in execution trust."
    }
  }
};

// --- App State ---
let state = {
  leaderProfile: {
    name: "",
    role: "",
    department: ""
  },
  loops: []
};

// --- DOM References ---
const navLinks = document.querySelectorAll('.nav-link');
const viewPanes = document.querySelectorAll('.view-pane');
const pagerNextBtn = document.getElementById('pager-next-btn');

// Journey Elements
const timeTabs = document.querySelectorAll('.time-tab');
const weekContents = document.querySelectorAll('.week-content');
const chapterCards = document.querySelectorAll('.chapter-card');
const chapterDrawer = document.getElementById('chapter-drawer');
const drawerCloseBtn = document.getElementById('drawer-close-btn');
const drawerTitle = document.getElementById('drawer-title');
const drawerBadge = document.getElementById('drawer-header-badge');
const drawerDesc = document.getElementById('drawer-description');
const drawerReflection = document.getElementById('drawer-reflection');
const drawerCeoLeverage = document.getElementById('drawer-ceo-leverage');
const drawerTeamExercise = document.getElementById('drawer-team-exercise');
const quizQuestionText = document.getElementById('quiz-question-text');
const quizOptionsContainer = document.getElementById('quiz-options-container');
const quizFeedbackBox = document.getElementById('quiz-feedback-box');

// Workbook Elements
const profileForm = document.getElementById('profile-form');
const loopForm = document.getElementById('loop-form');
const profileNameInput = document.getElementById('profile-name');
const profileRoleInput = document.getElementById('profile-role');
const profileDeptInput = document.getElementById('profile-department');
const workbookProfileSummary = document.getElementById('workbook-profile-summary');

const metricMappedLoops = document.getElementById('metric-mapped-loops');
const metricWeeklyChase = document.getElementById('metric-weekly-chase');
const metricMonthlyChase = document.getElementById('metric-monthly-chase');
const progressYouText = document.getElementById('progress-you-text');
const progressOthersText = document.getElementById('progress-others-text');
const progressYouBar = document.getElementById('progress-you-bar');
const progressOthersBar = document.getElementById('progress-others-bar');

const topPriorityList = document.getElementById('top-priority-list');
const loopsTableBody = document.getElementById('loops-table-body');
const registerCount = document.getElementById('register-count');
const exportBtn = document.getElementById('export-btn');
const clearBtn = document.getElementById('clear-btn');

// Charter Elements
const rangeChecking = document.getElementById('range-checking');
const rangeQuality = document.getElementById('range-quality');
const valChecking = document.getElementById('val-checking');
const valQuality = document.getElementById('val-quality');
const barBusyness = document.getElementById('bar-busyness');
const barProductive = document.getElementById('bar-productive');
const lblBusynessVal = document.getElementById('lbl-busyness-val');
const lblProductiveVal = document.getElementById('lbl-productive-val');
const bpVerdict = document.getElementById('bp-verdict');




// ==========================================
// 1. SPA Routing & View Management
// ==========================================

function initRouting() {
  window.addEventListener('hashchange', handleRoute);
  
  // Set default route if none exists
  if (!window.location.hash) {
    window.location.hash = '#ceohub';
  } else {
    handleRoute();
  }
}

function handleRoute() {
  const hash = window.location.hash || '#ceohub';
  const targetId = hash.replace('#', '');
  
  // Update Navbar Active Class
  navLinks.forEach(link => {
    if (link.getAttribute('data-target') === targetId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Toggle Section Panes
  viewPanes.forEach(pane => {
    if (pane.id === `view-${targetId}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update Suggested Footer Pager
  updatePager(targetId);
}

function updatePager(currentId) {
  const pagerNav = document.getElementById('global-pager');
  if (!pagerNav) return;

  switch (currentId) {
    case 'overview':
      pagerNextBtn.textContent = 'Start the Journey';
      pagerNextBtn.href = '#journey';
      pagerNextBtn.className = 'pager-btn button button--primary';
      break;
    case 'journey':
      pagerNextBtn.textContent = 'Open Workbook Dashboard';
      pagerNextBtn.href = '#workbook';
      pagerNextBtn.className = 'pager-btn button button--primary';
      break;
    case 'workbook':
      pagerNextBtn.textContent = 'Review Operating Charter';
      pagerNextBtn.href = '#charter';
      pagerNextBtn.className = 'pager-btn button button--primary';
      break;
    case 'charter':
      pagerNextBtn.textContent = 'Review Transformation Roadmap';
      pagerNextBtn.href = '#roadmap';
      pagerNextBtn.className = 'pager-btn button button--primary';
      break;
    case 'roadmap':
      pagerNextBtn.textContent = 'Return to CEO Hub';
      pagerNextBtn.href = '#ceohub';
      pagerNextBtn.className = 'pager-btn button button--primary';
      break;
    case 'ceohub':
      pagerNextBtn.textContent = 'Explore Overview';
      pagerNextBtn.href = '#overview';
      pagerNextBtn.className = 'pager-btn button button--primary';
      break;
    default:
      pagerNextBtn.textContent = 'Start the Journey';
      pagerNextBtn.href = '#journey';
      pagerNextBtn.className = 'pager-btn button button--primary';
  }
}


// ==========================================
// 2. Journey Curriculum Modals & Quizzes
// ==========================================

function initJourneyEvents() {
  // Week navigation tabs
  timeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      timeTabs.forEach(t => t.classList.remove('active'));
      weekContents.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      const week = tab.getAttribute('data-week');
      document.getElementById(`week-${week}-content`).classList.add('active');
    });
  });

  // Expand chapter details drawer
  chapterCards.forEach(card => {
    card.addEventListener('click', () => {
      const chapterId = card.getAttribute('data-chapter');
      openChapterDrawer(chapterId);
    });
  });

  // Close drawer
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeChapterDrawer);
  }
  
  if (chapterDrawer) {
    chapterDrawer.addEventListener('click', (e) => {
      if (e.target === chapterDrawer) closeChapterDrawer();
    });
  }
}

function openChapterDrawer(id) {
  const data = CHAPTER_DATA[id];
  if (!data) return;

  drawerTitle.textContent = data.title;
  drawerBadge.textContent = data.badge;
  
  // Format description into paragraphs
  drawerDesc.innerHTML = data.description
    .split('\n')
    .map(para => `<p style="margin-bottom: 12px;">${para.trim()}</p>`)
    .join('');
    
  drawerReflection.textContent = data.reflection;
  
  // Load CEO Leverage & Team Exercise
  if (drawerCeoLeverage) drawerCeoLeverage.textContent = data.ceoLeverage || "Strategic leverage details.";
  if (drawerTeamExercise) drawerTeamExercise.textContent = data.teamExercise || "Weekly team exercise.";

  // Set up quiz
  quizQuestionText.textContent = data.quiz.question;
  quizOptionsContainer.innerHTML = '';
  quizFeedbackBox.className = 'quiz-feedback hidden';

  data.quiz.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizSubmit(btn, idx, data.quiz.answer, data.quiz.feedback));
    quizOptionsContainer.appendChild(btn);
  });

  // Audio Reset
  const durationSeconds = {
    1: 330,
    2: 375,
    3: 285,
    4: 300,
    5: 340,
    6: 260,
    7: 310,
    8: 360,
    9: 390
  }[id] || 300;

  if (window.resetDrawerAudio) {
    window.resetDrawerAudio(durationSeconds);
  }

  chapterDrawer.classList.add('active');
  document.body.style.overflow = 'hidden'; // Stop page scroll
}

function closeChapterDrawer() {
  if (window.resetDrawerAudio) {
    window.resetDrawerAudio(300); // Pauses and resets
  }
  chapterDrawer.classList.remove('active');
  document.body.style.overflow = ''; // Restore scroll
}

function handleQuizSubmit(selectedBtn, selectedIdx, correctIdx, feedback) {
  const options = quizOptionsContainer.querySelectorAll('.quiz-opt');
  
  // Disable options after selection
  options.forEach(btn => btn.setAttribute('disabled', 'true'));

  if (selectedIdx === correctIdx) {
    selectedBtn.classList.add('correct');
    quizFeedbackBox.textContent = feedback;
    quizFeedbackBox.className = 'quiz-feedback success';
  } else {
    selectedBtn.classList.add('incorrect');
    options[correctIdx].classList.add('correct'); // Highlight correct answer
    quizFeedbackBox.textContent = "Incorrect. Review the core chapter principles and try again next time.";
    quizFeedbackBox.className = 'quiz-feedback error';
  }
}


// ==========================================
// 3. Interactive Workbook State & Calculations
// ==========================================

function initWorkbook() {
  loadData();
  
  // Update profile handler
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    state.leaderProfile.name = profileNameInput.value.trim();
    state.leaderProfile.role = profileRoleInput.value.trim();
    state.leaderProfile.department = profileDeptInput.value.trim();
    
    saveData();
    renderProfileSummary();
    
    // Quick success toast alert
    alert('Leader profile updated successfully!');
  });

  // Loop capture form handler
  loopForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newLoop = {
      id: Date.now().toString(),
      direction: document.getElementById('loop-direction').value,
      person: document.getElementById('loop-person').value.trim(),
      context: document.getElementById('loop-context').value.trim(),
      topic: document.getElementById('loop-topic').value.trim(),
      weekly: parseInt(document.getElementById('loop-weekly').value, 10) || 0,
      monthly: parseInt(document.getElementById('loop-monthly').value, 10) || 0,
      fix: document.getElementById('loop-fix').value.trim(),
      sla: document.getElementById('loop-sla').value.trim(),
      rhythm: document.getElementById('loop-rhythm').value.trim(),
      notes: document.getElementById('loop-notes').value.trim()
    };

    state.loops.push(newLoop);
    saveData();
    
    // Reset loop form fields (except selects)
    document.getElementById('loop-person').value = '';
    document.getElementById('loop-context').value = '';
    document.getElementById('loop-topic').value = '';
    document.getElementById('loop-weekly').value = '0';
    document.getElementById('loop-monthly').value = '0';
    document.getElementById('loop-fix').value = '';
    document.getElementById('loop-sla').value = '';
    document.getElementById('loop-rhythm').value = '';
    document.getElementById('loop-notes').value = '';

    renderWorkbook();
  });

  // Action links
  exportBtn.addEventListener('click', exportWorkbookData);
  clearBtn.addEventListener('click', clearWorkbookData);
}

function loadData() {
  const profile = localStorage.getItem('nfr_profile');
  const loggedLoops = localStorage.getItem('nfr_loops');

  if (profile) {
    state.leaderProfile = JSON.parse(profile);
    profileNameInput.value = state.leaderProfile.name;
    profileRoleInput.value = state.leaderProfile.role;
    profileDeptInput.value = state.leaderProfile.department;
  }
  
  if (loggedLoops) {
    state.loops = JSON.parse(loggedLoops);
  }

  renderProfileSummary();
  renderWorkbook();
}

function saveData() {
  localStorage.setItem('nfr_profile', JSON.stringify(state.leaderProfile));
  localStorage.setItem('nfr_loops', JSON.stringify(state.loops));
}

function renderProfileSummary() {
  if (state.leaderProfile.name) {
    workbookProfileSummary.textContent = `Displaying data for: ${state.leaderProfile.name} (${state.leaderProfile.role} - ${state.leaderProfile.department})`;
  } else {
    workbookProfileSummary.textContent = "Showing data for Guest Leader (Update profile on the left)";
  }
}

function renderWorkbook() {
  calculateMetrics();
  renderLoopsTable();
  renderPriorityLoops();
}

function calculateMetrics() {
  const totalLoops = state.loops.length;
  let totalWeekly = 0;
  let totalMonthly = 0;
  let youFollowCount = 0;
  let othersFollowCount = 0;

  state.loops.forEach(loop => {
    totalWeekly += loop.weekly;
    totalMonthly += loop.monthly;
    if (loop.direction === 'you_follow_up') {
      youFollowCount += loop.weekly;
    } else {
      othersFollowCount += loop.weekly;
    }
  });

  // Update DOM values
  metricMappedLoops.textContent = totalLoops;
  metricWeeklyChase.textContent = totalWeekly;
  metricMonthlyChase.textContent = totalMonthly;
  
  progressYouText.textContent = youFollowCount;
  progressOthersText.textContent = othersFollowCount;

  // Calculate progress bar percentages
  let youPercent = 50;
  let othersPercent = 50;
  
  if (totalWeekly > 0) {
    youPercent = Math.round((youFollowCount / totalWeekly) * 100);
    othersPercent = 100 - youPercent;
  }

  progressYouBar.style.width = `${youPercent}%`;
  progressOthersBar.style.width = `${othersPercent}%`;
}

function renderLoopsTable() {
  loopsTableBody.innerHTML = '';
  registerCount.textContent = `${state.loops.length} Loops Mapped`;

  if (state.loops.length === 0) {
    loopsTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center text-muted">
          No loops recorded yet. Use the capture forms above to populate this register.
        </td>
      </tr>
    `;
    return;
  }

  state.loops.forEach(loop => {
    const row = document.createElement('tr');
    
    const directionTag = loop.direction === 'you_follow_up' 
      ? '<span class="direction-tag you">Chasing</span>' 
      : '<span class="direction-tag others">Chased</span>';
      
    row.innerHTML = `
      <td>${directionTag}</td>
      <td><strong>${escapeHTML(loop.person)}</strong></td>
      <td>
        <div style="font-weight:600;color:var(--text-primary);">${escapeHTML(loop.topic)}</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">${escapeHTML(loop.context)}</div>
      </td>
      <td>
        <div>${loop.weekly}/wk</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">${loop.monthly}/mo</div>
      </td>
      <td>
        <div style="font-size:0.85rem;color:var(--accent-teal);margin-bottom:4px;">⚙️ Fix: ${escapeHTML(loop.fix)}</div>
        <div style="font-size:0.8rem;color:var(--text-secondary);">📜 SLA: ${escapeHTML(loop.sla)}</div>
      </td>
      <td class="action-cell">
        <button class="btn-delete" data-id="${loop.id}">Delete</button>
      </td>
    `;

    // Hook up delete listener
    row.querySelector('.btn-delete').addEventListener('click', () => {
      deleteLoop(loop.id);
    });

    loopsTableBody.appendChild(row);
  });
}

function renderPriorityLoops() {
  topPriorityList.innerHTML = '';

  if (state.loops.length === 0) {
    topPriorityList.innerHTML = `
      <div class="empty-state">
        No priority loops identified. Log loops in the form to see your heaviest burdens ranked.
      </div>
    `;
    return;
  }

  // Sort loops by weekly frequency (descending) and slice top 3
  const sorted = [...state.loops]
    .sort((a, b) => b.weekly - a.weekly)
    .slice(0, 3);

  sorted.forEach(loop => {
    const card = document.createElement('div');
    card.className = 'priority-card';
    
    const directionLabel = loop.direction === 'you_follow_up' ? 'Chasing Others' : 'Chased By Others';
    
    card.innerHTML = `
      <div class="priority-header">
        <h4>${escapeHTML(loop.person)}</h4>
        <span class="priority-count">${loop.weekly} reminders/wk</span>
      </div>
      <p><strong>Topic:</strong> ${escapeHTML(loop.topic)} (${directionLabel})</p>
      <div class="proposed-fix">
        <strong>Proposed Redesign:</strong> ${escapeHTML(loop.fix)}
      </div>
    `;
    
    topPriorityList.appendChild(card);
  });
}

function deleteLoop(id) {
  state.loops = state.loops.filter(l => l.id !== id);
  saveData();
  renderWorkbook();
}

function clearWorkbookData() {
  if (confirm('Are you sure you want to clear your entire workbook? This will delete all logged loops.')) {
    state.loops = [];
    saveData();
    renderWorkbook();
  }
}

function exportWorkbookData() {
  if (state.loops.length === 0) {
    alert('No data logged to export.');
    return;
  }

  const exportPayload = {
    profile: state.leaderProfile,
    loops: state.loops,
    exportedAt: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `NFR_Workbook_${state.leaderProfile.name || 'Guest'}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}


// ==========================================
// 4. Charter BP Slider Simulation
// ==========================================

function initCharterVisualizer() {
  if (!rangeChecking || !rangeQuality) return;

  rangeChecking.addEventListener('input', updateBPVisuals);
  rangeQuality.addEventListener('input', updateBPVisuals);

  // Initialize
  updateBPVisuals();
}

function updateBPVisuals() {
  const checkVal = parseInt(rangeChecking.value, 10);
  const qualVal = parseInt(rangeQuality.value, 10);

  // Text values
  valChecking.textContent = `${checkVal > 7 ? 'High' : checkVal > 4 ? 'Moderate' : 'Low'} (${checkVal})`;
  valQuality.textContent = `${qualVal > 7 ? 'High' : qualVal > 4 ? 'Moderate' : 'Low'} (${qualVal})`;

  // Calculate energy distribution percentage
  // Lower checking values & Higher SLA values shift energy into output
  const total = checkVal + (11 - qualVal); // Inverse quality represents dragging friction
  const checkingPercentage = Math.max(10, Math.min(90, Math.round((checkVal / total) * 100)));
  const outputPercentage = 100 - checkingPercentage;

  // Max SVG height for rects is 200 (250 is bottom y coordinates)
  const busynessHeight = Math.round((checkingPercentage / 100) * 200);
  const productiveHeight = Math.round((outputPercentage / 100) * 200);

  // Update SVG bars height & y coordinate
  barBusyness.setAttribute('height', busynessHeight);
  barBusyness.setAttribute('y', 250 - busynessHeight);

  barProductive.setAttribute('height', productiveHeight);
  barProductive.setAttribute('y', 250 - productiveHeight);

  // Update text label numbers
  lblBusynessVal.textContent = `${checkingPercentage}%`;
  // Adjust label text vertical alignment
  lblBusynessVal.setAttribute('y', Math.max(70, 245 - (busynessHeight / 2)));
  
  lblProductiveVal.textContent = `${outputPercentage}%`;
  lblProductiveVal.setAttribute('y', Math.max(70, 245 - (productiveHeight / 2)));

  // Update verdict
  if (checkingPercentage < 35) {
    bpVerdict.innerHTML = `Operating System: <strong style="color: var(--accent-teal);">High Reliability Flow (High Performance)</strong>`;
  } else if (checkingPercentage < 60) {
    bpVerdict.innerHTML = `Operating System: <strong style="color: var(--accent-cyan);">Moderate Chasing (Medium Performance)</strong>`;
  } else {
    bpVerdict.innerHTML = `Operating System: <strong style="color: var(--accent-coral);">High Friction (Low Performance)</strong>`;
  }
}





// ==========================================
// 6. CEO Hub Interactive Logic
// ==========================================

let ceoTimerInterval = null;

function initCeoHub() {
  // 1. ROI Calculator
  const roiHeadcount = document.getElementById('roi-headcount');
  const roiChaseHours = document.getElementById('roi-chase-hours');
  const roiSalary = document.getElementById('roi-salary');

  if (roiHeadcount && roiChaseHours && roiSalary) {
    [roiHeadcount, roiChaseHours, roiSalary].forEach(el => {
      el.addEventListener('input', calculateRoi);
    });
    calculateRoi();
  }

  // 2. Cultural Diagnostic
  const diagSliders = document.querySelectorAll('.diag-slider');
  diagSliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
      updateDiagSliderLabel(e.target);
      calculateDiagnosticScore();
    });
    updateDiagSliderLabel(slider);
  });
  calculateDiagnosticScore();

  // 3. 7-Day Challenge Commitment Selector
  const btnActivate = document.getElementById('btn-activate-ceo-commitment');
  const commitmentSelector = document.getElementById('ceo-commitment-selector');
  const customWrapper = document.getElementById('ceo-custom-wrapper');
  const customText = document.getElementById('ceo-custom-text');

  if (commitmentSelector) {
    commitmentSelector.addEventListener('change', () => {
      if (commitmentSelector.value === 'custom') {
        customWrapper.classList.remove('hidden');
      } else {
        customWrapper.classList.add('hidden');
      }
    });
  }

  if (btnActivate) {
    btnActivate.addEventListener('click', activateCeoChallenge);
  }

  // Load existing challenge state if any
  restoreCeoChallenge();
}

function calculateRoi() {
  const headcount = parseInt(document.getElementById('roi-headcount').value, 10);
  const hours = parseInt(document.getElementById('roi-chase-hours').value, 10);
  const salary = parseInt(document.getElementById('roi-salary').value, 10);

  // Update slider indicators
  document.getElementById('val-roi-headcount').textContent = headcount.toLocaleString();
  document.getElementById('val-roi-chase-hours').textContent = `${hours} hours`;
  document.getElementById('val-roi-salary').textContent = `$${salary.toLocaleString()}`;

  // Maths
  const annualHours = headcount * hours * 48; // 48 working weeks
  const hourlyRate = salary / 2080; // 52 weeks * 40 hours
  const annualCost = Math.round(annualHours * hourlyRate);

  // Update DOM outputs
  document.getElementById('roi-out-hours').textContent = `${annualHours.toLocaleString()} hrs`;
  document.getElementById('roi-out-cost').textContent = `$${annualCost.toLocaleString()}`;

  // Update Stacked Capacity Allocation Bar (40h total)
  const wasteHours = hours;
  const meetingHours = Math.round(hours * 0.7);
  const flowHours = Math.max(8, 40 - wasteHours - meetingHours);
  const totalBarHours = wasteHours + meetingHours + flowHours;

  const wastePercent = Math.round((wasteHours / totalBarHours) * 100);
  const meetingPercent = Math.round((meetingHours / totalBarHours) * 100);
  const flowPercent = 100 - wastePercent - meetingPercent;

  const segWaste = document.getElementById('seg-waste');
  const segMeetings = document.getElementById('seg-meetings');
  const segFlow = document.getElementById('seg-flow');

  if (segWaste && segMeetings && segFlow) {
    segWaste.style.width = `${wastePercent}%`;
    segWaste.textContent = `${wastePercent}%`;
    
    segMeetings.style.width = `${meetingPercent}%`;
    segMeetings.textContent = `${meetingPercent}%`;
    
    segFlow.style.width = `${flowPercent}%`;
    segFlow.textContent = `${flowPercent}%`;
  }
}

function updateDiagSliderLabel(slider) {
  const val = parseInt(slider.value, 10);
  const labelId = `diag-val-${slider.id.replace('diag-', '')}`;
  const indicator = document.getElementById(labelId);
  if (!indicator) return;

  const responses = {
    1: {
      1: "Chased daily (1/5)",
      2: "Chased frequently (2/5)",
      3: "Sometimes late (3/5)",
      4: "Mostly on time (4/5)",
      5: "Always on time (5/5)"
    },
    2: {
      1: "No tracking (1/5)",
      2: "Personal notes (2/5)",
      3: "Siloed trackers (3/5)",
      4: "Shared team boards (4/5)",
      5: "Central public SSOT (5/5)"
    },
    3: {
      1: "Silent late delivery (1/5)",
      2: "At the deadline (2/5)",
      3: "Few hours warning (3/5)",
      4: "24-hour warning (4/5)",
      5: "Proactive 48-hour alert (5/5)"
    },
    4: {
      1: "Chasing and status syncs (1/5)",
      2: "Status reports (2/5)",
      3: "Half and half (3/5)",
      4: "Mostly action updates (4/5)",
      5: "Strategic problem-solving (5/5)"
    },
    5: {
      1: "ASAP requests (1/5)",
      2: "Vague deadlines (2/5)",
      3: "Date agreed (3/5)",
      4: "Date & format agreed (4/5)",
      5: "Explicit SLAs & criteria (5/5)"
    }
  };

  const questionNum = parseInt(slider.id.replace('diag-', ''), 10);
  indicator.textContent = responses[questionNum][val] || `${val}/5`;
}

function calculateDiagnosticScore() {
  const sliders = document.querySelectorAll('.diag-slider');
  let totalScore = 0;
  let maxScore = sliders.length * 5;

  sliders.forEach(slider => {
    totalScore += parseInt(slider.value, 10);
  });

  const percentage = Math.round((totalScore / maxScore) * 100);
  
  const scoreNum = document.getElementById('diagnostic-score');
  const scoreCircle = document.getElementById('diagnostic-circle');
  const verdictTitle = document.getElementById('diagnostic-verdict-title');
  const verdictDesc = document.getElementById('diagnostic-verdict-desc');

  if (!scoreNum || !scoreCircle) return;

  scoreNum.textContent = `${percentage}%`;

  // Colors & Verdict descriptions depending on score
  if (percentage >= 80) {
    scoreCircle.style.background = 'var(--grad-primary)';
    scoreCircle.style.boxShadow = '0 8px 24px rgba(13, 148, 136, 0.3)';
    verdictTitle.textContent = "High Reliability Operating System";
    verdictTitle.style.color = 'var(--accent-teal)';
    verdictDesc.textContent = "Your organization exhibits high commitment ownership and transparency. Status chasing is minimized. Keep reinforcing the NFR ecosystem to sustain this advantage.";
  } else if (percentage >= 50) {
    scoreCircle.style.background = 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)';
    scoreCircle.style.boxShadow = '0 8px 24px rgba(14, 165, 233, 0.3)';
    verdictTitle.textContent = "Moderate Surveillance";
    verdictTitle.style.color = 'var(--accent-cyan)';
    verdictDesc.textContent = "Your team has localized pockets of trust, but execution is still anchored in checking loops. Introduce explicit SLAs and mandate the 48-Hour Alert Rule to reduce the coordination tax.";
  } else {
    scoreCircle.style.background = 'var(--grad-coral)';
    scoreCircle.style.boxShadow = '0 8px 24px rgba(225, 29, 72, 0.3)';
    verdictTitle.textContent = "Defensive Checking Trap";
    verdictTitle.style.color = 'var(--accent-coral)';
    verdictDesc.textContent = "Your organization runs on defensive surveillance. Deadlines are routinely chased, leading to shadow trackers and over-buffered timelines. Urgent alignment around NFR commitments is required.";
  }
}

function activateCeoChallenge() {
  const selector = document.getElementById('ceo-commitment-selector');
  let selectedText = "";

  if (selector.value === 'custom') {
    selectedText = document.getElementById('ceo-custom-text').value.trim();
    if (!selectedText) {
      alert("Please write your custom commitment before activating.");
      return;
    }
  } else {
    selectedText = selector.options[selector.selectedIndex].text;
  }

  // Set active commitment and save timestamp
  const expiration = Date.now() + (7 * 24 * 60 * 60 * 1000); // 7 days from now
  
  const challengeState = {
    text: selectedText,
    expiration: expiration
  };

  localStorage.setItem('nfr_ceo_challenge', JSON.stringify(challengeState));
  renderCeoChallenge(challengeState);
}

function restoreCeoChallenge() {
  const saved = localStorage.getItem('nfr_ceo_challenge');
  if (!saved) return;

  try {
    const challengeState = JSON.parse(saved);
    renderCeoChallenge(challengeState);
  } catch (e) {
    console.error("Error parsing CEO challenge state", e);
  }
}

function renderCeoChallenge(challenge) {
  const activeTitle = document.getElementById('active-commitment-title');
  const activeText = document.getElementById('active-commitment-text');
  const timerBox = document.getElementById('ceo-timer-box');
  const countdown = document.getElementById('ceo-timer-countdown');

  if (!activeText || !timerBox) return;

  activeTitle.textContent = "Active Commitment Challenge:";
  activeText.textContent = challenge.text;
  timerBox.classList.remove('hidden');

  // Start countdown interval
  if (ceoTimerInterval) clearInterval(ceoTimerInterval);

  function updateClock() {
    const remaining = challenge.expiration - Date.now();
    if (remaining <= 0) {
      clearInterval(ceoTimerInterval);
      countdown.textContent = "Challenge Completed! 🏆";
      timerBox.className = "timer-box completed";
      return;
    }

    const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
    const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((remaining % (60 * 1000)) / 1000);

    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateClock();
  ceoTimerInterval = setInterval(updateClock, 1000);
}

// ==========================================
// 7. Drawer Audio Player Simulation
// ==========================================

let audioInterval = null;
let audioPlaying = false;
let audioCurrentTime = 0;
let audioDuration = 300;

function initDrawerAudio() {
  const playBtn = document.getElementById('drawer-audio-play');
  const track = document.getElementById('drawer-audio-track');
  const fill = document.getElementById('drawer-audio-fill');
  const currentText = document.getElementById('drawer-audio-current');
  const durationText = document.getElementById('drawer-audio-duration');
  const waveBars = document.querySelectorAll('.audio-wave-bar');

  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    if (audioPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });

  if (track) {
    track.addEventListener('click', (e) => {
      const rect = track.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      audioCurrentTime = Math.round(pct * audioDuration);
      updateAudioUI();
    });
  }

  function playAudio() {
    audioPlaying = true;
    playBtn.textContent = '⏸';
    waveBars.forEach(bar => bar.classList.add('active'));

    audioInterval = setInterval(() => {
      audioCurrentTime += 1;
      if (audioCurrentTime >= audioDuration) {
        audioCurrentTime = audioDuration;
        pauseAudio();
        audioCurrentTime = 0;
      }
      updateAudioUI();
    }, 1000);
  }

  function pauseAudio() {
    audioPlaying = false;
    playBtn.textContent = '▶';
    waveBars.forEach(bar => bar.classList.remove('active'));
    if (audioInterval) {
      clearInterval(audioInterval);
      audioInterval = null;
    }
  }

  function updateAudioUI() {
    const progress = (audioCurrentTime / audioDuration) * 100;
    if (fill) fill.style.width = `${progress}%`;
    if (currentText) currentText.textContent = formatTime(audioCurrentTime);
  }

  function formatTime(secs) {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  }

  // Export methods to global window namespace
  window.resetDrawerAudio = function(durationSeconds) {
    pauseAudio();
    audioCurrentTime = 0;
    audioDuration = durationSeconds || 300;
    if (durationText) durationText.textContent = formatTime(audioDuration);
    updateAudioUI();
  };
}

// ==========================================
// 8. 6-Month Transformation Roadmap Tab
// ==========================================

function initRoadmap() {
  const nodes = document.querySelectorAll('.roadmap-nav-node');
  const panes = document.querySelectorAll('.roadmap-stage-pane');
  const checkboxes = document.querySelectorAll('.roadmap-checkbox');
  const scoreText = document.getElementById('roadmap-score-text');
  const gradeText = document.getElementById('roadmap-grade');
  const gaugeFill = document.getElementById('roadmap-gauge-fill');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      node.classList.add('active');
      const stage = node.getAttribute('data-stage');
      const targetPane = document.getElementById(`roadmap-stage-${stage}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  if (checkboxes.length > 0) {
    checkboxes.forEach(box => {
      box.addEventListener('change', updateRoadmapGauge);
    });
    updateRoadmapGauge();
  }

  function updateRoadmapGauge() {
    let score = 0;
    checkboxes.forEach(box => {
      if (box.checked) {
        score += parseInt(box.getAttribute('data-score'), 10) || 0;
      }
    });

    if (scoreText) scoreText.textContent = `${score}%`;
    if (gaugeFill) gaugeFill.style.width = `${score}%`;

    if (gradeText) {
      if (score === 100) {
        gradeText.textContent = 'Certified Audit';
        gradeText.style.color = 'var(--accent-teal)';
      } else if (score >= 50) {
        gradeText.textContent = 'System Redesigned';
        gradeText.style.color = 'var(--accent-cyan)';
      } else if (score >= 25) {
        gradeText.textContent = 'Audit Live';
        gradeText.style.color = 'var(--accent-coral)';
      } else {
        gradeText.textContent = 'Incomplete';
        gradeText.style.color = 'var(--text-muted)';
      }
    }
  }
}

// ==========================================
// Helper Utility Functions
// ==========================================

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


// ==========================================
// Initialize Page Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initRouting();
  initJourneyEvents();
  initWorkbook();
  initCharterVisualizer();
  initDrawerAudio();
  initRoadmap();
  initCeoHub();

  // Helper trigger to jump to workbook view
  const workbookTriggers = document.querySelectorAll('.class-workbook-trigger');
  workbookTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.hash = '#workbook';
    });
  });
});
