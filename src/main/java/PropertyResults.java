import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.By;


import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

/**
 * Created by andreapolcz on 6/13/17.
 */
public class PropertyResults extends PageActions {

    private static final Log LOG = LogFactory.getLog(PropertyResults.class);

    private String cityNameLocator = "//span[@class='city-name']";
    private String sortButtonSmallWindowSize = "dd.sort-button:not(.rounded)";
    private String sortButtonBigWindowSize = "dd.sort-button.rounded";
    private String resultsNames = "//div[contains(@class,'resultheader')]//a[contains(@class,'property')]";

    /**
     * Will assert displayed city name on Property Results page
     * taken in consideration the size of the opened browser
     */
    public void verifyCityName(String expectedLocation)  {
        String actualResult = getText(By.xpath(cityNameLocator));
        if(setWindowSize().getWidth()<Constants.SMALL_WINDOW_SIZE_WIDTH_LIMIT) {
            String[] cityName = actualResult.split(":");
            actualResult = cityName[0].substring(0, cityName[0].length()-1);
        }
        assertThat(actualResult.toUpperCase(), is(expectedLocation.toUpperCase()));
    }

    /**
     * Will open sort dropdown on Property Results page
     * taken in consideration the size of the opened browser
     */
    public void pressSort() {
        if(setWindowSize().getWidth()<Constants.SMALL_WINDOW_SIZE_WIDTH_LIMIT) {
            click(By.cssSelector(sortButtonSmallWindowSize));
        }else{
            click(By.cssSelector(sortButtonBigWindowSize));
        }
    }

    /**
     * Clicks on filter to be applied on displayed results
     * @param filterName - id value of used filter
     */
    public void sortBy(String filterName) {
        click(By.id(filterName));
    }

    public void checkIfOrderedAlphabetical() {
        verifyIfOrderedAlphabetically(getTextFromSeveral(By.xpath(resultsNames)));
    }

    /**
     * Will verify if displayed results are alphabetically ordered
     * @param results - list of strings to be checked
     */
    private void verifyIfOrderedAlphabetically(List<String> results) {
        String previous = "";
        for (final String current : results) {
            assertThat(previous.compareTo(current) < 0, is(true
            ));
            previous = current;
        }
    }
}
