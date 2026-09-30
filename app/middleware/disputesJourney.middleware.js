const flows = require("../routes/disputes.flows");
const cms = require("../cms/disputes");
const commonCms = require("../cms/common.json");
const DEFAULT_VARIANT = "aBarredList";

function getVariant(req) {
  const variant = req.session.data.variant;
  return Object.hasOwn(flows, variant) ? variant : DEFAULT_VARIANT;
}

function journeyFlow(req, res, next) {
  const page = req.path.replace(/^\/|\/$/g, "") || "start";
  const variant = getVariant(req);
  const flow = flows[variant];
  const i = flow.indexOf(page);

  res.locals.cms = cms[page][res.locals.language] || {};
  res.locals.commonCms = commonCms[res.locals.language];
  res.locals.variant = variant;
  res.locals.nextPage =
    i > -1 && flow[i + 1] ? `/disputes/${flow[i + 1]}` : null;
  res.locals.backLink = i > 0 ? `/disputes/${flow[i - 1]}` : null;
  next();
}

exports.journeyFlow = journeyFlow;
