Feature: Search Funtionality on HomePage

  Scenario Outline: Test sort by name functionality on Property Results Page
    Given browsers window size is set to "<windowHeight>" and "<windowLength>"
    Given user is on Hostelworld homepage
    When he searches for "Dublin, Ireland"
    Then only results containing "Dublin" should be displayed
    And he selects "sortByName"
    Then the results should be displayed alphabetically

    Examples:
      | windowHeight | windowLength |
      | 1            | 1            |
      | 412          | 732          |
      | 768          | 1024         |