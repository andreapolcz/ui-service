import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by andreapolcz on 6/12/17.
 */

public class MyStepdefs {

    public HomePage homepage = new HomePage();
    public PropertyResults propertyResult = new PropertyResults();

    @Given("^user is on Hostelworld homepage$")
    public void userIsOnHostelworldHomepage() {
        homepage.goToHostelWorld();
    }


    @When("^he searches for \"([^\"]*)\"$")
    public void heSearchesFor(String searchedItem) throws InterruptedException {
        homepage.searchFor(searchedItem);
        homepage.selectWantedValue(searchedItem);
        homepage.clickSearch();
    }

    @Then("^only results containing \"([^\"]*)\" should be displayed$")
    public void onlyResultsContainingShouldBeDisplayed(String expectedLocation) throws InterruptedException {
        propertyResult.verifyCityName(expectedLocation);
    }

    @And("^he selects \"([^\"]*)\"$")
    public void heOrdersResultsBy(String orderByOption) {
        propertyResult.pressSort();
        propertyResult.sortBy(orderByOption);
    }

    @Then("^the results should be displayed alphabetically$")
    public void theResultsShouldBeDisplayedAlphabetically() {
        propertyResult.checkIfOrderedAlphabetical();
    }

    @Given("^browsers window size is set to \"([^\"]*)\" and \"([^\"]*)\"$")
    public void browsersWindowSizeIsSetToAnd(int width, int length) {
        homepage.setWindowSize(width, length);
    }
}
