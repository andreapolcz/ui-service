import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

/**
 * Created by andreapolcz on 6/12/17.
 */
public class PageActions {

    private static final Log LOG = LogFactory.getLog(PageActions.class);


    protected void click(By locator) {
        List<WebElement> elements = Browser.getDriver().findElements(locator);
        for (WebElement element : elements) {
            element.click();
        }

    }

    protected Dimension setWindowSize(){
        return  Browser.getDriver().manage().window().getSize();
    }

    protected void clickByText(By locator, String wantedValue) {
        waitByElementsDisplayed(locator, Constants.SECONDS_TO_WAIT_10);
        List<WebElement> elements = Browser.getDriver().findElements(locator);
        for (WebElement element : elements) {
            if (element.getText().equals(wantedValue)) {
                element.click();
                break;
            }
        }
    }

    protected void typeText(By locator, String textToSend) {
        Browser.getDriver().findElement(locator).sendKeys(textToSend);
    }

    protected void deleteText(By locator) {
        Browser.getDriver().findElement(locator).clear();
    }

    protected String getText(By locator) {
        return Browser.getDriver().findElement(locator).getText();
    }

    protected List<String> getTextFromSeveral(By locator) {
        waitByElementsDisplayed(locator, Constants.SECONDS_TO_WAIT_10);
        List<String> values = new ArrayList<String>();
        List<WebElement> elements = Browser.getDriver().findElements(locator);
        for (WebElement element : elements) {
            scrollIntoView(element);
            values.add(element.getText());
        }
        return values;
    }

    private void scrollIntoView(WebElement element) {
        ((JavascriptExecutor) Browser.getDriver()).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    //fullscreen
    //412 X 732
    //768 x 1024


    protected void navigation(String url) {
        Browser.getDriver().navigate().to(url);
    }

    protected void waitByElementsDisplayed(By locator, int secondsToCheck) {
        for (int i = 1; i < secondsToCheck; i++) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                LOG.info(e);
            }
            if (Browser.getDriver().findElements(locator).size() > 0) {
                break;
            }
        }
    }

    protected void windowSize(int windowWidth, int windowHeight) {
        boolean maximizeWindow = (windowWidth == 1) && (windowHeight == 1);
        if (maximizeWindow) {
            Browser.getDriver().manage().window().maximize();
        } else {
            Browser.getDriver().manage().window().setSize(new Dimension(windowWidth, windowHeight));
        }
    }
}

