const journeyAStart = ["start", "what-to-dispute"];
const journeyBStart = ["start", "dispute-task-list"];
const evidenceJourney = ["evidence", "evidence-list"];
const checkDetailsOnwards = [
  "check-details",
  "email",
  "is-address-correct",
  "address-lookup",
  "address-manual",
  "declaration",
  "sent",
];
module.exports = {
  aPersonalInfo: [
    ...journeyAStart,
    "which-personal-details",
    "name",
    "previous-name-list",
    "previous-name",
    "address",
    "dob",
    "birth-place",
    "post-applied-for",
    ...checkDetailsOnwards,
  ],
  aCriminalRecord: [
    ...journeyAStart,
    "criminal-record-info",
    "criminal-record-reason",
    ...evidenceJourney,
    ...checkDetailsOnwards,
  ],
  aBarredList: [
    ...journeyAStart,
    "barred",
    "barred-info",
    ...evidenceJourney,
    ...checkDetailsOnwards,
  ],
  bName: [...journeyBStart, "name", ...checkDetailsOnwards],
  bPreviousName: [
    ...journeyBStart,
    "previous-name-list",
    "previous-name",
    ...checkDetailsOnwards,
  ],
  bDob: [...journeyBStart, "dob", ...checkDetailsOnwards],
  bBirthPlace: [...journeyBStart, "birth-place", ...checkDetailsOnwards],
  bAddress: [...journeyBStart, "address", ...checkDetailsOnwards],
  bPostAppliedFor: [
    ...journeyBStart,
    "post-applied-for",
    ...checkDetailsOnwards,
  ],
  bCriminalRecord: [
    ...journeyBStart,
    "criminal-record-info",
    "criminal-record-reason",
    ...evidenceJourney,
    ...checkDetailsOnwards,
  ],
  bBarred: [
    ...journeyBStart,
    "barred",
    "barred-info",
    ...evidenceJourney,
    ...checkDetailsOnwards,
  ],
};
