const invalidEmailAddresses = [
    "test1@test",
    "test2@test",
    "test3@test",
    "test4@test",
    "test5@test"
];

const selectors = {
    cookiesMsg: "#wt-cli-accept-all-btn",
    contactUsButton: "button[class='contact-label btn btn-1b']",
    nameInput: "#cf-1",
    subjectInput: "#cf-4",
    messageInput: "#cf-5",
    emailInput: "#cf-2",
    sendButton: "input[value='Send']",
    errorMessageEmailInvalid: "//span[contains(text(), 'The e-mail address entered is invalid.')]",
    companyTap: "ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)",
    leadershipSection: "section[class='company-members']",
    facebookLink: "//a[span[@class = 'musala musala-icon-facebook']]",
    musalaSoftProfilePicture: "div > a > div > svg > g > image",
    careersTap: "ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)",
    checkOurOpenPositionsButton: "a[target='_self'] button[type='button']",
    selectLocation: "#get_location",
    openPositionByNameExperiencedAutomationQAEngineer: "//h2[contains(text(), 'Automation QA Engineer')]",
    generalDescriptionSection: "//h2[contains(text(), 'General description')]",
    requirementsSection: "//h2[contains(text(), 'Requirements')]",
    responsibilitiesSection: "//h2[contains(text(), 'Responsibilities')]",
    whatWeOfferSection: "//h2[contains(text(), 'What we offer')]",
    applyButton: "input[value='Apply']",
    emailApplyInput: "input[type='email']",
    uploadInput: "#uploadtextfield",
    agreeCheckbox: "#adConsentChx",
    fieldsErrorMessage: "//div[contains(text(), 'One or more fields have an error. Please check and try again.')]",
    closeButton: "//button[contains(text(), 'Close')]",
    nameRequiredErrorMessage: "text=Name* The field is required. >> span >> nth=2",
    mobileRequiredErrorMessage: "text=Mobile* The field is required. >> span >> nth=2",
    yourMessageErrorMessage: "text=Your Message The field is required. >> span >> nth=2",
    emailErrorMessage: "//span[contains(text(), 'The e-mail address entered is invalid.')]",
    notRobotErrorMessage: "//span[contains(text(), 'Please verify that you are not a robot.')]",
    positionsName: "div.front > h2",
    positionsLink: "a[class='card-jobsHot__link']"
};

module.exports={invalidEmailAddresses, selectors}
