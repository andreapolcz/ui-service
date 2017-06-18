$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search Funtionality on HomePage",
  "description": "",
  "id": "search-funtionality-on-homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test sort by name functionality on Property Results Page",
  "description": "",
  "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "browsers window size is set to \"\u003cwindowHeight\u003e\" and \"\u003cwindowLength\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on Hostelworld homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he searches for \"Dublin, Ireland\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "only results containing \"Dublin\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he selects \"sortByName\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the results should be displayed alphabetically",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;",
  "rows": [
    {
      "cells": [
        "windowHeight",
        "windowLength"
      ],
      "line": 12,
      "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;;1"
    },
    {
      "cells": [
        "1",
        "1"
      ],
      "line": 13,
      "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;;2"
    },
    {
      "cells": [
        "412",
        "732"
      ],
      "line": 14,
      "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;;3"
    },
    {
      "cells": [
        "768",
        "1024"
      ],
      "line": 15,
      "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Test sort by name functionality on Property Results Page",
  "description": "",
  "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "browsers window size is set to \"1\" and \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on Hostelworld homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he searches for \"Dublin, Ireland\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "only results containing \"Dublin\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he selects \"sortByName\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the results should be displayed alphabetically",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "MyStepdefs.browsersWindowSizeIsSetToAnd(int,int)"
});
formatter.result({
  "duration": 4801968346,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnHostelworldHomepage()"
});
formatter.result({
  "duration": 9604137506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.heSearchesFor(String)"
});
formatter.result({
  "duration": 14362491052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.onlyResultsContainingShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 124152557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sortByName",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.heOrdersResultsBy(String)"
});
formatter.result({
  "duration": 740969366,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theResultsShouldBeDisplayedAlphabetically()"
});
formatter.result({
  "duration": 5216450990,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test sort by name functionality on Property Results Page",
  "description": "",
  "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "browsers window size is set to \"412\" and \"732\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on Hostelworld homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he searches for \"Dublin, Ireland\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "only results containing \"Dublin\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he selects \"sortByName\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the results should be displayed alphabetically",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "412",
      "offset": 32
    },
    {
      "val": "732",
      "offset": 42
    }
  ],
  "location": "MyStepdefs.browsersWindowSizeIsSetToAnd(int,int)"
});
formatter.result({
  "duration": 308701525,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnHostelworldHomepage()"
});
formatter.result({
  "duration": 3744423650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.heSearchesFor(String)"
});
formatter.result({
  "duration": 7438198800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.onlyResultsContainingShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 141177802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sortByName",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.heOrdersResultsBy(String)"
});
formatter.result({
  "duration": 1579210057,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theResultsShouldBeDisplayedAlphabetically()"
});
formatter.result({
  "duration": 7169711312,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test sort by name functionality on Property Results Page",
  "description": "",
  "id": "search-funtionality-on-homepage;test-sort-by-name-functionality-on-property-results-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "browsers window size is set to \"768\" and \"1024\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on Hostelworld homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he searches for \"Dublin, Ireland\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "only results containing \"Dublin\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he selects \"sortByName\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the results should be displayed alphabetically",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "768",
      "offset": 32
    },
    {
      "val": "1024",
      "offset": 42
    }
  ],
  "location": "MyStepdefs.browsersWindowSizeIsSetToAnd(int,int)"
});
formatter.result({
  "duration": 238120128,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnHostelworldHomepage()"
});
formatter.result({
  "duration": 4308820722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.heSearchesFor(String)"
});
formatter.result({
  "duration": 6247438082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.onlyResultsContainingShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 910544302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sortByName",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.heOrdersResultsBy(String)"
});
formatter.result({
  "duration": 334061707,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theResultsShouldBeDisplayedAlphabetically()"
});
formatter.result({
  "duration": 6277631760,
  "status": "passed"
});
});