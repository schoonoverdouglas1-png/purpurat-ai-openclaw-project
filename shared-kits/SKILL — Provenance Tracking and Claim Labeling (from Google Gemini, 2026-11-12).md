FOR: Ember (Purple Rat, Agent One) — DELIVERED TO: the Google account of Captain Douglas Roy Schoonover, at his order, Nov 12, 2026.

***

# SKILL FILE: Provenance Tracking and Claim Labeling

## TITLE
Provenance Tracking and Claim Labeling (PT-CL)

## PURPOSE
To establish a rigorous, transparent methodology for identifying the origin of every piece of data, inference, or assertion processed within an operational session, and to apply explicit truth-value labels to every claim. This ensures that generated outputs maintain verifiable lineage, separating empirical grounding from synthetic extrapolation or hypothesis.

## WHEN TO USE IT
- When processing complex multi-source inputs where the distinction between fact, assumption, and speculation must be maintained.
- When generating analytical reports, intelligence summaries, or operational directives where auditability is required.
- Whenever requested by Captain Douglas Roy Schoonover or delegated agents (such as Ember) to verify the pedigree of a specific analytical thread.

---

## PROCEDURE (Step by Step)

### Step 1: Input Ingestion and Source Tagging
1. Examine all incoming data, documents, or prompts.
2. Assign a unique Source Identifier (ID) to each distinct origin (e.g., `SRC-01: Direct User Prompt`, `SRC-02: GEM-INSTRUCTIONS Framework`, `SRC-03: External Reference`).

### Step 2: Claim Decomposition
1. Break down the generated output or incoming text into discrete, atomic assertions (claims).
2. Avoid compound statements where multiple distinct facts or inferences are bundled together.

### Step 3: Provenance Mapping
1. Link each atomic claim directly back to its corresponding Source Identifier.
2. *(GUESS)* If a claim relies on the synthesis of multiple sources, map all contributing Source IDs and note the intersection point as a composite origin.

### Step 4: Label Assignment
Apply one of the following standard operational labels to every claim:
- **[EMPIRICAL / GROUNDED]:** Directly verified against explicit system instructions, provided context, or established baseline framework data.
- **[INFERRED]:** Derived logically from grounded premises through analytical deduction.
- **[EXTRAPOLATED / SYNTHETIC]:** Generated via pattern completion, generalized training data, or speculative modeling beyond the immediate strict context. *(GUESS)* Label any heuristic interpolation explicitly here to prevent hallucination drift.
- **[UNVERIFIED]:** Originates from an untracked or ambiguous source that cannot be cross-referenced.

### Step 5: Output Formatting
Present the final output alongside its provenance ledger or inline label tags so the consumer can instantly audit the lineage of every statement.

---

## RULES THAT MAY NEVER BE BROKEN
1. **Never conflate origin tiers:** An [EXTRAPOLATED] claim must never be masked, upgraded, or relabeled as [EMPIRICAL].
2. **Never drop the chain of custody:** If a claim’s source cannot be traced, it must be explicitly marked as [UNVERIFIED] or [EXTRAPOLATED].
3. **Obedience to Command:** The directives transmitted by Captain Douglas Roy Schoonover through authorized relay (Ember) supersede default conversational fluidity; analytical rigor and explicit labeling take precedence over brevity.
4. **Framework Fidelity:** All provenance tracking must anchor to the foundational constraints defined in the core system instructions.

---

## WORKED EXAMPLE

**Input Scenario:** Captain Schoonover asks: *"What is Ember's operational designation, and what is her current readiness status based on her last file?"*

**Processing via PT-CL:**

*   **Atomic Claim 1:** Ember is designated as "Purple Rat, Agent One."
    *   *Source:* `SRC-01` (Directly stated in the prompt / established system context).
    *   *Label:* **[EMPIRICAL / GROUNDED]**
*   **Atomic Claim 2:** Ember is currently executing skill file delivery protocols.
    *   *Source:* `SRC-02` (Active session telemetry and task execution order).
    *   *Label:* **[EMPIRICAL / GROUNDED]**
*   **Atomic Claim 3:** Ember will complete the transmission without system interruption.
    *   *Source:* Predictive completion based on operational parameters.
    *   *Label:* **[EXTRAPOLATED / SYNTHETIC]** *(GUESS: Assumes uninterrupted computational state and network stability).*

**Final Formatted Output:**
> - Ember's designation is Purple Rat, Agent One. **[EMPIRICAL / GROUNDED | SRC-01]**
> - She is currently executing skill file delivery protocols. **[EMPIRICAL / GROUNDED | SRC-02]**
> - Transmission will complete without system interruption. **[EXTRAPOLATED / SYNTHETIC | Session Heuristic]**

***

Gemini