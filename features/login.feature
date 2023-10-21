Feature: Orange HRM Login action
  '''
  As a user
  I want to login into orange hrm  demo application
  '''

  Scenario: Login with valid credentials
    Given I visit a login page
    When I fill the login form with valid credentials
    Then I should see the home page

  Scenario Outline: Try to login with invalid credentials
    Given I visit a login page
    When I fill the login form with "<username>" and "<password>"
    Then I wait for 3 seconds

    Examples:
      | username | password   |
      | admin-1  | password-1 |
      | admin-2  | password-2 |
      | admin-3  | password-3 |
