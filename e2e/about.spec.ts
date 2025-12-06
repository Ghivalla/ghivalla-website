import { test, expect } from "@playwright/test";
import aboutData from "@/data/json/about.json";

test.describe("About Section", () => {
    test("can download resume PDF", async ({ page }) => {
        await page.goto("/");
        const downloadPromise = page.waitForEvent("download");
        const downloadLink = page.getByRole("link", { name: aboutData.cta.label });
        await downloadLink.click();
        const download = await downloadPromise;
        expect(download.suggestedFilename()).toBe("ghivalla-soumar-resume.pdf");
    });
});
