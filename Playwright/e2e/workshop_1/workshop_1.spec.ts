import {test, expect} from "@playwright/test"

// basic web element interactions
test.only('basic web element interaction', async ({page}) =>{
    await page.goto('file:///C:/Users/melgo/Documents/Automation/Playwright/e2e/workshop_1/playground.html');

    const userField = 'username-input';
    await page.getByTestId(userField).fill('test user');
    await expect(page.getByTestId(userField)).toHaveValue('test user');

    const passwField = 'password-input';
    await page.getByTestId(passwField).fill('password');
    expect(page.getByTestId(passwField)).toBeVisible;

    const emailField = 'email-input';
    await page.getByTestId(emailField).fill('test@email');
    // await expect(page.getByTestId(emailField)).toHaveValue('test@email.com');

    await page.click('#male')
    const isMaleSelected = await page.isChecked('#male');
    expect(isMaleSelected).toBe(true);

    await page.click('#coding')
    const isCodingSelected = await page.isChecked('#coding');
    expect(isCodingSelected).toBe(true);

    await page.getByRole('button', {name : /submit/i}).click({clickCount : 20});
    await page.waitForTimeout(2000); // Waits for 2 seconds
})

// dynamic 

// hover

// modal

// drag and drop