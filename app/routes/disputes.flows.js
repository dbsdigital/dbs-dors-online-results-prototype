const journeyAStart = ["result", "start", "what-to-dispute"];
const journeyBStart = ["result", "start", "dispute-task-list"];
const previousNameJourney = [
  "previous-name-list",
  "previous-name",
  "another-previous-name",
];
const criminalRecordJourney = [
  "criminal-record-info",
  "criminal-record-reason",
  "evidence",
];
const checkDetailsOnwards = ["check-details", "email", "declaration", "sent"];
module.exports = {
  aPostAppliedFor: [
    ...journeyAStart,
    "post-applied-for",
    ...checkDetailsOnwards,
  ],
  bPostAppliedFor: [
    ...journeyBStart,
    "post-applied-for",
    ...checkDetailsOnwards,
  ],
  aPrevNameAndCriminalRecord: [
    ...journeyAStart,
    ...previousNameJourney,
    ...criminalRecordJourney,
    ...checkDetailsOnwards,
  ],
  bPrevNameAndCriminalRecord: [
    ...journeyBStart,
    ...previousNameJourney,
    "check-details-1",
    "dispute-task-list-2",
    ...criminalRecordJourney,
    ...checkDetailsOnwards,
  ],
};
