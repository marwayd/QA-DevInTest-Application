Feature: Jobs page

  Background:
      Given User can see job page title

#  Scenario: I can see Jobs page with correct components
#    |Component      |Visible|
#    |Navigation Bar | true  |
#    |Search Fields  | true  |
#    |Sector lists   | true  |
#    |Jobs blog      | true  |
#    |Featured jobs  | true  |
#    |Footer         | true |
#    Given I go to the jobs page
#    Then I can see Jobs page

  Scenario: Navigation bar renders correctly
    Given I go to the jobs page
    Then I should see the navigation bar
    And I click on Home link
    #Both 'Sign in' and 'Create account' links go to their respective pages.
    When I click on SignIn link
    Then I can see SignIn page
    When I click on CreateAccount link
    Then I can see Create Account page
    And I click on Home link
    #Each of the links in the navigation bar is functional and goes to the correct page.

    # we can check all links are correct by iterating over all links and by checking href is null or not set
    #
    #Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button.
    And I click on "Banking and finance" sector
#    And I wait 2 seconds
    Then I can see "Banking and finance jobs" heading
    #Searching for a job correctly displays relevant search results.
    #Ensuring all the links in the footer are functional
