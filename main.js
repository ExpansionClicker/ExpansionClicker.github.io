// default parameters
var currentCount = 0;
var clickPower = 1;
var autoClickPower = 1;
var interval = 3000; // 3 seconds
var currentMultiplier = 1;
var currentGirlAffectionStageMultiplier = 0;
var currentGirlGrowthStageMultiplier = 0;
var autoClickerCount = 0;

// default prices
var clickPowerPrice = 20;
var autoClickPowerPrice = 100;
var intervalPrice = 500;
var autoCountPrice = 0;

// dictionaries
var giftDictionary = {};
var dateDictionary = {};

// currentDate
var currentDate = "";
var currentDateQuestionIndex;

// for events
var currentPanelIndex = 0;
var currentGirlEventDict = {};
var eventType = "";
var eventTypeStage = 1;

// for S
var currentSID;
var currentSVideoIndex = 0;
var currentSMaxIndex = 0;
var currentSVideoPlayer;

// for CGs
var currentCGDateId;
var currentCGStage;
var currentCGFile;
var applyAltClosing;

// load girl
var currentGirl = "";
var girlDictionary = {};
var globalSaveData = {};

// gifts
var activeGiftVideo;

// meta settings
var girlLoaded = false;
var dialoguesAllowed = false;
var haltDialogueClosingTimeout = false;
var freshClick = false;
var freshClickHandler = null;
var clickVideo = "click-video-1";
var clickVideoAlt = "click-video-2";

// konami code
var konamiKey = "";
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var reverseCode = ['a', 'b', 'right', 'left', 'right', 'left', 'down', 'down', 'up', 'up'];
var konamiCodePosition = 0;

// image file list
var allImages = ["Images/MissingCG.jpg",
"Images/Blair/AffectionEvent/1/Panel1.jpg",
"Images/Blair/AffectionEvent/1/Panel10.jpg",
"Images/Blair/AffectionEvent/1/Panel11.jpg",
"Images/Blair/AffectionEvent/1/Panel12.jpg",
"Images/Blair/AffectionEvent/1/Panel13.jpg",
"Images/Blair/AffectionEvent/1/Panel14.jpg",
"Images/Blair/AffectionEvent/1/Panel15.jpg",
"Images/Blair/AffectionEvent/1/Panel16.jpg",
"Images/Blair/AffectionEvent/1/Panel17.jpg",
"Images/Blair/AffectionEvent/1/Panel2.jpg",
"Images/Blair/AffectionEvent/1/Panel3.jpg",
"Images/Blair/AffectionEvent/1/Panel4.jpg",
"Images/Blair/AffectionEvent/1/Panel5.jpg",
"Images/Blair/AffectionEvent/1/Panel6.jpg",
"Images/Blair/AffectionEvent/1/Panel7.jpg",
"Images/Blair/AffectionEvent/1/Panel8.jpg",
"Images/Blair/AffectionEvent/1/Panel9.jpg",
"Images/Blair/AffectionEvent/2/Panel1.jpg",
"Images/Blair/AffectionEvent/2/Panel10.jpg",
"Images/Blair/AffectionEvent/2/Panel11.jpg",
"Images/Blair/AffectionEvent/2/Panel12.jpg",
"Images/Blair/AffectionEvent/2/Panel13.jpg",
"Images/Blair/AffectionEvent/2/Panel14.jpg",
"Images/Blair/AffectionEvent/2/Panel2.jpg",
"Images/Blair/AffectionEvent/2/Panel3.jpg",
"Images/Blair/AffectionEvent/2/Panel4.jpg",
"Images/Blair/AffectionEvent/2/Panel5.jpg",
"Images/Blair/AffectionEvent/2/Panel6.jpg",
"Images/Blair/AffectionEvent/2/Panel7.jpg",
"Images/Blair/AffectionEvent/2/Panel8.jpg",
"Images/Blair/AffectionEvent/2/Panel9.jpg",
"Images/Blair/AffectionEvent/3/Panel1.jpg",
"Images/Blair/AffectionEvent/3/Panel10.jpg",
"Images/Blair/AffectionEvent/3/Panel11.jpg",
"Images/Blair/AffectionEvent/3/Panel12.jpg",
"Images/Blair/AffectionEvent/3/Panel2.jpg",
"Images/Blair/AffectionEvent/3/Panel3.jpg",
"Images/Blair/AffectionEvent/3/Panel4.jpg",
"Images/Blair/AffectionEvent/3/Panel5.jpg",
"Images/Blair/AffectionEvent/3/Panel6.jpg",
"Images/Blair/AffectionEvent/3/Panel7.jpg",
"Images/Blair/AffectionEvent/3/Panel8.jpg",
"Images/Blair/AffectionEvent/3/Panel9.jpg",
"Images/Blair/AffectionEvent/4/Panel1.jpg",
"Images/Blair/AffectionEvent/4/Panel10.jpg",
"Images/Blair/AffectionEvent/4/Panel11.jpg",
"Images/Blair/AffectionEvent/4/Panel12.jpg",
"Images/Blair/AffectionEvent/4/Panel13.jpg",
"Images/Blair/AffectionEvent/4/Panel14.jpg",
"Images/Blair/AffectionEvent/4/Panel15.jpg",
"Images/Blair/AffectionEvent/4/Panel16.jpg",
"Images/Blair/AffectionEvent/4/Panel17.jpg",
"Images/Blair/AffectionEvent/4/Panel18.jpg",
"Images/Blair/AffectionEvent/4/Panel19.jpg",
"Images/Blair/AffectionEvent/4/Panel2.jpg",
"Images/Blair/AffectionEvent/4/Panel20.jpg",
"Images/Blair/AffectionEvent/4/Panel21.jpg",
"Images/Blair/AffectionEvent/4/Panel22.jpg",
"Images/Blair/AffectionEvent/4/Panel23.jpg",
"Images/Blair/AffectionEvent/4/Panel24.jpg",
"Images/Blair/AffectionEvent/4/Panel25.jpg",
"Images/Blair/AffectionEvent/4/Panel26.jpg",
"Images/Blair/AffectionEvent/4/Panel27.jpg",
"Images/Blair/AffectionEvent/4/Panel3.jpg",
"Images/Blair/AffectionEvent/4/Panel4.jpg",
"Images/Blair/AffectionEvent/4/Panel5.jpg",
"Images/Blair/AffectionEvent/4/Panel6.jpg",
"Images/Blair/AffectionEvent/4/Panel7.jpg",
"Images/Blair/AffectionEvent/4/Panel8.jpg",
"Images/Blair/AffectionEvent/4/Panel9.jpg",
"Images/Blair/AffectionEvent/5/Panel1.jpg",
"Images/Blair/AffectionEvent/5/Panel10.jpg",
"Images/Blair/AffectionEvent/5/Panel11.jpg",
"Images/Blair/AffectionEvent/5/Panel12.jpg",
"Images/Blair/AffectionEvent/5/Panel2.jpg",
"Images/Blair/AffectionEvent/5/Panel3.jpg",
"Images/Blair/AffectionEvent/5/Panel4.jpg",
"Images/Blair/AffectionEvent/5/Panel5.jpg",
"Images/Blair/AffectionEvent/5/Panel6.jpg",
"Images/Blair/AffectionEvent/5/Panel7.jpg",
"Images/Blair/AffectionEvent/5/Panel8.jpg",
"Images/Blair/AffectionEvent/5/Panel9.jpg",
"Images/Blair/DateBackgrounds/Date1.jpg",
"Images/Blair/DateBackgrounds/Date2.jpg",
"Images/Blair/DateBackgrounds/Date3.jpg",
"Images/Blair/DateBackgrounds/Date4.jpg",
"Images/Blair/DateBackgrounds/Date5.jpg",
"Images/Blair/Dates/Date1/1/Base.jpg",
"Images/Blair/Dates/Date1/1/Hate.jpg",
"Images/Blair/Dates/Date1/1/Love.jpg",
"Images/Blair/Dates/Date1/1/Neutral.jpg",
"Images/Blair/Dates/Date1/2/Base.jpg",
"Images/Blair/Dates/Date1/2/Hate.jpg",
"Images/Blair/Dates/Date1/2/Love.jpg",
"Images/Blair/Dates/Date1/2/Neutral.jpg",
"Images/Blair/Dates/Date1/3/Base.jpg",
"Images/Blair/Dates/Date1/3/Hate.jpg",
"Images/Blair/Dates/Date1/3/Love.jpg",
"Images/Blair/Dates/Date1/3/Neutral.jpg",
"Images/Blair/Dates/Date1/4/Base.jpg",
"Images/Blair/Dates/Date1/4/Hate.jpg",
"Images/Blair/Dates/Date1/4/Love.jpg",
"Images/Blair/Dates/Date1/4/Neutral.jpg",
"Images/Blair/Dates/Date1/5/Base.jpg",
"Images/Blair/Dates/Date1/5/Hate.jpg",
"Images/Blair/Dates/Date1/5/Love.jpg",
"Images/Blair/Dates/Date1/5/Neutral.jpg",
"Images/Blair/Dates/Date2/2/Base.jpg",
"Images/Blair/Dates/Date2/2/Hate.jpg",
"Images/Blair/Dates/Date2/2/Love.jpg",
"Images/Blair/Dates/Date2/2/Neutral.jpg",
"Images/Blair/Dates/Date2/3/Base.jpg",
"Images/Blair/Dates/Date2/3/Hate.jpg",
"Images/Blair/Dates/Date2/3/Love.jpg",
"Images/Blair/Dates/Date2/3/Neutral.jpg",
"Images/Blair/Dates/Date2/4/Base.jpg",
"Images/Blair/Dates/Date2/4/Hate.jpg",
"Images/Blair/Dates/Date2/4/Love.jpg",
"Images/Blair/Dates/Date2/4/Neutral.jpg",
"Images/Blair/Dates/Date2/5/Base.jpg",
"Images/Blair/Dates/Date2/5/Hate.jpg",
"Images/Blair/Dates/Date2/5/Love.jpg",
"Images/Blair/Dates/Date2/5/Neutral.jpg",
"Images/Blair/Dates/Date3/3/Base.jpg",
"Images/Blair/Dates/Date3/3/Closing.jpg",
"Images/Blair/Dates/Date3/3/Hate.jpg",
"Images/Blair/Dates/Date3/3/Love.jpg",
"Images/Blair/Dates/Date3/3/Neutral.jpg",
"Images/Blair/Dates/Date3/4/Base.jpg",
"Images/Blair/Dates/Date3/4/Hate.jpg",
"Images/Blair/Dates/Date3/4/Love.jpg",
"Images/Blair/Dates/Date3/4/Neutral.jpg",
"Images/Blair/Dates/Date3/5/Base.jpg",
"Images/Blair/Dates/Date3/5/Hate.jpg",
"Images/Blair/Dates/Date3/5/Love.jpg",
"Images/Blair/Dates/Date3/5/Neutral.jpg",
"Images/Blair/Dates/Date4/3/Base.jpg",
"Images/Blair/Dates/Date4/3/Hate.jpg",
"Images/Blair/Dates/Date4/3/Love.jpg",
"Images/Blair/Dates/Date4/3/Neutral.jpg",
"Images/Blair/Dates/Date4/4/Base.jpg",
"Images/Blair/Dates/Date4/4/Hate.jpg",
"Images/Blair/Dates/Date4/4/Love.jpg",
"Images/Blair/Dates/Date4/4/Neutral.jpg",
"Images/Blair/Dates/Date4/5/Base.jpg",
"Images/Blair/Dates/Date4/5/Hate.jpg",
"Images/Blair/Dates/Date4/5/Love.jpg",
"Images/Blair/Dates/Date4/5/Neutral.jpg",
"Images/Blair/Dates/Date5/4/Base.jpg",
"Images/Blair/Dates/Date5/4/Hate.jpg",
"Images/Blair/Dates/Date5/4/Love.jpg",
"Images/Blair/Dates/Date5/4/Neutral.jpg",
"Images/Blair/Dates/Date5/5/Base.jpg",
"Images/Blair/Dates/Date5/5/Hate.jpg",
"Images/Blair/Dates/Date5/5/Love.jpg",
"Images/Blair/Dates/Date5/5/Neutral.jpg",
"Images/Blair/GrowthEvent/1/Panel1.jpg",
"Images/Blair/GrowthEvent/1/Panel2.jpg",
"Images/Blair/GrowthEvent/1/Panel3.jpg",
"Images/Blair/GrowthEvent/1/Panel4.jpg",
"Images/Blair/GrowthEvent/1/Panel5.jpg",
"Images/Blair/GrowthEvent/1/Panel6.jpg",
"Images/Blair/GrowthEvent/2/Panel1.jpg",
"Images/Blair/GrowthEvent/2/Panel10.jpg",
"Images/Blair/GrowthEvent/2/Panel11.jpg",
"Images/Blair/GrowthEvent/2/Panel12.jpg",
"Images/Blair/GrowthEvent/2/Panel13.jpg",
"Images/Blair/GrowthEvent/2/Panel14.jpg",
"Images/Blair/GrowthEvent/2/Panel15.jpg",
"Images/Blair/GrowthEvent/2/Panel2.jpg",
"Images/Blair/GrowthEvent/2/Panel3.jpg",
"Images/Blair/GrowthEvent/2/Panel4.jpg",
"Images/Blair/GrowthEvent/2/Panel5.jpg",
"Images/Blair/GrowthEvent/2/Panel6.jpg",
"Images/Blair/GrowthEvent/2/Panel7.jpg",
"Images/Blair/GrowthEvent/2/Panel8.jpg",
"Images/Blair/GrowthEvent/2/Panel9.jpg",
"Images/Blair/GrowthEvent/3/Still1.jpg",
"Images/Blair/GrowthEvent/4/Panel1.jpg",
"Images/Blair/GrowthEvent/4/Panel2.jpg",
"Images/Blair/GrowthEvent/4/Panel3.jpg",
"Images/Blair/GrowthEvent/4/Panel4.jpg",
"Images/Blair/GrowthEvent/4/Panel5.jpg",
"Images/Blair/GrowthEvent/4/Panel6.jpg",
"Images/Blair/GrowthEvent/4/Panel7.jpg",
"Images/Blair/GrowthEvent/4/Panel8.jpg",
"Images/Blair/GrowthEvent/5/Still1.jpg",
"Images/Blair/GrowthEvent/6/Panel1.jpg",
"Images/Blair/GrowthEvent/6/Panel10.jpg",
"Images/Blair/GrowthEvent/6/Panel11.jpg",
"Images/Blair/GrowthEvent/6/Panel12.jpg",
"Images/Blair/GrowthEvent/6/Panel13.jpg",
"Images/Blair/GrowthEvent/6/Panel2.jpg",
"Images/Blair/GrowthEvent/6/Panel3.jpg",
"Images/Blair/GrowthEvent/6/Panel4.jpg",
"Images/Blair/GrowthEvent/6/Panel5.jpg",
"Images/Blair/GrowthEvent/6/Panel6.jpg",
"Images/Blair/GrowthEvent/6/Panel7.jpg",
"Images/Blair/GrowthEvent/6/Panel8.jpg",
"Images/Blair/GrowthEvent/6/Panel9.jpg",
"Images/Blair/GrowthEvent/7/Still1.jpg",
"Images/Blair/GrowthEvent/8/Panel1.jpg",
"Images/Blair/GrowthEvent/8/Panel10.jpg",
"Images/Blair/GrowthEvent/8/Panel11.jpg",
"Images/Blair/GrowthEvent/8/Panel12.jpg",
"Images/Blair/GrowthEvent/8/Panel13.jpg",
"Images/Blair/GrowthEvent/8/Panel14.jpg",
"Images/Blair/GrowthEvent/8/Panel15.jpg",
"Images/Blair/GrowthEvent/8/Panel2.jpg",
"Images/Blair/GrowthEvent/8/Panel3.jpg",
"Images/Blair/GrowthEvent/8/Panel4.jpg",
"Images/Blair/GrowthEvent/8/Panel5.jpg",
"Images/Blair/GrowthEvent/8/Panel6.jpg",
"Images/Blair/GrowthEvent/8/Panel7.jpg",
"Images/Blair/GrowthEvent/8/Panel8.jpg",
"Images/Blair/GrowthEvent/8/Panel9.jpg",
"Images/Blair/S/S1.jpg",
"Images/Blair/S/S2.jpg",
"Images/Blair/S/S3.jpg",
"Images/Blair/S/S4.jpg",
"Images/Blair/S/S5.jpg",
"Images/Henriette/DateBackgrounds/Date1.jpg",
"Images/Henriette/DateBackgrounds/Date2.jpg",
"Images/Henriette/DateBackgrounds/Date3.jpg",
"Images/Henriette/DateBackgrounds/Date4.jpg",
"Images/Henriette/DateBackgrounds/Date5.jpg",
"Images/Henriette/GrowthEvent/1/Panel1.jpg",
"Images/Henriette/GrowthEvent/1/Panel2.jpg",
"Images/Henriette/GrowthEvent/1/Panel3.jpg",
"Images/Henriette/GrowthEvent/1/Panel4.jpg",
"Images/Henriette/GrowthEvent/1/Panel5.jpg",
"Images/Henriette/S/S1.jpg",
"Images/Henriette/S/S2.jpg",
"Images/Henriette/S/S3.jpg",
"Images/Henriette/S/S4.jpg",
"Images/Henriette/S/S5.jpg",
"Images/Jennifer/AffectionEvent/1/Panel1.jpg",
"Images/Jennifer/AffectionEvent/1/Panel2.jpg",
"Images/Jennifer/AffectionEvent/1/Panel3.jpg",
"Images/Jennifer/AffectionEvent/1/Panel4.jpg",
"Images/Jennifer/AffectionEvent/1/Panel5.jpg",
"Images/Jennifer/AffectionEvent/2/Panel1.jpg",
"Images/Jennifer/AffectionEvent/2/Panel10.jpg",
"Images/Jennifer/AffectionEvent/2/Panel11.jpg",
"Images/Jennifer/AffectionEvent/2/Panel12.jpg",
"Images/Jennifer/AffectionEvent/2/Panel2.jpg",
"Images/Jennifer/AffectionEvent/2/Panel3.jpg",
"Images/Jennifer/AffectionEvent/2/Panel4.jpg",
"Images/Jennifer/AffectionEvent/2/Panel5.jpg",
"Images/Jennifer/AffectionEvent/2/Panel6.jpg",
"Images/Jennifer/AffectionEvent/2/Panel7.jpg",
"Images/Jennifer/AffectionEvent/2/Panel8.jpg",
"Images/Jennifer/AffectionEvent/2/Panel9.jpg",
"Images/Jennifer/DateBackgrounds/Date1.jpg",
"Images/Jennifer/DateBackgrounds/Date2.jpg",
"Images/Jennifer/DateBackgrounds/Date3.jpg",
"Images/Jennifer/DateBackgrounds/Date4.jpg",
"Images/Jennifer/DateBackgrounds/Date5.jpg",
"Images/Jennifer/GrowthEvent/1/Panel1.jpg",
"Images/Jennifer/GrowthEvent/1/Panel10.jpg",
"Images/Jennifer/GrowthEvent/1/Panel2.jpg",
"Images/Jennifer/GrowthEvent/1/Panel3.jpg",
"Images/Jennifer/GrowthEvent/1/Panel4.jpg",
"Images/Jennifer/GrowthEvent/1/Panel5.jpg",
"Images/Jennifer/GrowthEvent/1/Panel6.jpg",
"Images/Jennifer/GrowthEvent/1/Panel7.jpg",
"Images/Jennifer/GrowthEvent/1/Panel8.jpg",
"Images/Jennifer/GrowthEvent/1/Panel9.jpg",
"Images/Jennifer/GrowthEvent/2/Panel1.jpg",
"Images/Jennifer/GrowthEvent/2/Panel2.jpg",
"Images/Jennifer/GrowthEvent/2/Panel3.jpg",
"Images/Jennifer/GrowthEvent/2/Panel4.jpg",
"Images/Jennifer/GrowthEvent/2/Panel5.jpg",
"Images/Jennifer/GrowthEvent/2/Panel6.jpg",
"Images/Jennifer/GrowthEvent/2/Panel7.jpg",
"Images/Jennifer/GrowthEvent/2/Panel8.jpg",
"Images/Jennifer/GrowthEvent/2/Panel9.jpg",
"Images/Jennifer/GrowthEvent/4/Panel1.jpg",
"Images/Jennifer/GrowthEvent/4/Panel10.jpg",
"Images/Jennifer/GrowthEvent/4/Panel11.jpg",
"Images/Jennifer/GrowthEvent/4/Panel2.jpg",
"Images/Jennifer/GrowthEvent/4/Panel3.jpg",
"Images/Jennifer/GrowthEvent/4/Panel4.jpg",
"Images/Jennifer/GrowthEvent/4/Panel5.jpg",
"Images/Jennifer/GrowthEvent/4/Panel6.jpg",
"Images/Jennifer/GrowthEvent/4/Panel7.jpg",
"Images/Jennifer/GrowthEvent/4/Panel8.jpg",
"Images/Jennifer/GrowthEvent/4/Panel9.jpg",
"Images/Jennifer/S/S1.jpg",
"Images/Jennifer/S/S2.jpg",
"Images/Jennifer/S/S3.jpg",
"Images/Jennifer/S/S4.jpg",
"Images/Jennifer/S/S5.jpg",
"Images/TemplateGirl/DateBackgrounds/Date1.jpg",
"Images/TemplateGirl/DateBackgrounds/Date2.jpg",
"Images/TemplateGirl/DateBackgrounds/Date3.jpg",
"Images/TemplateGirl/DateBackgrounds/Date4.jpg",
"Images/TemplateGirl/DateBackgrounds/Date5.jpg",
"Images/TemplateGirl/S/S1.jpg",
"Images/TemplateGirl/S/S2.jpg",
"Images/TemplateGirl/S/S3.jpg",
"Images/TemplateGirl/S/S4.jpg",
"Images/TemplateGirl/S/S5.jpg"]
var allVids = ["Animations/Blair/1/Base.mp4",
"Animations/Blair/1/Hate.mp4",
"Animations/Blair/1/Love.mp4",
"Animations/Blair/1/Neutral.mp4",
"Animations/Blair/2/Base.mp4",
"Animations/Blair/2/Hate.mp4",
"Animations/Blair/2/Love.mp4",
"Animations/Blair/2/Neutral.mp4",
"Animations/Blair/3/Base.mp4",
"Animations/Blair/3/Hate.mp4",
"Animations/Blair/3/Love.mp4",
"Animations/Blair/3/Neutral.mp4",
"Animations/Blair/4/Base.mp4",
"Animations/Blair/4/Hate.mp4",
"Animations/Blair/4/Love.mp4",
"Animations/Blair/4/Neutral.mp4",
"Animations/Blair/5/Base.mp4",
"Animations/Blair/5/Hate.mp4",
"Animations/Blair/5/Love.mp4",
"Animations/Blair/5/Neutral.mp4",
"Animations/Blair/6/Base.mp4",
"Animations/Blair/6/Hate.mp4",
"Animations/Blair/6/Love.mp4",
"Animations/Blair/6/Neutral.mp4",
"Animations/Blair/7/Base.mp4",
"Animations/Blair/7/Hate.mp4",
"Animations/Blair/7/Love.mp4",
"Animations/Blair/7/Neutral.mp4",
"Animations/Blair/8/Base.mp4",
"Animations/Blair/8/Hate.mp4",
"Animations/Blair/8/Love.mp4",
"Animations/Blair/8/Neutral.mp4",
"Animations/Blair/S/S1/0.mp4",
"Animations/Blair/S/S2/0.mp4",
"Animations/Blair/S/S2/1.mp4",
"Animations/Blair/S/S2/2.mp4",
"Animations/Blair/S/S2/3.mp4",
"Animations/Blair/S/S3/0.mp4",
"Animations/Blair/S/S4/0.mp4",
"Animations/Blair/S/S4/1.mp4",
"Animations/Blair/S/S4/2.mp4",
"Animations/Blair/S/S5/0.mp4",
"Animations/Blair/S/S5/1.mp4",
"Animations/Blair/S/S5/2.mp4",
"Animations/Henriette/1/Base.mp4",
"Animations/Henriette/1/Hate.mp4",
"Animations/Henriette/1/Love.mp4",
"Animations/Henriette/1/Neutral.mp4",
"Animations/Henriette/2/Base.mp4",
"Animations/Henriette/2/Hate.mp4",
"Animations/Henriette/2/Love.mp4",
"Animations/Henriette/2/Neutral.mp4",
"Animations/Henriette/3/Base.mp4",
"Animations/Henriette/3/Hate.mp4",
"Animations/Henriette/3/Love.mp4",
"Animations/Henriette/3/Neutral.mp4",
"Animations/Henriette/4/Base.mp4",
"Animations/Henriette/4/Hate.mp4",
"Animations/Henriette/4/Love.mp4",
"Animations/Henriette/4/Neutral.mp4",
"Animations/Henriette/5/Base.mp4",
"Animations/Henriette/5/Hate.mp4",
"Animations/Henriette/5/Love.mp4",
"Animations/Henriette/5/Neutral.mp4",
"Animations/Henriette/6/Base.mp4",
"Animations/Henriette/6/Hate.mp4",
"Animations/Henriette/6/Love.mp4",
"Animations/Henriette/6/Neutral.mp4",
"Animations/Henriette/7/Base.mp4",
"Animations/Henriette/7/Hate.mp4",
"Animations/Henriette/7/Love.mp4",
"Animations/Henriette/7/Neutral.mp4",
"Animations/Henriette/8/Base.mp4",
"Animations/Henriette/8/Hate.mp4",
"Animations/Henriette/8/Love.mp4",
"Animations/Henriette/8/Neutral.mp4",
"Animations/Jennifer/1/Base.mp4",
"Animations/Jennifer/1/Hate.mp4",
"Animations/Jennifer/1/Love.mp4",
"Animations/Jennifer/1/Neutral.mp4",
"Animations/Jennifer/2/Base.mp4",
"Animations/Jennifer/2/Hate.mp4",
"Animations/Jennifer/2/Love.mp4",
"Animations/Jennifer/2/Neutral.mp4",
"Animations/Jennifer/3/Base.mp4",
"Animations/Jennifer/3/Hate.mp4",
"Animations/Jennifer/3/Love.mp4",
"Animations/Jennifer/3/Neutral.mp4",
"Animations/Jennifer/4/Base.mp4",
"Animations/Jennifer/4/Hate.mp4",
"Animations/Jennifer/4/Love.mp4",
"Animations/Jennifer/4/Neutral.mp4",
"Animations/Jennifer/5/Base.mp4",
"Animations/Jennifer/5/Hate.mp4",
"Animations/Jennifer/5/Love.mp4",
"Animations/Jennifer/5/Neutral.mp4",
"Animations/Jennifer/6/Base.mp4",
"Animations/Jennifer/6/Hate.mp4",
"Animations/Jennifer/6/Love.mp4",
"Animations/Jennifer/6/Neutral.mp4",
"Animations/Jennifer/7/Base.mp4",
"Animations/Jennifer/7/Hate.mp4",
"Animations/Jennifer/7/Love.mp4",
"Animations/Jennifer/7/Neutral.mp4",
"Animations/Jennifer/8/Base.mp4",
"Animations/Jennifer/8/Hate.mp4",
"Animations/Jennifer/8/Love.mp4",
"Animations/Jennifer/8/Neutral.mp4",]

window.onload = function() {

  //window.localStorage.clear();

  // set counter if not set up before, otherwise set element to current count
  if (window.localStorage.getItem("Counter") === null) {
    window.localStorage.setItem("Counter", 0);
  }
  else{
    currentCount = parseFloat(window.localStorage.getItem('Counter'));
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);
  }
  // set click power if applicable
  if (window.localStorage.getItem("Click Power") !== null) {
    clickPower = parseFloat(window.localStorage.getItem("Click Power"))
  }
  else{
    window.localStorage.setItem('Click Power', clickPower);
  }
  // set autoclickpower if applicable
  if (window.localStorage.getItem("Auto Click Power") !== null) {
    autoClickPower = parseFloat(window.localStorage.getItem("Auto Click Power"))
  }
  else{
    window.localStorage.setItem('Auto Click Power', autoClickPower);
  }
  // set interval if applicable
  if (window.localStorage.getItem("Interval") !== null) {
    interval = parseInt(window.localStorage.getItem("Interval"))
  }
  else{
    window.localStorage.setItem('Interval', interval);
  }

  // create upgrade prices
  if (window.localStorage.getItem("ClickPowerPrice") === null) {
    window.localStorage.setItem('ClickPowerPrice', clickPowerPrice);
  }
  else{
    clickPowerPrice = parseFloat(window.localStorage.getItem("ClickPowerPrice"))
  }
  if (window.localStorage.getItem("AutoClickPowerPrice") === null) {
    window.localStorage.setItem('AutoClickPowerPrice', autoClickPowerPrice);
  }
  else{
    autoClickPowerPrice = parseFloat(window.localStorage.getItem("AutoClickPowerPrice"))
  }
  if (window.localStorage.getItem("IntervalPrice") === null) {
    window.localStorage.setItem('IntervalPrice', intervalPrice);
  }
  else{
    intervalPrice = parseFloat(window.localStorage.getItem("IntervalPrice"))
  }

  // load upgrade prices
  document.getElementById("upgradePriceClickPower").innerHTML =  nFormatter(clickPowerPrice, 1);
  document.getElementById("upgradePriceAutoPower").innerHTML = nFormatter(autoClickPowerPrice, 1);
  document.getElementById("upgradePriceSpeed").innerHTML = nFormatter(intervalPrice, 1);

  // set descriptions for upgrades (current status of parameters)
  document.getElementById("ClickPowerDec").innerHTML =  "$"+nFormatter(clickPower, 1)+" / Click";
  document.getElementById("AutoClickPowerDec").innerHTML =  "$"+nFormatter(autoClickPower, 1)+" / Auto";
  document.getElementById("AutoIntervalDesc").innerHTML =  parseFloat(interval/1000).toFixed(1)+"s";

  // create gift dict
  giftDictionary = createGiftDictionary();

  // create date dict
  dateDictionary = createDateDictionary();

  // create girlDictionary if not set. else load from localstorage
  var latestMetadata = createSaveData();
  var latestGirlDictionary = createGirlDictionary();
  if (window.localStorage.getItem("GirlDictionary") === null) {
    // add new metadata to girl dict
    Object.keys(latestMetadata).forEach(function(key) {
      latestGirlDictionary[key]["Metadata"] = latestMetadata[key];
    });

    // save
    window.localStorage.setItem("GirlDictionary", JSON.stringify(latestMetadata));
    girlDictionary = latestGirlDictionary;
    globalSaveData = latestMetadata;
  }
  else{
    // copy metadata from saved girl to the latest version of the dictionary. If there is a girl missing (ie, new girl), add her to saved
    var savedGirlDictionary = JSON.parse(window.localStorage.getItem("GirlDictionary")); //misnamed. this is actually the saved girl metadata, not the whole dict
    Object.keys(savedGirlDictionary).forEach(function(key) {
      if(Object.keys(latestGirlDictionary).includes(key)){ // only copy over metadata from saved dictionary to latest if latest includes the girl. If it doesn't, that means latest has the girl deleted.
        latestGirlDictionary[key]["Metadata"] = savedGirlDictionary[key]; //copy over saved meta data to latest for use now
        latestMetadata[key] = savedGirlDictionary[key]; // copy save data and save it
      }
    });
    window.localStorage.setItem("GirlDictionary", JSON.stringify(latestMetadata));
    girlDictionary = latestGirlDictionary;
    globalSaveData = latestMetadata;
    // check if there's a mismatch in girl dictionary version (in terms of girl count). Add any missing girls
//    if (Object.keys(savedGirlDictionary).length != Object.keys(latestGirlDictionary).length){ // mismatch
  //  }
    //else{
      //girlDictionary = savedGirlDictionary;
    //}
  }

  // create current girl if not set. also indicates if first play through
  if (window.localStorage.getItem("CurrentGirl") === null || window.localStorage.getItem("CurrentGirl") === '') {
    window.localStorage.setItem('CurrentGirl', '');
    document.getElementById("leftHeader").style.display = "none";
    document.getElementById("AffectionUpContainer").style.display = "none";
    document.getElementById("LevelUpContainer").style.display = "none";
    document.getElementById("ClickArea").style.display = "none";
    document.getElementById("menuOptionUpgrade").classList.add("invisible");
    document.getElementById("menuOptionGift").classList.add("invisible");
    document.getElementById("menuOptionDate").classList.add("invisible");
    document.getElementById("menuOptionS").classList.add("invisible");
    document.getElementById("menuOptionProfile").classList.add("invisible");
    document.getElementById("menuOptionMemories").classList.add("invisible");
    document.getElementById("menuOptionAchievement").classList.add("invisible");
    document.getElementById("menuOptionDateCGs").classList.add("invisible");
  }
  else{
    // load girl
    loadGirl(window.localStorage.getItem("CurrentGirl"));
  }

  // achievements
  createAchievements();
  achievementLoading();

  // first load means this needs to be run
  CheckGirlStatus();

  // run random dialogues. won't really start until dialoguesAllowed lock is released.
  setTimeout(triggerRandomDialogue, Math.random() * 30000 + 20000) //
}

function achievementLoading() {
  // load achievements
  if (window.localStorage.getItem("Achievement Count") !== null){
    achievementDict = JSON.parse(window.localStorage.getItem("Achievement Dictionary"));
    Object.keys(achievementDict).forEach(function(key) {
        if (achievementDict[key][0] == "true"){
          activateAchievement(key, 0, true);
        }
    });
  }
  else{
    window.localStorage.setItem("Achievement Count", 0);
  }

  window.localStorage.setItem("Achievements Currently Activating", 0);
  document.getElementById("numAchievementsEarnedId").innerHTML = window.localStorage.getItem("Achievement Count")+"/" +Object.keys(JSON.parse(window.localStorage.getItem("Achievement Dictionary"))).length+" Achievement(s) earned"; // load achievement count

}

