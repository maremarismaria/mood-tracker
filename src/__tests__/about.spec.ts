import { mount } from "@cypress/vue";
import AboutView from "../views/AboutView.vue";

describe("About", () => {
  it("should render properly", () => {
    mount(AboutView);
    cy.get("p").should(
      "contain",
      "This is a pet project for getting started with Vue"
    );
  });
});
