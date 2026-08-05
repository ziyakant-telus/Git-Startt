<!-- 
SYNC IMPACT REPORT
Version: 0.0.0 → 1.0.0 (MAJOR: Initial constitution with testing-first governance)
Principles Added: I. Test-First Discipline (E2E via Playwright), II. Quality Gates, III. Documentation
Sections Added: Testing Technology Stack, Development Workflow & Governance
Templates Updated: ✅ spec-template.md, ✅ plan-template.md, ✅ tasks-template.md
Deferred: None
-->

# Willow Practice App Constitution

## Core Principles

### I. Test-First Discipline (NON-NEGOTIABLE)

All features and user-facing changes MUST have automated test coverage before code review and deployment.
End-to-end tests MUST use **Playwright** for UI testing and user workflow validation.
Unit and integration tests MUST cover critical business logic and data operations.
Test-driven development (TDD) workflow: Write tests → User approves → Tests fail → Implement → Tests pass.

**Rationale**: Automated testing ensures reliability, prevents regressions, and provides confidence in deployments. Playwright enforces testing of actual user interactions in real browsers, catching issues that unit tests may miss.

### II. Quality Gates & Code Review

All pull requests MUST pass automated tests before merge approval.
All code changes MUST be reviewed by at least one team member for correctness and adherence to principles.
Breaking changes and security-sensitive modifications require additional review and documentation.

**Rationale**: Quality gates prevent defects from reaching users. Code review distributes knowledge and maintains code quality standards.

### III. Documentation & Clarity

Every feature MUST have user-facing documentation and developer notes.
Test cases MUST include clear acceptance criteria and describe what is being validated.
Breaking changes MUST be documented with migration guidance.

**Rationale**: Clear documentation enables faster onboarding, reduces defects caused by misunderstanding, and provides context for future maintainers.

## Testing Technology Stack

- **E2E Testing**: Playwright (mandatory for all user workflows)
- **Unit Testing**: Jest or Node.js test runner (for business logic and utilities)
- **Test Reports**: Automated generation and archival of test results
- **Browser Coverage**: Chrome, Firefox, Safari (desktop browsers); mobile testing as needed per feature

## Development Workflow

1. **Feature Planning**: Create spec with user stories and acceptance criteria
2. **Design & Planning**: Outline architecture and test strategy
3. **Test Implementation**: Write Playwright tests before feature code
4. **Feature Development**: Implement feature and ensure tests pass
5. **Code Review**: Verify tests pass, code adheres to principles, documentation is complete
6. **Deployment**: Merge to main only after all quality gates pass

## Governance

This constitution supersedes all other development practices and guides all new feature work. 
Amendments require documentation of the change, rationale, and any necessary migration steps for existing work.
All PRs and specs must reference and verify compliance with this constitution.
Principle violations MUST be documented and addressed in retrospectives.

**Version**: 1.0.0 | **Ratified**: 2026-06-15 | **Last Amended**: 2026-06-15