function loadGirl(g) {
  currentGirl = g;
  window.localStorage.setItem('CurrentGirl', currentGirl);

  // make sure popup closed during load
  dialoguesAllowed = false;
  document.getElementById('dialogueSpeechBubbleContainer').classList.remove('speechBubblePopUp');
  document.getElementById('giftSpeechBubbleContainer').classList.remove('speechBubblePopUp');

  // make sure gift vids are invisible
  document.getElementById('gift-video-neutral').classList.add("invisible");
  document.getElementById('gift-video-love').classList.add("invisible");
  document.getElementById('gift-video-hate').classList.add("invisible");

  // clear CG menu
  document.getElementById('cgMenuButtons').innerHTML = "";

  // set click video for smooth transitions
  if (clickVideo == "click-video-1"){
    clickVideo = "click-video-2";
    clickVideoAlt = "click-video-1";
  }
  else{
    clickVideo = "click-video-1";
    clickVideoAlt = "click-video-2";
  }

  // if first load, perform opening event
  if (girlDictionary[currentGirl]["Metadata"]["Unlocked"] == "False"){
    // subtract currency
    // pay for unlock
    var unlockPrice = parseFloat(girlDictionary[currentGirl]["Parameters"]["UnlockCost"]);
    currentCount = currentCount - unlockPrice;
    window.localStorage.setItem("Counter", currentCount);
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

    startEvent("GrowthEvent");
    girlDictionary[currentGirl]["Metadata"]["Unlocked"] = "True";
    // save changes to local storage
    globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
    window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
  }

  // close out the bonus info
  hideGirlBonusInfo(currentGirl);

  // load expansion stage
  var currentStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  document.getElementById("expansionStage").innerHTML = currentStage;
  document.getElementById(clickVideo).setAttribute('src', "Animations/"+currentGirl+"/"+currentStage+"/Base.mp4");


  // load girl multiplier
  currentMultiplier = parseFloat(girlDictionary[currentGirl]["Parameters"]["Multiplier"]);

  // load level up price
  // edge: if level is 10, stop, hide button
  var maxStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxStage"]);
  nextStage = currentStage + 1;
  if (currentStage == maxStage){
    document.getElementById("upgradeExpansionButton").style.display = "none";
    document.getElementById("levelUpPrice").style.marginRight = "1.1em";
    document.getElementById("levelUpPrice").innerHTML = "LEVEL MAX";
  }
  else{
    document.getElementById("upgradeExpansionButton").style.display = "block";
    document.getElementById("levelUpPrice").style.marginRight = "0em";
    var currentLevelUpPrice = parseFloat(girlDictionary[currentGirl]["Requirements"][nextStage]["Price"]);
    var currentLevelUpHearts = parseInt(girlDictionary[currentGirl]["Requirements"][nextStage]["Hearts"]);
    document.getElementById("levelUpPrice").innerHTML = "$"+nFormatter(currentLevelUpPrice, 1)+" + "+currentLevelUpHearts+"	&hearts;";
  }

  // load affection level
  var currentGirlAffection = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  document.getElementById("affectionStage").innerHTML = currentGirlAffection;

  // load affeection progress
  var currentGirlAffectionProgress = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionProgress"]);
  var currentGirlAffectionGoal = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionGoal"]);
  document.getElementById("affectionProgress").innerHTML = (100*currentGirlAffectionProgress/currentGirlAffectionGoal).toFixed(2);

  // set stage multipliers
  currentGirlAffectionStageMultiplier = currentGirlAffection;
  currentGirlGrowthStageMultiplier = currentStage;

  // get number of autoclickers and price of upgrade
  autoClickerCount = parseInt(girlDictionary[currentGirl]["Metadata"]["AutoCount"]);
  autoCountPrice =  (girlDictionary[currentGirl]["Metadata"]["AutoCountUpgradePrice"]);
  document.getElementById("AutoClickerCountDesc").innerHTML =  nFormatter(autoClickerCount, 1);
  document.getElementById("upgradePriceAutoCount").innerHTML = nFormatter(autoCountPrice, 1);

  // show headers
  document.getElementById("leftHeader").style.display = "flex";
  document.getElementById("AffectionUpContainer").style.display = "flex";
  document.getElementById("LevelUpContainer").style.display = "flex";
  document.getElementById("ClickArea").style.display = "block";

  // show menus options
  document.getElementById("menuOptionUpgrade").classList.remove("invisible");
  document.getElementById("menuOptionGift").classList.remove("invisible");
  document.getElementById("menuOptionDate").classList.remove("invisible");
  document.getElementById("menuOptionProfile").classList.remove("invisible");
  document.getElementById("menuOptionMemories").classList.remove("invisible");
  document.getElementById("menuOptionAchievement").classList.remove("invisible");
  document.getElementById("menuOptionS").classList.remove("invisible");
  document.getElementById("menuOptionDateCGs").classList.remove("invisible");

  // set expansion image
  var currentGirlGrowthType = girlDictionary[currentGirl]["Parameters"]["GrowthType"];
  document.getElementById("ExpansionImage").setAttribute('src', "Icons/"+currentGirlGrowthType+".png");

  // set special text and set special button image
  var sDict = girlDictionary[currentGirl]["S"];
  Object.entries(sDict).forEach(([sID, value]) => {
    document.getElementById(sID+"Text").innerHTML = value["Affection"];
    document.getElementById(sID+"ButtonImage").setAttribute('src', "Images/"+currentGirl+"/S/"+sID+".jpg");
  });

  // clear and load memory log
  document.getElementById("memoriesListContainer").innerHTML = "";
  var girlMems = girlDictionary[currentGirl]["Metadata"]["CompletedEvents"];
  girlMems.forEach(function (item, index) {
    var memStage = parseInt(item.substring(item.indexOf('_') + 1));
    var memType = item.substr(0, item.indexOf('_'));
    addEventToMemoryLog(memType, memStage);
  });

  // load date dictionary entries
  var currentGirlMaxGrowthStage = 5; //only have 5 date locations //girlDictionary[currentGirl]["Metadata"]["MaxStage"];
  Object.entries(dateDictionary).forEach(([dateId, value]) => {
    dateDictionary[dateId]["Name"] = girlDictionary[currentGirl]["Dates"][dateId]["Name"];
    dateDictionary[dateId]["Price"] = girlDictionary[currentGirl]["Dates"][dateId]["Price"];
    dateDictionary[dateId]["Affection"] = girlDictionary[currentGirl]["Dates"][dateId]["Affection"];
    document.getElementById(dateId+"Name").innerHTML = girlDictionary[currentGirl]["Dates"][dateId]["Name"];
    document.getElementById(dateId+"Req").innerHTML = nFormatter(girlDictionary[currentGirl]["Dates"][dateId]["Price"] , 1) + " + " + girlDictionary[currentGirl]["Dates"][dateId]["Affection"] + "♥";
    var imgUrl = 'Images/'+currentGirl+'/DateBackgrounds/'+dateId+'.jpg';
    document.getElementById(dateId).style.backgroundImage = "url('"+imgUrl+"')";

    // create cg grid
    var cgMin = girlDictionary[currentGirl]["Dates"][dateId]["MinStage"];
    for (let i = cgMin; i <= currentGirlMaxGrowthStage; i++) {
      var cgButt = document.createElement("button");
      cgButt.setAttribute('name', dateId+"_"+i);
      cgButt.setAttribute('onclick', "showCG(this.name)");
      cgButt.setAttribute('id', "cgButton_"+dateId+"_"+i);
      cgButt.classList.add("cgItemButton");
      cgButt.classList.add("button");
      document.getElementById("cgMenuButtons").appendChild(cgButt);
    }
  });

  // update global multipliers
  CheckAndUpdateMultiplierInfo();

  // load gift videos
  activeGiftVideo = "gift-video-neutral";
  document.getElementById("gift-video-neutral").setAttribute('src', "Animations/"+currentGirl+"/"+currentGirlGrowthStageMultiplier+"/Neutral.mp4");
  document.getElementById("gift-video-love").setAttribute('src', "Animations/"+currentGirl+"/"+currentGirlGrowthStageMultiplier+"/Love.mp4");
  document.getElementById("gift-video-hate").setAttribute('src', "Animations/"+currentGirl+"/"+currentGirlGrowthStageMultiplier+"/Hate.mp4");

  // show/hide dates menu
  var girlDatesAreEnabled = girlDictionary[currentGirl]["Parameters"]["DatesEnabled"];
  if (girlDatesAreEnabled == "False"){
    document.getElementById("DateMenuHider").classList.remove("invisible");
  }
  else{
    document.getElementById("DateMenuHider").classList.add("invisible");
  }
  // show/hide S menu
  var girlSAreEnabled = girlDictionary[currentGirl]["Parameters"]["SEnabled"];
  if (girlSAreEnabled == "False"){
    document.getElementById("SMenuHider").classList.remove("invisible");
  }
  else{
    document.getElementById("SMenuHider").classList.add("invisible");
  }

  // update counter for time passed.
  var girlMultiplier = parseFloat(girlDictionary[currentGirl]["Parameters"]["Multiplier"]);
  var girlAutoCount = parseInt(girlDictionary[currentGirl]["Metadata"]["AutoCount"]);
  var girlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  var girlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var girlSavedDate = girlDictionary[currentGirl]["Metadata"]["Saved Date"];
  if (typeof(girlSavedDate) !== 'undefined' && girlAutoCount > 0) {
    var savedDate = parseInt(girlSavedDate);
    var diff = Math.abs(Date.now() - savedDate); // in milliseconds
    //var autoClickCount = Math.floor(girlMultiplier*(girlGrowthStage+girlAffectionStage)*girlAutoCount*autoClickPower*diff/interval);
    var autoClickCount = Math.floor(girlMultiplier*(1+girlAffectionStage)*girlAutoCount*autoClickPower*diff/interval);
    click(autoClickCount)

    // notify user of auto clicks gained
    //window.alert("Gained "+autoClickCount+" clicks.")
  }

  // make the videos swap for smooth anim
  document.getElementById(clickVideo).classList.remove("invisible");
  setTimeout(function(){
    document.getElementById(clickVideoAlt).classList.add("invisible");
  }, 50);


  // check all
  CheckAll();


  // load ui colors
  SetUiColors();

  // activate dialogue triggers
  dialoguesAllowed = true;

  // tell game that a girl is loaded and autoclicking can go
  girlLoaded = true;
}

var preloadIndex = 0;                  //  set your counter to 1

function preloadImages() {         //  create a loop function
  setTimeout(function() {
    var img=new Image();
    img.src=allImages[preloadIndex];
    document.getElementById("preloadLoadingBar").style.width = (100*(preloadIndex/(allVids.length + allImages.length))+1) + "%";
    currentPreloadingImage.innerHTML = allImages[preloadIndex];
    preloadIndex++;                    //  increment the counter
    if (preloadIndex < allImages.length) {           //  if the counter < 10, call the loop function
      preloadImages();             //  ..  again which will trigger another
    }
    else{
      preloadIndex = 0;
      preloadAnimations();
    }
    img.remove();
  }, 5)
}

function preloadAnimations() {       //  create a loop function
  setTimeout(function() {
    var vid=document.createElement('video');
    vid.src=allVids[preloadIndex];
    document.getElementById("preloadLoadingBar").style.width = (100*((preloadIndex+allImages.length)/(allVids.length + allImages.length))+1) + "%";
    currentPreloadingImage.innerHTML = allVids[preloadIndex];
    preloadIndex++;                    //  increment the counter
    if (preloadIndex < allVids.length) {           //  if the counter < 10, call the loop function
      preloadAnimations();             //  ..  again which will trigger another
    }
    else{
      preloadIndex = 0;
      document.getElementById('LoadingScreenOverlay').classList.add('invisible');
    }
    vid.remove();
  }, 5)
}

function startGameFunction() {
  // preload images
  //document.getElementById('LoadingScreenOverlay').classList.remove('invisible');
  //preloadImages();

  const audio = document.getElementById("background-music");
  audio.volume = 0.2;
  // audio.play();
  document.getElementById('overlay').classList.add('invisible');
  document.getElementById('mainUIId').classList.remove('invisible');
  window.localStorage.setItem('Current UI', 'mainUIId');

  // collect currency from all girls for time passed
  CollectAll();

  // set manual click
  document.getElementById('ClickArea').onclick = function(e) {
    //var clickAmount = currentMultiplier * (currentGirlGrowthStageMultiplier + currentGirlAffectionStageMultiplier) * clickPower;
    var clickAmount = currentMultiplier * (1+currentGirlAffectionStageMultiplier) * clickPower;
    click(clickAmount)

    triggerRandomDialogueManually();

    // show click effect
    // make div
    var node = document.createElement("div");
    node.classList.add("clickEffect");
    node.innerHTML = "+$"+nFormatter(clickAmount,1);
    var x = e.offsetX;
    var y = e.offsetY;
    node.style.left = (x-30+(x/30))+"px";
    node.style.top = (y+30+(y/35))+"px";
    document.getElementById('ClickArea').appendChild(node);
    // set timeout to fade out node
    setTimeout(function () {
      node.classList.add("invisible");
    }, 50);
    // set time to destroy node
    setTimeout(function () {
      node.remove();
    }, 500);
  }

  // set click down
  document.getElementById('ClickArea').onmousedown = function() {
    document.getElementById(clickVideo).classList.add('ClickVideoZoomed');
    document.getElementById('gift-video-neutral').classList.add('ClickVideoZoomed');
    document.getElementById('gift-video-love').classList.add('ClickVideoZoomed');
    document.getElementById('gift-video-hate').classList.add('ClickVideoZoomed');
  }

  // set click mouse out
  document.getElementById('ClickArea').onmouseout = function() {
    document.getElementById(clickVideo).classList.remove('ClickVideoZoomed');
    document.getElementById('gift-video-neutral').classList.remove('ClickVideoZoomed');
    document.getElementById('gift-video-love').classList.remove('ClickVideoZoomed');
    document.getElementById('gift-video-hate').classList.remove('ClickVideoZoomed');
  }

  // set click mouse up
  document.getElementById('ClickArea').onmouseup = function() {
    document.getElementById(clickVideo).classList.remove('ClickVideoZoomed');
    document.getElementById('gift-video-neutral').classList.remove('ClickVideoZoomed');
    document.getElementById('gift-video-love').classList.remove('ClickVideoZoomed');
    document.getElementById('gift-video-hate').classList.remove('ClickVideoZoomed');
  }

  // set auto counter interval
  autoClikcer = setInterval(autoClick, interval);

  // konami code checker
  if (window.localStorage.getItem("KonamiEntered") === null) {
    window.localStorage.setItem("KonamiEntered", "False");
  }

  // keyboard functions
  document.body.addEventListener("keydown", function (e) {
    if (e.keyCode == 113) {
      e.preventDefault();
      const audio = document.getElementById("background-music");
      audio.volume = 0.2;
      if(audio.paused == true){
        audio.play();
        document.getElementById('MusicToggle').innerHTML = "F2: Toggle Music - Music is On";
      }
      else{
        audio.pause();
        document.getElementById('MusicToggle').innerHTML = "F2: Toggle Music - Music is Off";
      }
    }
    else if (e.keyCode == 115) {
      e.preventDefault();
      document.getElementById('keyHelperText').classList.toggle('invisible');
    }
    else if (e.keyCode == 46) {
      e.preventDefault();
      document.getElementById('resetGameConfirmation').classList.remove('invisible');
      // window.localStorage.clear();
      // location.reload();
    }

    if (window.localStorage.getItem("KonamiEntered") == "False"){ // konami code: https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html

      var key = allowedKeys[e.keyCode];
      var requiredKey = konamiCode[konamiCodePosition];

      if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
          EnterGodMode();
          konamiCodePosition = 0;
        }
      } else {
        konamiCodePosition = 0;
      }
    }
    else if (window.localStorage.getItem("KonamiEntered") == "True"){
      var key = allowedKeys[e.keyCode];
      var requiredKey = reverseCode[konamiCodePosition];
      console.log(key)
      console.log(requiredKey)

      if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
          ExitGodMode();
          konamiCodePosition = 0;
        }
      } else {
        konamiCodePosition = 0;
      }
    }
  });
}

function autoClick(){
  if(!girlLoaded){return;}

  var autoClickAmount = 0;
  // loop through each girl and apply autoclick
  Object.entries(girlDictionary).forEach(([girl, value]) => {
    girlMultiplier = parseFloat(girlDictionary[girl]["Parameters"]["Multiplier"]);
    girlAutoCount = parseInt(girlDictionary[girl]["Metadata"]["AutoCount"]);
    girlGrowthStage = parseInt(girlDictionary[girl]["Metadata"]["Stage"]);
    girlAffectionStage = parseInt(girlDictionary[girl]["Metadata"]["AffectionStage"]);
    if (girlAutoCount > 0) {
      //var autoClickCount = Math.floor(girlMultiplier*(girlGrowthStage+girlAffectionStage)*girlAutoCount*autoClickPower);
      var autoClickCount = Math.floor(girlMultiplier*(1+girlAffectionStage)*girlAutoCount*autoClickPower);
      autoClickAmount = autoClickAmount + autoClickCount;
      // mark girl's last saved click
      girlDictionary[girl]["Metadata"]["Saved Date"] = Date.now();
    }
  });
  // save changes to local storage
  globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
  window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
  click(autoClickAmount)
  //return;

  //autoClickAmount = currentMultiplier * (currentGirlGrowthStageMultiplier + currentGirlAffectionStageMultiplier) * autoClickerCount * autoClickPower;
  //click(autoClickAmount);

  if(autoClickAmount == 0){return;}
  // show click effect
  // make div
  var node = document.createElement("div");
  node.classList.add("autoClickEffect");
  node.innerHTML = "+$"+nFormatter(autoClickAmount,1);
  node.style.left = "32%";
  node.style.top = "3.5%";
  document.getElementById('mainUIId').appendChild(node);
  // set timeout to fade out node
  setTimeout(function () {
    node.classList.add("invisible");
  }, 50);
  // set time to destroy node
  setTimeout(function () {
    node.remove();
  }, 500);
}

function click(power){
  currentCount = parseFloat(window.localStorage.getItem('Counter'));
  currentCount = currentCount + power;
  window.localStorage.setItem("Counter", currentCount);
  document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

  // mark girl's last saved click
  girlDictionary[currentGirl]["Metadata"]["Saved Date"] = Date.now();
  // save changes to local storage
  globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
  window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

  CheckAll();
}

function openGirlMenu() {
  document.getElementById("sideGirlMenu").style.width = "16.625em";
}

function closeGirlMenu() {
  document.getElementById("sideGirlMenu").style.width = "0em";
}

function showGirlBonusInfo(girl) {
  document.getElementById("girlBonusInfo").style.transform = "translateX(10.5em)";

  document.getElementById("girlBonusInfoTitle").innerHTML = girl; //girl name
  var retrievedSaveData = JSON.parse(window.localStorage.getItem("GirlDictionary"));
  var girlGrowthLevel = parseInt(retrievedSaveData[girl]["Stage"]);

  //girl description
  var desc = girlDictionary[girl]["Parameters"]["Description"];
  var unlockPrice = parseInt(girlDictionary[girl]["Parameters"]["UnlockCost"]);
  var unlockStatus = retrievedSaveData[girl]["Unlocked"];
  var unlockText = ""
  if(unlockStatus == "True"){
    unlockText = "</br></br>UNLOCKED";
  }
  else if(unlockPrice == 0){
    unlockText = "</br></br>Unlock Cost: FREE";
  }
  else{
    unlockText = "</br></br>Unlock Cost: $"+nFormatter(unlockPrice, 1);
  }
  document.getElementById("girlBonusInfoDescription").innerHTML = desc +unlockText;

  // change girl icon
  var growthType = girlDictionary[girl]["Parameters"]["GrowthType"]
  document.getElementById("girlBonusInfoIcon").setAttribute('src', "Icons/"+growthType+".png");
}

function hideGirlBonusInfo(girl) {
  document.getElementById("girlBonusInfo").style.transform = "translateX(0em)";
}

function openUpgradeMenu() {
  document.getElementById("sideUpgradeMenu").style.width = "16.625em";
}

function closeUpgradeMenu() {
  document.getElementById("sideUpgradeMenu").style.width = "0";
}

function openSMenu() {
  document.getElementById("sideSMenu").style.width = "16.625em";
}

function closeSMenu() {
  document.getElementById("sideSMenu").style.width = "0em";
}

function openGiftMenu() {
  document.getElementById("sideGiftMenu").style.width = "16.625em";
}

function closeGiftMenu() {
  document.getElementById("sideGiftMenu").style.width = "0";
}

function openDateMenu() {
  document.getElementById("sideDateMenu").style.width = "16.625em";
}

function closeDateMenu() {
  document.getElementById("sideDateMenu").style.width = "0em";
}

function toggleProfile() {
  document.getElementById("profileArea").classList.toggle("invisible");
}

function openAchievements() {
  document.getElementById("achievementMenu").style.width = "16.625em";
}

function closeAchievements() {
  document.getElementById("achievementMenu").style.width = "0px";
}

function openAchievementBonusInfo(achievement_id) {

  document.getElementById("achievementBonusInfo").style.transform = "translateX(10.5em)";
  document.getElementById(achievement_id+"Arrow").innerHTML = "&#8249;"; //change to left arrow

  document.getElementById("achivementBonusInfoTitle").innerHTML = achievement_id; //achievement Title
  achievementDict = JSON.parse(window.localStorage.getItem("Achievement Dictionary"));
  document.getElementById("achivementBonusInfoDescription").innerHTML = achievementDict[achievement_id][3]; //achievement Title
}

function closeAchievementBonusInfo(achievement_id) {
  document.getElementById("achievementBonusInfo").style.transform = "translateX(0em)";
  document.getElementById(achievement_id+"Arrow").innerHTML = "&#8250;"; //change to left arrow
}

function openMemories() {
  document.getElementById("memoriesMenu").style.width = "16.625em";
}

function closeMemories() {
  document.getElementById("memoriesMenu").style.width = "0px";
}

function CheckPrices(){
  if (currentCount >= clickPowerPrice){
    document.getElementById("UpgradeClickPower").disabled = false;
  }
  else{
    document.getElementById("UpgradeClickPower").disabled = true;
  }
  if (currentCount >= autoClickPowerPrice){
    document.getElementById("UpgradeAutoClickPower").disabled = false;
  }
  else{
    document.getElementById("UpgradeAutoClickPower").disabled = true;
  }
  if (interval <= 100){
    document.getElementById("UpgradeAutoInterval").disabled = true;
    document.getElementById("upgradePriceSpeed").classList.remove("enMoney");
    document.getElementById("upgradePriceSpeed").innerHTML = "MAX";
  }
  else if (currentCount >= intervalPrice){
    document.getElementById("UpgradeAutoInterval").disabled = false;
  }
  else{
    document.getElementById("UpgradeAutoInterval").disabled = true;
  }
  if (currentCount >= autoCountPrice){
    document.getElementById("UpgradeAutoCount").disabled = false;
  }
  else{
    document.getElementById("UpgradeAutoCount").disabled = true;
  }
}

function CheckLevelUpConditions(){
  var levelUpConditionsMet = false;

  // load expansion stage
  var currentStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  var maxStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxStage"]);

  // edge: if level is max, stop, hide button
  if (currentStage == maxStage){
    document.getElementById("upgradeExpansionButton").style.display = "none";
    document.getElementById("levelUpPrice").style.marginRight = "1.1em";
    document.getElementById("levelUpPrice").innerHTML = "LEVEL MAX";
    return;
  }
  else{
    document.getElementById("upgradeExpansionButton").style.display = "flex";
    document.getElementById("levelUpPrice").style.marginRight = "0em";
  }

  // load level up price
  var nextStage = currentStage + 1;
  var currentLevelUpPrice = parseFloat(girlDictionary[currentGirl]["Requirements"][nextStage]["Price"]);

  // load level up hearts
  var currentHearts = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var heartsRequired = parseFloat(girlDictionary[currentGirl]["Requirements"][nextStage]["Hearts"]);


  if (currentCount >= currentLevelUpPrice && currentHearts >= heartsRequired){
    levelUpConditionsMet = true;
  }

  if (levelUpConditionsMet){
    document.getElementById("upgradeExpansionButton").disabled = false;
  }
  else{
    document.getElementById("upgradeExpansionButton").disabled = true;
  }
}

function CheckAll() {
  // perform gift price checks
  CheckGifts();

  // perform date checks
  CheckDates();

  // initial price button check
  CheckPrices();

  // check level up conditions
  CheckLevelUpConditions();

  // check affection conditions
  CheckAffectionUpConditions();

  // check achievements
  CheckAchievement();

  // check girl prices
  CheckGirlStatus();

  // update profile
  CheckAndUpdateProfile();

  // update special checks
  CheckS();
}

function levelUpGirl() {

  document.getElementById("upgradeExpansionButton").disabled = true;
  var currentStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  var maxStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxStage"]);
  var nextStage = currentStage + 1;
  var currentLevelUpPrice = parseFloat(girlDictionary[currentGirl]["Requirements"][nextStage]["Price"]);

  // pay for level up
  currentCount = currentCount - currentLevelUpPrice;
  window.localStorage.setItem("Counter", currentCount);
  document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

  // update girl stage
  girlDictionary[currentGirl]["Metadata"]["Stage"] = nextStage;

  // save changes to local storage
  globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
  window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

  // load expansion stage
  var currentStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  document.getElementById("expansionStage").innerHTML = currentStage;

  // set current stage multiplier
  currentGirlGrowthStageMultiplier = currentStage;

  // load next level up price
  nextStage = currentStage + 1;
  if(currentStage == maxStage){
    document.getElementById("levelUpPrice").innerHTML = "LEVEL MAX";
  }
  else{
    var currentLevelUpPrice = parseFloat(girlDictionary[currentGirl]["Requirements"][nextStage]["Price"]);
    var currentLevelUpHearts = parseInt(girlDictionary[currentGirl]["Requirements"][nextStage]["Hearts"]);
    document.getElementById("levelUpPrice").innerHTML = "$"+nFormatter(currentLevelUpPrice, 1)+" + "+currentLevelUpHearts+"	&hearts;";
  }

  // hide gift video
  var giftvideo = document.getElementById(activeGiftVideo);
  giftvideo.classList.add("invisible");

  // update gift videos
  document.getElementById("gift-video-neutral").setAttribute('src', "Animations/"+currentGirl+"/"+currentGirlGrowthStageMultiplier+"/Neutral.mp4");
  document.getElementById("gift-video-love").setAttribute('src', "Animations/"+currentGirl+"/"+currentGirlGrowthStageMultiplier+"/Love.mp4");
  document.getElementById("gift-video-hate").setAttribute('src', "Animations/"+currentGirl+"/"+currentGirlGrowthStageMultiplier+"/Hate.mp4");

  // shrink speech bubble
  document.getElementById('giftSpeechBubbleContainer').classList.remove('speechBubblePopUp');

  // update date stage - ASSUMPTION: 5 DATE SPOTS!!!
  var currentDateStage = 1;
  for (var i = 1; i <= 5; i++) {
    if (currentStage >= girlDictionary[currentGirl]["DateStages"][i]){
      currentDateStage = i;
      continue;
    }
    else{
      break;
    }
  }
  girlDictionary[currentGirl]["Metadata"]["DateStage"] = currentDateStage;

  CheckAll();

  // update multipliers
  CheckAndUpdateMultiplierInfo();

  // display level up event
  startEvent("GrowthEvent");
}

function CheckAffectionUpConditions() {

  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var currentGirlMaxAffectionStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxAffectionStage"]);
  var progress = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionProgress"]);
  var currentGirlAffectionGoal = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionGoal"]);

  // edge: if at max affection, return
  if(currentGirlAffectionStage == currentGirlMaxAffectionStage){
    document.getElementById("AffectionUpContainer").style.display = "none";
    document.getElementById("affectionProgress").innerHTML = "MAX";
    document.getElementById("affectionProgress").classList.remove("percentage");
    return;
  }
  else{
    document.getElementById("affectionProgress").style.display = "block";
  }

  // make sure at max progress
  if (100*progress/currentGirlAffectionGoal >= 100){
    document.getElementById("AffectionUpContainer").style.display = "flex";
    // check if affection reqs are met
    var currentGirlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
    var nextAffectionStage = currentGirlAffectionStage + 1;
    var requiredGrowthStage = parseInt(girlDictionary[currentGirl]["AffectionRequirements"][nextAffectionStage]["Growth"]);
    if(currentGirlGrowthStage >= requiredGrowthStage){affectionUpButton
      document.getElementById("affectionMessage").innerHTML = "Affection Up!";
      document.getElementById("affectionUpButton").disabled = false;
    }
    else{
      document.getElementById("affectionMessage").innerHTML = "Req Growth Lvl "+requiredGrowthStage;
      document.getElementById("affectionUpButton").disabled = true;
    }
    return;
  }
  else{
    document.getElementById("AffectionUpContainer").style.display = "none";
  }
}

function affectionUpGirl(){

  document.getElementById("affectionUpButton").disabled = true;
  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var currentGirlMaxAffectionStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxAffectionStage"]);
  var progress = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionProgress"]);
  var currentGirlAffectionGoal = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionGoal"]);

  // zero out progress
  girlDictionary[currentGirl]["Metadata"]["AffectionProgress"] = 0;

  // set new affection stage
  var newAffectionStage = currentGirlAffectionStage + 1;
  girlDictionary[currentGirl]["Metadata"]["AffectionStage"] = newAffectionStage;

  // set affection goal to next stage
  var nextAffectionStage = parseInt(newAffectionStage)+1;
  if (newAffectionStage < currentGirlMaxAffectionStage){
    var newAffectionGoal = parseInt(girlDictionary[currentGirl]["AffectionRequirements"][nextAffectionStage]["AffectionGoal"]);
    girlDictionary[currentGirl]["Metadata"]["AffectionGoal"] = newAffectionGoal;
  }

  // set current affection multiplier
  currentGirlAffectionStageMultiplier = newAffectionStage;

  // update ui
  document.getElementById("affectionStage").innerHTML = newAffectionStage;
  document.getElementById("affectionProgress").innerHTML = (100*0/newAffectionGoal).toFixed(2);

  // save changes to local storage
  globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
  window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

  // hide gift video
  var giftvideo = document.getElementById(activeGiftVideo);
  giftvideo.classList.add("invisible");

  // shrink speech bubble
  document.getElementById('giftSpeechBubbleContainer').classList.remove('speechBubblePopUp');

  // update checks
  CheckAll();
  // update multipliers
  CheckAndUpdateMultiplierInfo();

  // start affection event
  startEvent("AffectionEvent");
}

function CheckGifts() {
  Object.entries(giftDictionary).forEach(([giftId, value]) => {
    if (currentCount >= value["Price"]){
      document.getElementById(giftId).disabled = false;
    }
    else{
      document.getElementById(giftId).disabled = true;
    }
  });
}

function CheckDates() {
  Object.entries(dateDictionary).forEach(([dateId, value]) => {
    if (currentCount >= value["Price"] && currentGirlAffectionStageMultiplier >= value["Affection"]){
      document.getElementById(dateId).disabled = false;
    }
    else{
      document.getElementById(dateId).disabled = true;
    }
  });
}

function CheckS() {
  var sDict = girlDictionary[currentGirl]["S"];
  Object.entries(sDict).forEach(([sID, value]) => {
    if (currentGirlAffectionStageMultiplier >= value["Affection"]){
      document.getElementById(sID).disabled = false;
    }
    else{
      document.getElementById(sID).disabled = true;
    }
  });
}

function CheckAndUpdateMultiplierInfo(){

  var currentGirlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var currentGirlBaseMultiplier = parseFloat(girlDictionary[currentGirl]["Parameters"]["Multiplier"]);
  //var bonus = currentGirlGrowthStageMultiplier + currentGirlAffectionStage;
  var bonus = 1+currentGirlAffectionStage;
  var total = bonus * currentGirlBaseMultiplier;

  // update globals
  currentMultiplier = currentGirlBaseMultiplier;
  currentGirlAffectionStageMultiplier = currentGirlAffectionStage;
  currentGirlGrowthStageMultiplier = currentGirlGrowthStage;

  // update ui
  //document.getElementById('growthMultiplierText').innerHTML = "+"+currentGirlGrowthStageMultiplier;
  //document.getElementById('affectionMultiplierText').innerHTML = "+"+currentGirlAffectionStageMultiplier;
  //document.getElementById('bonusMultiplierText').innerHTML = "&nbsp;&nbsp;"+bonus;
  //document.getElementById('baseMultiplierText').innerHTML = "x"+currentGirlBaseMultiplier;
  document.getElementById('bonusMultiplierText').innerHTML = "x"+bonus;
  document.getElementById('baseMultiplierText').innerHTML = "&nbsp;&nbsp;"+currentGirlBaseMultiplier;
  document.getElementById('totalMultiplierText').innerHTML = "x"+total;

  // update description
  document.getElementById("AutoClickPowerDec").innerHTML =  "$"+nFormatter(autoClickPower, 1)+" / Auto"; //"$"+nFormatter(total*autoClickPower, 1)+" / Auto";
  // update description
  document.getElementById("ClickPowerDec").innerHTML =  "$"+nFormatter(clickPower, 1)+" / Click"; //"$"+nFormatter(total*clickPower, 1)+" / Click";
}

function CheckGirlStatus() {

  Object.entries(girlDictionary).forEach(([girl, value]) => {
    document.getElementById(girl).classList.remove("fakeDisabled");
    document.getElementById(girl).setAttribute('onclick', "loadGirl(this.id)");
    if (girl == currentGirl){ // disable current girl button
      document.getElementById(girl).disabled = true;
    }
    else if (value["Metadata"]["Unlocked"] == "True"){ // if they're unlocked don't disable
      document.getElementById(girl).disabled = false;
    }
    else if (currentCount >= value["Parameters"]["UnlockCost"]){ // if you have enough money, buy them
      document.getElementById(girl).disabled = false;
    }
    else{ // otherwise fake disable, but still allow hover.
      document.getElementById(girl).classList.add("fakeDisabled");
      document.getElementById(girl).setAttribute('onclick', "");
    }
  });
}

function triggerRandomDialogue() {
  if(!dialoguesAllowed){
    setTimeout(triggerRandomDialogue, Math.random() * 30000);
    return;
  }
  var dialogueType = "";
  var dialogueTypeStage;
  if (Math.random() < 0.5){
    dialogueType = "Growth";
    dialogueTypeStage = currentGirlGrowthStageMultiplier;
  }
  else{
    dialogueType = "Affection";
    dialogueTypeStage = currentGirlAffectionStageMultiplier;
  }

  var dialogueArray = girlDictionary[currentGirl]["Dialogue"][dialogueType][dialogueTypeStage];
  // get random text
  var dialogueText = dialogueArray[Math.floor(Math.random()*dialogueArray.length)];


  document.getElementById('dialogueSpeechBubbleText').innerHTML = dialogueText;

  // show popup
  document.getElementById('dialogueSpeechBubbleContainer').classList.add('speechBubblePopUp');

  // hide popup after set time
  setTimeout(function () {
    document.getElementById('dialogueSpeechBubbleContainer').classList.remove('speechBubblePopUp');
  }, 5000);

  setTimeout(triggerRandomDialogue, Math.random() * 30000 + 20000) //
}

function triggerRandomDialogueManually() {
  dialoguesAllowed = false; // disable random dialogues for the time being.
  var dialogueType = "";
  var dialogueTypeStage;
  if (Math.random() < 0.5){
    dialogueType = "Growth";
    dialogueTypeStage = currentGirlGrowthStageMultiplier;
  }
  else{
    dialogueType = "Affection";
    dialogueTypeStage = currentGirlAffectionStageMultiplier;
  }

  var dialogueArray = girlDictionary[currentGirl]["Dialogue"][dialogueType][dialogueTypeStage];
  // get random text
  var dialogueText = dialogueArray[Math.floor(Math.random()*dialogueArray.length)];


  document.getElementById('dialogueSpeechBubbleText').innerHTML = dialogueText;

  // show popup
  document.getElementById('dialogueSpeechBubbleContainer').classList.add('speechBubblePopUp');

  // bool to denote a click just happened. set to false after 2.5s. can be refreshed.
  freshClick = true;
  if(freshClickHandler != null){ // clear timeout handler if it exists
    window.clearTimeout(freshClickHandler);
  }
  freshClickHandler = window.setTimeout(function(){
    freshClick = false;
  }, 2500);

  // hide popup after set time
  if(!haltDialogueClosingTimeout){
    haltDialogueClosingTimeout = true;
    setTimeout(timeoutCloseDialogueBubble, 5000);
  }
}

function timeoutCloseDialogueBubble() {
  if(freshClick){setTimeout(timeoutCloseDialogueBubble, 5000)}
  else{
    document.getElementById('dialogueSpeechBubbleContainer').classList.remove('speechBubblePopUp');
    dialoguesAllowed = true; // reenable random dialogues for the time being.
    haltDialogueClosingTimeout = false;
  }
}

function CheckAndUpdateProfile() {

  var currentGirlGrowthStage = girlDictionary[currentGirl]["Metadata"]["Stage"];
  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var currentGirlMaxAffectionStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxAffectionStage"]);

  // set name
  document.getElementById('profileGirlName').innerHTML = girlDictionary[currentGirl]["Profile"]["FullName"];
  document.getElementById('profileGirlName').style.fontSize = girlDictionary[currentGirl]["Profile"]["FullNameSize"];

  // set bust
  document.getElementById('profileBustImg').setAttribute('src', "Images/"+currentGirl+"/Profiles/"+currentGirlGrowthStage+".png");

  // set description
  document.getElementById('profileGirlDescription').innerHTML = girlDictionary[currentGirl]["Profile"]["Description"][currentGirlGrowthStage];

  // set age
  document.getElementById('profileAge').innerHTML = girlDictionary[currentGirl]["Profile"]["Age"];

  // set Birthday
  document.getElementById('profileBirthday').innerHTML = girlDictionary[currentGirl]["Profile"]["Birthday"];

  // set personality
  if (typeof girlDictionary[currentGirl]["Profile"]["Personality"] == "string"){
    document.getElementById('profilePersonality').innerHTML = girlDictionary[currentGirl]["Profile"]["Personality"];
  }
  else{
    document.getElementById('profilePersonality').innerHTML = girlDictionary[currentGirl]["Profile"]["Personality"][currentGirlGrowthStage];
  }

  // set profileBreast
  if (typeof girlDictionary[currentGirl]["Profile"]["Breasts"] == "string"){
    document.getElementById('profileBreast').innerHTML = girlDictionary[currentGirl]["Profile"]["Breasts"];
  }
  else{
    document.getElementById('profileBreast').innerHTML = girlDictionary[currentGirl]["Profile"]["Breasts"][currentGirlGrowthStage];
  }

  // set profileHeight
  if (typeof girlDictionary[currentGirl]["Profile"]["Height"] == "string"){
    document.getElementById('profileHeight').innerHTML = girlDictionary[currentGirl]["Profile"]["Height"];
  }
  else{
    document.getElementById('profileHeight').innerHTML = girlDictionary[currentGirl]["Profile"]["Height"][currentGirlGrowthStage];
  }


  // set likes
  document.getElementById('profileLikes').innerHTML = girlDictionary[currentGirl]["Profile"]["Likes"];

  // set dislikes
  document.getElementById('profileDislikes').innerHTML = girlDictionary[currentGirl]["Profile"]["Dislikes"];

  // set fave gift
  document.getElementById('profileFavoriteGift').innerHTML = girlDictionary[currentGirl]["Profile"]["FavoriteGift"];

  // set hated gift
  document.getElementById('profileHatedGift').innerHTML = girlDictionary[currentGirl]["Profile"]["HatedGift"];

  // set profileGrowthType
  document.getElementById('profileGrowthType').innerHTML = girlDictionary[currentGirl]["Parameters"]["GrowthType"];

  // additionals
  if(girlDictionary[currentGirl]["Profile"]["Additional1"]["Name"] == "None"){
    document.getElementById('profileAdditional1Container').style.display = "none";
  }
  else{
    document.getElementById('profileAdditional1Container').style.display = "flex";
    document.getElementById('profileAdditional1').innerHTML = girlDictionary[currentGirl]["Profile"]["Additional1"]["Name"]+":";
    document.getElementById('profileAdditional1Size').innerHTML = girlDictionary[currentGirl]["Profile"]["Additional1"][currentGirlGrowthStage];
  }
  if(girlDictionary[currentGirl]["Profile"]["Additional2"]["Name"] == "None"){
    document.getElementById('profileAdditional2Container').style.display = "none";
  }
  else{
    document.getElementById('profileAdditional2Container').style.display = "flex";
    document.getElementById('profileAdditional2').innerHTML = girlDictionary[currentGirl]["Profile"]["Additional2"]["Name"]+":";
    document.getElementById('profileAdditional2Size').innerHTML = girlDictionary[currentGirl]["Profile"]["Additional2"][currentGirlGrowthStage];
  }

  // set profileAutoCount
  document.getElementById('profileAutoCount').innerHTML = girlDictionary[currentGirl]["Metadata"]["AutoCount"];

  // set AffectionProgress
  if(currentGirlAffectionStage == currentGirlMaxAffectionStage){
    document.getElementById('profileAffectionProgress').innerHTML = "MAX";
  }
  else{
    document.getElementById('profileAffectionProgress').innerHTML = girlDictionary[currentGirl]["Metadata"]["AffectionProgress"];
  }

  // set profileAffectionNeeded
  if(currentGirlAffectionStage == currentGirlMaxAffectionStage){
    document.getElementById('profileAffectionNeeded').innerHTML = "MAX";
  }
  else{
    document.getElementById('profileAffectionNeeded').innerHTML = girlDictionary[currentGirl]["Metadata"]["AffectionGoal"];
  }

  // set profileFaveGiftCount
  document.getElementById('profileFaveGiftCount').innerHTML = girlDictionary[currentGirl]["Metadata"]["FavoriteGiftCount"];

  // set profileDislikedGiftCount
  document.getElementById('profileDislikedGiftCount').innerHTML = girlDictionary[currentGirl]["Metadata"]["HatedGiftCount"];

  // set dates
  document.getElementById('profileLineDate1').innerHTML = girlDictionary[currentGirl]["Dates"]["Date1"]["Name"]+" Dates:";
  document.getElementById('profileDate1').innerHTML = girlDictionary[currentGirl]["Metadata"]["DateCount"]["Date1"];
  document.getElementById('profileLineDate2').innerHTML = girlDictionary[currentGirl]["Dates"]["Date2"]["Name"]+" Dates:";
  document.getElementById('profileDate2').innerHTML = girlDictionary[currentGirl]["Metadata"]["DateCount"]["Date2"]
  document.getElementById('profileLineDate3').innerHTML = girlDictionary[currentGirl]["Dates"]["Date3"]["Name"]+" Dates:";
  document.getElementById('profileDate3').innerHTML = girlDictionary[currentGirl]["Metadata"]["DateCount"]["Date3"]
  document.getElementById('profileLineDate4').innerHTML = girlDictionary[currentGirl]["Dates"]["Date4"]["Name"]+" Dates:";
  document.getElementById('profileDate4').innerHTML = girlDictionary[currentGirl]["Metadata"]["DateCount"]["Date4"]
  document.getElementById('profileLineDate5').innerHTML = girlDictionary[currentGirl]["Dates"]["Date5"]["Name"]+" Dates:";
  document.getElementById('profileDate5').innerHTML = girlDictionary[currentGirl]["Metadata"]["DateCount"]["Date5"]
}

