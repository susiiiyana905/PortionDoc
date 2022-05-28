const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

Given("Test registration functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/signup");

  await driver.findElement(By.id("firstName")).sendKeys("test");
  await driver.findElement(By.id("lastName")).sendKeys("test");
  await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("test1234@T");
  await driver.findElement(By.id("verifyPassword")).sendKeys("test1234@T");

  await driver.sleep(delay);
  await driver.findElement(By.id("registerBtn")).click();

  // await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
  // await driver.quit();
});


Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");

  await driver.findElement(By.id("email")).sendKeys("portiondoc77@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("admin123");

  await driver.sleep(delay);
  await driver.findElement(By.id("loginBtn")).click();

  // await driver.wait(until.elementLocated(By.id("updateProfileForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("updateProfileForm"))));
  // await driver.quit();
});


Given("Test Profile Functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/updateProfile");

  await driver.findElement(By.id("fName")).sendKeys("test");
  await driver.findElement(By.id("lName")).sendKeys("testing");
  await driver.findElement(By.id("bio")).sendKeys("testing here");
  await driver.findElement(By.id("dob")).sendKeys("2001/01/01");
  await driver.findElement(By.id("gender")).sendKeys("female");
  await driver.findElement(By.id("phone")).sendKeys("9876543234");
  await driver.findElement(By.id("address")).sendKeys("Kapan");

  await driver.sleep(delay);
  await driver.findElement(By.id("updateProfileButton")).click();

  // await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  // // await driver.quit();
});


Given("Test Add Meal Functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/addMeal");

  await driver.findElement(By.id("mealName")).sendKeys("test name");
  await driver.findElement(By.id("mealPrice")).sendKeys("test price");
  await driver.findElement(By.id("mealCategory")).sendKeys("test category");
  await driver.findElement(By.id("mealDescription")).sendKeys("test meal description");
  await driver.findElement(By.id("time")).sendKeys("test time");
  await driver.findElement(By.id("calory")).sendKeys("test calory");
  await driver.findElement(By.id("steps")).sendKeys("test steps");
  await driver.findElement(By.id("difficulty")).sendKeys("test difficulty");

  await driver.sleep(delay);
  await driver.findElement(By.id("addMealButton")).click();

  // await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  // // await driver.quit();
});


Given("Test Add Category Functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/addCategory");

  await driver.findElement(By.id("categoryName")).sendKeys("test category");

  await driver.sleep(delay);
  await driver.findElement(By.id("addCategoryButton")).click();

  // await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  // // await driver.quit();
});