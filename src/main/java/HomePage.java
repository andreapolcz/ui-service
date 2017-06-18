import org.openqa.selenium.By;

/**
 * Created by andreapolcz on 6/12/17.
 */
public class HomePage extends PageActions{

    private String baseUrl = "http://www.hostelworld.com/";
    private String searchInputFieldLocator = "div#hw_search input";
    private String sugestionsArea = "ui-id-1";
    private String citySuggestionArea = "//li[contains(@class,'result-type-city')]//a";
    private String searchButton = "//button[@title = 'SEARCH']";

    /**
     * Will open application
     */
    public void goToHostelWorld(){
      navigation(baseUrl);
    }


    /**
     * Will input search value in Homepage search field
     * @param searchedItem - wanted item to be searched
     */
    public void searchFor(String searchedItem) {
        waitByElementsDisplayed(By.id(sugestionsArea), Constants.SECONDS_TO_WAIT_10);
        click(By.cssSelector(searchInputFieldLocator));
        typeText(By.cssSelector(searchInputFieldLocator), searchedItem);
    }

    /**
     * Will select wanted searched value
     * @param wantedValue - wanted search result
     */
    public void selectWantedValue(String wantedValue) throws InterruptedException {
        clickByText(By.xpath(citySuggestionArea), wantedValue);
    }

    /**
     * Will change the dimnesions of the browser with the given values
     * @param width - size of browsers width
     * @param length - size of browsers length
     */
    public void setWindowSize(int width, int length){
        windowSize(width, length);
        }

    public void clickSearch() {
        click(By.xpath(searchButton));
    }
}