function SetUiColors() {

  // set profile area colors
  document.getElementById('profileCardArea').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["ProfileColor"];
  document.getElementById('profileCardArea').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];

  // set ui colors
  document.getElementById('menusOverlay').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["ProfileColor"];
  document.getElementById('menusOverlay').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];

  // set color for openned menus
  document.getElementById('sideUpgradeMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["SideNavColor"];
  document.getElementById('sideUpgradeMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];
  document.getElementById('sideGiftMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["SideNavColor"];
  document.getElementById('sideGiftMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];
  document.getElementById('sideGirlMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["SideNavColor"];
  document.getElementById('sideGirlMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];
  document.getElementById('sideDateMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["SideNavColor"];
  document.getElementById('sideDateMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];
  document.getElementById('achievementMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["SideNavColor"];
  document.getElementById('achievementMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];
  document.getElementById('sideSMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["SideNavColor"];
  document.getElementById('sideSMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];
  document.getElementById('memoriesMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["SideNavColor"];
  document.getElementById('memoriesMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];

  // set bonus info color
  document.getElementById('girlBonusInfo').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["BonusInfoColor"];
  document.getElementById('achievementBonusInfo').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["BonusInfoColor"];

  // set color for achievement popup
  document.getElementById('achievementPopup').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["ProfileColor"];

  // set header color
  document.getElementById('counterContainerHeader').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["HeaderColor"];
  document.getElementById('counterContainerHeader').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];

  // set color for cg gallery
  document.getElementById('cgMenu').style.backgroundColor = girlDictionary[currentGirl]["Ui"]["ProfileColor"];
  document.getElementById('cgMenu').style.borderColor = girlDictionary[currentGirl]["Ui"]["BorderColor"];
}

function CollectAll() {

  if(currentGirl == ""){return;}

  var totalClickCount = 0;
  // update counter for time passed. loop through each girl and apply autoclick
  Object.entries(girlDictionary).forEach(([girl, value]) => {
    girlMultiplier = parseFloat(girlDictionary[girl]["Parameters"]["Multiplier"]);
    girlAutoCount = parseInt(girlDictionary[girl]["Metadata"]["AutoCount"]);
    girlGrowthStage = parseInt(girlDictionary[girl]["Metadata"]["Stage"]);
    girlAffectionStage = parseInt(girlDictionary[girl]["Metadata"]["AffectionStage"]);
    girlSavedDate = girlDictionary[girl]["Metadata"]["Saved Date"];
    if (typeof(girlSavedDate) !== 'undefined' && girlAutoCount > 0) {
      var savedDate = parseInt(girlSavedDate);
      var diff = Math.abs(Date.now() - savedDate); // in milliseconds
      //var autoClickCount = Math.floor(girlMultiplier*(girlGrowthStage+girlAffectionStage)*girlAutoCount*autoClickPower*diff/interval);
      var autoClickCount = Math.floor(girlMultiplier*(1+girlAffectionStage)*girlAutoCount*autoClickPower*diff/interval);
      totalClickCount = totalClickCount + autoClickCount;
      // mark girl's last saved click
      girlDictionary[girl]["Metadata"]["Saved Date"] = Date.now();
      // save changes to local storage
      globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
      window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

      // notify user of auto clicks gained
      //window.alert("Gained "+autoClickCount+" clicks.")
    }
  });
  click(totalClickCount)

  if(totalClickCount == 0){return;}
  // show click effect
  // make div
  var node = document.createElement("div");
  node.classList.add("autoClickEffect");
  node.innerHTML = "+$"+nFormatter(totalClickCount,1);
  node.style.left = "32%";
  node.style.top = "3.5%";
  document.getElementById('mainUIId').appendChild(node);
  // set timeout to fade out node
  setTimeout(function () {
    node.classList.add("invisible");
  }, 50);
  // set time to destroy node
  setTimeout(function () {
    node.remove();
  }, 500);
}

function ToggleEventText() {
  document.getElementById("eventHideTextButton").classList.toggle("withinDateButtonTextVisible");
  document.getElementById("eventHideTextButton").classList.toggle("withinDateButtonTextInvisible");
  document.getElementById("withinEventOverlayContainer").classList.toggle("invisible");
  document.getElementById("eventChangeButtons").classList.toggle("invisible");
}

function ToggleDateText() {
  document.getElementById("datetHideTextButton").classList.toggle("withinDateButtonTextVisible");
  document.getElementById("datetHideTextButton").classList.toggle("withinDateButtonTextInvisible");
  document.getElementById("dateTextOverlayContainer").classList.toggle("invisible");
  document.getElementById("dateChangeButtons").classList.toggle("invisible");
}

function performReset(){
  window.localStorage.clear();
  location.reload();
}

function cancelReset(){
  document.getElementById('resetGameConfirmation').classList.add('invisible');
}

function EnterGodMode() {

  window.localStorage.setItem("KonamiEntered", "True");
  currentCount = currentCount + 1000000000000000000000000000000000000000000000000;
  window.localStorage.setItem("Counter", currentCount);
  document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);
  CheckGirlStatus();
}

function ExitGodMode() {

  window.localStorage.setItem("KonamiEntered", "False");
  currentCount = currentCount - 1000000000000000000000000000000000000000000000000;
  if (currentCount < 0){currentCount = 0;}
  window.localStorage.setItem("Counter", currentCount);
  document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);
  CheckGirlStatus();
}

//----------------------------------------upgrade functions---------------------
function UpgradeClickPowerFunction(){
  if (currentCount >= clickPowerPrice){
    // update current count
    currentCount = currentCount - clickPowerPrice
    window.localStorage.setItem("Counter", currentCount);
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

    // update click power price:
    //clickPowerPrice = Math.floor( Math.pow(clickPowerPrice, 5/6) * Math.pow(10, Math.pow(Math.log10(clickPowerPrice), 1/1.6))  );
    clickPowerPrice = Math.floor(clickPowerPrice*1.5 + Math.pow(10, Math.floor(Math.log10(clickPowerPrice))));
    window.localStorage.setItem("ClickPowerPrice", clickPowerPrice);
    document.getElementById("upgradePriceClickPower").innerHTML =  nFormatter(clickPowerPrice, 1);

    // upgrade click power: x2
    //clickPower = Math.floor(clickPower*1.5 + Math.pow(10, Math.floor(Math.log10(clickPower)))); // clickPower*1.5 + power degree of clickPower. ex: if clickPower = 500, next is 500*1.5 + 100
    clickPower = clickPower + Math.pow(10, Math.floor(Math.log10(clickPower)));
    window.localStorage.setItem('Click Power', clickPower);

    // get total multiplier
    var total = currentMultiplier * (currentGirlAffectionStageMultiplier + currentGirlGrowthStageMultiplier);
    // update description
    document.getElementById("ClickPowerDec").innerHTML =  "$"+nFormatter(clickPower, 1)+" / Click"; //"$"+nFormatter(total*clickPower, 1)+" / Click";
  }
  CheckAll();
}

function UpgradeAutoClickPowerFunction(){
  if (currentCount >= autoClickPowerPrice){
    // update current count
    currentCount = currentCount - autoClickPowerPrice
    window.localStorage.setItem("Counter", currentCount);
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

    // update auto click power price:
    //autoClickPowerPrice = Math.floor( Math.pow(autoClickPowerPrice, 5/6) * Math.pow(10, Math.pow(Math.log10(autoClickPowerPrice), 1/1.6))  );
    autoClickPowerPrice = Math.floor(autoClickPowerPrice*1.5 + Math.pow(10, Math.floor(Math.log10(autoClickPowerPrice))));
    window.localStorage.setItem("AutoClickPowerPrice", autoClickPowerPrice);
    document.getElementById("upgradePriceAutoPower").innerHTML = nFormatter(autoClickPowerPrice, 1);

    // upgrade auto click power: x2
    autoClickPower = autoClickPower + Math.pow(10, Math.floor(Math.log10(autoClickPower)));
    window.localStorage.setItem('Auto Click Power', autoClickPower);

    // get total multiplier
    var total = currentMultiplier * (currentGirlAffectionStageMultiplier + currentGirlGrowthStageMultiplier);
    // update description
    document.getElementById("AutoClickPowerDec").innerHTML =  "$"+nFormatter(autoClickPower, 1)+" / Auto"; //"$"+nFormatter(total*autoClickPower, 1)+" / Auto";
  }
  CheckAll();
}

function UpgradeAutoIntervalFunction(){
  if (currentCount >= intervalPrice){
    // update current count
    currentCount = currentCount - intervalPrice
    window.localStorage.setItem("Counter", currentCount);
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

    // update auto interval:
    intervalPrice = Math.floor(intervalPrice * Math.sqrt(intervalPrice));
    window.localStorage.setItem("IntervalPrice", intervalPrice);
    document.getElementById("upgradePriceSpeed").innerHTML =  nFormatter(intervalPrice, 1);

    // upgrade auto interval.
    if(interval == 1000){
      interval = 500;
    }
    else if(interval == 500){
      interval = 250;
    }
    else if(interval == 250){
      interval = 100;
      document.getElementById("upgradePriceSpeed").innerHTML =  "MAX"
    }
    else{
      interval = interval - 1000;
    }
    window.localStorage.setItem('Interval', interval);

    // update description
    document.getElementById("AutoIntervalDesc").innerHTML =  parseFloat(interval/1000).toFixed(1)+"s";

    // update interval
    clearInterval(autoClikcer);
    autoClikcer = setInterval(autoClick, interval);
  }
  CheckAll();
}

function UpgradeAutoClickerCountFunction(){
  if (currentCount >= autoCountPrice){

    // update current count
    currentCount = currentCount - autoCountPrice
    window.localStorage.setItem("Counter", currentCount);
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

    // update price: floor of: autoprice * square root of autoprice
    autoCountPrice = Math.floor(autoCountPrice * Math.sqrt(autoCountPrice));
    document.getElementById("upgradePriceAutoCount").innerHTML =  nFormatter(autoCountPrice, 1);

    // upgrade click power: +1
    autoClickerCount = autoClickerCount + 1;

    // update description
    document.getElementById("AutoClickerCountDesc").innerHTML =  nFormatter(autoClickerCount, 1);


    // save changes to local storage
    girlDictionary[currentGirl]["Metadata"]["AutoCount"] = autoClickerCount;
    girlDictionary[currentGirl]["Metadata"]["AutoCountUpgradePrice"] = autoCountPrice;
    globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
    window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
  }
  CheckAll();
}

//-------------------------------------gift and date functions------------------------------------------
function giveGift(id) {

  var currentGirlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var currentGirlMaxAffectionStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxAffectionStage"]);
  var currentProgress = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionProgress"]);
  var currentGirlAffectionGoal = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionGoal"]);
  var giftCount = parseInt(girlDictionary[currentGirl]["Gifts"][id]["Count"]);

  var giftPrice = giftDictionary[id]["Price"];
  var giftAffection = girlDictionary[currentGirl]["Gifts"][id]["Affection"];
  var giftStatus = girlDictionary[currentGirl]["Gifts"][id]["Status"];
  if(currentCount >= giftPrice){
    // lock dialogue triggers
    dialoguesAllowed = false;

    // subtract gift price from count
    currentCount = currentCount - giftPrice;
    window.localStorage.setItem("Counter", currentCount);
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

    // add gift to girl's gift count. save to storage
    girlDictionary[currentGirl]["Gifts"][id]["Count"] = giftCount + 1;
    globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
    window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

    // get new affection to current girl
    var newProgress = currentProgress + giftAffection;

    // normalize progress if above goal
    if (newProgress > currentGirlAffectionGoal){
      newProgress = currentGirlAffectionGoal;
    }

    // normalize to zero if below zero
    if (newProgress < 0){
      newProgress = 0;
    }

    // edge: if at max affection, do nothing. only update if not at max
    if(currentGirlAffectionStage != currentGirlMaxAffectionStage){
      // update ui
      document.getElementById("affectionProgress").innerHTML = (100*newProgress/currentGirlAffectionGoal).toFixed(2);

      // save entry to local storage
      girlDictionary[currentGirl]["Metadata"]["AffectionProgress"] = newProgress;
      globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
      window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
    }

    // get random text for gift
    var giftTextArray = girlDictionary[currentGirl]["Gifts"][id]["Text"];
    // get TextType
    var giftTextType= girlDictionary[currentGirl]["Gifts"][id]["TextType"];
    // get random text
    var giftTextAtStage = "";
    if(giftTextType == "Affection"){
      giftTextAtStage = giftTextArray[Math.floor(Math.random()*(currentGirlAffectionStage + 1))];
    }
    else if(giftTextType == "Growth"){
      giftTextAtStage = giftTextArray[Math.floor(Math.random()*currentGirlGrowthStage)];
    }
    else{
      giftTextAtStage = giftTextArray[Math.floor(Math.random()*giftTextArray.length)];
    }

    // display text
    document.getElementById('giftSpeechBubbleContainer').classList.add('speechBubblePopUp');
    if(giftStatus == "Hate"){
      document.getElementById('giftSpeechBubbleText').innerHTML = giftTextAtStage + "<br/><br/><span class='speechBubbleTextAffectionDown'>-" + nFormatter(Math.abs(giftAffection),1) + " Affection </span>";
      // add gift to girl's gift count. save to storage
      girlDictionary[currentGirl]["Metadata"]["HatedGiftCount"] = girlDictionary[currentGirl]["Metadata"]["HatedGiftCount"] + 1;
      globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
      window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
      // get gift video player
      activeGiftVideo = "gift-video-hate";
      document.getElementById('gift-video-love').classList.add("invisible");
      document.getElementById('gift-video-neutral').classList.add("invisible");
    }
    else if (giftStatus == "Love"){
      document.getElementById('giftSpeechBubbleText').innerHTML = giftTextAtStage + "<br/><br/><span class='speechBubbleTextAffectionUp'>+" + nFormatter(giftAffection,1) + " Affection </span>";
      // add gift to girl's gift count. save to storage
      girlDictionary[currentGirl]["Metadata"]["FavoriteGiftCount"] = girlDictionary[currentGirl]["Metadata"]["FavoriteGiftCount"] + 1;
      globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
      window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
      // get gift video player
      activeGiftVideo = "gift-video-love";
      document.getElementById('gift-video-neutral').classList.add("invisible");
      document.getElementById('gift-video-hate').classList.add("invisible");
    }
    else{
      document.getElementById('giftSpeechBubbleText').innerHTML = giftTextAtStage + "<br/><br/><span class='speechBubbleTextAffectionUp'>+" + nFormatter(giftAffection,1) + " Affection </span>";
      // get gift video player
      activeGiftVideo = "gift-video-neutral";
      document.getElementById('gift-video-love').classList.add("invisible");
      document.getElementById('gift-video-hate').classList.add("invisible");
    }

    // play gift video
    var video = document.getElementById(activeGiftVideo);
    video.classList.remove("invisible");
    video.pause();
    video.currentTime = 0;
    video.play();
    // Add a listener to this video, so that when the video ends, the video is "hidden".
    video.addEventListener('ended', function() {
      // hide video
      video.classList.add("invisible");
      // shrink bubble
      document.getElementById('giftSpeechBubbleContainer').classList.remove('speechBubblePopUp');
      // activate dialogue triggers
      dialoguesAllowed = true;
    })

    // update pricing checks
    CheckAll();
  }
}

function goOnDate(id) {

  var currentGirlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["DateStage"]);
  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var dateCount = parseInt(girlDictionary[currentGirl]["Metadata"]["DateCount"][id]);

  var dateCost = parseFloat(dateDictionary[id]["Price"]);
  var dateHearts = parseInt(dateDictionary[id]["Affection"]);

  // get random question for date
  var dateQuestions = girlDictionary[currentGirl]["Dates"][id]["Questions"];
  randomKeyIndex = Math.floor(Math.random()*currentGirlGrowthStage); //only questions up to current growth stage
  // if haven't done the lowest available date, then do it.
  for (var i = 1; i <= currentGirlGrowthStage; i++) {
    if (girlDictionary[currentGirl]["Dates"][id]["Questions"][i.toString()]["HasDone"] == "False"){
      randomKeyIndex = i-1;
      girlDictionary[currentGirl]["Dates"][id]["Questions"][i.toString()]["HasDone"] = "True";
      globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
      window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
      break;
    }
  }
  currentDateQuestionIndex = Object.keys(dateQuestions)[randomKeyIndex];
  var dateDialogueOpenner = girlDictionary[currentGirl]["Dates"][id]["Questions"][currentDateQuestionIndex]["Dialogue"];
  var dateAnswers = girlDictionary[currentGirl]["Dates"][id]["Questions"][currentDateQuestionIndex]["Answers"];

  if (currentCount >= dateCost && currentGirlAffectionStage >= dateHearts){
    // lock dialogue triggers
    dialoguesAllowed = false;

    // pay for date
    currentCount = currentCount - dateCost;
    window.localStorage.setItem("Counter", currentCount);
    document.getElementById('counter').innerHTML = nFormatter(currentCount, 1);

    // add date to girl's date count. save to storage
    girlDictionary[currentGirl]["Metadata"]["DateCount"][id] = dateCount + 1;
    globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
    window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

    // hide all date panel buttons except starting one
    document.getElementById('dateResponse_0').classList.add('invisible');
    document.getElementById('dateResponse_1').classList.add('invisible');
    document.getElementById('dateResponse_2').classList.add('invisible');
    document.getElementById('dateButtonToClosing').classList.add('invisible');
    document.getElementById('dateButtonFinish').classList.add('invisible');
    // show first "next" button
    document.getElementById('dateButtonToQuestions').classList.remove('invisible');
    // set first text
    document.getElementById('withinDateText').innerHTML = dateDialogueOpenner;
    // set date image
    document.getElementById('dateImage').setAttribute('src', "Images/"+currentGirl+"/Dates/"+id+"/"+currentGirlGrowthStage+"/Base.jpg");
    // set date answers
    shuffle(dateAnswers)
    girlDictionary[currentGirl]["Dates"][id]["Questions"][currentDateQuestionIndex]["Answers"] = dateAnswers;
    globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
    window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));
    document.getElementById('dateResponse_0').innerHTML = dateAnswers[0];
    document.getElementById('dateResponse_1').innerHTML = dateAnswers[1];
    document.getElementById('dateResponse_2').innerHTML = dateAnswers[2];
    // activate date panel
    document.getElementById('dateOverlay').classList.remove('invisible');

    // set global current date
    currentDate = id;

    // update pricing checks
    CheckAll();
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function DateToQuestions() {

  document.getElementById('dateResponse_0').classList.remove('invisible');
  document.getElementById('dateResponse_1').classList.remove('invisible');
  document.getElementById('dateResponse_2').classList.remove('invisible');
  document.getElementById('dateButtonToClosing').classList.add('invisible');
  document.getElementById('dateButtonFinish').classList.add('invisible');
  document.getElementById('dateButtonToQuestions').classList.add('invisible');
}

function DateAnswerToResponse(index) {

  document.getElementById('dateResponse_0').classList.add('invisible');
  document.getElementById('dateResponse_1').classList.add('invisible');
  document.getElementById('dateResponse_2').classList.add('invisible');
  document.getElementById('dateButtonToClosing').classList.remove('invisible');
  document.getElementById('dateButtonFinish').classList.add('invisible');
  document.getElementById('dateButtonToQuestions').classList.add('invisible');

  var currentGirlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["DateStage"]);
  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);
  var currentGirlMaxAffectionStage = parseInt(girlDictionary[currentGirl]["Parameters"]["MaxAffectionStage"]);
  var currentProgress = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionProgress"]);
  var currentGirlAffectionGoal = parseFloat(girlDictionary[currentGirl]["Metadata"]["AffectionGoal"]);

  var responseIndex = parseInt(index);
  var answerFromIndex = girlDictionary[currentGirl]["Dates"][currentDate]["Questions"][currentDateQuestionIndex]["Answers"][responseIndex];
  var responseText = girlDictionary[currentGirl]["Dates"][currentDate]["Questions"][currentDateQuestionIndex][answerFromIndex]["Response"];
  var responseReaction = girlDictionary[currentGirl]["Dates"][currentDate]["Questions"][currentDateQuestionIndex][answerFromIndex]["Reaction"];
  var responseAffectionMultiplier = parseFloat(girlDictionary[currentGirl]["Dates"][currentDate]["Questions"][currentDateQuestionIndex][answerFromIndex]["Affection"]);
  var responseAffection = responseAffectionMultiplier * parseFloat(girlDictionary[currentGirl]["Dates"][currentDate]["Price"]);

  // set response text
  if(responseReaction != "Hate"){
    document.getElementById('withinDateText').innerHTML = responseText + "<br/><br/><span class='speechBubbleTextAffectionUp'>+" + nFormatter(responseAffection,1) + " Affection </span>";
  }
  else{
    document.getElementById('withinDateText').innerHTML = responseText + "<br/><br/><span class='dateTextAffectionDown'>-" + nFormatter(Math.abs(responseAffection),1) + " Affection </span>";
  }
  // set date image
  document.getElementById('dateImage').setAttribute('src', "Images/"+currentGirl+"/Dates/"+currentDate+"/"+currentGirlGrowthStage+"/"+responseReaction+".jpg");

  // perform affection adjustments
  // edge: if at max affection, do nothing
  if(currentGirlAffectionStage == currentGirlMaxAffectionStage){
    return;
  }

  // get new affection to current girl
  var newProgress = currentProgress + responseAffection;

  // normalize progress if above goal
  if (newProgress > currentGirlAffectionGoal){
    newProgress = currentGirlAffectionGoal;
  }

  // normalize to zero if below zero
  if (newProgress < 0){
    newProgress = 0;
  }

  // update ui
  document.getElementById("affectionProgress").innerHTML = (100*newProgress/currentGirlAffectionGoal).toFixed(2);

  // save entry to local storage
  girlDictionary[currentGirl]["Metadata"]["AffectionProgress"] = newProgress;
  globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
  window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

  // update pricing checks
  CheckAll();
}

function DateToClosing() {
  document.getElementById('dateResponse_0').classList.add('invisible');
  document.getElementById('dateResponse_1').classList.add('invisible');
  document.getElementById('dateResponse_2').classList.add('invisible');
  document.getElementById('dateButtonToClosing').classList.add('invisible');
  document.getElementById('dateButtonFinish').classList.remove('invisible');
  document.getElementById('dateButtonToQuestions').classList.add('invisible');

  var closingText = girlDictionary[currentGirl]["Dates"][currentDate]["Questions"][currentDateQuestionIndex]["Closing"];
  var currentGirlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["DateStage"]);

  // set closing text
  document.getElementById('withinDateText').innerHTML = closingText;
  // set date image
  var lastPanel = "Base";
  if(girlDictionary[currentGirl]["Dates"][currentDate]["HasAltClosing"].includes(currentGirlGrowthStage)){
    lastPanel = "Closing";
  }
  document.getElementById('dateImage').setAttribute('src', "Images/"+currentGirl+"/Dates/"+currentDate+"/"+currentGirlGrowthStage+"/"+lastPanel+".jpg");
}

function DateFinish() {
  // activate date panel
  document.getElementById('dateOverlay').classList.add('invisible');

  // activate dialogue triggers
  dialoguesAllowed = true;
}

//-------------------------------------CGs------------------------------------------
function showCG(cgItem){
  currentCGDateId = cgItem.substr(0, cgItem.indexOf('_'));
  currentCGStage = parseInt(cgItem.substring(cgItem.indexOf('_') + 1));
  currentCGFile = "Base";
  applyAltClosing = girlDictionary[currentGirl]["Dates"][currentCGDateId]["HasAltClosing"].includes(currentCGStage);
  document.getElementById('cgContentsImage').setAttribute('src', "Images/"+currentGirl+"/Dates/"+currentCGDateId+"/"+currentCGStage+"/"+currentCGFile+".jpg");

  document.getElementById("cgContents").classList.remove("invisible");
  document.getElementById("cgMenu").classList.add("invisible");
}

function CGPrevious() {
  if(applyAltClosing){
    if(currentCGFile == "Base"){
      currentCGFile = "Closing";
    }
    else if(currentCGFile == "Closing"){
      currentCGFile = "Love";
    }
    else if(currentCGFile == "Love"){
      currentCGFile = "Hate";
    }
    else if(currentCGFile == "Hate"){
      currentCGFile = "Neutral";
    }
    else if(currentCGFile == "Neutral"){
      currentCGFile = "Base";
    }
  }
  else{
    if(currentCGFile == "Base"){
      currentCGFile = "Love";
    }
    else if(currentCGFile == "Love"){
      currentCGFile = "Hate";
    }
    else if(currentCGFile == "Hate"){
      currentCGFile = "Neutral";
    }
    else if(currentCGFile == "Neutral"){
      currentCGFile = "Base";
    }
  }
  document.getElementById('cgContentsImage').setAttribute('src', "Images/"+currentGirl+"/Dates/"+currentCGDateId+"/"+currentCGStage+"/"+currentCGFile+".jpg");
}

function CGNext() {
  if(applyAltClosing){
    if(currentCGFile == "Base"){
      currentCGFile = "Neutral";
    }
    else if(currentCGFile == "Neutral"){
      currentCGFile = "Hate";
    }
    else if(currentCGFile == "Hate"){
      currentCGFile = "Love";
    }
    else if(currentCGFile == "Love"){
      currentCGFile = "Closing";
    }
    else if(currentCGFile == "Closing"){
      currentCGFile = "Base";
    }
  }
  else{
    if(currentCGFile == "Base"){
      currentCGFile = "Neutral";
    }
    else if(currentCGFile == "Neutral"){
      currentCGFile = "Hate";
    }
    else if(currentCGFile == "Hate"){
      currentCGFile = "Love";
    }
    else if(currentCGFile == "Love"){
      currentCGFile = "Base";
    }
  }
  document.getElementById('cgContentsImage').setAttribute('src', "Images/"+currentGirl+"/Dates/"+currentCGDateId+"/"+currentCGStage+"/"+currentCGFile+".jpg");
}

function CGFinish() {
  document.getElementById("cgContents").classList.add("invisible");
  document.getElementById("cgMenu").classList.remove("invisible");
}

function openDateCGs() {

  var currentGirlMaxGrowthStage = 5; //only have 5 date locations // parseInt(girlDictionary[currentGirl]["Metadata"]["MaxStage"]);
  var currentGirlDateStage = parseInt(girlDictionary[currentGirl]["Metadata"]["DateStage"]);

  // perform check to make the cg grid; For each dateId
  Object.entries(dateDictionary).forEach(([dateId, value]) => {
    // for each growth stage
    var affectionNeededForDate = girlDictionary[currentGirl]["Dates"][dateId]["Affection"];
    var cgMin = girlDictionary[currentGirl]["Dates"][dateId]["MinStage"];
    for (let i = cgMin; i <= currentGirlMaxGrowthStage; i++) {
      // only enable button if current stage is >= i
      if (currentGirlDateStage >= i && currentGirlAffectionStageMultiplier >= affectionNeededForDate){
        var imgUrl = "Images/"+currentGirl+"/Dates/"+dateId+"/"+i+"/Base.jpg";
        document.getElementById("cgButton_"+dateId+"_"+i).style.backgroundImage = "url('"+imgUrl+"')";
        document.getElementById("cgButton_"+dateId+"_"+i).disabled = false;
      }
      else{
        document.getElementById("cgButton_"+dateId+"_"+i).style.backgroundImage = "url('Images/MissingCG.jpg')";
        document.getElementById("cgButton_"+dateId+"_"+i).disabled = true;
      }
    }
  });

  document.getElementById("cgMenuOverlay").classList.remove("invisible");
}

function closeCGMenu() {
  document.getElementById("cgMenuOverlay").classList.add("invisible");
}

//-------------------------------------events------------------------------------------
function startEvent(type, manualStage = -1) {

  // lock dialogue triggers
  dialoguesAllowed = false;
  document.getElementById('dialogueSpeechBubbleContainer').classList.remove('speechBubblePopUp');
  document.getElementById('giftSpeechBubbleContainer').classList.remove('speechBubblePopUp');

  var currentGirlGrowthStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);
  var currentGirlAffectionStage = parseInt(girlDictionary[currentGirl]["Metadata"]["AffectionStage"]);

  //setup starting index
  currentPanelIndex = 0;

  //set event type
  eventType = type;

  //set event Stage
  if(manualStage != -1){
    eventTypeStage = parseInt(manualStage.substring(manualStage.indexOf('_') + 1));
  }
  else if(eventType=="AffectionEvent"){
    eventTypeStage = currentGirlAffectionStage
  }
  else if(eventType=="GrowthEvent"){
    eventTypeStage = currentGirlGrowthStage
  }

  // get panel
  currentGirlEventDict = girlDictionary[currentGirl][eventType][eventTypeStage];

  // check: if this is null, there's no level up event
  if (currentGirlEventDict == null){
    return;
  }

  var panelKeys = Object.keys(currentGirlEventDict);
  var currentPanel = panelKeys[currentPanelIndex];
  var currentPanelText = currentGirlEventDict[currentPanel]

  // set first event image
  document.getElementById('eventImage').setAttribute('src', "Images/"+currentGirl+"/"+eventType+"/"+eventTypeStage+"/"+currentPanel+".jpg");

  // set event text
  document.getElementById('withinEventText').innerHTML = currentPanelText;

  // show events overlay
  document.getElementById('eventOverlay').classList.remove('invisible');

  // if a Still image (like an inbetween), hide the overlay for this panel. else show.
  if(currentPanel.includes("Skip")){
    EventClose(true);
    return;
  }
  else if(currentPanel.includes("Still")){
    document.getElementById('withinEventOverlayContainer').style.display = "none";
  }
  else{
    document.getElementById('withinEventOverlayContainer').style.display = "flex";
  }

  // check if next panel and update buttons
  CheckAndUpdateEventButtons();
}

function EventNextPanel() {

  //iterate current index
  currentPanelIndex = currentPanelIndex + 1;

  // get panel
  var panelKeys = Object.keys(currentGirlEventDict);
  var currentPanel = panelKeys[currentPanelIndex];
  var currentPanelText = currentGirlEventDict[currentPanel]

  // set event image
  document.getElementById('eventImage').setAttribute('src', "Images/"+currentGirl+"/"+eventType+"/"+eventTypeStage+"/"+currentPanel+".jpg");

  // if a Still image (like an inbetween), hide the overlay for this panel. else show.
  if(currentPanel.includes("Still")){
    document.getElementById('withinEventOverlayContainer').style.display = "none";
  }
  else{
    document.getElementById('withinEventOverlayContainer').style.display = "flex";
  }

  // set event text
  document.getElementById('withinEventText').innerHTML = currentPanelText;

  // check if next panel and update buttons
  CheckAndUpdateEventButtons();
}

function EventPrevPanel() {

  //iterate current index
  currentPanelIndex = currentPanelIndex - 1;

  // get panel
  var panelKeys = Object.keys(currentGirlEventDict);
  var currentPanel = panelKeys[currentPanelIndex];
  var currentPanelText = currentGirlEventDict[currentPanel]

  // set event image
  document.getElementById('eventImage').setAttribute('src', "Images/"+currentGirl+"/"+eventType+"/"+eventTypeStage+"/"+currentPanel+".jpg");

  // if a Still image (like an inbetween), hide the overlay for this panel. else show.
  if(currentPanel.includes("Still")){
    document.getElementById('withinEventOverlayContainer').style.display = "none";
  }
  else{
    document.getElementById('withinEventOverlayContainer').style.display = "flex";
  }

  // set event text
  document.getElementById('withinEventText').innerHTML = currentPanelText;

  // check if next panel and update buttons
  CheckAndUpdateEventButtons();
}

function EventClose(skipped = false) {
  // timeout to clear the event image
  document.getElementById('eventImage').setAttribute('src', "");

  // ensure you can't double click the finish button
  document.getElementById('eventFinishButton').disabled = true;

  var currentStage = parseInt(girlDictionary[currentGirl]["Metadata"]["Stage"]);

  document.getElementById('eventOverlay').classList.add('invisible');
  // ensure girl menu is closed
  closeGirlMenu();

  // get Metadata about whether this events been done before.
  var alreadyCompleted = girlDictionary[currentGirl]["Metadata"]["CompletedEvents"].includes(eventType+"_"+eventTypeStage.toString());
  if(alreadyCompleted){
    // activate dialogue triggers
    dialoguesAllowed = true;
    return;
  }
  else if (!skipped){
    // make note that this event has been done before.
    girlDictionary[currentGirl]["Metadata"]["CompletedEvents"].push(eventType+"_"+eventTypeStage.toString());
    globalSaveData[currentGirl] = girlDictionary[currentGirl]["Metadata"];
    window.localStorage.setItem("GirlDictionary", JSON.stringify(globalSaveData));

    // add to memory log
    addEventToMemoryLog(eventType, eventTypeStage);
  }

  // enable dialogues
  dialoguesAllowed = true;

  if(eventType == "GrowthEvent" && currentStage > 1){
    // special case where we want to disable dialogues before the flash
    dialoguesAllowed = false;

    // show the video masker
    document.getElementById('whiteClickArea').classList.remove('invisible');

    setTimeout(function(){
      // load stage video
      document.getElementById(clickVideo).setAttribute('src', "Animations/"+currentGirl+"/"+currentStage+"/Base.mp4");
    }, 500);


    setTimeout(function(){
      document.getElementById('whiteClickArea').classList.add('invisible');

      // activate dialogue triggers
      dialoguesAllowed = true;
    }, 750);
  }
  else if (eventType == "GrowthEvent"){
    document.getElementById(clickVideo).setAttribute('src', "Animations/"+currentGirl+"/"+currentStage+"/Base.mp4");
  }
}

function CheckAndUpdateEventButtons() {
  var panelKeys = Object.keys(currentGirlEventDict);
  var maxIndex = panelKeys.length - 1;

  // if at max, show finish button. else show next button
  if(maxIndex == 0){
    document.getElementById('eventPrevButton').classList.add('invisible');
    document.getElementById('eventFinishButton').classList.remove('invisible');
    document.getElementById('eventNextButton').classList.add('invisible');
    // ensure you can't double click the finish button
    document.getElementById('eventPrevButton').disabled = true;
    document.getElementById('eventFinishButton').disabled = false;
    document.getElementById('eventNextButton').disabled = true;
  }
  else if(currentPanelIndex == maxIndex){
    document.getElementById('eventNextButton').classList.add('invisible');
    document.getElementById('eventPrevButton').classList.remove('invisible');
    document.getElementById('eventFinishButton').classList.remove('invisible');
    // ensure you can't double click the finish button
    document.getElementById('eventNextButton').disabled = true;
    document.getElementById('eventPrevButton').disabled = false;
    document.getElementById('eventFinishButton').disabled = false;
  }
  else if(currentPanelIndex == 0){
    document.getElementById('eventPrevButton').classList.add('invisible');
    document.getElementById('eventFinishButton').classList.add('invisible');
    document.getElementById('eventNextButton').classList.remove('invisible');
    // ensure you can't double click the finish button
    document.getElementById('eventPrevButton').disabled = true;
    document.getElementById('eventFinishButton').disabled = true;
    document.getElementById('eventNextButton').disabled = false;
  }
  else{
    document.getElementById('eventNextButton').classList.remove('invisible');
    document.getElementById('eventPrevButton').classList.remove('invisible');
    document.getElementById('eventFinishButton').classList.add('invisible');

    document.getElementById('eventNextButton').disabled = false;
    document.getElementById('eventPrevButton').disabled = false;
    document.getElementById('eventFinishButton').disabled = true;
  }
}

function addEventToMemoryLog(eType, cStage) {
  var eventText = "";
  if(eType == "GrowthEvent"){
    if(cStage == 1){
      eventText = "Meeting"
    }
    else{
      eventText = "Growth Event "+(cStage-1);
    }
  }
  else if(eType == "AffectionEvent"){
    eventText = "Affection Event "+cStage;
  }

  var outerContainer = document.createElement("button");
  outerContainer.setAttribute('id', "memory"+eType+"_"+cStage.toString());
  outerContainer.setAttribute('name', eType);
  outerContainer.setAttribute('onclick', "startEvent(this.name, this.id)");
  outerContainer.classList.add('button');
  outerContainer.classList.add('memoryItem');

  var buttonText = document.createElement("span");
  buttonText.innerHTML = eventText;
  buttonText.classList.add('memoryButtonText');

  var achievementArrow = document.createElement("span");
  achievementArrow.classList.add('achievementArrowIcon');
  achievementArrow.innerHTML = "&#8250;";

  outerContainer.appendChild(buttonText);
  outerContainer.appendChild(achievementArrow);

  document.getElementById("memoriesListContainer").appendChild(outerContainer);
}

//--------------------------------achievements-----------------------------------
function activateAchievement(achievementName, popupCloseTimeout = 2000, shadowActivate = false){
  // denote activation
  window.localStorage.setItem("Achievements Currently Activating", parseInt(window.localStorage.getItem("Achievements Currently Activating"))+1);

  // activate in pane
  achievementDict = JSON.parse(window.localStorage.getItem("Achievement Dictionary"));
  document.getElementById(achievementName).setAttribute('onmouseover', "openAchievementBonusInfo(this.id)");
  document.getElementById(achievementName).setAttribute('onmouseout', "closeAchievementBonusInfo(this.id)");
  document.getElementById(achievementName+"Img").setAttribute('src', "Icons/Achievement.png");
  document.getElementById(achievementName+"Title").innerHTML = achievementName;
  document.getElementById(achievementName+"Description").innerHTML = achievementDict[achievementName][2];
  document.getElementById(achievementName+"Arrow").classList.remove('invisible');

  if (shadowActivate == false){
    // popup
    document.getElementById("achievementPopup").style.transform = "translateY(-4.5em)";
    document.getElementById("achievementPopupAName").innerHTML = achievementName;
    setTimeout(function() {
      // close the achievement popup if it's the last one to activate
      if (parseInt(window.localStorage.getItem("Achievements Currently Activating")) == 1){
        document.getElementById("achievementPopup").style.transform = "none";
      }
      window.localStorage.setItem("Achievements Currently Activating", parseInt(window.localStorage.getItem("Achievements Currently Activating"))-1);
    },popupCloseTimeout);

    // update localStorage
    achievementDict[achievementName][0] = "true";
    window.localStorage.setItem("Achievement Dictionary", JSON.stringify(achievementDict));

    // update achievement count
    updateAchievementCount();
  }
}

function updateAchievementCount(){
  achievementDict = JSON.parse(window.localStorage.getItem("Achievement Dictionary"));
  achievementCount = 0;
  Object.keys(achievementDict).forEach(function(key) {
      if (achievementDict[key][0] == "true"){
        achievementCount += 1;
      }
  });

  document.getElementById("numAchievementsEarnedId").innerHTML = achievementCount+"/" +Object.keys(achievementDict).length+" Achievement(s) earned";
  window.localStorage.setItem("Achievement Count", achievementCount);
}

function CheckAchievement() {
  achievementDict = JSON.parse(window.localStorage.getItem("Achievement Dictionary"));
  timeout = 0;

  // Beginning to Click
  if (achievementDict["Beginning to Click"][0] == "false" && currentCount>0){
    //delay achievement if another is proc'd
    setTimeout(function(){
      activateAchievement("Beginning to Click");
    }, timeout);
    timeout += 2500;
  }
}

//--------------------------------Special-----------------------------------
function haveS(sID) {
  currentSID = sID;
  currentSVideoIndex = 0;
  currentSMaxIndex = girlDictionary[currentGirl]["S"][currentSID]["Length"];
  currentSVideoPlayer = "s-videoA";
  document.getElementById("sOverlay").classList.remove("invisible");

  var currentVidSrc = "Animations/"+currentGirl+"/S/"+currentSID+"/"+currentSVideoIndex+".mp4";
  document.getElementById(currentSVideoPlayer).setAttribute('src', currentVidSrc);
  var girlSVidsToNotLoop = girlDictionary[currentGirl]["S"][currentSID]["NoLoop"];

  // set initial loop behavior for 1st panel
  if(girlSVidsToNotLoop.includes(currentSVideoIndex)){
    document.getElementById(currentSVideoPlayer).loop = false;
  }
  else{
    document.getElementById(currentSVideoPlayer).loop = true;
  }

  setNextPrevCurrentSVideo();
}

function setNextPrevCurrentSVideo() {
  // show current video and then preload next ones

  var nextVidPlayer;
  var prevVidPlayer;
  if (currentSVideoPlayer == "s-videoA"){
    nextVidPlayer = "s-videoB";
    prevVidPlayer = "s-videoC";
    document.getElementById("s-videoA").classList.remove("invisible");
    document.getElementById("s-videoB").classList.add("invisible");
    document.getElementById("s-videoC").classList.add("invisible");
  }
  else if (currentSVideoPlayer == "s-videoB"){
    nextVidPlayer = "s-videoC";
    prevVidPlayer = "s-videoA";
    document.getElementById("s-videoB").classList.remove("invisible");
    document.getElementById("s-videoC").classList.add("invisible");
    document.getElementById("s-videoA").classList.add("invisible");
  }
  else {
    nextVidPlayer = "s-videoA";
    prevVidPlayer = "s-videoB";
    document.getElementById("s-videoC").classList.remove("invisible");
    document.getElementById("s-videoB").classList.add("invisible");
    document.getElementById("s-videoA").classList.add("invisible");
  }

  document.getElementById(currentSVideoPlayer).currentTime = 0;
  document.getElementById(currentSVideoPlayer).play();

  var nextIndex = currentSVideoIndex + 1;
  var prevIndex = currentSVideoIndex - 1;

  var nextVidSrc = "Animations/"+currentGirl+"/S/"+currentSID+"/"+nextIndex+".mp4";
  var prevVidSrc = "Animations/"+currentGirl+"/S/"+currentSID+"/"+prevIndex+".mp4";

  if (nextIndex == currentSMaxIndex){
    nextVidSrc = "";
    document.getElementById("nextSButton").classList.add("invisible");
    document.getElementById("nextSButton").disabled = true;
  }
  else{
    document.getElementById("nextSButton").classList.remove("invisible");
    document.getElementById("nextSButton").disabled = false;
  }
  if (prevIndex == -1){
    prevVidSrc = "";
    document.getElementById("previousSButton").classList.add("invisible");
    document.getElementById("previousSButton").disabled = true;
  }
  else{
    document.getElementById("previousSButton").classList.remove("invisible");
    document.getElementById("previousSButton").disabled = false;
  }
  document.getElementById(nextVidPlayer).setAttribute('src', nextVidSrc);
  document.getElementById(prevVidPlayer).setAttribute('src', prevVidSrc);

  // get vids to auto play and to not autoplay
  var girlSVidsToNotLoop = girlDictionary[currentGirl]["S"][currentSID]["NoLoop"];
  if(girlSVidsToNotLoop.includes(nextIndex)){
    document.getElementById(nextVidPlayer).loop = false;
  }
  else{
    document.getElementById(nextVidPlayer).loop = true;
  }
  if(girlSVidsToNotLoop.includes(prevIndex)){
    document.getElementById(prevVidPlayer).loop = false;
  }
  else{
    document.getElementById(prevVidPlayer).loop = true;
  }
}

function nextSVid() {
  currentSVideoIndex = currentSVideoIndex + 1;

  if (currentSVideoPlayer == "s-videoA"){
    currentSVideoPlayer = "s-videoB";
  }
  else if (currentSVideoPlayer == "s-videoB"){
    currentSVideoPlayer = "s-videoC";
  }
  else {
    currentSVideoPlayer = "s-videoA";
  }

  setNextPrevCurrentSVideo();
}

function prevSVid() {
  currentSVideoIndex = currentSVideoIndex - 1;

  if (currentSVideoPlayer == "s-videoA"){
    currentSVideoPlayer = "s-videoC";
  }
  else if (currentSVideoPlayer == "s-videoB"){
    currentSVideoPlayer = "s-videoA";
  }
  else {
    currentSVideoPlayer = "s-videoB";
  }
  setNextPrevCurrentSVideo();
}

function closeS() {
  document.getElementById("sOverlay").classList.add("invisible");
}

//-------------------------------------------------------------------------------
function nFormatter(num, digits) { //https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "q" },
    { value: 1e18, symbol: "Q" },
    { value: 1e21, symbol: "s" },
    { value: 1e24, symbol: "S" },
    { value: 1e27, symbol: "O" },
    { value: 1e30, symbol: "N" },
    { value: 1e33, symbol: "d" },
    { value: 1e36, symbol: "U" },
    { value: 1e39, symbol: "D" },
  ];
  if (num > (1000 * lookup[Object.keys(lookup).length - 1].value)){ //do scientific notation if larger than largest value
    return Number.parseFloat(num).toExponential(2).replace('+', '');
  }
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) { // otherwise find item from lookup and append string text
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
}

function createAchievements(){
  var achievementDictionary = {
    // achievement Name: earned?, hint, description, bonus text
    "Beginning to Click": ["false", "Try clicking her...", "Gain a dollar from clicking.", "Huzzah! You clicked and got cash!"],
  };

  // set achievement count
  document.getElementById("numAchievementsEarnedId").innerHTML = "0/" +Object.keys(achievementDictionary).length+" Achievement(s) earned";

  // create achievements panel
  for (let achivementName in achievementDictionary) {
    var outerContainer = document.createElement("div");
    outerContainer.setAttribute('id', achivementName);
    outerContainer.classList.add('achievementContainer');

    var trophyIcon = document.createElement("img");
    trophyIcon.setAttribute('id', achivementName+"Img");
    trophyIcon.setAttribute('src', "Icons/AchievementOff.png");
    trophyIcon.classList.add('achievementImg');

    var achievementTextContainer = document.createElement("div");
    achievementTextContainer.classList.add('achievementTextContainer');

    var achievementTitle = document.createElement("span");
    achievementTitle.setAttribute('id', achivementName+"Title");
    achievementTitle.classList.add('achievementTitle');
    achievementTitle.innerHTML = "???";

    var achievementDesc = document.createElement("span");
    achievementDesc.setAttribute('id', achivementName+"Description");
    achievementDesc.classList.add('achievementDescription');
    achievementDesc.innerHTML = achievementDictionary[achivementName][1];

    var achievementArrow = document.createElement("span");
    achievementArrow.setAttribute('id', achivementName+"Arrow");
    achievementArrow.classList.add('achievementArrowIcon');
    achievementArrow.classList.add('invisible');
    achievementArrow.innerHTML = "&#8250;";

    achievementTextContainer.appendChild(achievementTitle);
    achievementTextContainer.appendChild(achievementDesc);
    outerContainer.appendChild(trophyIcon);
    outerContainer.appendChild(achievementTextContainer);
    outerContainer.appendChild(achievementArrow);

    document.getElementById("achievementListID").appendChild(outerContainer);
  }

  // save the dict into localstorage if first time
  if (window.localStorage.getItem("Achievement Dictionary") == null){
    window.localStorage.setItem("Achievement Dictionary", JSON.stringify(achievementDictionary));
  }
}

function createGiftDictionary() {
  var dict = {
    "Gift1": {
      "Name": "Flowers",
      "Price": 10
    },
    "Gift2": {
      "Name": "Chocolates",
      "Price": 100
    },
    "Gift3": {
      "Name": "Plushie",
      "Price": 500
    },
    "Gift4": {
      "Name": "Book",
      "Price": 1e3
    },
    "Gift5": {
      "Name": "Bra",
      "Price": 500e3
    },
    "Gift6": {
      "Name": "Perfume",
      "Price": 1e6
    },
    "Gift7": {
      "Name": "Handbag",
      "Price": 500e6
    },
    "Gift8": {
      "Name": "Phone",
      "Price": 1e9
    },
    "Gift9": {
      "Name": "Painting",
      "Price": 500e9
    },
    "Gift10": {
      "Name": "Lingerie",
      "Price": 1e12
    },
    "Gift11": {
      "Name": "Necklace",
      "Price": 500e12
    },
    "Gift12": {
      "Name": "Ring",
      "Price": 1e15
    }
  }
  return dict;
}

function createDateDictionary() {
  var dict = {
    "Date1": {
      "Name": "Cafe",
      "Price": 20,
      "Affection": 0 // as in necessary affection level
    },
    "Date2": {
      "Name": "Shopping",
      "Price": 2e2,
      "Affection": 1 // as in necessary affection level
    },
    "Date3": {
      "Name": "Theme Park",
      "Price": 2e5,
      "Affection": 2 // as in necessary affection level
    },
    "Date4": {
      "Name": "Beach",
      "Price": 2e8,
      "Affection": 3 // as in necessary affection level
    },
    "Date5": {
      "Name": "Fancy Dinner",
      "Price": 2e11,
      "Affection": 4 // as in necessary affection level
    },
  }
  return dict;
}

function createSaveData() {
  var saveData = {
    "Blair": {
      "Unlocked": "False", // unlocked the girl?
      "AutoCount": 0, // how many autoclickers?
      "AffectionStage": 0, // affection stage/level
      "AffectionProgress": 0, // progress towards next affection stage
      "Stage": 1, // growth level
      "FavoriteGiftCount": 0,
      "HatedGiftCount": 0,
      "SCount": 0,
      "CompletedEvents": [],
      "DateStage": 1, // indicates the growth cg stage used for dates
      "DateCount": {
        "Date1": 0, // keep count of dates
        "Date2": 0,
        "Date3": 0,
        "Date4": 0,
        "Date5": 0,
      },
      //----------- factors to set----------
      "AffectionGoal": 200,  // how much affection needed for next stage. Listed should be the same as the first one
      "AutoCountUpgradePrice": 100, // tracks price of auto count upgrade. listed here is starting price
    },
    "Jennifer": {
      "Unlocked": "False", // unlocked the girl?
      "AutoCount": 0, // how many autoclickers?
      "AffectionStage": 0, // affection stage/level
      "AffectionProgress": 0, // progress towards next affection stage
      "Stage": 1, // growth level
      "FavoriteGiftCount": 0,
      "HatedGiftCount": 0,
      "SCount": 0,
      "CompletedEvents": [],
      "DateStage": 1, // indicates the growth cg stage used for dates
      "DateCount": {
        "Date1": 0, // keep count of dates
        "Date2": 0,
        "Date3": 0,
        "Date4": 0,
        "Date5": 0,
      },
      //----------- factors to set----------
      "AffectionGoal": 10,  // how much affection needed for next stage. Listed should be the same as the first one
      "AutoCountUpgradePrice": 100e1, // tracks price of auto count upgrade. listed here is starting price
    },
    "Henriette": {
      "Unlocked": "False", // unlocked the girl?
      "AutoCount": 0, // how many autoclickers?
      "AffectionStage": 0, // affection stage/level
      "AffectionProgress": 0, // progress towards next affection stage
      "Stage": 1, // growth level
      "FavoriteGiftCount": 0,
      "HatedGiftCount": 0,
      "SCount": 0,
      "CompletedEvents": [],
      "DateStage": 1, // indicates the growth cg stage used for dates
      "DateCount": {
        "Date1": 0, // keep count of dates
        "Date2": 0,
        "Date3": 0,
        "Date4": 0,
        "Date5": 0,
      },
      //----------- factors to set----------
      "AffectionGoal": 1000,  // how much affection needed for next stage. Listed should be the same as the first one
      "AutoCountUpgradePrice": 100e2, // tracks price of auto count upgrade. listed here is starting price
    },
  }
  return saveData;
}

function createGirlDictionary() {
  var latestGirlDictionary = {
    //stage, multiplier, description
    "Blair": { // Flow: G1*(start) -> G2* -> A1 -> G3 -> G4* -> A2 -> A3 -> G5 -> G6* -> A4 -> G7 -> G8* -> A5 //* is event growth
      "Metadata": {},
      "Parameters": {
        //----------- factors to set----------
        "DatesEnabled": "True",
        "SEnabled": "True",
        "MaxAffectionStage": 5, // max possible affection level
        "MaxStage": 8, // max possible growth stage
        "UnlockCost": 0,
        "Multiplier": 1, // inherent multiplier girl has. Ie, the Base Multiplier
        "Description": "Your neighbor and childhood friend.", // desc shown for the button
        "GrowthType": "Breast", // growth type
      },
      "Ui":{
        "ProfileColor": "#6e7bcc",
        "BorderColor": "#1a1f57",
        "HeaderColor": "#c4d6ff",
        "SideNavColor": "#6c748c",
        "BonusInfoColor": "#9fa9c2",
      },
      "Profile":{
        "FullName":"Blair Ryerson", // full name to display
        "FullNameSize": "3em", // change size of font for full name if too long. 2em is a good option if too long
        "Age": 21,
        "Birthday": "October 12",
        "Height": "5' 6\"",
        "Breasts": {
          "1": "A-Cup", //29A bwh: 29-25-33
          "2": "DD-Cup/ E-Cup", //30E bwh: 33-25-33
          "3": "H-Cup", // in between: 31H: 36-26-33
          "4": "K-Cup", //32K bwh: 39-25-33
          "5": "N-Cup", // in between: 33N: 42-26-33
          "6": "R-Cup", //34R bwh: 46-25-33
          "7": "W-Cup", // in between: 35W: 51-26-33
          "8": "ZZZ-Cup/ B-HyperCup", // \-Cup LMAO. bwh: 57-25-33. Technically a ZZZ-Cup indicating 2 more than Z cup. it's a 28.9inch differential. Convert to hyper cup (convert to ft not inches).
        },
        "Description": {  // can be longer. changes with growth stage
          "1": "Your neighbor and childhood friend. Insecure about the small size of her breasts, but tries not to let it show.",
          "2": "Your neighbor and childhood friend. Suprised by her sudden breast growth, she's been a little cautious around you as of late.",
          "3": "Your neighbor and childhood friend. Suprised by her sudden breast growth, she's been a little cautious around you as of late.",
          "4": "Your neighbor and childhood friend. Fully embracing you and your new powers, she enjoys the life of a busty babe and looks forward to her next bout of growth.",
          "5": "Your neighbor and childhood friend. Fully embracing you and your new powers, she enjoys the life of a busty babe and looks forward to her next bout of growth.",
          "6": "Your neighbor and childhood friend. Perhaps a little overzealous, she begins to face deeper struggles with her breasts and herself.",
          "7": "Your neighbor and childhood friend. Perhaps a little overzealous, she begins to face deeper struggles with her breasts and herself.",
          "8": "Your neighbor, childhood friend, and now girlfriend. After reconnecting with her, you've given her the breasts of her dreams!",
        },
        "Likes": "Coffee and live music",
        "Dislikes": "Bugs, tardieness",
        "FavoriteGift": "Flowers", // favorite gift. receives a * 2 multiplier
        "HatedGift": "Chocolates", // least fave gift. receives a negative * 2 multiplier
        "Personality": "Girl Next Door", // Personality description
        "Additional1":{
          "Name": "None",
        }, // additional profile entry
        "Additional2":{
          "Name": "None",
        }, // additional profile entry 2
      },
      "Gifts":{
        "Gift1": { //flowers
          "Status": "Love", // gives double return .
          "Affection": 10 * 1.1 * 2, // next girl -> 10e3 instead of just 10
          "TextType": "Flat", // text is random
          "Text": ["Awww, I love flowers!", "These flowers smell amazing, thank you!", "Flowers are my absolute favorite!"],
          "Count": 0
        },
        "Gift2": { //chocolates
          "Status": "Hate", // half as loss
          "Affection": -1 * 100 * 1.2 / 2,
          "TextType": "Flat", // text is random
          "Text": ["These chocolates are too sweet...", "I'd rather have caramel..."],
          "Count": 0
        },
        "Gift3": { //plushie
          "Status": "Neutral", // 1.x where x is gift number. this way higher priced gifts are technically better returns on investment for affection amounts
          "Affection": 500 * 1.3,
          "TextType": "Flat", // text is random
          "Text": ["Awww, this plushie is so cute!", "Heheh, I'll name him Beary"],
          "Count": 0
        },
        "Gift4": { //book
          "Status": "Neutral",
          "Affection": 1e3 * 1.4,
          "TextType": "Flat", // text is random
          "Text": ["I'm more of a mystery fan, but that book was good too.", "That was a fun short read"],
          "Count": 0
        },
        "Gift5": { //bra
          "Status": "Neutral",
          "Affection": 500e3 * 1.5,
          "TextType": "Growth", // text is random up to growth level
          "Text": [
            "I'm not too picky with bra styles. Silk, sport, lingerie, they can all be cute!",
            "Bra shopping can be pretty difficult.",
            "Bra shopping can be pretty difficult.",
            "Fits a little snug, but it's so cute I want to keep wearing it!",
            "Fits a little snug, but it's so cute I want to keep wearing it!",
            "Thanks! My boobs were overflowing in my old ones",
            "Thanks! My boobs were overflowing in my old ones",
            "I can't believe you found a bra my size! Please tell me where you bought it!"],
          "Count": 0
        },
        "Gift6": { //perfume
          "Status": "Neutral",
          "Affection": 1e6 * 1.6,
          "TextType": "Flat", // text is random
          "Text": ["Ohhh, this smells nice", "Ahhh, smells like flowers!"],
          "Count": 0
        },
        "Gift7": { //handbag
          "Status": "Neutral",
          "Affection": 500e6 * 1.7,
          "TextType": "Flat", // text is random
          "Text": ["Gosh I better take good care of this bag!", "What a cute bag, thanks!"],
          "Count": 0
        },
        "Gift8": { //phone
          "Status": "Neutral",
          "Affection": 1e9 * 1.8,
          "TextType": "Flat", // text is random
          "Text": ["Wow, is this the newest model?", "The camera on here is so cool!"],
          "Count": 0
        },
        "Gift9": { //painting
          "Status": "Neutral",
          "Affection": 500e9 * 1.9,
          "TextType": "Flat", // text is random
          "Text": ["I wonder what the artist was thinking", "I don't know if I get it... but it's a pretty painting!", "This painting makes me feel... something?"],
          "Count": 0
        },
        "Gift10": { //Lingerie
          "Status": "Neutral",
          "Affection": 1e12 * 2,
          "TextType": "Growth", // text is random up to growth level
          "Text": [
            "This lingerie would make my butt look cute",
            "Is it true that lingerie is sexier than being naked?",
            "Is it true that lingerie is sexier than being naked?",
            "Finding cute lingerie my size is a struggle",
            "Finding cute lingerie my size is a struggle",
            "I feel so sexy in this top! I'm stretching it out a bit though",
            "Sometimes it's easier for me to just be nude, but this lingerie fits perfectly!",
            "Lingerie is nice, but I like seeing my amazing bust bare!"],
          "Count": 0
        },
        "Gift11": { //Necklace
          "Status": "Neutral",
          "Affection": 500e12 * 2.1,
          "TextType": "Flat", // text is random
          "Text": ["Such a pretty necklace", "I'll be sure not to lose this necklace!"],
          "Count": 0
        },
        "Gift12": { //Ring
          "Status": "Neutral",
          "Affection": 1e15 * 2.2,
          "TextType": "Affection", // text is random up to affection level
          "Text": ["Woah, isn't that expensive?", "Getting such a pretty ring, thank you!", "Is that opal in the ring? That's my birthstone!", "A nipple ring is a little... oh wait!", "A-a ring!? Does that mean... well, if it's you", "From my heart to my massive breasts, I am all yours"],
          "Count": 0
        }
      },
      "Dates":{
        "Date1":{
          "MinStage": 1, //indicates the lowest growth stage CG
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Cafe",
          "Price": 20,
          "Affection": 0,
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "Wow, I haven't been here in ages! I remember when we'd come here for coffee after class everyday. My order hasn't really changed though - Do you still remember my order?",
              "Answers": ["Caramel Machiatto! With an extra shot.", "A cafe mocha? Everyone loves a cafe mocha!", "Ummm... the double fudge sundae frappe with extra syrup?"],
              "Closing": "Oh shoot, look at the time! I've got to get going, but text me later, 'kay? Thanks for the drink!",
              "Caramel Machiatto! With an extra shot.": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha, you do remember! Gosh, that extra shot always got me through the day."
              },
              "A cafe mocha? Everyone loves a cafe mocha!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "That's a pretty safe choice, but it's a little boring. I like caramel more than chocolate, remember?"
              },
              "Ummm... the double fudge sundae frappe with extra syrup?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Uhhh, that's a little too sweet, even for me."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "Nothing beats relaxing with some afternoon tea. Though, I wish my shoulders weren't aching so much - Any tips for helping relax the shoulders?",
              "Answers": ["I give the best shoulder massages!", "A nice hot shower should do the trick", "A breast reduction would help"],
              "Closing": "Gosh, this tea was fantastic. Feels like all my worries have just washed away! I should get going, but I'll catch you later!",
              "I give the best shoulder massages!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "That's a little much... but I just might take you up on the offer."
              },
              "A nice hot shower should do the trick": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "True! That'd be a great way to relax the muscles."
              },
              "A breast reduction would help": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Haha, very funny..."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "You know, this cafe really has the most comfy seats, don't you think? I could just lean back and fall asleep. Though, I'd be scared about perverts trying to cop a feel...",
              "Answers": ["Don't worry, I'll make sure you sleep safe and sound.", "Fear not, I shall protect thou and thy bust!", "I don't blame them, I'd cop a feel too!"],
              "Closing": "Maybe I'll stick to sleeping at home for now though. You're welcome to come by as well!",
              "Fear not, I shall protect thou and thy bust!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha, you're so silly! But thanks, that means a lot."
              },
              "Don't worry, I'll make sure you sleep safe and sound.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Thanks, I'm feeling sleepy already!"
              },
              "I don't blame them, I'd cop a feel too!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Excuse me?"
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "Now that my boobs are so heavy, it really helps to rest them. Usually I use a table, but sometimes even that doesn't work. I wonder what I should do.",
              "Answers": ["You can rest them right here baby!", "Maybe a harness?", "The floor would certainly be big enough!"],
              "Closing": "Well, I'm sure I'll figure something out eventually. In the meantime I'm gonna go enjoy their size some more... want to come with?",
              "You can rest them right here baby!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "W-We're in public silly! Maybe back at home though..."
              },
              "Maybe a harness?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "If I can find any my size!"
              },
              "The floor would certainly be big enough!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "The floor's kinda gross though..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "A while ago, I never would have expected to run into you again. And I never would have expected to be back in this same cafe again, except with my huge bare tits resting on my lap. It's funny how life works, isn't it?",
              "Answers": ["I'm truly thankful that we got to reconnect.", "Didn't expect to a super busty GF, but I definitely love it!", "Yep, pretty cool."],
              "Closing": "Why don't we head back and see where life takes us next? If it's with you, I'm sure it'll be an adventure",
              "I'm truly thankful that we got to reconnect.": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Aww, you're so sweet!"
              },
              "Didn't expect to a super busty GF, but I definitely love it!": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "All natural and all yours babe. Well, close to natural, thanks to you."
              },
              "Yep, pretty cool.": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "Life is pretty cool!"
              }
            },
          },
        },
        "Date2": {
          "MinStage": 2, //indicates the lowest growth stage CG
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Shopping",
          "Price": 100,
          "Affection": 1, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "This shop has some pretty dresses! A lot in my favorite color at that.",
              "Answers": ["Oh, like that blue dress?", "Just like the plain white one!", "Oh yeah, the cheetah print fits you well."],
              "Closing": "Hmmm, maybe I'll pick a dress out online instead though, it'd be cheaper.",
              "Oh, like that blue dress?": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You remembered! I know it's basic, but I just love the calm feeling of blue. Plus it reminds me of the beach!"
              },
              "Just like the plain white one!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Oh, white's pretty too! But it's a little too plain, at least compared to the blue one."
              },
              "Oh yeah, the cheetah print fits you well.": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Ummm, you have... interesting taste."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "They've got some pretty good deals at this shop, but it's not for anything I like. I wonder what I should do...",
              "Answers": ["If you ask nicely I'm sure they'll give you a discount", "Swap the price tag with a sale item", "Maybe if you flash the staff they'll give you a discount!"],
              "Closing": "Oh what do you know, this one is 20% off! I'll be back, I'm gonna go try it on.",
              "Swap the price tag with a sale item": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "That... that just might work! But keep quiet HAHA!~"
              },
              "If you ask nicely I'm sure they'll give you a discount": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Mmm, I guess, but I kind of doubt it."
              },
              "Maybe if you flash the staff they'll give you a discount!": {
                "Reaction": "Hate",
                "Affection":  -2.5, // 2.5 times loss
                "Response": "Oh my gosh, are you crazy!?"
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "Hey look at this find, I think it looks pretty cute! A little tight around the chest though, what do you think?",
              "Answers": ["The color looks good on you!", "Well, if it can fit your boobs, I say go for it!", "Meh, not worth it"],
              "Closing": "I think I'll buy it afterall, wanna meet me over at checkout? Oh, or I can wait for you if you find anything for yourself!",
              "Well, if it can fit your boobs, I say go for it!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "True! Afterall, that's harder and harder to find nowadays."
              },
              "The color looks good on you!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "I know right! But I'm not sure about the fit."
              },
              "Meh, not worth it": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "You think so? I thought it was a great find..."
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "It's a little embarassing to admit, but I pretty much stick to the plus size section nowadays. And even then I don't really find much. People don't question me about it of course since you can see my massive tiddies from the back! But I don't know, maybe it's pointless.",
              "Answers": ["There's nothing wrong with plus size! Especially if it have great finds!", "Some baggier clothes might help hide your breasts if you're embarassed", "Aww, don't feel down. Want to try a different store?"],
              "Closing": "There's actually another plus size store next door, want to check that out together?",
              "There's nothing wrong with plus size! Especially if it have great finds!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, you're right! And some stuff in this section is actually cuter... and sexier!"
              },
              "Aww, don't feel down. Want to try a different store?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah, that might help."
              },
              "Some baggier clothes might help hide your breasts if you're embarassed": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "W-Why would you say that..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Babe, don't freak out, but I think I may have just ripped through all the tops I tried on. What should I do!",
              "Answers": ["Meh, don't sweat it, I'll pay it off.", "Let's explain together, they'll surely understand", "You shouldn't have tried on all those tops!"],
              "Closing": "Oh! The manager just came up to me and said I don't need to pay for anything, how kind! I saw him walking away with a massive nosebleed though, hopefully he's ok.",
              "Let's explain together, they'll surely understand": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You really think so? Will you come with me?"
              },
              "Meh, don't sweat it, I'll pay it off.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "A-Are you sure!? That's a lot, really you don't have to."
              },
              "You shouldn't have tried on all those tops!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Well, when you're this size it helps to test out everything before buying. I thought you of all people would understand."
              }
            },
          },
        },
        "Date3": {
          "MinStage": 3, //indicates the lowest growth stage CG
          "HasAltClosing": [3], // indicates which growth stages feature an alt closing CG
          "Name": "Theme Park",
          "Price": 200,
          "Affection": 2, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "Wow, it's been AGES since I've been to Foreverland. It's a little sad to see how much it's changed though. Is my favorite ride still here?",
              "Answers": ["Super Speedster!? It's still here, let's go!", "Hmmm, not sure if Caro-soul is up anymore.", "You mean bug blasters? They tore that down last year.."],
              "Closing": "Why don't we check out the Forever Wheel later? I miss the view from top and want to see the city skyline from there!",
              "You mean bug blasters? They tore that down last year..": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Aww man, I have great memories of us riding that ride together. Guess we'll just have to make new ones on something else!"
              },
              "Hmmm, not sure if Caro-soul is up anymore.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Oh, I didn't like the Caro-soul that much, so it's whatever."
              },
              "Super Speedster!? It's still here, let's go!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "H-Hell no! You know that ride scares the ever living HELL out of me!"
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "Oh my gosh, I totally forgot that Bunbun and the Forever Friends are here! Please, you have to take a picture of us!",
              "Answers": ["Gotchya, don't forget to say tittyyyyy~", "Aren't you a little old to like the Forever Friends?", "Sure! This will be a precious memory!"],
              "Closing": "Gotta be sure to include everyone, not just Bunbun! Moosie, Freddy Fox, oh and Faunay!",
              "Gotchya, don't forget to say tittyyyyy~": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Tittyyyyyyyyyy! Haha!"
              },
              "Sure! This will be a precious memory!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah!"
              },
              "Aren't you a little old to like the Forever Friends?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Ugh, don't judge. Just take the picture."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "I've been getting a lot of stares from the male staff here. I feel like I can't wait in lines without daggers on my chest! But it's okay, as long as I stick with you right?",
              "Answers": ["You can count on me!", "I don't blame them, I'm staring too!", "What did you say?"],
              "Closing": "Why don't we go down to Foreverburger? I kind of want to stay away from these crowds, plus it's getting hot!",
              "You can count on me!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Thanks, I know I can rely on you!"
              },
              "I don't blame them, I'm staring too!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Hey! Well, I guess it's fine if it's you..."
              },
              "What did you say?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Hey, eyes up here!"
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "Gosh, it kinda sucks. I can't ride some of the rides because my boobs are too big for the shoulder harness. Hopefully I can get on the next one though.",
              "Answers": ["No shoulder harness shall contain your beautiful tits.", "That's dumb, if something happened on the ride you'd have built-in airbags!", "You should get a reduction so you can ride Super Speedster with me!"],
              "Closing": "Be sure to give me a good shoulder massage when we get back okay? All these rides have been absolutely wrecking my muscles. Maybe my boobs will need a massage too...",
              "That's dumb, if something happened on the ride you'd have built-in airbags!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA I don't think it works that way buddy, but a girl can dream."
              },
              "No shoulder harness shall contain your beautiful tits.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "True, but then again there's not a lot that can contain them in the first place!"
              },
              "You should get a reduction so you can ride Super Speedster with me!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "No way in hell mister! These mounds are here to stay. Besides, I'd never ride Super Speedster anyways. Zero chance!"
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Wow, this view is beautiful! I forgot how pretty this city's skyline looked from the Forever Wheel.",
              "Answers": ["Not as beautiful as you", "Not as beautiful as your breasts", "Not as beautiful as Super Speedster"],
              "Closing": "Gosh, I wish I could stay in this moment forever. Maybe that's why it's called Foreverland. Do you promise to stick by me like this... forever?",
              "Not as beautiful as you": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "H-Hey, cut it out with that cheese! That was really sweet though~"
              },
              "Not as beautiful as your breasts": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Oh? I can't help but agree. And they're all yours babe~"
              },
              "Not as beautiful as Super Speedster": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "HAHA Geez, still on me about that? I can't even ride that anymore, not at this size!"
              }
            },
          },
        },
        "Date4": {
          "MinStage": 3, //indicates the lowest growth stage CG
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Beach",
          "Price": 400,
          "Affection": 3, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Gosh, do you see the water? It's so crystal clear it's like we're in a tropical paradise! It's hard to believe we used to call this place Seatrash City HAHA!~",
              "Answers": ["The water's so warm too!", "Actually, I helped with the clean up last year", "I'd appreciate it if you hadn't splashed me"],
              "Closing": "This beach may not be the same as I remember, but it's still perfect for making new memories together!",
              "Actually, I helped with the clean up last year": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Really!? That's so nice of you! Now I wish I came back earlier, we could've cleaned it up together."
              },
              "The water's so warm too!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "You're right! Was it always this warm? I don't really remember.."
              },
              "I'd appreciate it if you hadn't splashed me": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Sorry? You don't need to be a buzzkill about it."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "There are crabs in the water! Isn't that cool?",
              "Answers": ["That's pretty neat", "I saw them too, they're so cute!", "Oh no I don't want a disease!"],
              "Closing": "Maybe I should take one home and keep it as a pet.",
              "I saw them too, they're so cute!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA I know right! I wonder what other animals are hanging around here."
              },
              "That's pretty neat": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Isn't it? Hopefully I don't step on one though."
              },
              "Oh no I don't want a disease!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Not that kind of crabs..."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "Sometimes I wonder if I deserve these moments. Relaxing by the seaside with my best friend, my new bombshell body bouncing in the sunshine, it's like I have everything I could ever ask for right now. What did I do to earn this moment though...",
              "Answers": ["We all deserve a chane to relax", "Try not to overthink it", "Maybe you're a little too relaxed"],
              "Closing": "Well, for now let's be sure to enjoy the soft sand and warm water to our hearts' content!",
              "We all deserve a chane to relax": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, you're right! Sorry, I tend to overthink when things are going well."
              },
              "Try not to overthink it": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah, I'll try. I should just enjoy the moment right?"
              },
              "Maybe you're a little too relaxed": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "You're right, maybe we should head home soon.."
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "I've been getting so many stares here, as if I'm more interesting than the dolphins in the water! Do you think my top is too revealing?",
              "Answers": ["With those bazookas, what top isn't revealing!", "Yeah, you should put a shirt on", "Huh? Sorry what did you say?"],
              "Closing": "Oh well, I don't necessarily hate the attention, but it'd be nice if it wasn't from all these strangers. But if it were your attention..",
              "With those bazookas, what top isn't revealing!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA That's a good point!"
              },
              "Huh? Sorry what did you say?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Hey, don't get distracted like everyone else!"
              },
              "Yeah, you should put a shirt on": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "It's not like a lot of tops fit anymore..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Hey Babe, can you put some sunscreen on my back? It's a little hard to reach some areas.",
              "Answers": ["Sure! But will I get a reward?", "Looks like your bust needs some protection too!", "But you're so flexible, why not do it yourself?"],
              "Closing": "Why don't you apply some to my breasts too while you're at it? I could really use some help there, especially around the nipples~",
              "Sure! But will I get a reward?": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Welllll, if you do a good job I don't see why not!"
              },
              "Looks like your bust needs some protection too!": {
                "Reaction": "Love",
                "Affection": 5,
                "Response": "A little help there would be appreciated too! Afterall, there isn't a lot of fabric there."
              },
              "But you're so flexible, why not do it yourself?": {
                "Reaction": "Hate",
                "Affection": -2.5,
                "Response": "It's not that easy with these honkers weighing down my shoulders."
              }
            },
          },
        },
        "Date5": {
          "MinStage": 4, //indicates the lowest growth stage CG possible
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Fancy Dinner",
          "Price": 500,
          "Affection": 4, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Wow, this is such a nice restaurant. This place used to be where the old mall was, right? The one we'd visit after school!",
              "Answers": ["Yep! I remember running to Penguin Ice Cream right after class", "I'm glad the mall was replaced", "I think I remember? Halo Halo Mall right?"],
              "Closing": "It's a little sad to see that place gone, but it's cool that a fancy place like this was able to take its place. Hopefully the food is as memorable as the mall!",
              "Yep! I remember running to Penguin Ice Cream right after class": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA Yeah! And then you'd always fake tripping over the curb so that Mr. Pen could give you a free cone."
              },
              "I think I remember? Halo Halo Mall right?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Close enough, it was Hello Halo Mall!"
              },
              "I'm glad the mall was replaced": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Aww, don't say that. We had a lot of good memories together in that mall."
              }
            },
            "2": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "I absolutely love the live music here Babe! Each musician on stage seems so talented. Does anyone stand out to you?",
              "Answers": ["The vocalist's range is impressive!", "The pianist could be a little better", "The guitarist has a nice groove"],
              "Closing": "Oh I should get their autograph before we leave!",
              "The vocalist's range is impressive!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, she's REALLY good! I don't think I've heard a singer this smooth."
              },
              "The guitarist has a nice groove": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Ohhh, interesting. I agree he's pretty good."
              },
              "The pianist could be a little better": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Pfft, as if you could play better..."
              }
            },
            "3": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Oh! We HAVE to get a dessert here right? I know we don't normally get dessert, but this place is so fancy that if there's a time to do it, it's now! But what to get...",
              "Answers": ["The Caramel Tres Leches", "The Cranberry Cheescake", "The Chocolate Gummy Creamsicle"],
              "Closing": "In the end, this place is so fancy that I'm sure whatever we order will taste great!",
              "The Caramel Tres Leches": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You know me too well! Please please PLEASE LET'S GET IT!!"
              },
              "The Cranberry Cheescake": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Sounds... interesting? I guess I'd be down for that."
              },
              "The Chocolate Gummy Creamsicle": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Chocolate, candy, and cream? Seems like a weird combo."
              }
            },
            "4": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Even in this private booth, I've noticed some of the staff and patrons staring at me. You'd think I'd be used to it by now but... for some reason I'm feeling a little embarassed now.",
              "Answers": ["A lady needs to feed herself and her tits, so pay them no mind", "Don't feel embarassed, feel proud!", "Between chicken thighs and chicken breast, looks like we all prefer breast"],
              "Closing": "Well then, let's get to eating! I'm starving and this food isn't gonna eat itself!",
              "A lady needs to feed herself and her tits, so pay them no mind": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha I guess so, it takes a lot of energy just to support these babies!"
              },
              "Between chicken thighs and chicken breast, looks like we all prefer breast": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Awww, stop it you'll just embarass me more. It is endearing though, I'll give you that. But just so you know I prefer chicken thigh."
              },
              "Don't feel embarassed, feel proud!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "It's not easy to just stop feeling embarassed you know."
              }
            },
            "5": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "For so long now, I feel like I was stuck in the past. I always bring up the past, talk about what's changed. I came back here for a fresh start, but how could that be when I'm back in my original town. Isn't it silly?",
              "Answers": ["Living in nostalgia lets us appreciate the present", "We can enjoy the past, present, and future at the same time", "It's a little funny, but not an awful idea"],
              "Closing": "You know, thanks to you I feel like I'm able to accept how much things have changed. I can reminisce about the past, and be excited about making new memories. Not to mention I still have you with me every step of the way! So, from the bottom of my heart (and tits), thank you~",
              "We can enjoy the past, present, and future at the same time": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "I never really thought of it that way! The past, the present, the future, they're all one in the same in the end right? No point overthinking it. I should just enjoy what life's given me."
              },
              "Living in nostalgia lets us appreciate the present": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Wow, that's a good point! Reliving precious moments from the past lets me appreciate not only what I still have, but what I can gain down the line."
              },
              "It's a little funny, but not an awful idea": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "You think so? Maybe I'm just overthinking it then"
              }
            },
          },
        },
      },
      "DateStages": {// indicates growth levels for each date stage
        1: 1, // 1: growth stage 1
        2: 2,
        3: 4,
        4: 6,
        5: 8,
      },
      "S":{
        "S1": {
          "Length": 1, // number of anims in folder
          "Affection": 1, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S2": {
          "Length": 4, // number of anims in folder
          "Affection": 2, // as in necessary affection level
          "NoLoop": [3], // ids for panels to not loop
        },
        "S3": {
          "Length": 1, // number of anims in folder
          "Affection": 3, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S4": {
          "Length": 3, // number of anims in folder
          "Affection": 4, // as in necessary affection level
          "NoLoop": [2], // ids for panels to not loop
        },
        "S5": {
          "Length": 3, // number of anims in folder
          "Affection": 5, // as in necessary affection level
          "NoLoop": [2], // ids for panels to not loop
        },
      },
      "Requirements":{ //growth requirements. no stagnating hearts, it MUST increase
        "2": {
          "Price": 100,
          "Hearts": 0
        },
        "3": {
          "Price": 500,
          "Hearts": 1
        },
        "4": {
          "Price": 1000,
          "Hearts": 1
        },
        "5": {
          "Price": 2500,
          "Hearts": 3
        },
        "6": {
          "Price": 5000,
          "Hearts": 3
        },
        "7": {
          "Price": 10000,
          "Hearts": 4
        },
        "8": {
          "Price": 25000,
          "Hearts": 4
        },
      },
      "AffectionRequirements": {
        "1": {
          "AffectionGoal": 200,
          "Growth": 2
        },
        "2": {
          "AffectionGoal": 1000,
          "Growth": 4
        },
        "3": {
          "AffectionGoal": 2000,
          "Growth": 4
        },
        "4": {
          "AffectionGoal": 4000,
          "Growth": 6
        },
        "5": {
          "AffectionGoal": 5000,
          "Growth": 8
        }
      },
      "GrowthEvent":{
        "1": { //starting event
          "Panel1": "On my way back from work I noticed a moving truck outside my neighbors yard. The house had been vacant for some time, so it was only a matter of time before someone moved in.",
          "Panel2": "Little did I know it'd be my childhood friend, Blair, of all people who'd be moving next to me! She and I lost contact a long time ago, so it was exciting to see she was nearby again!",
          "Panel3": "BLAIR: Hey, it's been a while! Want to come over and catch up? Should be done soon, afterall I only have so many bras-",
          "Panel4": "I mean boxes! to unpack...",
          "Panel5": "Still as cheerful as ever, but that slip up alone means she's just as insecure about her bust as I remember.",
          "Panel6": "Of course, that just means she's the perfect candidate to try out my new powers.",
        },
        "2": { // Affection level is 0
          "Panel1": "BLAIR: So yeah, was able to graduate from community college and transfer here! Guess we'll be school mates again huh",
          "Panel2": "ME: Yeah! I'm looking forward to it already. You thinking of rejoing the cheerleading team?",
          "Panel3": "BLAIR: About that... I don't know if I can \"size up\" to those girls, you know?",
          "Panel4": "With tits that size she was probably right. But that wouldn't be for long. <span class='pinkText'>Blair's bust will begin to grow a few cup sizes</span>",
          "Panel5": "ME: Hey don't put yourself down, your cheerleading skills were always great! And besides...",
          "Panel6": "ME: Your body seems just fine to me. </br></br>BLAIR: What do you mean, I'm a stic-", //growth sequence
          "Panel7": "BLAIR: Oh my gosh, what just happened!?",
          "Panel8": "I tried to act as normal as possible, but perhaps that wasn't the best move.",
          "Panel9": "ME: Huh? What's the problem?",
          "Panel10": "BLAIR: What's the problem!? Did you not just see my boobs grow 3 cup sizes!? </br></br>ME: I'm not sure what you-",
          "Panel11": "BLAIR: No no no, this is bad... sorry can you leave for now, I need to call a doctor",
          "Panel12": "ME: Hey wait I!",
          "Panel13": "*SLAM*",
          "Panel14": "Shit",
          "Panel15": "After that she texted me, apologizing for what happened. She invited me over again, acting almost as if nothing happened. Maybe she's in denial? I suppose I should apologize myself as well once I get the chance.",
        },
        "3": {
          "Skip": "",
          "Still1": "",
        },
        "4": { // Affection level is 1
          "Panel1": "BLAIR: Ok, I'm ready. Don't be afraid to give me a good boost!",
          "Panel2": "I gulp in anticipation. </br></br>ME: You got it!",
          "Panel3": "I'm sure I look crazy as I scrunch my face in concentration.",
          "Panel4": "<span class='pinkText'>Bigger, much bigger! </span>Before long the results of my powers begin to come to fruition.",
          "Panel5": "Her top began to bulge, her cardigan straining tighter and tighter. I may have gone overboard with the boost, but Blair didn't seem to mind at all!",
          "Panel6": "By the time it was over, Blair had let out an excited scream as I sat there in awe in front of the biggest bust I'd ever seen.",
          "Panel7": "BLAIR: Amazing!! This is phenomenal, oh my gosh, they're so ginormous I can barely hold them! Thanks so much! </br></br>ME: Haha, don't mention-",
          "Panel8": "Before I could even finish, Blair grabs my arms and leads me out the house. </br></br>BLAIR: Come on! We've got to go bra shopping ASAP!",
        },
        "5": {
          "Skip": "",
          "Still1": "",
        },
        "6": { // Affection level is 3
          "Panel1": "BLAIR: You know, I was thinking of trying out for the cheerleading team afterall</br></br>ME: That's a great idea! I'm sure (with those massive titties) you'd be a shoe in.",
          "Panel2": "BLAIR: About that... I was wondering, maybe I need just one more boost?",
          "Panel3": "I stare a little bit in disbelief. Her tits were already the biggest in the school, surely big enough for the team. So it's pretty obvious it's just an excuse, afterall she did mention wanting to size up even more back when we were bra shopping. And who am I to deny her request!",
          "Panel4": "ME: Say no more. </br></br>I channel all the energy into Blair, concentrating harder than I had on any exam.",
          "Panel5": "<span class='pinkText'>Big. Huge. Ginormous!</span> These were the thoughts that needed to permeate. The ones necessary to give Blair not just the biggest tits on campus, but the biggest tits in the city!",
          "Panel6": "BLAIR: K-Keep... KEEP GOING! THIS FEELS SHO GOOOOOOOD!",
          "Panel7": "Suddenly, the last button of her cardigan burst, revealing her gargantuan bazookas straining against her thin undershirt.",
          "Panel8": "BLAIR: Gosh, you really didn't hold back this time! </br></br>ME: Well, you wouldn't have wanted me to, right?",
          "Panel9": "BLAIR: Not at all, you read me perfectly. Though, I suppose you've always understood me well...</br></br>ME: Oh? And what do you mean by that?",
          "Panel10": "BLAIR: N-Nothing! I just... well... you're sweet that's all.",
          "Panel11": "Jesus, one moment sensual, the other moment cute as hell. How am I supposed to handle the whiplash!",
          "Panel12": "BLAIR: O-Oh shoot look at the time, I should get going! I've got class in 30 haha... ",
          "Panel13": "With that, Blair beelined to class. Perhaps it's time I take our relationship a bit more seriously.",
        },
        "7": {
          "Skip": "",
          "Still1": "",
        },
        "8": { // Affection level is 4
          "Panel1": "From the moment we began dating, our lived became like something straight out of a porn comic. Eat, sleep, fuck, repeat. Exploring Blair's expansive bust seemed endless, from constant bra shopping, to fending off molestors, to new sex positions we previously could only dream of. I thought things couldn't get better... but Blair was always one step ahead of me.",
          "Panel2": "BLAIR: You know babe, thanks to you, I feel like I've been able to live out my wildest fantasies.",
          "Panel3": "ME: Oh? What kind of fantasies?",
          "Panel4": "BLAIR: From trying on huge sexy bras bigger than my face, to giving busty blowjobs that make my man cum instantly, you've given me experiences I could've only dreamed of before.",
          "Panel5": "ME: Hey, it's a win win! You get to live out your wildest fantasies, and I get to live them with you. Seems like a fair trade to me!",
          "Panel6": "BLAIR: It is! And that's why... I have just one more request. Something I want your opinion on. </br></br>ME: Ask away!",
          "Panel7": "BLAIR: I want you to make my breasts grow. Just one more time! One final push that makes them so big they can rest on my lap!",
          "Panel8": "Holy shit, I knew she was zealous about her growth but there's no denying it now: </br>She a tried and true size enthusiast!",
          "Panel9": "ME: Say no more!",
          "Panel10": "Before she could say another word, I concentrate all my power once again, a final push to truly give Blair the bust of her- of OUR dreams!",
          "Panel11": "<span class='pinkText'>A bust so big no clothing could handle it. A bust so jiggly, simply breathing would send shockwaves across her tits. And so sensitive, just sucking her nipples would be enough to make her cum!</span>",
          "Panel12": "BLAIR: AHHH!! YES! YES! THIS IS IT! I-",
          "Panel13": "BLAIR: AAAAAAHHHHHHHHHH!~ *SHHHHRIIPP*", //rip
          "Panel14": "BLAIR: *PANT* *PANT* I've never felt so amazing in my life.", //different angle, panting
          "Panel15": "BLAIR: What are you waiting for? These titties are all yours baby!", //looks at you
        }
      },
      "AffectionEvent":{
        "1": { // Growth level is 2 - unlocks masturbate
          "Panel1": "I managed to meet up with Blair after class at the old cafe we used to visit often.</br></br>ME: Hey listen, I need to come clean",
          "Panel2": "BLAIR: It was you wasn't it?",
          "Panel3": "ME: Huh!? How did you!?",
          "Panel4": "BLAIR: There's no way you didn't see my boobs jump sizes like that and not freak out. It must've been you! And you just admitted it.",
          "Panel5": "Shit, as sharp as ever.",
          "Panel6": "Guess I should just come clean ", //black screen
          "Panel7": "BLAIR: So let me get this straight. You touched a magic green rock in the forest, and suddenly gained the power to change reality and make girls... grow?",
          "Panel8": "ME: Pretty much...",
          "Panel9": "BLAIR: That's amazing! </br></br>ME: You believe me?",
          "Panel10": "BLAIR: Well I wouldn't have if I didn't see it with my own eyes!</br></br>ME: HAHA! I guess that's true.",
          "Panel11": "BLAIR: So if that's the case... could you do me a favor?",
          "Panel12": "ME: Huh? If it's to make you smaller I'm not sure I can-",
          "Panel13": "BLAIR: No no no, just the opposite. I want to be bigger! Like, a lot bigger!",
          "Panel14": "ME: Ayo!?",
          "Panel15": "BLAIR: After my breasts reached this size, I've suddenly been getting more attention from everyone. All my friends have been interacting with my posts, my professors are more lenient with grading, I even got an offer to tryout for the cheerleading team!",
          "Panel16": "BLAIR: But most of all... it... feels awesome. REALLY AWESOME! Like I'm living a dream that I don't want to end! So, I wanna be bigger. Finally away from being the butt of every washboard joke, you know? So can you do it?",
          "Panel17": "I felt a smile creep upon each corner of my mouth. This was gonna be exciting. </br></br>ME: Absolutely!"
        },
        "2": { // Growth level is 4 - unlocks BJ in mall
          "Panel1": "BLAIR: What do you think?</br></br>I must be in heaven. My suddenly busty goddess of a childhood friend was cycling through numerous bras, asking for my take on the best looking one.",
          "Panel2": "Problem is with tits like those, everything looks amazing!",
          "Panel3": "BLAIR: How about this?",
          "Panel4": "BLAIR: Or maybe this?",
          "Panel5": "ME: They all look amazing with your bust!",
          "Panel6": "BLAIR: Awww, you're just being sweet. But this is just the beginning right?",
          "Panel7": "ME: Beginning!? You don't mean...",
          "Panel8": "BLAIR: Welllll, not right NOW, but I certainly wouldn't mind another boost down the road",
          "Panel9": "I felt my dick harden in that moment. The thought of her tits growing even bigger was unbelievably erotic. Maybe one day I could make her too big to even wear a bra!",
          "Panel10": "BLAIR: Helloooo, are you listening?</br></br>ME: S-Sorry!",
          "Panel11": "BLAIR: Haha, don't be don't be. Afterall, I can tell from your buddy there that all these tops will do the job.",
          "Panel12": "Do the job!? Since when did she get so sensual!?",
          "Panel13": "BLAIR: Anyways, I'm gonna go check out, but sit tight.",
          "Panel14": "If you're patient, I just might help your friend out as well. As... compensation of course... nothing else!</br></br>Boy I could hardly wait.",
        },
        "3": { // Growth level is 4 - unlocks massage breast fondle in bed
          "Panel1": "BLAIR: Ah gosh, my back's been really hurting lately",
          "Panel2": "ME: Ayo? You know, I give the best shoulder massages!",
          "Panel3": "BLAIR: You don't say. Wanna hook a sister up? No funny business though! </br></br>ME: Hey, don't mind if I do",
          "Panel4": "With that, Blair flips over onto her stomach, using her giant breasts as pillows. </br></br>ME: Isn't that painful?",
          "Panel5": "BLAIR: Suprisingly not! Sure, whatever magic powers you have made my titties suuuuper sensitive, but it's in a way where it feels less painful and more... pleasurable, I guess.",
          "Panel6": "Interesting, I never would have expected that! I guess there's a lot of aspects about my powers I haven't grasped yet.",
          "Panel7": "Reaching over Blair, I get to work, first kneeding her shoulders like dough, working out the kinks within her muscles. Occasionally I lightly dig my knuckles into her shoulders, grinding out the kinks til they're soft enough to kneed out.",
          "Panel8": "BLAIR: Mmmmm, you were right, that feels-",
          "Panel9": "BLAIR: AHNNN!!~",
          "Panel10": "Blair and I sit in silence, both of us astonished by the sudden sexy moan that escaped Blair's lips.",
          "Panel11": "BOTH: HAHAHA! </br></br>I guess in the end, childhood friends can laugh and bond over almost anything.",
          "Panel12": "Such a simple encounter, and yet I can't help but feel a lot closer to Blair now.",
        },
        "4": { // Growth level is 6 - unlocks missionary on couch
          "Panel1": "After class, I decided to pay Blair a visit at her tryouts, but noticed she was pretty down.",
          "Panel2": "ME: Blair, you okay? You seem upset.",
          "Panel3": "Blair thrusts towards me and begins sobbing against my chest.",
          "Panel4": "Not a single word escaped her lips, but it was clear she'd need some time before she was ready to chat.",
          "Panel5": "I took her down to the cafe where she could get some space from the campus.",
          "Panel6": "BLAIR: Sorry I... I just...</br></br>ME: It's okay, take your time.",
          "Panel7": "BLAIR: *Sniff* thanks.",
          "Panel8": "BLAIR: This will sound pathetic but... I was rejected from the cheerleading team.</br></br>ME: HUH!? But why!?",
          "Panel9": "BLAIR: Well, it's more like they didn't even let me try. The moment I stepped foot in the gym, the coach told me to leave. And to cover up my indecent body while I'm at it.</br>ME: That's bullshit! Isn't that harassment, you can't let them-",
          "Panel10": "BLAIR: But it's true isn't it! </br></br>ME: What??",
          "Panel11": "BLAIR: I used to think having the biggest boobs ever would be a dream come true. That they could make me feel noticed, like I wasn't just thin air. But in truth everyone just thinks I look disgusting! I bet even a part of you als-",
          "Panel12": "ME: Stop right there! I could never think you or your boobs are gross!",
          "Panel13": "BLAIR: That's a lie! How can you say that when I'm 90% boob!?</br>ME: I'm telling you, it's the truth! </br>BLAIR: But how can you not think I'm-",
          "Panel14": "ME: Because I like you!</br></br>Blair staggers backwards in shock.",
          "Panel15": "BLAIR: T-That's a good one buddy, but-",
          "Panel16": "ME: I'm being serious. I've felt this way for a while now. And I don't just think your boobs are awesome, I think YOU are awesome.</br></br>Blair sits in disbelief.",
          "Panel17": "BLAIR: I- But we... but you're my best friend! And, that's all we are, right? That's all we've ever been... for you to tell me this now...",
          "Panel18": "ME: I won't lie, I was unsure at first. But as we reconnected more, I gradually saw myself growing closer and closer to you.",
          "Panel19":  "You're funny, you're kind, we can laugh together, we can be comfortable. Big titties or not, you're still the same Blair I know and love since day one!",
          "Panel20": "BLAIR: You... really mean that? </br></br>ME: I haven't lied to you yet, have I?",
          "Panel21": "BLAIR: Well, you almost lied about your powers. </br></br>ME: That's!",
          "Panel22": "...",
          "Panel23": "BLAIR: Pft </br></br>ME: Pft",
          "Panel24": "BLAIR: HAHAHA!~ </br></br>ME: HAHAHA!",
          "Panel25": "BLAIR: You're a real dork when you try to be serious, you know that? </br></br>ME: It's one of my shining attributes.",
          "Panel26": "BLAIR: Haha, alright, I'll go out with you.",
          "Panel27": "But remember, you gave me these boobs, so they're your responsibility too, ok?</br></br>ME: You can count on me!",
        },
        "5": { // Growth level is 8 - unlocks cowgirl in bed
          "Panel1": "ME: Blair, I'm back! </br></br>BLAIR: Welcome back Babe!",
          "Panel2": "Blair was resting in bed, her breasts resting upon her lap with her laptop situated atop her titty tabletop. Having such a large bust made going to class a little awkward, so Blair had opted to take the majority online now.",
          "Panel3": "BLAIR: How was class? Did I miss anything crazy? </br></br>ME: Same as usual, everyone's been asking when you'll be back.",
          "Panel4": "BLAIR: Haha! Maybe once I find a proper harness",
          "Panel5": "ME: Well, you know I'll always hold them up for you!</br></br>BLAIR: Awwww haha, Please do!",
          "Panel6": "I situate myself behind to her, caressing her bust, feeling the soft boob flesh ripple between my fingers.",
          "Panel7": "BLAIR: Oh Babe, I love it when you do that... mmmmm",
          "Panel8": "Blair turns towards me, enveloping me within her busty expanse.",
          "Panel9": "BLAIR: I've been meaning to tell you this for a while now. It's something I should've said so much earlier, but never thought was possible since we were just friends.",
          "Panel10": "BLAIR: But now, I finally have to courage to tell you.",
          "Panel11": "BLAIR: I love you. All of me, from my heart to my massive boobs, they're all yours. So please take good care of me~",
          "Panel12": "Blair, Fin.",
        }
      },
      "Dialogue":{ // dialogues that occur randomly
        "Growth":{
          "1": ["You know, small boobs aren't all too bad.", "I don't remember, are you the type to think size matters?"],
          "2": ["My chest has been feeling tight lately...", "You've been staring at my chest a lot recently...", "Have my shoulders always been this stiff?"],
          "3": ["My chest has been feeling tight lately...", "You've been staring at my chest a lot recently...", "Have my shoulders always been this stiff?"],
          "4": ["You didn't go easy on me, and I appreciate that. These tits look great!", "Remember how small I was back then?", "I hope I don't look too dispropotional.", "Maybe I should go to the gym, my back is killing me!"],
          "5": ["You didn't go easy on me, and I appreciate that. These tits look great!", "Remember how small I was back then?", "I hope I don't look too dispropotional.", "Maybe I should go to the gym, my back is killing me!"],
          "6": ["I must have the biggest boobs on campus!", "You didn't go easy on me, and I appreciate that. These tits look great!", "It's a little embarassing getting so many stares now. And not always nice ones..."],
          "7": ["I must have the biggest boobs on campus!", "You didn't go easy on me, and I appreciate that. These tits look great!", "It's a little embarassing getting so many stares now. And not always nice ones..."],
          "8": ["Gosh, it's so hard to move with these massive mammaries, but I wouldn't have it any other way!", "Can you rub my nipples? I can't reach them very easily", "You make me feel so good Babe", "I must beat some boob size record right? We gotta find that old record book we used to read! Or wait, we need a new one..", "I don't think I could live any bigger than this!"],
        },
        "Affection":{
          "0": ["Gosh, it's been so long, how are you?", "Wanna grab some coffee and catch up?", "Hmmm, a lot's changed since I left. And a lot's stayed the same."],
          "1": ["I'm glad we started catching up!", "I wonder if I should try out for the cheerleading team afterall.", "I'm still blown away by your powers. Imagine if you had them back then too!"],
          "2": ["I remember when I could barely fit into a B-cup, now look at me!", "I hope you don't feel too embarassed when we're bra shopping", "I'm glad we started catching up!", "I wonder if I should try out for the cheerleading team afterall."],
          "3": ["Could you give me another massage? My shoulders are still again", "I'd visit a professional, but you're already pretty good!", "I'm so used to my breasts now, maybe a size up wouldn't be bad! I wonder if I have a complex...", "Some of the cheerleaders have such big tits... are mine big enough?"],
          "4": ["Thank you so much for accepting me for who I am.", "You must be a huge boob freak to love me HAHA! But I appreciate it~", "Hey Babe, could you give a massage?", "Forget the cheerleading team! Maybe I could model instead"],
          "5": ["You know, I don't mind too much if you also see other women. Powers like yours should be shared! Just come back to me often~", "I love you, with all my heart. And all my titties!", "To be loved and accepted by my childhood friend is like a dream", "You were always just around the corner, we just needed a little push! And maybe some bigger boobs HAHA"],
        }
      }
    },
    "Jennifer": { // Flow: A1 -> G2 -> G3 -> A2 -> G4 -> G5 -> A3 -> G6 -> G7 -> A4 -> G8 -> A5
      "Metadata": {},
      "Parameters":{
        //----------- factors to set----------
        "DatesEnabled": "False",
        "SEnabled": "False",
        "MaxAffectionStage": 5, // max possible affection level
        "MaxStage": 8, // max possible growth stage
        "UnlockCost": 200,
        "Multiplier": 1.25, // inherent multiplier girl has. Ie, the Base Multiplier
        "Description": "An up and coming streamer looking for viewers.", // desc shown for the button
        "GrowthType": "Breast", // growth type
      },
      "Ui":{
        "ProfileColor": "#cc6e7c",
        "BorderColor": "#571a23",
        "HeaderColor": "#ffc4cc",
        "SideNavColor": "#8c6c6f",
        "BonusInfoColor": "#c29fa2",
      },
      "Profile":{
        "FullName":"Jennifer Gonzales", // full name to display
        "FullNameSize": "3em", // change size of font for full name if too long. 2em is a good option if too long
        "Age": 20,
        "Birthday": "March 3",
        "Height": "5' 2\"",
        "Breasts": {
          "1": "C-Cup", //29C. bwh: 30-27-36
          "2": "F-Cup", //30F. bwh: 33-27-36
          "3": "H-Cup", //in between bwh: 35-27-36
          "4": "J-Cup", //31J. bwh: 37-27-36
          "5": "M-Cup", //in between: 40-27-36
          "6": "O-Cup", //33O. bwh: 43-27-36
          "7": "Q-Cup", //in between bwh: 45-27-36
          "8": "U-Cup", // 34U. bwh: 48-27-36
        },
        "Description": {  // can be longer. changes with growth stage
          "1": "An up and coming streamer looking for viewers. A bit camera shy, but clearly trying her best.",
          "2": "An up and coming streamer looking for viewers. She's rather flustered by her new endowments, but tries her best to hide them",
          "3": "An up and coming streamer looking for viewers. She's rather flustered by her new endowments, but tries her best to hide them",
          "4": "An up and coming streamer looking for viewers. Starting to find her footing in the vast ocean of streamers. Viewers mostly watch for her tits though.",
          "5": "An up and coming streamer looking for viewers. Starting to find her footing in the vast ocean of streamers. Viewers mostly watch for her tits though.",
          "6": "A streamer on a popular streaming platform. Unsure how to feel about her growing popularity.",
          "7": "A streamer on a popular streaming platform. Unsure how to feel about her growing popularity.",
          "8": "A streamer on a popular streaming platform. Finally coming out of her shell and often showcases her competitive side to viewers.",
        },
        "Likes": "Video games, Matcha",
        "Dislikes": "Public spaces, Cockroaches",
        "FavoriteGift": "Plushie, Phone", // favorite gift. receives a * 2 multiplier
        "HatedGift": "Perfume", // least fave gift. receives a negative * 2 multiplier
        "Personality": "Shy Gamer Girl", // Personality description
        "Additional1":{
          "Name": "None",
        }, // additional profile entry
        "Additional2":{
          "Name": "None",
        }, // additional profile entry 2
      },
      "Gifts":{
        "Gift1": { //flowers
          "Status": "Neutral", // love: gives double return . Hate: half as loss. else:  1.x where x is gift number. this way higher priced gifts are technically better returns on investment for affection amounts
          "Affection": 10 * 1.1,
          "TextType": "Flat", // Flat: text is random, Affection:  text is random up to affection level, Growth: text is random up to growth level
          "Text": ["Uhhh, flowers are pretty cool I guess", "I like the smell of flowers sometimes"],
          "Count": 0
        },
        "Gift2": { //chocolates
          "Status": "Neutral",
          "Affection": 100 * 1.2,
          "TextType": "Flat", // text is random
          "Text": ["Mmm, nothing like chocolates before a grind!", "Would a chocolate making stream go well?", "Mmm, that's +10 stat points!"],
          "Count": 0
        },
        "Gift3": { //plushie
          "Status": "Love",
          "Affection": 500 * 1.3 * 2,
          "TextType": "Flat", // text is random
          "Text": ["Woah, it's the limited edition Trunko plushie from Zoonimal Crossroads!", "Zoonimal plushies are my favorite!", "This plushie gives me extra items in Zoonimal Crossroads!"],
          "Count": 0
        },
        "Gift4": { //book
          "Status": "Neutral",
          "Affection": 1e3 * 1.4,
          "TextType": "Flat", // text is random
          "Text": ["A guide for Witches and Wyverns? That's cool", "Sometimes gaming magazines have some cool tips inside"],
          "Count": 0
        },
        "Gift5": { //bra
          "Status": "Neutral",
          "Affection": 500e3 * 1.5,
          "TextType": "Growth", // text is random up to growth level
          "Text": [
            "F-For me!?",
            "This is like something the girls in Thump Thump Writing Club would wear.",
            "This is like something the girls in Thump Thump Writing Club would wear.",
            "It looks nice for RPG armor, but it'd never protect me IRL!",
            "It looks nice for RPG armor, but it'd never protect me IRL!",
            "This is as skimpy as Cloudrim armor...",
            "This is as skimpy as Cloudrim armor...",
            "It's so small, I'll look like those chicks from Immortal Combat"],
          "Count": 0
        },
        "Gift6": { //perfume
          "Status": "Hate",
          "Affection": 1e6 * 1.6 * -1 / 2,
          "TextType": "Flat", // text is random
          "Text": ["M-My nose is super sensitive to this stuff..", "Achoo! Ugh...", "I'm not deathly allergic, but I'd rather not smell it."],
          "Count": 0
        },
        "Gift7": { //handbag
          "Status": "Neutral",
          "Affection": 500e6 * 1.7,
          "TextType": "Flat", // text is random
          "Text": ["Woah, are those Flame Token characters on the bag?", "Ohhh, this bag is matcha green"],
          "Count": 0
        },
        "Gift8": { //phone
          "Status": "Love",
          "Affection": 1e9 * 1.8 * 2,
          "TextType": "Flat", // text is random
          "Text": ["Which RanganDonpa character should I put as my background?", "Wow, I can run Wenshin so smoothly on this!", "Mvidia's latest graphics processor is used in this phone!"],
          "Count": 0
        },
        "Gift9": { //painting
          "Status": "Neutral",
          "Affection": 500e9 * 1.9,
          "TextType": "Flat", // text is random
          "Text": ["The vast landscapes remind of Gasp of the Wild", "An art museum stream could be cool"],
          "Count": 0
        },
        "Gift10": { //Lingerie
          "Status": "Neutral",
          "Affection": 1e12 * 2,
          "TextType": "Flat", //
          "Text": ["So skimpy, I don't know if I can pull this off", "Isn't this the same underwear Haruka wears in Thump Thump?", "So embarassing..."],
          "Count": 0
        },
        "Gift11": { //Necklace
          "Status": "Neutral",
          "Affection": 500e12 * 2.1,
          "TextType": "Flat", // text is random
          "Text": ["Imagine how many Lupies this would be worth..", "I- I don't deserve such a rare gem!"],
          "Count": 0
        },
        "Gift12": { //Ring
          "Status": "Neutral",
          "Affection": 1e15 * 2.2,
          "TextType": "Affection", // text is random up to affection level
          "Text": [
            "H-Huh!? A ring for me!?",
            "It's so pretty...",
            "This ring even has little Lupies around it!",
            "Should I ask chat about this?",
            "Is... is this a key event!?",
            "Should we stream the wedding? I-I mean!? Sorry, I'm getting ahead of myself"],
          "Count": 0
        }
      },
      "Dates":{
        "Date1":{
          "MinStage": 1, //indicates the lowest growth stage CG, 2
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Library",
          "Price": 20e1,
          "Affection": 1,
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "",
              "Answers": ["Caramel Machiatto! With an extra shot.", "A cafe mocha? Everyone loves a cafe mocha!", "Ummm... the double fudge sundae frappe with extra syrup?"],
              "Closing": "Oh shoot, look at the time! I've got to get going, but text me later, 'kay? Thanks for the drink!",
              "Caramel Machiatto! With an extra shot.": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha, you do remember! Gosh, that extra shot always got me through the day."
              },
              "A cafe mocha? Everyone loves a cafe mocha!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "That's a pretty safe choice, but it's a little boring. I like caramel more than chocolate, remember?"
              },
              "Ummm... the double fudge sundae frappe with extra syrup?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Uhhh, that's a little too sweet, even for me."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "Nothing beats relaxing with some afternoon tea. Though, I wish my shoulders weren't aching so much - Any tips for helping relax the shoulders?",
              "Answers": ["I give the best shoulder massages!", "A nice hot shower should do the trick", "A breast reduction would help"],
              "Closing": "Gosh, this tea was fantastic. Feels like all my worries have just washed away! I should get going, but I'll catch you later!",
              "I give the best shoulder massages!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "That's a little much... but I just might take you up on the offer."
              },
              "A nice hot shower should do the trick": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "True! That'd be a great way to relax the muscles."
              },
              "A breast reduction would help": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Haha, very funny..."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "You know, this cafe really has the most comfy seats, don't you think? I could just lean back and fall asleep. Though, I'd be scared about perverts trying to cop a feel...",
              "Answers": ["Don't worry, I'll make sure you sleep safe and sound.", "Fear not, I shall protect thou and thy bust!", "I don't blame them, I'd cop a feel too!"],
              "Closing": "Maybe I'll stick to sleeping at home for now though. You're welcome to come by as well!",
              "Fear not, I shall protect thou and thy bust!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha, you're so silly! But thanks, that means a lot."
              },
              "Don't worry, I'll make sure you sleep safe and sound.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Thanks, I'm feeling sleepy already!"
              },
              "I don't blame them, I'd cop a feel too!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Excuse me?"
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "Now that my boobs are so heavy, it really helps to rest them. Usually I use a table, but sometimes even that doesn't work. I wonder what I should do.",
              "Answers": ["You can rest them right here baby!", "Maybe a harness?", "The floor would certainly be big enough!"],
              "Closing": "Well, I'm sure I'll figure something out eventually. In the meantime I'm gonna go enjoy their size some more... want to come with?",
              "You can rest them right here baby!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "W-We're in public silly! Maybe back at home though..."
              },
              "Maybe a harness?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "If I can find any my size!"
              },
              "The floor would certainly be big enough!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "The floor's kinda gross though..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "A while ago, I never would have expected to run into you again. And I never would have expected to be back in this same cafe again, except with my huge bare tits resting on my lap. It's funny how life works, isn't it?",
              "Answers": ["I'm truly thankful that we got to reconnect.", "Didn't expect to a super busty GF, but I definitely love it!", "Yep, pretty cool."],
              "Closing": "Why don't we head back and see where life takes us next? If it's with you, I'm sure it'll be an adventure",
              "I'm truly thankful that we got to reconnect.": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Aww, you're so sweet!"
              },
              "Didn't expect to a super busty GF, but I definitely love it!": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "All natural and all yours babe. Well, close to natural, thanks to you."
              },
              "Yep, pretty cool.": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "Life is pretty cool!"
              }
            },
          },
        },
        "Date2": {
          "MinStage": 2, //indicates the lowest growth stage CG, 4
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Shopping",
          "Price": 100e1,
          "Affection": 2, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "This shop has some pretty dresses! A lot in my favorite color at that.",
              "Answers": ["Oh, like that blue dress?", "Just like the plain white one!", "Oh yeah, the cheetah print fits you well."],
              "Closing": "Hmmm, maybe I'll pick a dress out online instead though, it'd be cheaper.",
              "Oh, like that blue dress?": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You remembered! I know it's basic, but I just love the calm feeling of blue. Plus it reminds me of the beach!"
              },
              "Just like the plain white one!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Oh, white's pretty too! But it's a little too plain, at least compared to the blue one."
              },
              "Oh yeah, the cheetah print fits you well.": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Ummm, you have... interesting taste."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "They've got some pretty good deals at this shop, but it's not for anything I like. I wonder what I should do...",
              "Answers": ["If you ask nicely I'm sure they'll give you a discount", "Swap the price tag with a sale item", "Maybe if you flash the staff they'll give you a discount!"],
              "Closing": "Oh what do you know, this one is 20% off! I'll be back, I'm gonna go try it on.",
              "Swap the price tag with a sale item": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "That... that just might work! But keep quiet HAHA!~"
              },
              "If you ask nicely I'm sure they'll give you a discount": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Mmm, I guess, but I kind of doubt it."
              },
              "Maybe if you flash the staff they'll give you a discount!": {
                "Reaction": "Hate",
                "Affection":  -2.5, // 2.5 times loss
                "Response": "Oh my gosh, are you crazy!?"
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "Hey look at this find, I think it looks pretty cute! A little tight around the chest though, what do you think?",
              "Answers": ["The color looks good on you!", "Well, if it can fit your boobs, I say go for it!", "Meh, not worth it"],
              "Closing": "I think I'll buy it afterall, wanna meet me over at checkout? Oh, or I can wait for you if you find anything for yourself!",
              "Well, if it can fit your boobs, I say go for it!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "True! Afterall, that's harder and harder to find nowadays."
              },
              "The color looks good on you!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "I know right! But I'm not sure about the fit."
              },
              "Meh, not worth it": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "You think so? I thought it was a great find..."
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "It's a little embarassing to admit, but I pretty much stick to the plus size section nowadays. And even then I don't really find much. People don't question me about it of course since you can see my massive tiddies from the back! But I don't know, maybe it's pointless.",
              "Answers": ["There's nothing wrong with plus size! Especially if it have great finds!", "Some baggier clothes might help hide your breasts if you're embarassed", "Aww, don't feel down. Want to try a different store?"],
              "Closing": "There's actually another plus size store next door, want to check that out together?",
              "There's nothing wrong with plus size! Especially if it have great finds!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, you're right! And some stuff in this section is actually cuter... and sexier!"
              },
              "Aww, don't feel down. Want to try a different store?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah, that might help."
              },
              "Some baggier clothes might help hide your breasts if you're embarassed": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "W-Why would you say that..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Babe, don't freak out, but I think I may have just ripped through all the tops I tried on. What should I do!",
              "Answers": ["Meh, don't sweat it, I'll pay it off.", "Let's explain together, they'll surely understand", "You shouldn't have tried on all those tops!"],
              "Closing": "Oh! The manager just came up to me and said I don't need to pay for anything, how kind! I saw him walking away with a massive nosebleed though, hopefully he's ok.",
              "Let's explain together, they'll surely understand": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You really think so? Will you come with me?"
              },
              "Meh, don't sweat it, I'll pay it off.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "A-Are you sure!? That's a lot, really you don't have to."
              },
              "You shouldn't have tried on all those tops!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Well, when you're this size it helps to test out everything before buying. I thought you of all people would understand."
              }
            },
          },
        },
        "Date3": {
          "MinStage": 3, //indicates the lowest growth stage CG, 4
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Arcade",
          "Price": 200e1,
          "Affection": 3, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "Wow, it's been AGES since I've been to Foreverland. It's a little sad to see how much it's changed though. Is my favorite ride still here?",
              "Answers": ["Super Speedster!? It's still here, let's go!", "Hmmm, not sure if Caro-soul is up anymore.", "You mean bug blasters? They tore that down last year.."],
              "Closing": "Why don't we check out the Forever Wheel later? I miss the view from top and want to see the city skyline from there!",
              "You mean bug blasters? They tore that down last year..": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Aww man, I have great memories of us riding that ride together. Guess we'll just have to make new ones on something else!"
              },
              "Hmmm, not sure if Caro-soul is up anymore.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Oh, I didn't like the Caro-soul that much, so it's whatever."
              },
              "Super Speedster!? It's still here, let's go!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "H-Hell no! You know that ride scares the ever living HELL out of me!"
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "Oh my gosh, I totally forgot that Bunbun and the Forever Friends are here! Please, you have to take a picture of us!",
              "Answers": ["Gotchya, don't forget to say tittyyyyy~", "Aren't you a little old to like the Forever Friends?", "Sure! This will be a precious memory!"],
              "Closing": "Gotta be sure to include everyone, not just Bunbun! Moosie, Freddy Fox, oh and Faunay!",
              "Gotchya, don't forget to say tittyyyyy~": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Tittyyyyyyyyyy! Haha!"
              },
              "Sure! This will be a precious memory!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah!"
              },
              "Aren't you a little old to like the Forever Friends?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Ugh, don't judge. Just take the picture."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "I've been getting a lot of stares from the male staff here. I feel like I can't wait in lines without daggers on my chest! But it's okay, as long as I stick with you right?",
              "Answers": ["You can count on me!", "I don't blame them, I'm staring too!", "What did you say?"],
              "Closing": "Why don't we go down to Foreverburger? I kind of want to stay away from these crowds, plus it's getting hot!",
              "You can count on me!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Thanks, I know I can rely on you!"
              },
              "I don't blame them, I'm staring too!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Hey! Well, I guess it's fine if it's you..."
              },
              "What did you say?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Hey, eyes up here!"
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "Gosh, it kinda sucks. I can't ride some of the rides because my boobs are too big for the shoulder harness. Hopefully I can get on the next one though.",
              "Answers": ["No shoulder harness shall contain your beautiful tits.", "That's dumb, if something happened on the ride you'd have built-in airbags!", "You should get a reduction so you can ride Super Speedster with me!"],
              "Closing": "Be sure to give me a good shoulder massage when we get back okay? All these rides have been absolutely wrecking my muscles. Maybe my boobs will need a massage too...",
              "That's dumb, if something happened on the ride you'd have built-in airbags!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA I don't think it works that way buddy, but a girl can dream."
              },
              "No shoulder harness shall contain your beautiful tits.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "True, but then again there's not a lot that can contain them in the first place!"
              },
              "You should get a reduction so you can ride Super Speedster with me!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "No way in hell mister! These mounds are here to stay. Besides, I'd never ride Super Speedster anyways. Zero chance!"
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Wow, this view is beautiful! I forgot how pretty this city's skyline looked from the Forever Wheel.",
              "Answers": ["Not as beautiful as you", "Not as beautiful as your breasts", "Not as beautiful as Super Speedster"],
              "Closing": "Gosh, I wish I could stay in this moment forever. Maybe that's why it's called Foreverland. Do you promise to stick by me like this... forever?",
              "Not as beautiful as you": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "H-Hey, cut it out with that cheese! That was really sweet though~"
              },
              "Not as beautiful as your breasts": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Oh? I can't help but agree. And they're all yours babe~"
              },
              "Not as beautiful as Super Speedster": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "HAHA Geez, still on me about that? I can't even ride that anymore, not at this size!"
              }
            },
          },
        },
        "Date4": {
          "MinStage": 4, //indicates the lowest growth stage CG, 6
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Beach",
          "Price": 400e1,
          "Affection": 4, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Gosh, do you see the water? It's so crystal clear it's like we're in a tropical paradise! It's hard to believe we used to call this place Seatrash City HAHA!~",
              "Answers": ["The water's so warm too!", "Actually, I helped with the clean up last year", "I'd appreciate it if you hadn't splashed me"],
              "Closing": "This beach may not be the same as I remember, but it's still perfect for making new memories together!",
              "Actually, I helped with the clean up last year": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Really!? That's so nice of you! Now I wish I came back earlier, we could've cleaned it up together."
              },
              "The water's so warm too!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "You're right! Was it always this warm? I don't really remember.."
              },
              "I'd appreciate it if you hadn't splashed me": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Sorry? You don't need to be a buzzkill about it."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "There are crabs in the water! Isn't that cool?",
              "Answers": ["That's pretty neat", "I saw them too, they're so cute!", "Oh no I don't want a disease!"],
              "Closing": "Maybe I should take one home and keep it as a pet.",
              "I saw them too, they're so cute!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA I know right! I wonder what other animals are hanging around here."
              },
              "That's pretty neat": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Isn't it? Hopefully I don't step on one though."
              },
              "Oh no I don't want a disease!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Not that kind of crabs..."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "Sometimes I wonder if I deserve these moments. Relaxing by the seaside with my best friend, my new bombshell body bouncing in the sunshine, it's like I have everything I could ever ask for right now. What did I do to earn this moment though...",
              "Answers": ["We all deserve a chane to relax", "Try not to overthink it", "Maybe you're a little too relaxed"],
              "Closing": "Well, for now let's be sure to enjoy the soft sand and warm water to our hearts' content!",
              "We all deserve a chane to relax": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, you're right! Sorry, I tend to overthink when things are going well."
              },
              "Try not to overthink it": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah, I'll try. I should just enjoy the moment right?"
              },
              "Maybe you're a little too relaxed": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "You're right, maybe we should head home soon.."
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "I've been getting so many stares here, as if I'm more interesting than the dolphins in the water! Do you think my top is too revealing?",
              "Answers": ["With those bazookas, what top isn't revealing!", "Yeah, you should put a shirt on", "Huh? Sorry what did you say?"],
              "Closing": "Oh well, I don't necessarily hate the attention, but it'd be nice if it wasn't from all these strangers. But if it were your attention..",
              "With those bazookas, what top isn't revealing!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA That's a good point!"
              },
              "Huh? Sorry what did you say?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Hey, don't get distracted like everyone else!"
              },
              "Yeah, you should put a shirt on": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "It's not like a lot of tops fit anymore..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Hey Babe, can you put some sunscreen on my back? It's a little hard to reach some areas.",
              "Answers": ["Sure! But will I get a reward?", "Looks like your bust needs some protection too!", "But you're so flexible, why not do it yourself?"],
              "Closing": "Why don't you apply some to my breasts too while you're at it? I could really use some help there, especially around the nipples~",
              "Sure! But will I get a reward?": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Welllll, if you do a good job I don't see why not!"
              },
              "Looks like your bust needs some protection too!": {
                "Reaction": "Love",
                "Affection": 5,
                "Response": "A little help there would be appreciated too! Afterall, there isn't a lot of fabric there."
              },
              "But you're so flexible, why not do it yourself?": {
                "Reaction": "Hate",
                "Affection": -2.5,
                "Response": "It's not that easy with these honkers weighing down my shoulders."
              }
            },
          },
        },
        "Date5": {
          "MinStage": 5, //indicates the lowest growth stage CG possible, 6
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Convention",
          "Price": 500e1,
          "Affection": 5, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Wow, this is such a nice restaurant. This place used to be where the old mall was, right? The one we'd visit after school!",
              "Answers": ["Yep! I remember running to Penguin Ice Cream right after class", "I'm glad the mall was replaced", "I think I remember? Halo Halo Mall right?"],
              "Closing": "It's a little sad to see that place gone, but it's cool that a fancy place like this was able to take its place. Hopefully the food is as memorable as the mall!",
              "Yep! I remember running to Penguin Ice Cream right after class": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA Yeah! And then you'd always fake tripping over the curb so that Mr. Pen could give you a free cone."
              },
              "I think I remember? Halo Halo Mall right?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Close enough, it was Hello Halo Mall!"
              },
              "I'm glad the mall was replaced": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Aww, don't say that. We had a lot of good memories together in that mall."
              }
            },
            "2": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "I absolutely love the live music here Babe! Each musician on stage seems so talented. Does anyone stand out to you?",
              "Answers": ["The vocalist's range is impressive!", "The pianist could be a little better", "The guitarist has a nice groove"],
              "Closing": "Oh I should get their autograph before we leave!",
              "The vocalist's range is impressive!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, she's REALLY good! I don't think I've heard a singer this smooth."
              },
              "The guitarist has a nice groove": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Ohhh, interesting. I agree he's pretty good."
              },
              "The pianist could be a little better": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Pfft, as if you could play better..."
              }
            },
            "3": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Oh! We HAVE to get a dessert here right? I know we don't normally get dessert, but this place is so fancy that if there's a time to do it, it's now! But what to get...",
              "Answers": ["The Caramel Tres Leches", "The Cranberry Cheescake", "The Chocolate Gummy Creamsicle"],
              "Closing": "In the end, this place is so fancy that I'm sure whatever we order will taste great!",
              "The Caramel Tres Leches": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You know me too well! Please please PLEASE LET'S GET IT!!"
              },
              "The Cranberry Cheescake": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Sounds... interesting? I guess I'd be down for that."
              },
              "The Chocolate Gummy Creamsicle": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Chocolate, candy, and cream? Seems like a weird combo."
              }
            },
            "4": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Even in this private booth, I've noticed some of the staff and patrons staring at me. You'd think I'd be used to it by now but... for some reason I'm feeling a little embarassed now.",
              "Answers": ["A lady needs to feed herself and her tits, so pay them no mind", "Don't feel embarassed, feel proud!", "Between chicken thighs and chicken breast, looks like we all prefer breast"],
              "Closing": "Well then, let's get to eating! I'm starving and this food isn't gonna eat itself!",
              "A lady needs to feed herself and her tits, so pay them no mind": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha I guess so, it takes a lot of energy just to support these babies!"
              },
              "Between chicken thighs and chicken breast, looks like we all prefer breast": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Awww, stop it you'll just embarass me more. It is endearing though, I'll give you that. But just so you know I prefer chicken thigh."
              },
              "Don't feel embarassed, feel proud!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "It's not easy to just stop feeling embarassed you know."
              }
            },
            "5": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "For so long now, I feel like I was stuck in the past. I always bring up the past, talk about what's changed. I came back here for a fresh start, but how could that be when I'm back in my original town. Isn't it silly?",
              "Answers": ["Living in nostalgia lets us appreciate the present", "We can enjoy the past, present, and future at the same time", "It's a little funny, but not an awful idea"],
              "Closing": "You know, thanks to you I feel like I'm able to accept how much things have changed. I can reminisce about the past, and be excited about making new memories. Not to mention I still have you with me every step of the way! So, from the bottom of my heart (and tits), thank you~",
              "We can enjoy the past, present, and future at the same time": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "I never really thought of it that way! The past, the present, the future, they're all one in the same in the end right? No point overthinking it. I should just enjoy what life's given me."
              },
              "Living in nostalgia lets us appreciate the present": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Wow, that's a good point! Reliving precious moments from the past lets me appreciate not only what I still have, but what I can gain down the line."
              },
              "It's a little funny, but not an awful idea": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "You think so? Maybe I'm just overthinking it then"
              }
            },
          },
        },
      },
      "DateStages": {// indicates growth levels for each date stage
        1: 1, // 1: growth stage 1
        2: 3,
        3: 5,
        4: 7,
        5: 8,
      },
      "S":{
        "S1": {
          "Length": 1, // number of anims in folder
          "Affection": 1, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S2": {
          "Length": 4, // number of anims in folder
          "Affection": 2, // as in necessary affection level
          "NoLoop": [3], // ids for panels to not loop
        },
        "S3": {
          "Length": 1, // number of anims in folder
          "Affection": 3, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S4": {
          "Length": 3, // number of anims in folder
          "Affection": 4, // as in necessary affection level
          "NoLoop": [2], // ids for panels to not loop
        },
        "S5": {
          "Length": 3, // number of anims in folder
          "Affection": 5, // as in necessary affection level
          "NoLoop": [2], // ids for panels to not loop
        },
      },
      "Requirements":{ //growth requirements. no stagnating hearts, it MUST increase.
        "2": {
          "Price": 100e1,
          "Hearts": 1
        },
        "3": {
          "Price": 500e1,
          "Hearts": 1
        },
        "4": {
          "Price": 1000e1,
          "Hearts": 2
        },
        "5": {
          "Price": 2500e1,
          "Hearts": 2
        },
        "6": {
          "Price": 5000e1,
          "Hearts": 3
        },
        "7": {
          "Price": 10000e1,
          "Hearts": 3
        },
        "8": {
          "Price": 25000e1,
          "Hearts": 4
        },
      },
      "AffectionRequirements": {
        "1": {
          "AffectionGoal": 10,
          "Growth": 1
        },
        "2": {
          "AffectionGoal": 2000,
          "Growth": 3
        },
        "3": {
          "AffectionGoal": 6000,
          "Growth": 5
        },
        "4": {
          "AffectionGoal": 12000,
          "Growth": 7
        },
        "5": {
          "AffectionGoal": 20000,
          "Growth": 8
        },
      },
      "GrowthEvent":{
        "1": { //starting event
          "Panel1": "Professor: Please be sure to connect with your assigned partner after class to work on the project! </br></br>I look down and read the name of my supposed partner for this project.",
          "Panel2": "Jennifer Gonzales. Hmm, never heard of her. I don't even know what she looks like, how am I supposed to- </br></br>???: Um, hi... </br></br>ME: Huh?",
          "Panel3": "Huh? WOAH, is this her!? She's cute as hell! And has some nice tits to boot!",
          "Panel4": "JENNIFER: H-Hi, I-I'm Jennifer. I guess I'm your partner so... n-nice to meet you. </br></br>ME: Uhhh, hey. Wanna meet up this weekend at the library?",
          "Panel5": "JENNIFER: Huh!? B-But we just met, it's a little early to- </br></br>ME: I... meant for the project?",
          "Panel6": "JENNIFER: Oh! Right! S-Sorry! Yeah. The project... t-this weekends good. </br></br>ME: Oooookay? Cool, I'll-",
          "Panel7": "JENNIFER: OkayGottaGo,SeeYouThenBye!",
          "Panel8": "Wow, she's so meek that she puts mice to shame.",
          "Panel9": "ME: Wait, huh? What's this?",
          "Panel10": "Looks like it fell out of her pocket during her great dash. stv/melomouse? stv/watermice? stv/mouseymelon? Was she coming up with stream names during class? Oh I HAVE to check this out.",
        },
        "2": { // Affection level is 1
          "Panel1": "JENNIFER: H-Hey! That's a match haha...",
          "Panel2": "God, I'm sorry, but this is unbearable. Lucky for me, I happen to have some cash sitting around waiting for her.",
          "Panel3": "Let's seeeeee, $30 bucks ought to do it!",
          "Panel4": "JENNIFER: Huh? T-Thirty dollars!? O-OMG, w-was this a mistake? Userrrrr... ",
          "Panel5": "JENNIFER: B00bL0ver69? V-Very.... unique...",
          "Panel6": "JENNIFER: A-Anyways! T-Thank you for your support, this is actually my first donation ever so I'm super appreciative that you-",
          "Panel7": "JENNIFER: A-AHHHHH!!! WhatJustHappenedOMG UM UM UM-",
          "Panel8": "JENNIFER: SORRY, END OF STREAM, I'LL SEE YOU NEXT TIME!!",
          "Panel9": "Well... that was abrupt. Can't say I blame her, but hell that was the most entertaining part of the show! I already can't wait til the next stream!",
        },
        "3": {
          "Skip": "",
          "Still1": "",
        },
        "4": { // Affection level is 2
          "Panel1": "JENNIFER: H-Hey, did you see that. I-I got a kill! </br></br>That I did, and it was a pretty good one too.",
          "Panel2": "I'm not sure if it's her bouncing boobs or her excitement over this MOBA, but she seems to be warming up to the stream a little more. And her audience has grown a little compared to last time, not that I'm really keeping track.",
          "Panel3": "Am I feeling proud? I don't see why, all I did was just give her a bump in boobage. Hell, with that huge baggy hoodie of hers, it's obvious she's trying to hide her endowed assets from the stream. But I can't allow that, can I?",
          "Panel4": "JENNIFER: I-I hope you guys are enjoying the stream. </br></br>It's not awful, don't worry. Even chat is somewhat engaged. But it's time to take this to the next level!",
          "Panel5": "JENNIFER: Huh? $40 from B00bL0ver69!? T-Thank you!",
          "Panel6": "JENNIFER: I remember you from last week, I-I'm sorry for the sudden end to the stream...",
          "Panel7": "JENNIFER: I-I didn't get to thank you properly, but I really really appreciate your support!",
          "Panel8": "JENNIFER: P-Please continue to watch and support my stre-",
          "Panel9": "JENNIFER: G-GYAHHHH N-NOT AGAIN!! I- HOW- </br></br>Damn, now THAT was a sight. And look at chat popping off HA!",
          "Panel10": "JENNIFER: S-Sorry guys, I-I'll be right back",
          "Panel11": "Guess she's changing into something more form fitting... what a shame, let the girls hang free! Oh well, I suppose chat got enough of a show for today.",
        },
        "5": {
          "Skip": "",
          "Still1": "",
        },
        "6": { // Affection level is 3
          "Skip": "",
          "Panel1": "JENNIFER: Hmmm, this puzzle is a bit tough... but no hints chat, please!</br></br>She's really coming into her own now.",
          "Panel2": "It's a little bittersweet, knowing that a lot of her viewers are here for her massive rack. But who am I to complain, afterall that's what I came for at first!",
          "Panel3": "But funny enough, I'm finding myself staying for more than just her massive tits these days. The more I watch her, the more I really can see her passion for gaming shine through.",
          "Panel4": "Before, I just wanted her to keep her stream going so I could enjoy watching her growing bust. But now... I think I'm genuinely enjoying watching her shine brighter.",
          "Panel5": "JENNIFER: YES! I did it chat! Now I can finally fight the boss... huh?",
          "Panel6": "JENNIFER: \"S-Show your tits?\" \"Bounce your boobs?\" \"Where is the sauce...\"",
          "Panel7": "Shit, I should've expected this too. Her viewers were enjoying the growth show I put on before, it's only natural they want more. But... after what she told me about her community guideline strikes, I don't know if-",
          "Panel8": "JENNIFER: Mr. B00bL0ver69, are you there? </br></br>Huh!?",
          "Panel9": "JENNIFER: If you are... please... help me... do your thing..</br></br>SAY NO MORE, $50 INCOMING!",
          "Panel10": "<span class='pinkText'>From now on, Jennifer's clothes will also expand along with her tits</span></br>Without thinking, I send forth $50 in hopes to calm the masses. Hopefully I can avoid another strike though.",
          "Panel11": "JENNIFER: A-AH! Another donation, from B00bL0ver69! T-Thank you for your...",
          "Panel12": "JENNIFER: ...continued support~ ahhh... </br></br>W-Woah, wait what's going on. Something's not right.",
          "Panel13": "JENNIFER: Ahnnn, t-thank youuuuu~ MMmmmmmm~ </br></br>Is she... acting?",
          "Panel14": "JENNIFER: That felt great... I-I hope you enjoyed too heheh.",
          "Panel15": "That was strangely hot and concerning at the same time. I'm not sure what just happened but whatever it is, I'll probably want to ask her about it next time.",
        },
        "7": {
          "Skip": "",
          "Still1": "",
        },
        "8": { // Affection level is 4
          "Skip": "",
          "Panel1": "JENNIFER: BOOM, Headshot!",
          "Panel2": "Jennifer's confidence has grown tremendously, as though most of her worries about streaming have been lifted. She's begun speaking her own mind a bit more during her streams, which really lets her personality shine.",
          "Panel3": "JENNIFER: Do you guys think I should swap out my cannon- hey not that kind of cannon, chat!",
          "Panel4": "JENNIFER: Oh yeah, if you wanna join my lobby go right ahead! I'm doing 1v1s right now. I hope you know though, I haven't lost a game yet!",
          "Panel5": "JENNIFER: Oh, is that B00bL0ver69? Welcome back to the stream!",
          "Panel6": "As of late, I've become somewhat of a legend in the stream. Whenever I pop in, the chat becomes filled with requests for me to donate. At first I was worried, but Jennifer has somehow managed to turn it around.",
          "Panel7": "JENNIFER: Well, since you're here now, why don't we up the stakes? The first person to beat me in a 1v1 gets to tell B00bL0ver69 how much to donate! </br></br>Hey I never agreed to these terms! But I'll gladly accept them.",
          "Panel8": "With the chat all riled up, Jennifer's lobby begins bursting with energy. Players are making bold risky plays in an attempt to land at least one shot on her. Until...",
          "Panel9": "JENNIFER: Ahhhh damn, gg, gg, good stuff PlayPog001. I'm a woman of my word so go ahead, state your terms.",
          "Panel10": "JENNIFER: $60! Wow, B00bL0ver69 are we good to go? </br></br>That's my cue. It's not as much as I expected, but I won't complain about not breaking the bank. As for Jennifer's back...",
          "Panel11": "JENNIFER: W-WOAH, there it is folks, $60 bucks from B00bL0ver69 himself! Everyone give him a round of applause! He's my first viewer and donater afterall, always appreciated.",
          "Panel12": "JENNIFER: I-I'm serious, I couldn't have made it this far without your support... mmmm...",
          "Panel13": "JENNIFER: Thanks you... for sticking with me through this journey~"
        }
      },
      "AffectionEvent":{
        "1": { // Growth level is 1 - unlocks masturbate
          "Panel1": "JENNIFER: Am... Am I doing this right? Haha, o-oopsie... hnnn... Maybe? No... aw...",
          "Panel2": "This... has got to be the worst stream I've ever watched. She's so nervous and keeps putting herself down. She's not even bad at the game! Is this her first stream? Whatever it is, I gotta do something. And luckily I think I know just the thing.",
          "Panel3": "<span class='pinkText'>Everytime I send a donation to Jennifer over stream, her tits will expand. This growth is proportional to the amount of donation.</span>",
          "Panel4": "Surely only a true expansion lover could think this way, but it's not too awful of a plan right? I mean yes, her tits ARE pretty nice already, but imagine if they grew on camera. There's no WAY viewers could resist following someone like that!",
          "Panel5": "Now all that's left is to get enough money to really make this a show!"
        },
        "2": { // Growth level is 2 - unlocks masturbate
          "Panel1": "ME: Heyyyyy Jennifer, you ready to work on our project?",
          "Panel2": "JENNIFER: Huh!? Oh, uh, me? Oh yeah, right, sorry I- </br></br>ME: Hey hey, relax, something wrong?",
          "Panel3": "JENNIFER: No! No no, I'm just... ready to work! Haha... </br></br>Jesus she's so... awkward. Kind of endearing though. Not to mention how cute it is to watch her wiggle in discomfort.",
          "Panel4": "Considering how much she's shifting around, it's clear her boobs are too big for her bra, not that I'll say anything about it. That does remind me though.",
          "Panel5": "ME: Hey, by the way, you dropped this the other day.</br>Her eyes widen like a deer in headlights as I hand over the note with all her streamer handle ideas. </br></br>Jennifer: Huh!?",
          "Panel6": "JENNIFER: T-THIS IS- </br>ME: I didn't know you were a streamer! I watched you play that matching game last week, it was super fun!",
          "Panel7": "JENNIFER: Y-You watched my last stream!? I-I!! </br></br>ME: Yeah! Your personality was really shining too, it was great!",
          "Panel8": "JENNIFER: R-Really, you... enjoyed my stream? </br></br>Not at all. But of course, I won't say that, I don't wanna be an asshole. Not to mention I did quite enjoy it towards the end after my donation.",
          "Panel9": "ME: Yeah! If it's not too much to ask, I'd love to keep watching you stream some games! </br></br>I lied again of course, but I want her to keep streaming so I can donate more. Plus she might gain some more confidence along the way, who knows.",
          "Panel10": "Jennifer sits quietly, shyly looking down as her notebook. Can't imagine what mixure of emotions she's going through, but hopefully she won't fold like this.",
          "Panel11": "JENNIFER: P-Please continue to support me.. </br>ME: Awesome!</br></br>Done and dusted. ",
          "Panel12": "ME: Alright, let's get on with this assignment yeah? </br></br>Jennifer: Y-yeah",
        },
        "3": { // Growth level is 4 - unlocks dildo oral
          "Skip": "",
          "Panel1": "JENNIFER: M-Maybe... an app that connects AI and Politics... these articles would work. Probably. Idk. Hmm...",
          "Panel2": "Geez, she seems more distant and uncomfortable than usual... </br></br>ME: Hey, uhhh off topic but I really enjoyed that stream last week!",
          "Panel3": "JENNIFER: Huh? Oh, thanks... let's stay focused for now. </br></br>ME: O-Okay...",
          "Panel4": "JENNIFER: ... </br>ME: ... </br></br>This is suffocating.",
          "Panel5": "JENNIFER: I... might get banned from Switch.tv </br></br>ME: What!? Why??",
          "Panel6": "JENNIFER: I got two community guideline strikes after some... clothing... malfunctions... </br></br>H-Holy shit is this... my fault? Dammit, I didn't even think about that.",
          "Panel7": "JENNIFER: If I get one more they'll terminate my account. </br></br>ME: B-But it's not your fault that your boobs-",
          "Panel8": "JENNIFER: Huh? </br></br>ME: GAH I-I MEAN... UH",
          "Panel9": "JENNIFER: N-No, you're right, I've been gaining a lot of weight lately. I guess it doesn't matter if I lose my account, no one wants to watch a fatty on stream. Plus... I'm not that good a streamer anyways.",
          "Panel10": "ME: Hey, don't say that! </br></br>Jennifer: Eh?",
          "Panel11": "ME: I can't speak for everyone, but I love watching you put your whole heart into streaming! I... I want to continue supporting you!",
          "Panel12": "JENNIFER: ... </br>ME: ... </br></br>Did I say too much...",
          "Panel13": "JENNIFER: ...T-Thank you...</br></br>ME: Eh?",
          "Panel14": "JENNIFER: It's... nice to know I have such a passionate fan. So... thanks, I'll keep trying my best!</br></br>ME: Haha, that's the spirit!",
        },
        "4": { // Growth level is 6 - unlocks dildo pussy
          "Skip": "",
          "Panel1": "ME: Heyyyy Jennifer, how's it going? Ready to finish up the project? </br>JENNIFER: A-Ah, yeah, ummm... but first can I... ask you something? </br>ME: Huh? Oh yeah, go right ahead.",
          "Panel2": "JENNIFER: Are you... B00bL0ver69?",
          "Panel3": "SHIT SHIT SHIT DOES SHE KNOW?</br></br>ME: W-What do you mean!? ",
          "Panel4": "JENNIFER: B00bL0ver69 was my first ever viewer. In fact, he's watched every one of my streams.</br></br>ME: But how do you know if that's me?",
          "Panel5": "JENNIFER: Well, you gave me back my notebook with my streamer handles, basically right after my first stream</br></br>ME: I-I suppose that's true, but that doesn't mean that I-",
          "Panel6": "JENNIFER: There's... also my boobs... </br></br>ME: W-What about them..",
          "Panel7": "JENNIFER: At first I thought I was just putting on weight. Afterall, I tend to stress eat. But then I noticed that it was... exclusively... in my bust. Not just that, but it would happen so fast during my streams.",
          "Panel8": "JENNIFER: Whenever B00bL0ver69 donated to me. </br></br>ME: *Gulp*",
          "Panel9": "JENNIFER: I panicked at first. Thought maybe this B00bL0ver69 was a witch or demon or something, cursing me for who knows what. </br></br>ME: That's-",
          "Panel10": "JENNIFER: But then I started to think about it. Why me? Barely anyone knows me. Who'd be so interested... in me. Except you.",
          "Panel11": "JENNIFER: You not only picked up my notebook, but checked out my stream. And every week, when we'd meet to work on the project, you would encourage me to keep up streaming. You... supported me even when I had my doubts.",
          "Panel12": "JENNIFER: And everytime we met up, you never once asked about my breasts. About they're sudden growth or anything. I thought you might've just been polite, but then I began to think... what if it's because you already expected them?",
          "Panel13": "JENNIFER: ... </br>ME: ... </br></br>Busted.",
          "Panel14": "ME: Alright, you caught me. You're right, I'm B00bL0ver69. And my donations have the power to make your boobs grow.",
          "Panel15": "Jennifer jumps forward and clutches me tightly. </br></br>JENNIFER: WHY ME!? W-WHY DID YOU-",
          "Panel16": "ME: B-Because I... thought you were cute. </br>JENNIFER: W-What?",
          "Panel17": "ME: Watching your stream, I knew you were nervous. But it was cute to see you work hard for it, and I thought if you could get more viewers you'd feel more confident about streaming.",
          "Panel18": "JENNIFER: And you thought the best way to do that was to make my boobs take up 90% of my body??</br>ME: Y-Yeah..",
          "Panel19": "JENNIFER: Unbelievable... you're a real pervert, you know that? </br></br>I've never seen her so riled up before. Can't say I blame her. I'm an expansion fetishist through and through.",
          "Panel20": "JENNIFER: But... I don't... hate you for it. </br></br>ME: You... don't?",
          "Panel21": "JENNIFER: You're obviously a massive pervert... but you're also my very first supporter. I've always been told I should give up on my dream of streaming. That I was too awkward a person to make it online.",
          "Panel22": "JENNIFER: BUT I LOVE PLAYING GAMES! And I get such a rush when I can share that experience with others. So when... you told me to keep streaming... to keep working hard, I... that made me really happy.",
          "Panel23": "JENNIFER: I guess what I'm trying to say is... will you please continue supporting me?</br></br>Gosh, talk about an whiplash. But I'm not one to disappoint.",
          "Panel24": "ME: Happily!"
        },
        "5": { // Growth level is 8 - unlocks sex
          "Skip": "",
          "Panel1": "It's been a few weeks since Jennifer and I finished our project. We got an A- on it!",
          "Panel2": "Jennifer's streaming career has been taking off tremendously. As of late she's been playing the popular MOBA, Legion of Legends.",
          "Panel3": "There are also some more recent developments </br></br>JENNIFER: Hey Melliessss, welcome back to the stream! Today we have a special guest!",
          "Panel4": "JENNIFER: Introducingggg, my lover, B00bL0ver69! </br></br>ME:U-Uh, hey!",
          "Panel5": "Not gonna lie, I was pretty nervous my first time on camera. I thought I'd get ripped apart by chat considering how much they love Jennifer and her boobs. But I guess you can't help but cheer on the guy with magic boob donation powers!",
          "Panel6": "JENNIFER: Today we're doing a Q&A! So ask away!",
          "Panel7": "JENNIFER: Hmmm, oh here's a good one - What's one thing you do for your partner to make them happy?",
          "Panel8": "ME: Umm, probably massage her shoulders whenever she needs? </br>JENNIFER: Heheh, it's true! He gives the best massages too.",
          "Panel9": "JENNIFER: As for me... probably play into his fetishes a bit? </br>ME: Oh? In what ways?",
          "Panel10": "JENNIFER: Like how I'll... you know... act out a little bit for you. </br>ME: Act out how-",
          "Panel11": "Oh... so that's why she acting turned on back then...",
          "Panel12": "Jennifer's face turns a bright red. </br></br>JENNIFER: LetsContinueWithTheQ&A",
          "Panel13": "By the end of it we must have answered over 30 questions, and skipped another 80. Guess when you're a popular streamer, everyone's got something to ask.",
          "Panel14": "JENNIFER: Phew, s-sorry that took so long.. </br></br>ME: It's all good, you ready to head on over to the arcade?",
          "Panel15": "JENNFIER: Yeah! But firsstt... HYA!",
          "Panel16": "Jennifer pounces onto me, pinning me down under her massive love pillows.</br></br>ME: W-Woah, what are you!?",
          "Panel17": "JENNIFER: You're always so supportive of me, so I just feel like... I want to give back a little bit, you know?",
          "Panel18": "JENNIFER: I'm not perfect by any means. I'm skittish and stumble over my words all the time. But everytime I fall, I know you'll always pick me back up. Thank you, so much.",
          "Panel19": "JENNIFER: So... shall I... show my appreciation?",
          "Panel20": "Jennifer, Fin."
        },
      },
      "Dialogue":{ // dialogues that occur randomly
        "Growth":{
          "1": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "2": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "3": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "4": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "5": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "6": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "7": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "8": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
        },
        "Affection":{
          "0": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "1": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "2": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "3": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "4": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
          "5": ["Oh, that's a match three... I think?", "I'm not very good at this game, am I", "I wish I had a headset, I bet the static is really bad"],
        }
      }
    },
    "Henriette": { // Flow: A1 -> G2 -> A2 -> G3 -> G4 -> G5 -> A3 -> G6 -> G7 -> A4 -> G8 -> A5
      "Metadata": {},
      "Parameters": {
        //----------- factors to set----------
        "DatesEnabled": "False",
        "SEnabled": "False",
        "MaxAffectionStage": 5, // max possible affection level
        "MaxStage": 8, // max possible growth stage
        "UnlockCost": 200,
        "Multiplier": 1.5, // inherent multiplier girl has. Ie, the Base Multiplier
        "Description": "A down-to-earth farmgirl making an honest living selling milk.", // desc shown for the button
        "GrowthType": "Lactation", // growth type
      },
      "Ui":{
        "ProfileColor": "#deb068",
        "BorderColor": "#6e4e07",
        "HeaderColor": "#fffcc4",
        "SideNavColor": "#8c7d6c",
        "BonusInfoColor": "#c4c095",
      },
      "Profile":{
        "FullName":"Henriette Vincent", // full name to display
        "FullNameSize": "3em", // change size of font for full name if too long. 2em is a good option if too long
        "Age": 26,
        "Birthday": "June 22",
        "Height": "5' 11\"",
        "Breasts": {
          "1": "B-Cup", //33B. bwh: 34-30-40
          "2": "D-Cup", //34D. bwh: 36-30-40
          "3": "G-Cup", //in between 35G, 39-30-40
          "4": "H-Cup", //35H. bwh: 40-30-40
          "5": "K-Cup", //in between 36K, 43-30-40
          "6": "N-Cup", //37N. bwh: 46-30-40
          "7": "P-Cup", //in between 37P, 48-30-40
          "8": "R-Cup", // 38R. bwh: 50-30-40
        },
        "Description": {  // can be longer. changes with growth stage
          "1": "A down-to-earth farmgirl making an honest living selling milk.",
          "2": "A down-to-earth farmgirl making an honest living selling milk.",
          "3": "A down-to-earth farmgirl making an honest living selling milk.",
          "4": "A down-to-earth farmgirl making an honest living selling milk.",
          "5": "A down-to-earth farmgirl making an honest living selling milk.",
          "6": "A down-to-earth farmgirl making an honest living selling milk.",
          "7": "A down-to-earth farmgirl making an honest living selling milk.",
          "8": "A down-to-earth farmgirl making an honest living selling milk.",
        },
        "Likes": "Animals, Milkshakes, Zombie Flicks",
        "Dislikes": "Other Horror Movies",
        "FavoriteGift": "Painting", // favorite gift. receives a * 2 multiplier
        "HatedGift": "Book", // least fave gift. receives a negative * 2 multiplier
        "Personality": "Hardworking, Competitive", // Personality description
        "Additional1":{
          "Name": "Milk",
          "1": "None",
          "2": "800 mL/24h", //average
          "3": "1.5 L/24h",
          "4": "5.0 L/24h",
          "5": "10.0 L/24h",
          "6": "30.0 L/24h", // cow is 24
          "7": "50.0 L/24h",
          "8": "100.0 L/24h", // more than 4 cows worth!
        }, // additional profile entry
        "Additional2":{
          "Name": "None",
        }, // additional profile entry 2
      },
      "Gifts":{
        "Gift1": { //flowers
          "Status": "Neutral", // love: gives double return . Hate: half as loss. else:  1.x where x is gift number. this way higher priced gifts are technically better returns on investment for affection amounts
          "Affection": 10 * 1.1,
          "TextType": "Flat", // Flat: text is random, Affection:  text is random up to affection level, Growth: text is random up to growth level
          "Text": ["Aww shucks, you didn't have to get me these!", "These flowers will look great in the farm garden"],
          "Count": 0
        },
        "Gift2": { //chocolates
          "Status": "Neutral",
          "Affection": 100 * 1.2,
          "TextType": "Flat", // text is random
          "Text": ["Better keep these away from my dogs", "It's not chocolate without plenty of milk!"],
          "Count": 0
        },
        "Gift3": { //plushie
          "Status": "Neutral",
          "Affection": 500 * 1.3 * 2,
          "TextType": "Flat", // text is random
          "Text": ["Ha! This piggy plushie is cute!", "Bessie might chew this up if I give it to her"],
          "Count": 0
        },
        "Gift4": { //book
          "Status": "Hate",
          "Affection": 1e3 * 1.4,
          "TextType": "Flat", // text is random
          "Text": ["What am I gonna do with this?", "\"How to raise cows\"? Hey, whatchya tryna say!"],
          "Count": 0
        },
        "Gift5": { //bra
          "Status": "Neutral",
          "Affection": 500e3 * 1.5,
          "TextType": "Growth", // text is random up to growth level
          "Text": [
            "Woah, whose udders are these for?",
            "Woah, whose udders are these for?",
            "Haha, is that cow print? Shucks, you're a real jokster!",
            "Haha, is that cow print? Shucks, you're a real jokster!",
            "I won't be wearing this for long, my next milking session is soon!",
            "I won't be wearing this for long, my next milking session is soon!",
            "A maternity bra? That's perfect!",
            "A maternity bra? That's perfect!"
          ],
          "Count": 0
        },
        "Gift6": { //perfume
          "Status": "Neutral",
          "Affection": 1e6 * 1.6 * -1 / 2,
          "TextType": "Flat", // text is random
          "Text": ["Ma sister says I smell sometimes, so maybe this is good to have", "Ahhh, smells like fresh grass on the prairie"],
          "Count": 0
        },
        "Gift7": { //handbag
          "Status": "Neutral",
          "Affection": 500e6 * 1.7,
          "TextType": "Flat", // text is random
          "Text": ["Oh! Didya get this bag here at the market?", "Thanks Pal! I know this isn't cheap"],
          "Count": 0
        },
        "Gift8": { //phone
          "Status": "Neutral",
          "Affection": 1e9 * 1.8 * 2,
          "TextType": "Flat", // text is random
          "Text": ["What in the- you got this for me? Thanks!", "I can take a bunch of cute pictures of Peppo with this!"],
          "Count": 0
        },
        "Gift9": { //painting
          "Status": "Love",
          "Affection": 500e9 * 1.9,
          "TextType": "Flat", // text is random
          "Text": ["Wow, would you look at that! The landscapes are beautiful!", "Ah! This is my favorite piece, how did you know?", "I'm no artist, but I love a good landscape painting!"],
          "Count": 0
        },
        "Gift10": { //Lingerie
          "Status": "Neutral",
          "Affection": 1e12 * 2,
          "TextType": "Flat", // text is random up to growth level
          "Text": ["Cow print? Okay, I see what you're goin' for", "I don't normally buy fancy undies like this, thanks!"],
          "Count": 0
        },
        "Gift11": { //Necklace
          "Status": "Neutral",
          "Affection": 500e12 * 2.1,
          "TextType": "Flat", // text is random
          "Text": ["Oh my, it's so shiny it reflect the sky", "Does this look good on me? I don't own a lot of jewlery", "A vendor here sells pearl necklaces? That's awesome!"],
          "Count": 0
        },
        "Gift12": { //Ring
          "Status": "Neutral",
          "Affection": 1e15 * 2.2,
          "TextType": "Affection", // text is random up to affection level
          "Text": [
            "*GASP* Is that what I think it is?",
            "Well well, who's the lucky lady? Haha!",
            "We haven't sold enough to afford that, how did you!-",
            "Awww, such a pretty ring for milk ole' me?",
            "Diamonds are too pretty for my farmhands... but I'll wear it happily",
            "After this, why don't we settle down a bit? Then my milk will be all yours!"],
          "Count": 0
        }
      },
      "Dates":{
        "Date1":{
          "MinStage": 1, //indicates the lowest growth stage CG, 2
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Market",
          "Price": 20e1,
          "Affection": 0,
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "",
              "Answers": ["Caramel Machiatto! With an extra shot.", "A cafe mocha? Everyone loves a cafe mocha!", "Ummm... the double fudge sundae frappe with extra syrup?"],
              "Closing": "Oh shoot, look at the time! I've got to get going, but text me later, 'kay? Thanks for the drink!",
              "Caramel Machiatto! With an extra shot.": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha, you do remember! Gosh, that extra shot always got me through the day."
              },
              "A cafe mocha? Everyone loves a cafe mocha!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "That's a pretty safe choice, but it's a little boring. I like caramel more than chocolate, remember?"
              },
              "Ummm... the double fudge sundae frappe with extra syrup?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Uhhh, that's a little too sweet, even for me."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "Nothing beats relaxing with some afternoon tea. Though, I wish my shoulders weren't aching so much - Any tips for helping relax the shoulders?",
              "Answers": ["I give the best shoulder massages!", "A nice hot shower should do the trick", "A breast reduction would help"],
              "Closing": "Gosh, this tea was fantastic. Feels like all my worries have just washed away! I should get going, but I'll catch you later!",
              "I give the best shoulder massages!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "That's a little much... but I just might take you up on the offer."
              },
              "A nice hot shower should do the trick": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "True! That'd be a great way to relax the muscles."
              },
              "A breast reduction would help": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Haha, very funny..."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "You know, this cafe really has the most comfy seats, don't you think? I could just lean back and fall asleep. Though, I'd be scared about perverts trying to cop a feel...",
              "Answers": ["Don't worry, I'll make sure you sleep safe and sound.", "Fear not, I shall protect thou and thy bust!", "I don't blame them, I'd cop a feel too!"],
              "Closing": "Maybe I'll stick to sleeping at home for now though. You're welcome to come by as well!",
              "Fear not, I shall protect thou and thy bust!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha, you're so silly! But thanks, that means a lot."
              },
              "Don't worry, I'll make sure you sleep safe and sound.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Thanks, I'm feeling sleepy already!"
              },
              "I don't blame them, I'd cop a feel too!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Excuse me?"
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "Now that my boobs are so heavy, it really helps to rest them. Usually I use a table, but sometimes even that doesn't work. I wonder what I should do.",
              "Answers": ["You can rest them right here baby!", "Maybe a harness?", "The floor would certainly be big enough!"],
              "Closing": "Well, I'm sure I'll figure something out eventually. In the meantime I'm gonna go enjoy their size some more... want to come with?",
              "You can rest them right here baby!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "W-We're in public silly! Maybe back at home though..."
              },
              "Maybe a harness?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "If I can find any my size!"
              },
              "The floor would certainly be big enough!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "The floor's kinda gross though..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "A while ago, I never would have expected to run into you again. And I never would have expected to be back in this same cafe again, except with my huge bare tits resting on my lap. It's funny how life works, isn't it?",
              "Answers": ["I'm truly thankful that we got to reconnect.", "Didn't expect to a super busty GF, but I definitely love it!", "Yep, pretty cool."],
              "Closing": "Why don't we head back and see where life takes us next? If it's with you, I'm sure it'll be an adventure",
              "I'm truly thankful that we got to reconnect.": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Aww, you're so sweet!"
              },
              "Didn't expect to a super busty GF, but I definitely love it!": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "All natural and all yours babe. Well, close to natural, thanks to you."
              },
              "Yep, pretty cool.": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "Life is pretty cool!"
              }
            },
          },
        },
        "Date2": {
          "MinStage": 1, //indicates the lowest growth stage CG, 4
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Zoo",
          "Price": 100e1,
          "Affection": 1, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "This shop has some pretty dresses! A lot in my favorite color at that.",
              "Answers": ["Oh, like that blue dress?", "Just like the plain white one!", "Oh yeah, the cheetah print fits you well."],
              "Closing": "Hmmm, maybe I'll pick a dress out online instead though, it'd be cheaper.",
              "Oh, like that blue dress?": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You remembered! I know it's basic, but I just love the calm feeling of blue. Plus it reminds me of the beach!"
              },
              "Just like the plain white one!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Oh, white's pretty too! But it's a little too plain, at least compared to the blue one."
              },
              "Oh yeah, the cheetah print fits you well.": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Ummm, you have... interesting taste."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "They've got some pretty good deals at this shop, but it's not for anything I like. I wonder what I should do...",
              "Answers": ["If you ask nicely I'm sure they'll give you a discount", "Swap the price tag with a sale item", "Maybe if you flash the staff they'll give you a discount!"],
              "Closing": "Oh what do you know, this one is 20% off! I'll be back, I'm gonna go try it on.",
              "Swap the price tag with a sale item": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "That... that just might work! But keep quiet HAHA!~"
              },
              "If you ask nicely I'm sure they'll give you a discount": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Mmm, I guess, but I kind of doubt it."
              },
              "Maybe if you flash the staff they'll give you a discount!": {
                "Reaction": "Hate",
                "Affection":  -2.5, // 2.5 times loss
                "Response": "Oh my gosh, are you crazy!?"
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "Hey look at this find, I think it looks pretty cute! A little tight around the chest though, what do you think?",
              "Answers": ["The color looks good on you!", "Well, if it can fit your boobs, I say go for it!", "Meh, not worth it"],
              "Closing": "I think I'll buy it afterall, wanna meet me over at checkout? Oh, or I can wait for you if you find anything for yourself!",
              "Well, if it can fit your boobs, I say go for it!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "True! Afterall, that's harder and harder to find nowadays."
              },
              "The color looks good on you!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "I know right! But I'm not sure about the fit."
              },
              "Meh, not worth it": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "You think so? I thought it was a great find..."
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "It's a little embarassing to admit, but I pretty much stick to the plus size section nowadays. And even then I don't really find much. People don't question me about it of course since you can see my massive tiddies from the back! But I don't know, maybe it's pointless.",
              "Answers": ["There's nothing wrong with plus size! Especially if it have great finds!", "Some baggier clothes might help hide your breasts if you're embarassed", "Aww, don't feel down. Want to try a different store?"],
              "Closing": "There's actually another plus size store next door, want to check that out together?",
              "There's nothing wrong with plus size! Especially if it have great finds!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, you're right! And some stuff in this section is actually cuter... and sexier!"
              },
              "Aww, don't feel down. Want to try a different store?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah, that might help."
              },
              "Some baggier clothes might help hide your breasts if you're embarassed": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "W-Why would you say that..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Babe, don't freak out, but I think I may have just ripped through all the tops I tried on. What should I do!",
              "Answers": ["Meh, don't sweat it, I'll pay it off.", "Let's explain together, they'll surely understand", "You shouldn't have tried on all those tops!"],
              "Closing": "Oh! The manager just came up to me and said I don't need to pay for anything, how kind! I saw him walking away with a massive nosebleed though, hopefully he's ok.",
              "Let's explain together, they'll surely understand": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You really think so? Will you come with me?"
              },
              "Meh, don't sweat it, I'll pay it off.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "A-Are you sure!? That's a lot, really you don't have to."
              },
              "You shouldn't have tried on all those tops!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Well, when you're this size it helps to test out everything before buying. I thought you of all people would understand."
              }
            },
          },
        },
        "Date3": {
          "MinStage": 2, //indicates the lowest growth stage CG, 4
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Movies",
          "Price": 200e1,
          "Affection": 2, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False",
              "Dialogue": "Wow, it's been AGES since I've been to Foreverland. It's a little sad to see how much it's changed though. Is my favorite ride still here?",
              "Answers": ["Super Speedster!? It's still here, let's go!", "Hmmm, not sure if Caro-soul is up anymore.", "You mean bug blasters? They tore that down last year.."],
              "Closing": "Why don't we check out the Forever Wheel later? I miss the view from top and want to see the city skyline from there!",
              "You mean bug blasters? They tore that down last year..": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Aww man, I have great memories of us riding that ride together. Guess we'll just have to make new ones on something else!"
              },
              "Hmmm, not sure if Caro-soul is up anymore.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Oh, I didn't like the Caro-soul that much, so it's whatever."
              },
              "Super Speedster!? It's still here, let's go!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "H-Hell no! You know that ride scares the ever living HELL out of me!"
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "Oh my gosh, I totally forgot that Bunbun and the Forever Friends are here! Please, you have to take a picture of us!",
              "Answers": ["Gotchya, don't forget to say tittyyyyy~", "Aren't you a little old to like the Forever Friends?", "Sure! This will be a precious memory!"],
              "Closing": "Gotta be sure to include everyone, not just Bunbun! Moosie, Freddy Fox, oh and Faunay!",
              "Gotchya, don't forget to say tittyyyyy~": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Tittyyyyyyyyyy! Haha!"
              },
              "Sure! This will be a precious memory!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah!"
              },
              "Aren't you a little old to like the Forever Friends?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Ugh, don't judge. Just take the picture."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "I've been getting a lot of stares from the male staff here. I feel like I can't wait in lines without daggers on my chest! But it's okay, as long as I stick with you right?",
              "Answers": ["You can count on me!", "I don't blame them, I'm staring too!", "What did you say?"],
              "Closing": "Why don't we go down to Foreverburger? I kind of want to stay away from these crowds, plus it's getting hot!",
              "You can count on me!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Thanks, I know I can rely on you!"
              },
              "I don't blame them, I'm staring too!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Hey! Well, I guess it's fine if it's you..."
              },
              "What did you say?": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Hey, eyes up here!"
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "Gosh, it kinda sucks. I can't ride some of the rides because my boobs are too big for the shoulder harness. Hopefully I can get on the next one though.",
              "Answers": ["No shoulder harness shall contain your beautiful tits.", "That's dumb, if something happened on the ride you'd have built-in airbags!", "You should get a reduction so you can ride Super Speedster with me!"],
              "Closing": "Be sure to give me a good shoulder massage when we get back okay? All these rides have been absolutely wrecking my muscles. Maybe my boobs will need a massage too...",
              "That's dumb, if something happened on the ride you'd have built-in airbags!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA I don't think it works that way buddy, but a girl can dream."
              },
              "No shoulder harness shall contain your beautiful tits.": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "True, but then again there's not a lot that can contain them in the first place!"
              },
              "You should get a reduction so you can ride Super Speedster with me!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "No way in hell mister! These mounds are here to stay. Besides, I'd never ride Super Speedster anyways. Zero chance!"
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Wow, this view is beautiful! I forgot how pretty this city's skyline looked from the Forever Wheel.",
              "Answers": ["Not as beautiful as you", "Not as beautiful as your breasts", "Not as beautiful as Super Speedster"],
              "Closing": "Gosh, I wish I could stay in this moment forever. Maybe that's why it's called Foreverland. Do you promise to stick by me like this... forever?",
              "Not as beautiful as you": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "H-Hey, cut it out with that cheese! That was really sweet though~"
              },
              "Not as beautiful as your breasts": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Oh? I can't help but agree. And they're all yours babe~"
              },
              "Not as beautiful as Super Speedster": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "HAHA Geez, still on me about that? I can't even ride that anymore, not at this size!"
              }
            },
          },
        },
        "Date4": {
          "MinStage": 3, //indicates the lowest growth stage CG, 6
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Beach",
          "Price": 400e1,
          "Affection": 3, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Gosh, do you see the water? It's so crystal clear it's like we're in a tropical paradise! It's hard to believe we used to call this place Seatrash City HAHA!~",
              "Answers": ["The water's so warm too!", "Actually, I helped with the clean up last year", "I'd appreciate it if you hadn't splashed me"],
              "Closing": "This beach may not be the same as I remember, but it's still perfect for making new memories together!",
              "Actually, I helped with the clean up last year": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Really!? That's so nice of you! Now I wish I came back earlier, we could've cleaned it up together."
              },
              "The water's so warm too!": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "You're right! Was it always this warm? I don't really remember.."
              },
              "I'd appreciate it if you hadn't splashed me": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Sorry? You don't need to be a buzzkill about it."
              }
            },
            "2": {
              "HasDone": "False",
              "Dialogue": "There are crabs in the water! Isn't that cool?",
              "Answers": ["That's pretty neat", "I saw them too, they're so cute!", "Oh no I don't want a disease!"],
              "Closing": "Maybe I should take one home and keep it as a pet.",
              "I saw them too, they're so cute!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA I know right! I wonder what other animals are hanging around here."
              },
              "That's pretty neat": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Isn't it? Hopefully I don't step on one though."
              },
              "Oh no I don't want a disease!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Not that kind of crabs..."
              }
            },
            "3": {
              "HasDone": "False",
              "Dialogue": "Sometimes I wonder if I deserve these moments. Relaxing by the seaside with my best friend, my new bombshell body bouncing in the sunshine, it's like I have everything I could ever ask for right now. What did I do to earn this moment though...",
              "Answers": ["We all deserve a chane to relax", "Try not to overthink it", "Maybe you're a little too relaxed"],
              "Closing": "Well, for now let's be sure to enjoy the soft sand and warm water to our hearts' content!",
              "We all deserve a chane to relax": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, you're right! Sorry, I tend to overthink when things are going well."
              },
              "Try not to overthink it": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Yeah, I'll try. I should just enjoy the moment right?"
              },
              "Maybe you're a little too relaxed": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "You're right, maybe we should head home soon.."
              }
            },
            "4": {
              "HasDone": "False",
              "Dialogue": "I've been getting so many stares here, as if I'm more interesting than the dolphins in the water! Do you think my top is too revealing?",
              "Answers": ["With those bazookas, what top isn't revealing!", "Yeah, you should put a shirt on", "Huh? Sorry what did you say?"],
              "Closing": "Oh well, I don't necessarily hate the attention, but it'd be nice if it wasn't from all these strangers. But if it were your attention..",
              "With those bazookas, what top isn't revealing!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA That's a good point!"
              },
              "Huh? Sorry what did you say?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Hey, don't get distracted like everyone else!"
              },
              "Yeah, you should put a shirt on": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "It's not like a lot of tops fit anymore..."
              }
            },
            "5": {
              "HasDone": "False",
              "Dialogue": "Hey Babe, can you put some sunscreen on my back? It's a little hard to reach some areas.",
              "Answers": ["Sure! But will I get a reward?", "Looks like your bust needs some protection too!", "But you're so flexible, why not do it yourself?"],
              "Closing": "Why don't you apply some to my breasts too while you're at it? I could really use some help there, especially around the nipples~",
              "Sure! But will I get a reward?": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Welllll, if you do a good job I don't see why not!"
              },
              "Looks like your bust needs some protection too!": {
                "Reaction": "Love",
                "Affection": 5,
                "Response": "A little help there would be appreciated too! Afterall, there isn't a lot of fabric there."
              },
              "But you're so flexible, why not do it yourself?": {
                "Reaction": "Hate",
                "Affection": -2.5,
                "Response": "It's not that easy with these honkers weighing down my shoulders."
              }
            },
          },
        },
        "Date5": {
          "MinStage": 4, //indicates the lowest growth stage CG possible, 6
          "HasAltClosing": [], // indicates which growth stages feature an alt closing CG
          "Name": "Prairie",
          "Price": 500e1,
          "Affection": 4, // as in necessary affection level
          "Questions":{ // gain a question as you gain growth levels (should be growth levels since CGs change with growth levels)
            "1": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Wow, this is such a nice restaurant. This place used to be where the old mall was, right? The one we'd visit after school!",
              "Answers": ["Yep! I remember running to Penguin Ice Cream right after class", "I'm glad the mall was replaced", "I think I remember? Halo Halo Mall right?"],
              "Closing": "It's a little sad to see that place gone, but it's cool that a fancy place like this was able to take its place. Hopefully the food is as memorable as the mall!",
              "Yep! I remember running to Penguin Ice Cream right after class": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "HA HA Yeah! And then you'd always fake tripping over the curb so that Mr. Pen could give you a free cone."
              },
              "I think I remember? Halo Halo Mall right?": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Close enough, it was Hello Halo Mall!"
              },
              "I'm glad the mall was replaced": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Aww, don't say that. We had a lot of good memories together in that mall."
              }
            },
            "2": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "I absolutely love the live music here Babe! Each musician on stage seems so talented. Does anyone stand out to you?",
              "Answers": ["The vocalist's range is impressive!", "The pianist could be a little better", "The guitarist has a nice groove"],
              "Closing": "Oh I should get their autograph before we leave!",
              "The vocalist's range is impressive!": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Yeah, she's REALLY good! I don't think I've heard a singer this smooth."
              },
              "The guitarist has a nice groove": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Ohhh, interesting. I agree he's pretty good."
              },
              "The pianist could be a little better": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Pfft, as if you could play better..."
              }
            },
            "3": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Oh! We HAVE to get a dessert here right? I know we don't normally get dessert, but this place is so fancy that if there's a time to do it, it's now! But what to get...",
              "Answers": ["The Caramel Tres Leches", "The Cranberry Cheescake", "The Chocolate Gummy Creamsicle"],
              "Closing": "In the end, this place is so fancy that I'm sure whatever we order will taste great!",
              "The Caramel Tres Leches": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "You know me too well! Please please PLEASE LET'S GET IT!!"
              },
              "The Cranberry Cheescake": {
                "Reaction": "Neutral",
                "Affection": 1, // same as you put in
                "Response": "Sounds... interesting? I guess I'd be down for that."
              },
              "The Chocolate Gummy Creamsicle": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "Chocolate, candy, and cream? Seems like a weird combo."
              }
            },
            "4": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "Even in this private booth, I've noticed some of the staff and patrons staring at me. You'd think I'd be used to it by now but... for some reason I'm feeling a little embarassed now.",
              "Answers": ["A lady needs to feed herself and her tits, so pay them no mind", "Don't feel embarassed, feel proud!", "Between chicken thighs and chicken breast, looks like we all prefer breast"],
              "Closing": "Well then, let's get to eating! I'm starving and this food isn't gonna eat itself!",
              "A lady needs to feed herself and her tits, so pay them no mind": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "Haha I guess so, it takes a lot of energy just to support these babies!"
              },
              "Between chicken thighs and chicken breast, looks like we all prefer breast": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Awww, stop it you'll just embarass me more. It is endearing though, I'll give you that. But just so you know I prefer chicken thigh."
              },
              "Don't feel embarassed, feel proud!": {
                "Reaction": "Hate",
                "Affection": -2.5, // 2.5 times loss
                "Response": "It's not easy to just stop feeling embarassed you know."
              }
            },
            "5": {
              "HasDone": "False", // indicates that the question has been asked before
              "Dialogue": "For so long now, I feel like I was stuck in the past. I always bring up the past, talk about what's changed. I came back here for a fresh start, but how could that be when I'm back in my original town. Isn't it silly?",
              "Answers": ["Living in nostalgia lets us appreciate the present", "We can enjoy the past, present, and future at the same time", "It's a little funny, but not an awful idea"],
              "Closing": "You know, thanks to you I feel like I'm able to accept how much things have changed. I can reminisce about the past, and be excited about making new memories. Not to mention I still have you with me every step of the way! So, from the bottom of my heart (and tits), thank you~",
              "We can enjoy the past, present, and future at the same time": {
                "Reaction": "Love",
                "Affection": 5, //5 times the input!
                "Response": "I never really thought of it that way! The past, the present, the future, they're all one in the same in the end right? No point overthinking it. I should just enjoy what life's given me."
              },
              "Living in nostalgia lets us appreciate the present": {
                "Reaction": "Love",
                "Affection": 5, // same as you put in
                "Response": "Wow, that's a good point! Reliving precious moments from the past lets me appreciate not only what I still have, but what I can gain down the line."
              },
              "It's a little funny, but not an awful idea": {
                "Reaction": "Neutral",
                "Affection": 1, // 2.5 times loss
                "Response": "You think so? Maybe I'm just overthinking it then"
              }
            },
          },
        },
      },
      "DateStages": {// indicates growth levels for each date stage
        1: 1, // 1: growth stage 1
        2: 2,
        3: 5,
        4: 7,
        5: 8,
      },
      "S":{
        "S1": {
          "Length": 1, // number of anims in folder
          "Affection": 1, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S2": {
          "Length": 1, // number of anims in folder
          "Affection": 2, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S3": {
          "Length": 1, // number of anims in folder
          "Affection": 3, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S4": {
          "Length": 1, // number of anims in folder
          "Affection": 4, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
        "S5": {
          "Length": 1, // number of anims in folder
          "Affection": 5, // as in necessary affection level
          "NoLoop": [], // ids for panels to not loop
        },
      },
      "Requirements":{ //growth requirements. no stagnating hearts, it MUST increase.
        "2": {
          "Price": 100e1,
          "Hearts": 1
        },
        "3": {
          "Price": 500e1,
          "Hearts": 2
        },
        "4": {
          "Price": 1000e1,
          "Hearts": 2
        },
        "5": {
          "Price": 2500e1,
          "Hearts": 2
        },
        "6": {
          "Price": 5000e1,
          "Hearts": 3
        },
        "7": {
          "Price": 10000e1,
          "Hearts": 3
        },
        "8": {
          "Price": 25000e1,
          "Hearts": 4
        },
      },
      "AffectionRequirements": {
        "1": {
          "AffectionGoal": 10,
          "Growth": 1
        },
        "2": {
          "AffectionGoal": 2000,
          "Growth": 2
        },
        "3": {
          "AffectionGoal": 6000,
          "Growth": 5
        },
        "4": {
          "AffectionGoal": 12000,
          "Growth": 7
        },
        "5": {
          "AffectionGoal": 20000,
          "Growth": 8
        },
      },
      "GrowthEvent":{
        "1": { //starting event
          "Panel1": "The city holds a farmers market every summer to support local farmers and small business owners. This year I decided to volunteer as a helping hand.",
          "Panel2": "ME: Let's see... booth A14... Mega Milk Farms? </br>???: Why howdy there pal!</br>ME: Huh?",
          "Panel3": "???: You must be my helping hand this year, the name's Henriette, but you can call me Henri for short. I run Mega Milk Farms!",
          "Panel4": "ME: Oh, nice to meet you! </br></br>Holy shit what a babe! Her face is pretty cute, but her body looks so toned and curvy!",
          "Panel5": "HENRI: Well, the days just started, why don't I getchya to work, yeah? </br></br>ME: Yeah, sounds good!",
        },
        "2": { // Affection level is 1
          "Skip": "",
          "Panel1": "ME: So let me get this straight - You, a milk vendor, are lactose intolerant so you've never tasted your milk. And you have only one cow to supply all your milk needs. So when that cow was delivering sour milk, you didn't know since you couldn't taste it.",
          "Panel2": "HENRI: Just about sums it up pal.. </br></br>Well... shit, I really can't believe it.",
          "Panel3": "HENRI: Maybe it's time to pack the bags up, this is just a disaster. </br></br>*Sigh* Well, my ranting certainly isn't going to help her. And I'm supposed to be a helping hand!",
          "Panel4": "ME: Hold on a minute. Let me see one of those bottles again?</br>HENRI: Uhh, sure, but whatchyu gonna do? You know, my sister's a scientist and said spoiled milk will never do you any good..",
          "Panel5": "ME: Well, you know, I'm something of a scientist myself. I just might be able to salvage this with a bit of chemistry. </br></br>And a bit of magic!",
          "Panel6": "Let's see, the first problem is this milk tastes like absolute horsesh*t. So first thing's first, <span class='pinkText'>let's hike up that sugar content.</span>",
          "Panel7": "As for the supply problem... <span class='pinkText'>An extra source of milk would be incredibly useful</span>",
          "Panel8": "ME: Alright Henri, give it a taste and let me know what you think. </br></br>HENRI: Sure thing pal!",
          "Panel9": "HENRI: You didn't do anything weird to this though, did you? </br></br>ME: Nope",
          "Panel10": "HENRI: Okay, I trust you pal. Bottoms up! </br></br>ME: Wait, don't chug the bottle! I thought you were lactose intolerant!!",
          "Panel11": "HENRI: Huh? I thought you just made it safe for intolerant folks like me. </br></br>ME: WHEN THE HELL DID I SAY THAT!?",
          "Panel12": "Henri immediately keels over, grabbing her twisting stomach as the contents of the bottle stirs her insides. </br>HENRI: JESUS PAL, WHAT DID YOU DO TO THAT MILK",
          "Panel13": "HENRI: AGHHH, STOMACH IS TURNING SO BADLY. AND MY CHEST... WHY'S IT SO WARM!? </br>Henri's hands move towards her newly sore mammaries, shivering as a newfound sensation envelops her bust",
          "Panel14": "HENRI: This... this feeling... it's like my chest is... FILLING!?</br></br>Henri's breath begins to quicken, her back rocking back and forth as her chest begins to swell further and further, the fabric of her overalls straining more and more for release, until-",
          "Panel15": "HENRI: AHHHHHNNNNNN!! </br></br>Suddenly, bright white streams of liquid burst forth, arcs of sweet nectar sweeping the air. That was way more effective than I expected!",
          "Panel16": "HENRI: *Pant* Holy cow, that was... *Pant* amazing! What was that?</br></br>ME: Holy shit Henri, I'm so sorry! I-I don't know what went wrong, I-</br>",
          "Panel17": "Breaking from her spasm, Henri sheepishly raises her hand </br></br>HENRI: Don't... don't sweat it pal, you can explain yourself later. But for now, this... this just might be what we needed!",
        },
        "3": {
          "Skip": "",
          "Still1": "",
        },
        "4": { // Affection level is 2
          "Skip": "",
          "Panel1": "HENRI: Hey partner, I need two bottles, pint each! </br></br>ME: You got it!",
          "Panel2": "Lately, business seems to just get busier and busier. What was once an empty stall is now a packed lot with a line of customers waiting for even just a sample of milk. Luckily I've been able to boost Henriette up enough to keep up with the demand. She seems to be enjoying it, and while I used to worry about whether she could keep up, she's always growing eager for her next boost!",
          "Panel3": "ME: Here ya go Henri! </br>HENRI: Thanks pal! If we keep this up, we might actually sell out before noon. You know what that means!",
          "Panel4": "ME: Another boost incoming? </br>HENRI: Yes please!",
          "Panel5": "???: Oh? what's this? </br>ME: Huh?",
          "Panel6": "I swerve around to judge the mysterious voice, but am shocked when I lock eyes with an absolute unit. Tall, dark, handsome, what was before me was a massive woman, no less than 6' and at least 175lb of pure muscle. The only ounces of fat in her body seemed to fall perfectly upon her butt and thighs, filling her out into a curvacious pear shape bottom.",
          "Panel7": "???: Well well well, if it isn't miss Frenchie. I see you've got a new dog this year. </br></br>HENRI: Ugh, what do you want Barbara.",
          "Panel8": "BARBARA: Oh nothing, just scoping out the competition is all. Seems your business is booming this year! </br></br>HENRI: Yeah? What's it to ya?",
          "Panel9": "Barbara slams her fist into the table before leaning in towards us. </br>BARBARA: Listen here Frenchie. I don't know what you and your dog here have done to earn all these customers, but mark my words, I'll find your little secret one way or another.",
          "Panel10": "HENRI: Heh, you think I'm afraid of you? Do whatchyu want Barbara, but if you'll excuse me, I got customers to attend to.</br></br>BARBARA: Hmph!",
          "Panel11": "Barbara turns back and promptly leaves. Henri lets out a much needed sigh and finally releases the tension in her shoulders.</br>ME: Well that was something. What are you gonna do? </br>HENRI: Oh I'll tell ya what we're gonna do.",
          "Panel12": "Henri heads towards the back and grabs another bottle of treated milk. Without saying a word, she quickly untwists the cap and begins chugging the whole bottle.",
          "Panel13": "ME: Woah Henri, hold up! You already took a dose this morning didn't you!? Shouldn't you- </br>HENRI: Can it partner! I'm not letting that snake get in the way of my business. Not again!",
          "Panel14": "HENRI: HNG!",
          "Panel15": "ME: HENRIETTE!!", //passed out
          "Panel16": "...", //black screen
          "Panel17": "HENRI: Ugh, ma head's spinnin'. What happened?",
          "Panel18": "HENRI: WOAH WHAT THE- Why am I soakin' wet!? </br></br>ME: Well, that would be because you were moaning and lactating liters of milk all night", //black screen
          "Panel19": "I point to her tits, which were leaking a constant stream of milk like a cracked dam.</br>HENRI: H-HUH WHAT HAPPENED!? A-AND WHAT ARE YOU DOING HERE! </br>ME: Well, after I carried you home, I watched over you to make sure you were alive... ",
          "Panel20": "HENRI: O-OH!... t-thanks partner. Umm... so this is all my milk? </br></br>ME: Probably a little girl cum as well",
          "Panel21": "HENRI: HUH!? WHAT DO YOU MEAN! I DIDN'T... YOU DIDN'T! </br></br>ME: No no, I didn't do anything. Like I said, I just watched over you. You did put on quite the show though.",
          "Panel22": "Henri's cheeks flush bright red, a shade I typical don't see a lot on the confident gal. </br>HENRI: I, um, ah, we, I didn't... oh hey would you look at the time! You should head home. </br>ME: Eh? But what about-",
          "Panel23": "HENRI: YEAH, YUP, UHHH WE CAN TALK NEXT TIME, SEEYAATWORKBYE",
          "Panel24": "*SLAM* </br>Well that could've gone better.",
        },
        "5": {
          "Skip": "",
          "Still1": "",
        },
        "6": { // Affection level is 3
          "Skip": "",
          "Panel1": "", //involves a little of henri, but mostly barbs perspective
        },
        "7": {
          "Skip": "",
          "Still1": "",
        },
        "8": { // Affection level is 4
          "Skip": "",
          "Panel1": "", //henri grows new resolve after learning barb's watering down her milk. so now henri will strive for qual and quant
        }
      },
      "AffectionEvent":{
        "1": { // Growth level is 1 - unlocks masturbate
          "Skip": "",
          "Panel1": "Wow... not a single sale in the four hours of business. Is it like this every year?",
          "Panel2": "HENRI: *Sigh* ... </br></br>ME: Hey Henri, you holding up okay?",
          "Panel3": "HENRI: Huh? Oh, yeah! Just a slow day, nothing I ain't used to! </br></br>ME: Ahhh, gotchya..",
          "Panel4": "HENRI: Actually pal, while you're up and about, mind takin' count of inventory?</br></br>ME: Yeah sure.",
          "Panel5": "ME: Let's see... two... four... four? That's it? That can't be right, how can she make a profit with only four bottles? Unless... what's the price?",
          "Panel6": "ME: Heyyy, Henri? </br>HENRI: Yeah pal? </br>ME: Exactly how much are you selling these bottles for?",
          "Panel7": "HENRI: No less than $40 per bottle! </br>ME: What the f*ck!? This better be the best milk in the world! </br>HENRI: Why of course it is! Why dontchya give it a taste?",
          "Panel8": "Well, if she says so. Bottoms up!",
          "Panel9": "ME: *B-BLEGH* Henri, it's super sour! </br>HENRI: W-WHAT!? NO WAY! </br>ME: Good god, we must've been handing out sour samples too, no wonder no one's buying! Have you even tried this?",
          "Panel10": "HENRI: I-I can't... I'm lactose intolerant. </br>ME: You gotta be kidding me!",
        },
        "2": { // Growth level is 2 - unlocks masturbate
          "Skip": "",
          "Panel1": "ME: Wow Henri, business is really booming this week! </br></br>HENRI: You betchya! Couldya get me another bottle from the back? Our samples are runnin' out!",
          "Panel2": "WOMAN: Oh my, this milk is absolutely delectable! </br>MAN: Quite so, quite so! You must tell me how you do it!",
          "Panel3": "HENRI: Aww shucks, you're gonna make me blush. </br>WOMAN: Oh but you must tell us your secret! </br>HENRI: Well...",
          "Panel4": "Henri grabs me from the back and pulls me to her side. </br>HENRI: Let's just say my new business partner here is great with cows!</br>ME: Haha, youuuu know it!",
          "Panel5": "Of course, it should be obvious by now that this is no mere cows milk.",
          "Panel6": "ME: Speaking of which, hey Henri, we're running low on milk. </br>HENRI: Shucks, is that so? Well, guess we'll hafta grab some more! Sorry folks, I'll be right back with a bottle in just a few!",
          "Panel7": "Henri ushers me into the back and pulls out some haphazardly taped together suction cups. </br>HENRI: Sorry 'bout this partner, this ole milker's so busted that it needs a little assistance, you know? </br>ME: No problem at all, parnter",
          "Panel8": "Peeling back her strained overalls, I attach the suction cups to Henriettes inviting nipples. </br></br>HENRI: Haha! I'm glad to hear it! AH!",
          "Panel9": "HENRI: At least warn a gal before pumping her *giggle* </br>Trying the best I can to ignore the raging hardon developing in my pants, I slowly alternate between Henri's breasts, pulling down each nipple carefully as to make sure I don't hurt her in the process.",
          "Panel10": "HENRI: Mmmm, that's it. You're good at this yaknow. Ahhhhh, yeah... I could get used to this.",
          "Panel11": "HENRI: Say, once you're done filling up a new bottle, whatchyu think of whipping me up another one of those milky concoctions of yours? With business as it is, something tells me our \"cow's\" gonna need a LOT more milk!",
        },
        "3": { // Growth level is 4 - unlocks dildo oral
          "Skip": "",
          "Panel1": "As of late, I've been receiving quite the cold shoulder from Henriette. Either that or she's just more spaced out than usual.",
          "Panel2": "ME: Hey Henri, could I get some help with the- </br>HENRI: Huh! OH! Um! Sorry, I... I gotta grab something from the truck I- later!",
          "Panel3": "Scratch that, she's totally avoiding me.",
          "Panel4": "???: Hey buddy, you seem busy, need a hand? </br></br>ME: Huh?",
          "Panel5": "Turning back, I'm once again face to face with the 6ft amazon from the other day. </br>BARBARA: I don't suppose you could use an extra hand?</br>ME: Ah- I'm good",
          "Panel6": "BARBARA: Please, no one should have to lift all these crates by themselves, let me help</br></br>Without hearing another word, Barbara effortlessly lifts a couple crates in each arm and sets them over by the stall.",
          "Panel7": "BARBARA: There we go, that should do it little man. </br>ME: Uhhh yeah, thanks I guess. </br>Jesus, I don't know if I'm intimidated or turned on... or both.",
          "Panel8": "BARBARA: I don't see frenchie around, where'd she go? </br>ME: *HENRIETTE* is grabbing some inventory...</br>BARBARA: Alright alright little man, no need to bite.",
          "Panel9": "Barbara looks me up and down, seemingly eyeing me up. </br></br>BARBARA: Say little man, you're pretty cute. Why don't you ditch frenchie and come help out at my booth?",
          "Panel10": "ME: Yeahhhh, no thanks. I'm happy helping out Henri. </br></br>BARBARA: So she just lets anyone call her that now, huh...",
          "Panel11": "BARBARA: What do you even see in her anyways? I heard her farm's milk tastes awful anyways. Maybe people are swinging by her booth just to take a look at her new knockers, right? Perhaps that's why you stick with her huh... but you know, I can show you just as good a time too.",
          "Panel12": "I try to hold back my irritation, but it's leaking a little </br>ME: Look, if you got nothing of substance to say, why don't you take yourself and your washboard back to where you came from.",
          "Panel13": "ME: GAH! </br></br>In seemingly a blink of an eye, Barbara slams me against the wall.",
          "Panel14": "BARBARA: Listen buddy, let me get straight to the point. Frenchie's got something up her sleeve this year. Whether it's her milk quality or her new implants, I don't know. But what I think is somehow YOU are the secret to it all. So I'll give you two options: You can either come with me, or sink with her by my hand.",
          "Panel15": "ME: I don't know what your history is with Henri, but I can tell you that she's the hardest worker I've ever met. Everything you see is thanks to her, not me. So if there's ANYONE who deserves all these sales, it's her.",
          "Panel16": "Babara backs off, giving me space to finally breathe. </br></br>BARBARA: Hmmph, so you've chosen to sink. Fine! But I'll find you out one way or another.",
          "Panel17": "As Barbara finally makes her leave, I notice a figure hiding behind the stall. </br></br>ME: Henri?",
          "Panel18": "Henri doesn't even notice the bottles of milk she drops as she rushes over to my side.",
          "Panel19": "HENRI: ARE YOU OKAY!? DID SHE HURT YOU!? I'M SO SORRY I SHOULD'VE LEFT YOU I- </br></br>ME: Woah woah Henri, relax relax, I'm fine, honestly",
          "Panel20": "HENRI: Phew thank god... I... If something happened to you I don't know what I'd do.",
          "Panel21": "HENRI: S-Since you're such a great helper and all hahahahahhaha! </br></br>ME: Oh, yeahhhh haha..",
          "Panel22": "HENRI: A-Anyways, let's get back to work, yeah!? </br></br>ME: Ma'am yes ma'am!",
          "Panel23": "HENRI: And uhh, hey one more thing... did you mean everything you said to Barb? </br></br>Oh, so she did overhear.",
          "Panel24": "ME: Meant every word of it. </br></br>HENRI: I see. Thanks. Let's get to work partner.",
          "Panel25Still": "Empty milk bottle",
          "Panel26Still": "Barb picks it up",
        },
        "4": { // Growth level is 6 - unlocks dildo pussy
          "Skip": "",
          "Panel1": "", //the duo notice barbs stand is doing well
        },
        "5": { // Growth level is 8 - unlocks sex
          "Skip": "",
          "Panel1": "", //you fanfare as you showoff henri and her most milky assets
        },
      },
      "Dialogue":{ // dialogues that occur randomly
        "Growth":{
          "1": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "2": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "3": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "4": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "5": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "6": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "7": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "8": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
        },
        "Affection":{
          "0": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "1": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "2": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "3": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "4": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
          "5": ["Milk! Fresh milk for sale! Get it while it's cold!", "*SIGH* Business really has been rough lately...", "All these alternatives... but nothing beats good ole' cow's milk!"],
        }
      }
    }
  }
  return latestGirlDictionary;
}






/*

*/

















//
