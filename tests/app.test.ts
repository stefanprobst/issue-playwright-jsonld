import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("/");
	await expect(page).toHaveTitle("Test App");
});

test("has json-ld", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator('script[type="application/ld+json"]')).toBeAttached();

	await expect(page.locator('script[type="application/ld+json"]')).toContainText("Test App", {
		useInnerText: true,
	});

	await expect(page.locator('script[type="application/ld+json"]')).toContainText("Test App");
});
