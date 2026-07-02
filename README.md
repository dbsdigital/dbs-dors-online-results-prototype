# DBS - DORS - GOV.UK Prototype Kit

This is a fork of the GOV.UK Prototype kit, set up to mirror the functionality of the DBS DORS application. It is used to walk users through the current application, or proposed ideas, in user research sessions.

Go to the [GOV.UK Prototype Kit site](https://govuk-prototype-kit.herokuapp.com/docs) for more information on the prototype kit, and documentation on how the base application is setup.

## Examples
Visit the [GOV.UK Prototype Kit guide section](https://prototype-kit.service.gov.uk/docs/tutorials-and-guides) to have a look at examples and tutorials.

## Before You Start
Check out the [Prototype Kit Readme](/docs/prototype-kit-readme.md) to view instructions for general use, including hosting on Heroku etc.

## Getting Started
1. Install the required Node dependencies.
```
npm install
```
2. Run the prototype locally.
```
npm run dev
```
3. To add new screens, add a new nunjucks file in the `/views` folder. `Journeys.njk` is the first page users will be directed to, and contains links to other prototype journeys and pages.
4. In order to translate between Welsh and English, new text should be saved in the `cms` folder using the format:
```
{
    "en": {
        "textName": "textValueInEnglish"
    },
    "cy": {
        "textName": "textValueInWelsh"
    }
}
```
5. To add the new page to the routing, add a new `get` route in [routes.js](/app/routes.js), import the CMS data at the top and include it in the middleware function:
```
router.get("/applicant-result-summary-list", (req, res) => {
  res.render("applicant-result-summary-list", {
    cms: applicantResultText[res.locals.language],
    commonCms: commonCms[res.locals.language]
  })
});
```

## Support
For help with this project you can use our support email at: TODO. If you require help with the generic GOV.UK Prototype Kit, then check the [documentation.](https://prototype-kit.service.gov.uk/docs/)

## Contributing
We welcome contributions to this project, if you'd like to find out more, please read the [CONTRIBUTING.md file](CONTRIBUTING.md)

## License
For licensing, please read the [LICENSE file](license)