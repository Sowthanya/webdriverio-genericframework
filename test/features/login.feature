Feature: Login

    Scenario: application login
        Given I am on the login page
        When I login to the application
        Then I verify "Dashboard" page is displayed
