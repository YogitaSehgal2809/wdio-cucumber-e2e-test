Feature: Demo feature
    # @demo
    Scenario Outline: <TestID>: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then The URL should match with <expectedURL>
        Examples:
            | TestID     | SearchItem | expectedURL           |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |

